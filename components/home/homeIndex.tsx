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
//components
//hooks
import ScrollToTop from "components/sections/ScrollToTop";
import { logOut } from "../../firebase/authentication";
import { Router, useRouter } from "next/router";
import useGlobalContext from "hooks/useGlobalContext";
import MainHeader from "components/sections/mainHeader";
import ModalAds from "components/googleAds/modalAds";
import useFetch from "hooks/fetchAPI/useFetch";
import { API_ONGOING_EVENT } from "constants/api";
import CarouselMultiItems from "components/carousel/CarouselBasic";



const Home = () => {
  const router = useRouter();
  const globalContext = useGlobalContext();
  const { data: ongoingEventData, isLoading: isLoadingOngoingEvent, isError: isErrorOngoingEvent } = useFetch(API_ONGOING_EVENT)
  const ongoingEventList = ongoingEventData.result
  let latestEvents = (ongoingEventList) ? ongoingEventList.slice(0, 2) : []

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

  const CarouselImageLink = [
    'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Ffpt-1.jpg?alt=media&token=e1e69bfa-ed6a-4a82-9ff5-6bc7fbd1f001',
    'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Ffpt-2.jpg?alt=media&token=2392e06f-760b-4abb-adc9-380e76a5957c',
    'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Ffpt-3.jpg?alt=media&token=5b499a97-b737-40fa-8747-819dd69d6b19',
    'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Ffpt-4.jpg?alt=media&token=c0e0fc51-878e-4559-9f0a-0f1f6cc72c9e',
    'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Ffpt-5.jpg?alt=media&token=c9cb6a0a-16a0-4c4a-b552-db6e7b405fd1',
    'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Ffpt-6.jpg?alt=media&token=c3b937ec-c710-42ec-8fb2-2cf450d77737',
    'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Ffpt-7.jpg?alt=media&token=b5901745-8654-4c83-a79b-3b4b894369aa'
  ]

  return (
    <>
      {/* <ModalAds /> */}
      <MainHeader />
      <Box w={"100%"} justifyContent="center" zIndex={2} textColor="#04408C" className="bodyContent" pt={'15px'}>


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

        <CarouselMultiItems imageLinks={CarouselImageLink} />
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
                  key={event.id}
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
                    borderRadius={'15px'}
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
