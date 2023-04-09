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
import MenuItemInput from './components/menuItemInput'
import { Image } from "@chakra-ui/react";
import LocationIcon from "../assets/icon/location.png";
import DestinationIcon from "../assets/icon/destination.png";
import useGlobalContext from "hooks/useGlobalContext";
import { useRouter } from "next/router";
import useFetch from '../../hooks/fetchAPI/useFetch'
import { removeVI, DefaultOption } from 'jsrmvi';
import { API_ROOM } from '../../constants/api'
import { motion } from "framer-motion";

const SearchDirection = (props: any) => {
  const router = useRouter();
  const globalContext = useGlobalContext();
  const [fromInput, setFromInput] = useState("")
  const [toInput, setToInput] = useState("")

  const { fromId: queryFromId, fromLocation: queryFromName, toId: queryToId, toLocation: queryToName } = props.locationQuery

  const [fromId, setFromId] = useState(0)
  const [toId, setToId] = useState(0)
  const [fromName, setFromName] = useState('')
  const [toName, setToName] = useState('')
  useEffect(() => {
    setFromId(queryFromId)
    setToId(queryToId)
    setFromName(queryFromName)
    setToName(queryToName)
  }, [props.locationQuery])
  const { data: roomData, isLoading, isError } = useFetch(API_ROOM)


  const roomList = globalContext.roomList
  useEffect(() => {
    if (roomData)
      globalContext.SetRoomList(roomData.result)
  }, [roomData])

  let roomListFrom, roomListTo

  if (roomList !== null && roomList !== undefined) {
    roomListFrom = fromInput === ""
      ? roomList
      : roomList.filter((room) =>
        removeVI(room.name)
          .includes(removeVI(fromInput))
        || removeVI(room.secondName)
          .includes(removeVI(fromInput)))

    roomListTo = toInput === ""
      ? roomList
      : roomList.filter((room) =>
        removeVI(room.name)
          .includes(removeVI(toInput))
        || removeVI(room.secondName)
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

              {fromName == "" || fromName === undefined
                ? <Box opacity={0.5} fontSize={15} p="1" alignSelf={"center"}>Vị trí</Box>
                : <Box fontSize={15} p="1" alignSelf={"center"}>{fromName}</Box>}

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
                          setFromId(room.id)
                          room.secondName ? setFromName(room.secondName) : setFromName(room.name)
                        }}
                      >
                        {room.secondName ? room.secondName : room.name}
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
              {toName === "" || toName === undefined
                ? <Box opacity={0.5} fontSize={15} p="1" alignSelf={"center"}>Vị trí</Box>
                : <Box fontSize={15} p="1" alignSelf={"center"}>{toName}</Box>}
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
                          setToId(room.id)
                          room.secondName ? setToName(room.secondName) : setToName(room.name)
                        }}
                      >
                        {room.secondName !== null ? room.secondName : room.name}
                      </MenuItem>
                    )
                  })}
              </Box>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Flex pt={"2rem"} w="100%" minH="3rem">
          {fromId && toId &&

            <motion.div
              style={{
                margin: "0 auto"
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <Button
                w="175px"
                h="45px"
                borderRadius="72px"
                background="#04408C"
                color="#fff"
                onClick={() => router.push({
                  pathname: "/direction/result",
                  query: {
                    fromId: fromId,
                    fromLocation: fromName,
                    toId: toId,
                    toLocation: toName,
                  }
                })}
              >
                Dẫn đường
              </Button>
            </motion.div>
          }

        </Flex>
      </Stack>
    </Box >
  );
};
export default SearchDirection;
