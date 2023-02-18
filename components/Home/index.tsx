import { ArrowForwardIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
//images and icons
import FptLogo from "public/assets/images/fptlogo.png";
import DemoMap from "public/assets/images/demomap.png";
import EventIcon from "public/assets/images/event.svg";
import FeedBackIcon from "public/assets/images/feedback.svg";
import RoomListIcon from "public/assets/images/roomlist.svg";
import AboutIcon from "public/assets/images/aboutus.svg";
import EventBanner1 from "public/assets/images/event1.png";
import EventBanner2 from "public/assets/images/event2.png";
//components
//hooks
import GoogleMapReact from "google-map-react";
import ScrollToTop from "components/sections/ScrollToTop";
import { logOut } from "../../firebase/authentication";
import { Router, useRouter } from "next/router";
import { useEffect, useRef } from "react";

const MainHeader = () => {
  //hooks
  // const { user, loading } = useAuthContext();
  const toast = useToast();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  //apis
  //states
  //variables
  const handleSignout = async () => {
    await logOut();
    await router.push("/authentication");
    toast({
      title: `Đã dăng xuất`,
      status: "success",
      position: "top-right",
      isClosable: true,
      duration: 1000,
    });
  };

  return (
    <>
      <Box bgColor={"#3A88EC"} height="169px" mb="2rem">
        <Flex justifyContent={"flex-end"}>
          <Button
            p={2}
            variant={"link"}
            color="white"
            onClick={() => handleSignout()}
          >
            <Text fontSize={"sm"}>Đăng xuất</Text>
          </Button>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Image alt="fpt" src={FptLogo.src} />
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-between"} px="20px">
          <Box
            display={"flex"}
            w={"149px"}
            h="50px"
            bgColor={"#FFDD69"}
            justifyContent="center"
            alignItems={"center"}
            borderRadius="15px"
            boxShadow={"0px 4px 4px 0px #00000040"}
          >
            <Text fontSize={"12px"}>Your location</Text>
          </Box>
          <Box px="11px">
            <ArrowForwardIcon color="#FFDD69" />
          </Box>

          <Box
            display={"flex"}
            w={"149px"}
            h="50px"
            bgColor={"#FFDD69"}
            justifyContent="center"
            alignItems={"center"}
            borderRadius="15px"
            boxShadow={"0px 4px 4px 0px #00000040"}
          >
            <Text fontSize={"12px"}>Your destination</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

const Home = () => {
  const router = useRouter();
  const center = { lat: 10.841359413957708, lng: 106.81034433729309 }; // FPTU HCMC
  const zoom = 15;

  const Marker = () => {
    return <Box>Marker</Box>;
  };

  const IconButtons = [
    {
      title: "Room List",
      icon: RoomListIcon.src,
      link: "/rooms",
    },
    {
      title: "Events",
      icon: EventIcon.src,
      link: "/events",
    },
    {
      title: "Blog",
      icon: FeedBackIcon.src,
      link: "/blogs",
    },
    {
      title: "About us",
      icon: AboutIcon.src,
      link: "/about",
    },
  ];

  const events = [
    {
      title: "DSC Showcase",
      image: EventBanner1.src,
    },
    {
      title: "Hackathon",
      image: EventBanner2.src,
    },
  ];

  return (
    //hooks

    //apis

    //variables

    <Box w={"100%"} justifyContent="center" zIndex={2} textColor="#04408C">
      <MainHeader />

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
                <Image w="27px" h="27px" alt={button.title} src={button.icon} />
              </Button>
              <Text fontSize={"12px"}>{button.title}</Text>
            </Flex>
          );
        })}
      </Flex>
      {/* map */}
      <Flex my="30px">
        <Box sx={{ height: "217px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_API_KEY }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <Marker lat={40.712776} lng={-74.005974} />
          </GoogleMapReact>
        </Box>
      </Flex>

      {/* <Image py="24px" h={"217px"} w="375px" alt="map" src={DemoMap.src} /> */}
      <Flex justifyContent={"space-between"} px="20px">
        <Text fontSize={"16px"} fontFamily="Balgin-Bold">
          Events
        </Text>
        <Button variant={"link"} fontSize="13px">
          See more
          <ArrowForwardIcon />
        </Button>
      </Flex>

      <Flex justifyContent={"space-between"} pt="14px">
        {events.map((event) => {
          return (
            <Flex
              key={event.title}
              flexDirection="column"
              alignItems={"center"}
            >
              <Image w="152px" h="152px" alt={event.title} src={event.image} />
              <Text fontSize={"10px"}>{event.title}</Text>
            </Flex>
          );
        })}
      </Flex>
      {/* Footer */}
      <Box bgColor={"#3A88EC"} w="388px" h="64px"></Box>
    </Box>
  );
};

export default Home;
