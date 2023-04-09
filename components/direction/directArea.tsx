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


const groupByFloor = (directionGuidesData: any) => {
  let directionGuideByFloor: any[] = []
  directionGuideByFloor[0] = []
  let sortIndex = 0
  let currentIndex = 0;

  while (currentIndex < directionGuidesData.length - 1) {
    directionGuideByFloor[sortIndex].push(directionGuidesData[currentIndex])
    if (directionGuidesData[currentIndex].floor != directionGuidesData[currentIndex + 1].floor) {
      sortIndex++
      directionGuideByFloor[sortIndex] = []
    }
    currentIndex++
  }
  directionGuideByFloor[sortIndex].push(directionGuidesData[currentIndex])
  return directionGuideByFloor
}

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

  let directionLocations = groupByFloor(directionGuidesData)
  const firstLocation = directionGuidesData[0]
  const firstLocationFloor = (firstLocation === undefined) ? 0 : firstLocation.floor
  const lastLocation = directionGuidesData[directionGuidesData.length - 1]
  const lastLocationFloor = (lastLocation === undefined) ? 0 : lastLocation.floor

  let currentLocations = directionLocations[currentIndex]
  // useEffect(() => {
  //   if (directionGuidesData.length > 0)
  //     currentLocations = directionLocations[currentIndex]
  // }, [directionGuidesData])

  useEffect(() => {
    if (currentLocations !== null
      && currentLocations !== undefined
      && currentLocations[0] !== undefined)
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
        {currentLocations && currentLocations.length > 0 && currentLocations[0] !== undefined &&
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
        {(currentIndex < directionLocations.length - 1) &&
          <IconButton
            className="nextFloorBtn"
            aria-label='Next Floor'
            variant='ghost'
            onClick={() => setCurrentIndex(currentIndex + 1)}
            icon={<ChevronRightIcon />} />
        }
        {(currentIndex > 0) &&
          <IconButton
            className="prevFloorBtn"
            aria-label='Previous Floor'
            variant='ghost'
            onClick={() => setCurrentIndex(currentIndex - 1)}
            icon={<ChevronLeftIcon />} />
        }
        <Box fontSize="4xl" margin={"auto 0"} textAlign="center">
          Hướng dẫn
        </Box>
        <Box margin={"0 20px"}>
          {isLoadingDirection && <Text px={8}>Đang tải...</Text>}
          <OrderedList >
            {
              currentLocations && currentLocations.length > 0 && currentLocations[0] !== undefined &&
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
