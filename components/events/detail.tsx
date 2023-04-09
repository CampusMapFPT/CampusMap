import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { API_EVENT } from "constants/api";
import useFetch from "hooks/fetchAPI/useFetch";
import useGlobalContext from "hooks/useGlobalContext";
import { useRouter } from "next/router";
import AstronautImg from "public/assets/images/astronaut.png";
import ClockImg from "public/assets/images/clock.png";
import LocationImg from "public/assets/images/location.png";

import { useState } from "react";
const EventDetail = () => {
  const router = useRouter()

  const { data: eventData, isLoading: isLoadingOngoingEvent, isError: isErrorOngoingEvent } = useFetch(`${API_EVENT}/${router.query.id}`)

  const currentEvent = eventData.result
  return (
    <Box className="bodyContent">
      {currentEvent &&
        <>
          <Image
            alt={"event img"}
            width={"100%"}
            height="254px"
            src={currentEvent.imageUrl}
            zIndex={"1"}
            objectFit="cover"
          />
          <Flex
            direction={"column"}
            p="25px"
            borderTopRadius={"30px"}
            borderTop="solid"
            borderTopWidth={"5px"}
            gap={4}
            color="#04408C"
            position={"relative"}
            bottom="5rem"
            bgColor={"white"}
            zIndex={"2"}
          >
            <Text fontSize={"18px"} fontWeight={600}>
              {currentEvent.title}
            </Text>
            <Text color="#04408C" fontSize={"14px"}>
              {currentEvent.unit}
            </Text>
            <Flex gap={3}>
              <Image alt="clock" src={ClockImg.src} w="22px" h="22px" />

              <Text color="#04408C" fontSize={"14px"}>
                {currentEvent.time}
              </Text>
            </Flex>
            <Flex gap={3}>
              <Image alt="location" src={LocationImg.src} w="22px" h="22px" />

              <Text color="#04408C" fontSize={"14px"} fontWeight={500}>
                {currentEvent.location}
              </Text>
            </Flex>

            <Text overflow="auto" whiteSpace={'pre-line'}>
              {currentEvent.header} <Box py={2} /> {currentEvent.content}
            </Text>
          </Flex>
        </>}
    </Box>
  );
};

export default EventDetail;
