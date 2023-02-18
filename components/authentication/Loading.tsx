import { Flex, Image, Spinner, Text } from "@chakra-ui/react";
import logo from "../../public/assets/images/backpack.png";
import React from "react";

function Loading() {
  return (
    <Flex
      gap={2}
      justifyContent={"center"}
      alignItems={"center"}
      height="100vh"
      flexDirection={"column"}
      bgColor="#3A88EC"
    >
      {/* <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      /> */}
      <Image
        alt="logo"
        sx={{ width: "162px", height: "162px" }}
        src={logo.src}
      />
      <Flex alignItems={"center"} color="white">
        <Text fontSize={""}>Your data is loading...</Text>
      </Flex>
    </Flex>
  );
}

export default Loading;
