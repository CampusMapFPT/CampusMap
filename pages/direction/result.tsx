import { useRouter } from 'next/router'
import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react";
import Direction from "components/direction/directArea";
import { Image } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons';
import LocationIcon from "../../components/assets/icon/location.png";
import DestinationIcon from "../../components/assets/icon/destination.png";
import Head from 'next/head';
import FooterAds from 'components/googleAds/footerAds';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import MenuItemInput from 'components/direction/components/menuItemInput';
import useFetch from '../../hooks/fetchAPI/useFetch'
import { removeVI, DefaultOption } from 'jsrmvi';
import { API_ROOM } from 'constants/api';
import useGlobalContext from 'hooks/useGlobalContext';
import { motion } from "framer-motion";

const DirectionResultPage = () => {

  const router = useRouter()
  const globalContext = useGlobalContext();
  const { fromLocation: fromLocationQuery, toLocation: toLocationQuery, fromId: fromIdQuery, toId: toIdQuery } = router.query
  const [fromId, setFromId] = useState(0)
  const [toId, setToId] = useState(0)
  const [fromName, setFromName] = useState('')
  const [toName, setToName] = useState('')
  const [fromInput, setFromInput] = useState("")
  const [toInput, setToInput] = useState("")

  useEffect(() => {
    setFromName(fromLocationQuery)
    setToName(toLocationQuery)
    setFromId(fromIdQuery)
    setToId(toIdQuery)
  }, [router.query])

  const { data: roomData, isLoading, isError } = useFetch(API_ROOM)


  const roomList = globalContext.roomList
  useEffect(() => {
    if (roomData)
      globalContext.SetRoomList(roomData.result)
  }, [roomData])

  let roomListFrom, roomListTo

  if (roomList !== null && roomList !== undefined) {
    roomListFrom = fromInput === ""
      ? roomList.filter((room: any) => room.id !== toId)
      : roomList.filter((room: any) =>
        (removeVI(room.name)
          .includes(removeVI(fromInput))
          || removeVI(room.secondName)
            .includes(removeVI(fromInput)))

        && room.id !== toId)

    roomListTo = toInput === ""
      ? roomList.filter((room: any) => room.id !== fromId)
      : roomList.filter((room: any) =>
        (removeVI(room.name)
          .includes(removeVI(toInput))
          || removeVI(room.secondName)
            .includes(removeVI(toInput)))

        && room.id !== fromId)
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
    <>
      <Head>
        <title>Tìm kiếm đường đi - Campus Map</title>
      </Head>
      <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
        {/* <Image src={GFloor.src} top="100px"/> */}
        <Flex
          bgColor={"#3A88EC"}
          gap={3}
          pl="1rem" pt={"15px"}
          flexDirection={'column'}
          className="header"
          zIndex='4'
        >
          <Flex alignItems={"center"}>
            <IconButton
              onClick={() => router.back()}
              bgColor={"transparent"} aria-label="back"
              icon={<ArrowBackIcon color="white" boxSize={5} />}
            />
            <Text textColor={"white"} fontSize={"24px"} lineHeight="34px">
              Tìm kiếm đường đi
            </Text>
          </Flex>

          <Stack px={2} m={3} gap={1}>
            <Menu >
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
                      roomListFrom.map((room: any) => {
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
                      roomListTo.map((room: any) => {
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
          </Stack>

          {(fromId != fromIdQuery || toId != toIdQuery) &&
            <Flex pb={"10px"} w="100%" minH="3rem">
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
                  background="#FFDD69"
                  color="#000"
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
            </Flex>
          }
        </Flex>

        <Direction
          locationQuery={router.query}
        />
        <FooterAds />
      </Box>
    </>
  );
};

export default DirectionResultPage;
