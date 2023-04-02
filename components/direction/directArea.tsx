import {
  Box,
  Button,
  Flex,
  ListItem,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  OrderedList,
  Stack,
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
import { MovingStudent } from './movingStudent'
import LocationIcon from "../assets/icon/location.png";
import DestinationIcon from "../assets/icon/destination.png";
import { IconButton, Text } from "@chakra-ui/react";
import useFetch from '../../hooks/fetch/useFetch'
import useGlobalContext from "hooks/useGlobalContext";
import { MovingLine } from "./movingLine";

const imageDimension = { x: 2698, y: 1783 }

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

  const roomDirectionUrl = 'https://localhost:7057/api/Room/direction';
  const { data: directionData, isLoading: isLoadingDirection, isError: isErrorDirection }
    = useFetch(`${roomDirectionUrl}?fromLocationId=${globalContext.directionFrom.id}&toLocationId=${globalContext.directionTo.id}`)

  const directionGuidesData = directionData.result || []

  const directionLocations = groupByValue(directionGuidesData, 'floor')
  console.log('directionLocation', directionLocations);
  console.log('globalContext', globalContext);

  const currentLocations = directionLocations[currentIndex]

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
    <Box className="map">
      <Stack px={8} mt={6} gap={1}>
        <Menu>
          <MenuButton
            as={Button}
            bgColor={"#FFDD69"}
            height={"50px"}
            borderRadius={15}
            textAlign={"left"}
          >
            <Flex>
              <Image src={LocationIcon.src} display="block" p="4" />
              <Box opacity={0.5} fontSize={15} p="1" alignSelf={"center"}>
                {globalContext.directionFrom.name}
              </Box>
            </Flex>
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            bgColor={"#FFDD69"}
            height={"50px"}
            borderRadius={15}
            textAlign={"left"}
          >
            <Flex>
              <Image src={DestinationIcon.src} display="block" p="4" />
              <Box opacity={0.5} fontSize={15} p="1" alignSelf={"center"}>
                {globalContext.directionTo.name}
              </Box>
            </Flex>
          </MenuButton>
        </Menu>

      </Stack>
      <Box margin={"40px auto 20px"} className="MapImageContainer">
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
      <Box borderWidth={"6px 0 0 0"} mt={6} borderTopColor="#BAD8FF" className="instruction-container">
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
          Instruction
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
        </Box>
      </Box>
    </Box >
  );
};
export default Direction;
