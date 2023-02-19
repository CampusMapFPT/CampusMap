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
import ClassRoomImg from "public/assets/images/classroom.png";
import { useEffect, useState } from "react";
const SearchRoom = () => {
  const router = useRouter();
  const [search, SetSearch] = useState("61");
  const [hide, SetHide] = useState(false);
  const rooms = [
    {
      name: "Room 611",
      image: ClassRoomImg.src,
      description: "Classroom",
    },
    {
      name: "Room 612",
      image: ClassRoomImg.src,
      description: "Classroom",
    },
    {
      name: "Room 613",
      image: ClassRoomImg.src,
      description: "Classroom",
    },
    {
      name: "Room 614",
      image: ClassRoomImg.src,
      description: "Classroom",
    },
    {
      name: "Room 615",
      image: ClassRoomImg.src,
      description: "Classroom",
    },
    {
      name: "Room 616",
      image: ClassRoomImg.src,
      description: "Classroom",
    },
    {
      name: "Room 617",
      image: ClassRoomImg.src,
      description: "Classroom",
    },
  ];
  useEffect(() => {
    if (search === "61") SetHide(false);
    else SetHide(true);
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
            boxShadow="0px 4px 4px 0px #00000040"
            borderRadius="20px"
          />
        </InputGroup>
      </Flex>
      <Flex
        direction={"column"}
        px="25px"
        gap={1}
        color="#04408C"
        display={hide ? "none" : "flex"}
      >
        {rooms.map((room) => {
          return (
            <Flex key={room.name} flexDirection={"column"} py={"1rem"}>
              <Flex gap={5}>
                <Image alt={room.name} src={room.image} w="50px" h="63px" />
                <Flex flexDirection={"column"} justifyContent="center">
                  <Text>{room.name}</Text>
                  <Text fontFamily={"Balgin-Light"}>{room.description}</Text>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default SearchRoom;
