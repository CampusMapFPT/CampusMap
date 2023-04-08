import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { API_ROOM } from "constants/api";
import useFetch from "hooks/fetchAPI/useFetch";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { removeVI, DefaultOption } from 'jsrmvi';
import useGlobalContext from "hooks/useGlobalContext";
const RoomList = () => {
  const router = useRouter();
  const globalContext = useGlobalContext()
  const [searchInput, SetSearchInput] = useState("");
  const { data: roomData, isLoading, isError } = useFetch(API_ROOM)

  const roomList = globalContext.roomList
  useEffect(() => {
    if (roomData)
      globalContext.SetRoomList(roomData.result)
  }, [roomData])


  let roomListFilter;

  if (roomList !== null && roomList !== undefined) {
    roomListFilter = searchInput === ""
      ? roomList
      : roomList.filter((room) =>
        removeVI(room.name)
          .includes(removeVI(searchInput)))
  }

  return (
    <>
      <Flex justifyContent={"center"} position="relative" bottom={"20px"}
      //className='bodyContent'
      >
        <InputGroup sx={{ w: "293px", h: "50px", borderRadius: "20px" }}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="black" />
          </InputLeftElement>
          <Input
            color="black"
            bgColor={"#FFDD69"}
            type="text"
            value={searchInput}
            onChange={(e) => {
              SetSearchInput(e.target.value);
            }}
            placeholder="Tìm phòng"
            boxShadow="0px 4px 4px 0px #00000040"
            borderRadius="20px"
          />
        </InputGroup>
      </Flex>

      <Flex direction={"column"} p="0px 25px 0px 25px" gap={2} color="#04408C" className="bodyContent">
        {roomListFilter && roomListFilter.length > 0 &&
          roomListFilter.map((room) => {
            return (
              <Flex key={room.id} flexDirection={"column"} py={"1rem"} alignContent={'flex-start'}>
                <Flex gap={5}
                  onClick={() => router.push({
                    pathname: "/direction",
                    query: {
                      toId: room.id,
                      toLocation: room.name,
                    }
                  })}>
                  <Image alt={room.name} src={require(`../../public/assets/images/${room.type}.png`).default.src}
                    w="50px" h="50px" />
                  <Flex flexDirection={"column"}
                    w={'100%'}>
                    <Flex
                      flexDirection={"row"}
                      justifyContent={'space-between'}>
                      <Text
                        lineHeight={"23px"}
                        fontSize={"17px"}

                      >
                        {room.name}
                      </Text>
                      <ChevronRightIcon boxSize={'20px'} />
                    </Flex>
                    <Text
                      lineHeight={"20px"}
                      fontSize={"15px"}
                    //fontFamily={"Balgin-Light"}
                    >
                      {room.secondName}
                    </Text>
                  </Flex>
                </Flex>

                <Text
                  textDecoration={"underline"}
                  lineHeight={"20px"}
                  fontSize={"15px"}
                //fontFamily={"Balgin-Light"}
                >
                  {room.activeTime}
                </Text>
              </Flex>
            );
          })}
      </Flex>
    </>
  );
};

export default RoomList;
