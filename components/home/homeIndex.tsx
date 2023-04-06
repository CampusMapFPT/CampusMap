import { ArrowForwardIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
//images and icons
import DemoMap from "public/assets/images/demomap.png";
import EventIcon from "public/assets/images/event.svg";
import FeedBackIcon from "public/assets/images/feedback.svg";
import RoomListIcon from "public/assets/images/roomlist.svg";
import AboutIcon from "public/assets/images/aboutus.svg";
import EventBanner1 from "public/assets/images/event1.png";
import EventBanner2 from "public/assets/images/event2.png";
import DscBigImg from "public/assets/images/dscbig.png";
import Astronaut from "public/assets/images/astronaut.png";
import RingImg from "public/assets/images/ringbell.png";
import UserImg from "public/assets/images/user.png";
//components
//hooks
import GoogleMapReact from "google-map-react";
import ScrollToTop from "components/sections/ScrollToTop";
import { logOut } from "../../firebase/authentication";
import { Router, useRouter } from "next/router";
import { useEffect, useRef } from "react";
import useGlobalContext from "hooks/useGlobalContext";
import MainHeader from "components/sections/mainHeader";
import ModalAds from "components/googleAds/modalAds";
import useFetch from "hooks/fetch/useFetch";
import { API_ONGOING_EVENT } from "constants/api";



const Home = () => {
  const router = useRouter();
  const globalContext = useGlobalContext();
  const { data: ongoingEventData, isLoading: isLoadingOngoingEvent, isError: isErrorOngoingEvent } = useFetch(API_ONGOING_EVENT)
  const ongoingEventList = ongoingEventData.result
  let latestEvents = (ongoingEventList) ? ongoingEventList.slice(0, 2) : []
  console.log('latestEvents', latestEvents);

  const IconButtons = [
    {
      title: "Phòng",
      icon: RoomListIcon.src,
      link: "/rooms",
    },
    {
      title: "Sự kiện",
      icon: EventIcon.src,
      link: "/events",
    },
    {
      title: "Blog",
      icon: FeedBackIcon.src,
      link: "/blogs",
    },
    {
      title: "Thông tin",
      icon: AboutIcon.src,
      link: "/about",
    },
  ];

  return (
    <>
      {/* <ModalAds /> */}
      <MainHeader />
      <Box w={"100%"} justifyContent="center" zIndex={2} textColor="#04408C" className="bodyContent">


        <Flex justifyContent={"space-between"} px="30px">
          {IconButtons.map((button) => {
            return (
              <Flex direction={"column"} key={button.title} alignItems="center">
                <Button
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  w="49px"
                  h="49px"
                  bgColor="#BAD8FF"
                  borderRadius={"50%"}
                  onClick={() => router.push(button.link)}
                >
                  <Image
                    w="27px"
                    h="27px"
                    alt={button.title}
                    src={button.icon}
                  />
                </Button>
                <Text fontSize={"12px"}>{button.title}</Text>
              </Flex>
            );
          })}


        </Flex>

        {/* <Image py="24px" h={"217px"} w="375px" alt="map" src={DemoMap.src} /> */}
        <Flex justifyContent={"space-between"} px="20px" pt="10px">
          <Text textColor="#04408C" fontSize={"16px"} fontWeight="600">
            Sự kiện
          </Text>
          <Link onClick={() => router.push("/events")}>
            <Flex>
              <Text lineHeight={"17px"} fontSize="13px" color="#04408C">
                Xem thêm
              </Text>
              <ArrowForwardIcon />
            </Flex>
          </Link>
        </Flex>

        <Flex
          justifyContent={"space-between"}
          pt="10px"
          mx={{ sm: "6%" }}
          textColor="#04408C"
        >
          {
            latestEvents &&
            latestEvents.map(event => {
              return (
                <Flex
                  flexDirection="column"
                  alignItems={"center"}
                  onClick={() => router.push({
                    pathname: "/events/[id]",
                    query: {
                      id: event.id,
                    }
                  })}
                >
                  <Image
                    w="152px"
                    h="152px"
                    alt={event.header}
                    src={event.imageUrl}
                    objectFit="cover"
                  />
                  <Text fontSize={"10px"} textTransform="uppercase">
                    {event.title}
                  </Text>
                </Flex>
              )
            })
          }
        </Flex>
      </Box>
    </>
  );
};

export default Home;
