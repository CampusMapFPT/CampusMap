import {
  Box,
  Button,
  Flex,
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

const SearchDirection = () => {
  const router = useRouter();
  const globalContext = useGlobalContext();
  const [fromInput, setFromInput] = useState("")
  const [toInput, setToInput] = useState("")

  const url = 'https://localhost:7057/api/Room';
  const { data: roomData, isLoading, isError } = useFetch(url)
  console.log(roomData);


  const { from: queryFromId, to: queryToId } = router.query

  let roomListFrom = fromInput === ""
    ? roomData.result
    : roomData.result.filter((room) =>
      removeVI(room.name)
        .includes(removeVI(fromInput)))

  let roomListTo = toInput === ""
    ? roomData.result
    : roomData.result.filter((room) =>
      removeVI(room.name)
        .includes(removeVI(toInput)))

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
  console.log(globalContext);

  return (
    <Box className="map">
      <Stack px={8} mt={6} gap={1}>
        <Menu >
          <Box color={"#04408C"} fontSize={17}>
            Choose your location
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
              <Box opacity={0.5} fontSize={15} p="1" alignSelf={"center"}>
                {globalContext.directionFrom.name == "" || globalContext.directionFrom.name === undefined
                  ? "Your location"
                  : globalContext.directionFrom.name}
              </Box>
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
            Choose your destination
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
              <Box opacity={0.5} fontSize={15} p="1" alignSelf={"center"}>
                {globalContext.directionTo.name == "" || globalContext.directionTo.name === undefined
                  ? "Your destination"
                  : globalContext.directionTo.name}
              </Box>
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
          <Button
            w="100%"
            minH="3rem"
            onClick={() => router.push({
              pathname: "/direction/result",
              query: {
                from: globalContext.directionFrom.name,
                to: globalContext.directionTo.name,
              }
            })}
          >
            Direct
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};
export default SearchDirection;
