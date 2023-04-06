import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import React, {
  useState,
  useCallback,
  useEffect,
} from "react"
import { createRoot } from "react-dom/client"
import MenuItemInput from './menuItemInput'
import { Image } from "@chakra-ui/react";
import LocationIcon from "../assets/icon/location.png";
import DestinationIcon from "../assets/icon/destination.png";
import GFloor from "../assets/image/gfloor.png";
import useGlobalContext from "hooks/useGlobalContext";
import { useRouter } from "next/router";
import useFetch from '../../hooks/fetch/useFetch'
import { removeVI, DefaultOption } from 'jsrmvi';
import { API_ROOM } from '../../constants/api'

const SearchDirection = (props: any) => {
  const router = useRouter();
  const globalContext = useGlobalContext();
  const [fromInput, setFromInput] = useState("")
  const [toInput, setToInput] = useState("")

  const { data: roomData, isLoading, isError } = useFetch(API_ROOM)

  const roomList = globalContext.roomList
  useEffect(() => {
    if (roomData)
      globalContext.SetRoomList(roomData.result)
  }, [roomData])
  console.log('search direction - roomlist', roomList);
  console.log('search direction - roomData', roomData);

  let roomListFrom, roomListTo

  if (roomList !== null && roomList !== undefined) {
    roomListFrom = fromInput === ""
      ? roomList
      : roomList.filter((room) =>
        removeVI(room.name)
          .includes(removeVI(fromInput)))

    roomListTo = toInput === ""
      ? roomList
      : roomList.filter((room) =>
        removeVI(room.name)
          .includes(removeVI(toInput)))
  }


  const onSearchFromInput = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>
    ) => {
      setFromInput(e.currentTarget.value)
    },
    []
  )
  const onSearchToInput = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>
    ) => {
      setToInput(e.currentTarget.value)
    },
    []
  )

  console.log(props);

  return (
    <Box className="map">
      <Stack px={8} mt={6} gap={1}>
        <Menu >
          <Box color={"#04408C"} fontSize={17}>
            Chọn vị trí của bạn
          </Box>
          <MenuButton
            as={Button}
            bgColor={"#FFDD69"}
            height={"50px"}
            borderRadius={15}
            textAlign={"left"}
          >
            <Flex>
              <Image src={LocationIcon.src} display="block" p="4" />

              {globalContext.directionFrom.name == "" || globalContext.directionFrom.name === undefined
                ? <Box opacity={0.5} fontSize={15} p="1" alignSelf={"center"}>Vị trí</Box>
                : <Box fontSize={15} p="1" alignSelf={"center"}>{globalContext.directionFrom.name}</Box>}

            </Flex>
          </MenuButton>
          <MenuList className="myMenuList">
            <MenuGroup>
              <Box px='4'>
                <MenuItemInput
                  role="search"
                  size="sm"
                  onChange={onSearchFromInput}
                />
              </Box>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup >
              <Box
                className="locationList"
                maxH={164}
              >
                {isLoading &&
                  <MenuItem disabled>Loading</MenuItem>}
                {!isLoading && roomListFrom && roomListFrom.length > 0 &&
                  roomListFrom.map(room => {
                    return (
                      <MenuItem
                        key={room.id}
                        onClick={() => {
                          globalContext.SetDirectionFrom(room)
                        }}
                      >
                        {room.name}
                      </MenuItem>
                    )
                  })}
              </Box>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Menu>
          <Box color={"#04408C"} fontSize={17}>
            Chọn điểm đến của bạn
          </Box>
          <MenuButton
            as={Button}
            bgColor={"#FFDD69"}
            height={"50px"}
            borderRadius={15}
            textAlign={"left"}
          >
            <Flex>
              <Image src={DestinationIcon.src} display="block" p="4" />
              {globalContext.directionTo.name == "" || globalContext.directionTo.name === undefined
                ? <Box opacity={0.5} fontSize={15} p="1" alignSelf={"center"}>Vị trí</Box>
                : <Box fontSize={15} p="1" alignSelf={"center"}>{globalContext.directionTo.name}</Box>}
            </Flex>
          </MenuButton>
          <MenuList className="myMenuList">
            <MenuGroup>
              <Box px='4'>
                <MenuItemInput
                  role="search"
                  size="sm"
                  onChange={onSearchToInput}
                />
              </Box>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup>
              <Box
                maxH={164}
                className="locationList"
              >
                {isLoading &&
                  <MenuItem>Loading</MenuItem>}
                {!isLoading && roomListTo && roomListTo.length > 0 &&
                  roomListTo.map(room => {
                    return (
                      <MenuItem
                        key={room.id}
                        onClick={() => {
                          globalContext.SetDirectionTo(room);
                        }}
                      >
                        {room.name}
                      </MenuItem>
                    )
                  })}
              </Box>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Flex pt={"2rem"} w="100%" minH="3rem">
          {Object.keys(globalContext.directionFrom).length > 0 && Object.keys(globalContext.directionTo).length > 0 &&
            <Button
              w="175px"
              h="45px"
              margin="0 auto"
              borderRadius="72px"
              background="#04408C"
              color="#fff"
              onClick={() => router.push({
                pathname: "/direction/result",
                query: {
                  fromId: globalContext.directionFrom.id,
                  fromLocation: globalContext.directionFrom.name,
                  toId: globalContext.directionTo.id,
                  toLocation: globalContext.directionTo.name,
                }
              })}
            >
              Dẫn đường
            </Button>
          }

        </Flex>
      </Stack>
    </Box >
  );
};
export default SearchDirection;
