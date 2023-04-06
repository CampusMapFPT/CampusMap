import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import BackpackImg from "public/assets/images/backpack.png";
import { useState } from "react";
import { useRouter } from "next/router";
import useGlobalContext from "hooks/useGlobalContext";
import { API_EVENT, API_FUTURE_EVENT, API_LATEST_EVENT, API_ONGOING_EVENT } from "constants/api";
import useFetch from "hooks/fetch/useFetch";
const Event = () => {

  const { data: futureEventData, isLoading: isLoadingFutureEvent, isError: isErrorFutureEvent } = useFetch(API_FUTURE_EVENT)
  const { data: ongoingEventData, isLoading: isLoadingOngoingEvent, isError: isErrorOngoingEvent } = useFetch(API_ONGOING_EVENT)
  const { data: lastestEventData, isLoading: isLoadingLatestEvent, isError: isErrorLatestEvent } = useFetch(API_LATEST_EVENT)
  const futureEventList = futureEventData.result
  const ongoingEventList = ongoingEventData.result
  const latestEvent = lastestEventData.result

  const router = useRouter();
  const globalContext = useGlobalContext();
  const [selectingEvent, SetSelectingEvent] = useState("ongoing");

  let eventList = (selectingEvent == "ongoing") ? ongoingEventList : futureEventList
  console.log('eventList', eventList);

  return (
    <Box className="bodyContent">
      <Image
        alt={"event img"}
        height="254px"
        width="100%"
        src={!isLoadingLatestEvent ? latestEvent.imageUrl : BackpackImg}
        zIndex={"1"}
        objectFit="cover"
        onClick={() => router.push({
          pathname: "/events/{id}",
          query: {
            id: latestEvent.id,
          }
        })}
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
        {isLoadingLatestEvent && <Flex>Loading...</Flex>}
        {latestEvent &&
          <>
            <Text fontSize={"18px"} fontWeight={500}>
              {latestEvent.title}
            </Text>
            <Flex gap={3}>
              <Flex alignItems={"center"} h="1.2rem">
                <Box borderRadius={"100%"} bgColor="#04408C" w="5px" h="5px" />
              </Flex>

              <Text color="#04408C" fontSize={"14px"}>
                {latestEvent.time}
              </Text>
            </Flex>
            <Flex gap={3}>
              <Flex alignItems={"center"} h="1.2rem">
                <Box borderRadius={"100%"} bgColor="#04408C" w="5px" h="5px" />
              </Flex>

              <Text color="#04408C" fontSize={"14px"}>
                {latestEvent.header}
              </Text>
            </Flex>
          </>
        }
        <Flex alignItems={"center"} justifyContent="space-between"
          position={'sticky'} top='0' background={'#fff'}>
          <Button
            w={selectingEvent == "ongoing" ? "190px" : "124px"}
            h={selectingEvent == "ongoing" ? "42px" : "36px"}
            bgColor={selectingEvent == "ongoing" ? "#04408C" : " #3A88EC"}
            onClick={() => SetSelectingEvent("ongoing")}
            borderRadius="24px"
            _hover={{
              bg: "#04408C",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
          >
            <Text
              color={"white"}
              fontSize={selectingEvent == "ongoing" ? "18px" : "14px"}
            >
              Đang diễn ra
            </Text>
          </Button>
          <Button
            w={selectingEvent == "future" ? "190px" : "124px"}
            h={selectingEvent == "future" ? "42px" : "36px"}
            bgColor={selectingEvent == "future" ? "#04408C" : " #3A88EC"}
            onClick={() => SetSelectingEvent("future")}
            borderRadius="24px"
            _hover={{
              bg: "#04408C",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
          >
            <Text
              color={"white"}
              fontWeight={600}
              fontSize={selectingEvent == "future" ? "18px" : "14px"}
            >
              Sắp diễn ra
            </Text>
          </Button>
        </Flex>
        <Flex flexDirection={"column"}>
          {eventList &&
            eventList.map(event => {
              return (
                <Flex gap={2} key={event.id} pt={"1rem"} onClick={() => router.push({
                  pathname: "/events/[id]",
                  query: {
                    id: event.id,
                  }
                })}>
                  <Image
                    src={event.imageUrl}
                    w="152px"
                    h="152px"
                    objectFit="cover"
                    alt="event banner"
                  />
                  <Flex flexDirection={"column"}>
                    <Text pb={2} fontSize={"15px"}>
                      {event.title}
                    </Text>
                    <Flex gap={3}>
                      <Flex alignItems={"center"} h="1.2rem">
                        <Box borderRadius={"100%"} bgColor="#04408C" w="3px" h="3px" />
                      </Flex>
                      <Text
                        color="#04408C"
                        fontSize={"14px"}
                      >
                        {event.time}
                      </Text>
                    </Flex>
                    {event.header &&
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
                          {event.header}
                        </Text>

                      </Flex>
                    }
                  </Flex>
                </Flex>
              )
            })
          }
        </Flex>
      </Flex>
    </Box>
  );
};

export default Event;
