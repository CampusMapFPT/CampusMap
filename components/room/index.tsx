import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
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
import FooterAds from "components/googleAds/footerAds";
const RoomList = () => {
  const router = useRouter();
  const globalContext = useGlobalContext()
  const [searchInput, SetSearchInput] = useState("");
  const [floorFilter, setFloorFilter] = useState(-1);
  const { data: roomData, isLoading, isError } = useFetch(API_ROOM)
  const floorList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const roomList = globalContext.roomList
  useEffect(() => {
    if (roomData)
      globalContext.SetRoomList(roomData.result)
  }, [roomData])


  let roomListFilter;

  if (roomList !== null && roomList !== undefined) {
    // Filter by search input
    roomListFilter = searchInput === ""
      ? roomList
      : roomList.filter((room) =>
        removeVI(room.name)
          .includes(removeVI(searchInput))
        || removeVI(room.secondName)
          .includes(removeVI(searchInput)))

    // Filter by floor input
    roomListFilter = (floorFilter !== -1) ?
      roomListFilter.filter(room => room.location.floor === floorFilter)
      : roomListFilter
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

      <Flex
        flexDir={'row'}
        className='floorScrollbar'
        overflowX='auto'
        width='100%'
        flex='0 0 auto'
        pl='25px'
        justifyContent={'start'}>
        {
          floorList.map((floor) => {
            return (
              <Flex
                key={floor}
                padding={'5px'} mx='2px' mb='10px'
                width='60px' height='20px' fontSize='13px'
                justifyContent='center' alignItems='center'
                borderRadius="15px" background={(floorFilter === floor) ? "#FFDD69" : "#3A88EC"}
                color={(floorFilter === floor) ? "#000" : "#fff"}
                onClick={() => (floorFilter === floor) ? setFloorFilter(-1) : setFloorFilter(floor)}
                flex='0 0 auto'
              >Tầng {floor === 0 ? 'G' : floor}</Flex>
            )
          })
        }

      </Flex>
      <Flex direction={"column"} p="0px 25px 0px 25px" gap={2} color="#04408C" className="bodyContent" mr='10px'>
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
