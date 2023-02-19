import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import AstronautImg from "public/assets/images/astronaut.png";
import LangCocImg from "public/assets/images/langcoc.png";
import DscImg from "public/assets/images/dsc.png";

import { useState } from "react";
import { useRouter } from "next/router";
import useGlobalContext from "hooks/useGlobalContext";
const AboutUs = () => {
  const router = useRouter();
  const globalContext = useGlobalContext();

  return (
    <>
      <Image
        alt={"event img"}
        width={"100%"}
        height="254px"
        src={AstronautImg.src}
        zIndex={"1"}
      />
      <Flex
        direction={"column"}
        p="25px"
        borderTopRadius={"30px"}
        borderTop="solid"
        borderTopWidth={"5px"}
        gap={2}
        color="#04408C"
        position={"relative"}
        bottom="5rem"
        bgColor={"white"}
        zIndex={"2"}
      >
        <Text fontSize={"18px"} fontFamily="Balgin-Regular" fontWeight={500}>
          HACKATHON
        </Text>
        <Flex gap={3}>
          <Flex alignItems={"center"} h="1.2rem">
            <Box borderRadius={"100%"} bgColor="#04408C" w="5px" h="5px" />
          </Flex>

          <Text color="#04408C" fontSize={"14px"}>
            Feb 18 - 19.
          </Text>
        </Flex>
        <Flex gap={3}>
          <Flex alignItems={"center"} h="1.2rem">
            <Box borderRadius={"100%"} bgColor="#04408C" w="5px" h="5px" />
          </Flex>

          <Text color="#04408C" fontSize={"14px"}>
            Entrepreneurial coding competition.
          </Text>
        </Flex>{" "}
        <Flex flexDirection={"column"}>
          <Flex gap={2} pt={"1rem"}>
            <Image w={"152px"} h="152px" src={DscImg.src} alt="event banner" />
            <Flex flexDirection={"column"}>
              <Text pb={2} fontSize={"15px"}>
                DSC SHOWCASE
              </Text>
              <Flex gap={3}>
                <Flex alignItems={"center"} h="1.2rem">
                  <Box
                    borderRadius={"100%"}
                    bgColor="#04408C"
                    w="3px"
                    h="3px"
                  />
                </Flex>
                <Text
                  fontFamily={"Balgin-Light"}
                  color="#04408C"
                  fontSize={"14px"}
                >
                  Jan 5 - 7.
                </Text>
              </Flex>
              <Flex gap={3}>
                <Flex alignItems={"center"} h="1.2rem">
                  <Box
                    borderRadius={"100%"}
                    bgColor="#04408C"
                    w="3px"
                    h="3px"
                  />
                </Flex>
                <Text
                  fontFamily={"Balgin-Light"}
                  color="#04408C"
                  fontSize={"14px"}
                >
                  Showcase product of Game, Web, AI
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap={2} pt={"1rem"}>
            <Image
              w={"152px"}
              h="152px"
              src={LangCocImg.src}
              alt="event banner"
            />
            <Flex flexDirection={"column"}>
              <Text pb={2} fontSize={"15px"}>
                HOI XUAN LANG COC
              </Text>
              <Flex gap={3}>
                <Flex alignItems={"center"} h="1.2rem">
                  <Box
                    borderRadius={"100%"}
                    bgColor="#04408C"
                    w="3px"
                    h="3px"
                  />
                </Flex>
                <Text
                  fontFamily={"Balgin-Light"}
                  color="#04408C"
                  fontSize={"14px"}
                >
                  Jan 7.
                </Text>
              </Flex>
              <Flex gap={3}>
                <Flex alignItems={"center"} h="1.2rem">
                  <Box
                    borderRadius={"100%"}
                    bgColor="#04408C"
                    w="3px"
                    h="3px"
                  />
                </Flex>
                <Text
                  fontFamily={"Balgin-Light"}
                  color="#04408C"
                  fontSize={"14px"}
                >
                  Lunar New Year Festival
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default AboutUs;
