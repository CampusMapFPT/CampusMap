import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Room115Image from "public/assets/images/115.png";
import Room201Image from "public/assets/images/201.png";
import Room202Image from "public/assets/images/202.png";
import Room416Image from "public/assets/images/416.png";
import Room425Image from "public/assets/images/425.png";
import Room501Image from "public/assets/images/501.png";
import { useEffect, useState } from "react";
const RoomList = () => {
  const router = useRouter();
  const [search, SetSearch] = useState("");
  const rooms = [
    {
      name: "Room 115",
      description: "Infrastucture Management",
      activeTime: "Open: 7:00 - 11:45 | 12:30 - 5:15",
      image: Room115Image.src,
    },
    {
      name: "Room 201",
      description: "Community room and library",
      activeTime: "Mon-Fri: 8:00 - 18:00 | 8:00 - 12:00",
      image: Room201Image.src,
    },
    {
      name: "Room 202",
      description: "Student Service",
      activeTime: "Open: 7:00 - 11:30 | 13:30 - 4:45",
      image: Room202Image.src,
    },
    {
      name: "Room 416",
      description: "Top Hall C",
      activeTime: "",
      image: Room416Image.src,
    },
    {
      name: "Room 425",
      description: "LUK, Innovation Space",
      activeTime: "",
      image: Room425Image.src,
    },
    {
      name: "Room 501",
      description: "LUK, Cinema",
      activeTime: "",
      image: Room501Image.src,
    },
  ];
  useEffect(() => {
    if (search === "61") router.push("/searchroom");
  }, [search]);
  return (
    <>
      <Flex justifyContent={"center"} position="relative" bottom={"20px"}>
        <InputGroup sx={{ w: "293px", h: "50px", borderRadius: "20px" }}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="black" />
          </InputLeftElement>
          <Input
            color="black"
            bgColor={"#FFDD69"}
            type="text"
            value={search}
            onChange={(e) => {
              SetSearch(e.target.value);
            }}
            placeholder="Search room"
            boxShadow="0px 4px 4px 0px #00000040"
            borderRadius="20px"
          />
        </InputGroup>
      </Flex>

      <Flex direction={"column"} p="0px 25px 0px 25px" gap={2} color="#04408C">
        {rooms.map((room) => {
          return (
            <Flex key={room.name} flexDirection={"column"} py={"1rem"}>
              <Flex gap={5}>
                <Image alt={room.name} src={room.image} w="50px" h="63px" />
                <Flex flexDirection={"column"} justifyContent="center">
                  <Text
                    lineHeight={"23px"}
                    fontSize={"17px"}
                    fontFamily={"Balgin-Regular"}
                  >
                    {room.name}
                  </Text>
                  <Text
                    lineHeight={"20px"}
                    fontSize={"15px"}
                    fontFamily={"Balgin-Light"}
                  >
                    {room.description}
                  </Text>
                </Flex>
              </Flex>

              <Text
                textDecoration={"underline"}
                lineHeight={"20px"}
                fontSize={"15px"}
                fontFamily={"Balgin-Light"}
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
