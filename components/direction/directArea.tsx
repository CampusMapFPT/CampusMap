import {
  Box,
  Button,
  ListItem,
  OrderedList,
  Image
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import React, {
  useState,
  useEffect,
} from "react"
import { MovingStudent } from './components/movingStudent'
import { IconButton, Text } from "@chakra-ui/react";
import useFetch from '../../hooks/fetchAPI/useFetch'
import useGlobalContext from "hooks/useGlobalContext";
import { MovingLine } from "./components/movingLine";
import { API_ROOM_DIRECTION } from "constants/api";
import { motion } from "framer-motion";
import FeedbackModal from "./components/feedbackModal/feedbackModal";


let groupByValue = (array: any, key: any) => Object.values(
  array.reduce((accumulate: any, currentItem: any) => {
    if (!accumulate[currentItem[key]]) accumulate[currentItem[key]] = []
    accumulate[currentItem[key]].push(currentItem)
    return accumulate
  }, {})
)

const Direction = (props: any) => {
  const globalContext = useGlobalContext();
  const [currentImage, setCurrentImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentFloor, setCurrentFloor] = useState(0)
  const [hasChangeFloor, setHasChangeFloor] = useState(true)

  const { fromId, toId, fromLocation, toLocation } = props.locationQuery
  const roomDirectionUrl = API_ROOM_DIRECTION;
  const { data: directionData, isLoading: isLoadingDirection, isError: isErrorDirection }
    = useFetch(`${roomDirectionUrl}?fromLocationId=${fromId}&toLocationId=${toId}`)

  const directionGuidesData = directionData.result || []

  let directionLocations = groupByValue(directionGuidesData, 'floor')

  const firstLocation = directionGuidesData[0]
  const firstLocationFloor = (firstLocation === undefined) ? 0 : firstLocation.floor
  const lastLocation = directionGuidesData[directionGuidesData.length - 1]
  const lastLocationFloor = (lastLocation === undefined) ? 0 : lastLocation.floor

  directionLocations = (firstLocationFloor > lastLocationFloor) ? directionLocations.reverse() : directionLocations

  const currentLocations = directionLocations[currentIndex]
  console.log(directionGuidesData);

  useEffect(() => {
    if (currentLocations !== null
      && currentLocations !== undefined)
      setCurrentFloor(currentLocations[0].floor)
  }, [currentLocations])
  const loadImage = (imageName: any) => {
    import(`../../public/assets/images/floors/${imageName}`).then(image => {
      setCurrentImage(image.default)
    });
  };
  loadImage(`tang${currentFloor}.png`)

  return (
    <Box className="map bodyContent" overflowY={'auto'}>

      <Box margin={"20px auto 0px"} className="MapImageContainer">
        {
          currentImage &&
          <Image
            src={currentImage.src}
            alt={`Tang${currentFloor}`}
            className='MapImage' />
        }
        {currentLocations && currentLocations.length > 0 &&
          <>
            <MovingStudent
              locations={currentLocations}
            />
            <MovingLine
              locations={currentLocations}
              key={currentIndex}
            />
          </>
        }
      </Box>

      <Box
        borderWidth={"6px 0 0 0"}
        mt={6}
        borderTopColor="#BAD8FF"
        className="instruction-container">
        <IconButton
          className="nextFloorBtn"
          aria-label='Next Floor'
          variant='ghost'
          onClick={() => { if (currentIndex < directionLocations.length - 1) setCurrentIndex(currentIndex + 1) }}
          icon={<ChevronRightIcon />} />
        <IconButton
          className="prevFloorBtn"
          aria-label='Previous Floor'
          variant='ghost'
          onClick={() => { if (currentIndex > 0) setCurrentIndex(currentIndex - 1) }}
          icon={<ChevronLeftIcon />} />
        <Box fontSize="4xl" margin={"auto 0"} textAlign="center">
          Hướng dẫn
        </Box>
        <Box margin={"0 20px"}>
          {isLoadingDirection && <Text px={8}>Đang tải...</Text>}
          <OrderedList >
            {
              currentLocations && currentLocations.length > 0 &&
              currentLocations.map((step: any) => {
                return (
                  <>
                    {step.directionGuide &&
                      <ListItem key={step.location.id}><Text >{step.directionGuide}</Text></ListItem>
                    }
                  </>
                )
              })
            }
          </OrderedList>
          {currentIndex === directionLocations.length - 1 &&
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <FeedbackModal />
            </motion.div>
          }


        </Box>
      </Box>
    </Box >
  );
};
export default Direction;
