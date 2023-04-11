import {
  Box,
  Button,
  ListItem,
  OrderedList,
  Image,
  Flex
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

          {
            currentIndex === 0
            && currentIndex === directionLocations.length - 1
            &&
            <FeedbackModal />
          }
          {
            currentIndex === 0
            && currentIndex < directionLocations.length - 1
            && directionLocations.length > 1
            &&
            <Button
              w="175px" h="45px"
              display="block" margin="10px auto"
              borderRadius="72px" background="#04408C" color="#fff"
              onClick={() => setCurrentIndex(currentIndex + 1)}
            >
              Tiếp theo
            </Button>
          }
          {currentIndex > 0 && currentIndex < directionLocations.length - 1 &&
            <Flex>
              <Button
                w="175px" h="45px"
                display="block" margin="10px auto"
                borderRadius="72px" color="#000"
                onClick={() => setCurrentIndex(currentIndex - 1)}
              >
                Quay lại
              </Button>
              <Button
                w="175px" h="45px"
                display="block" margin="10px auto"
                borderRadius="72px" background="#04408C" color="#fff"
                onClick={() => setCurrentIndex(currentIndex + 1)}
              >
                Tiếp theo
              </Button>
            </Flex>

          }
          {
            currentIndex > 0 &&
            currentIndex === directionLocations.length - 1 &&
            <Flex>
              <Button
                w="175px" h="45px"
                display="block" margin="10px auto"
                borderRadius="72px" color="#000"
                onClick={() => setCurrentIndex(currentIndex - 1)}
              >
                Quay lại
              </Button>
              <FeedbackModal />
            </Flex>
          }


        </Box>
      </Box>
    </Box >
  );
};
export default Direction;
