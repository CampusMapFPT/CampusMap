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
import SuggestedPlace from "./suggestedPlace";



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
    {
      imageLink: 'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Fads%20(1).jpg?alt=media&token=c0f7c13d-9c69-45e1-a4e5-eab8a725bbd5',
      adsUrl: 'https://rentracks.vn/tzU5rK'
    },
    {
      imageLink: 'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Fads%20(2).jpg?alt=media&token=687c410c-5554-4a77-9832-12591ec30e5f',
      adsUrl: 'https://rentracks.vn/eEMkGt'
    },
    {
      imageLink: 'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Fads%20(3).jpg?alt=media&token=6a7ae161-2a87-4391-b133-2c10d6acc8a2',
      adsUrl: 'https://rentracks.vn/iE8EPK'
    },
    {
      imageLink: 'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Fads%20(4).jpg?alt=media&token=ad41f8b2-0c54-4104-8c3c-8206f04b2163',
      adsUrl: 'https://rentracks.vn/ed8GUV'
    },
    {
      imageLink: 'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Fads%20(5).jpg?alt=media&token=d0a30820-a5cf-4b82-9dc2-4dcaf6fa09f5',
      adsUrl: 'https://rentracks.vn/W0Bimc'
    },
    {
      imageLink: 'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Fads%20(6).jpg?alt=media&token=48cb2aac-2a2c-46d4-8190-49619ea13d52',
      adsUrl: 'https://rentracks.vn/rHa5WV'
    },
    {
      imageLink: 'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Fads%20(7).jpg?alt=media&token=6924fd4c-b54d-4c8e-8d29-d66be58086de',
      adsUrl: 'https://rentracks.vn/1oFjbH'
    },
    {
      imageLink: 'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Fads%20(9).jpg?alt=media&token=dc2a7146-122e-4f7c-adce-bc76ebbbab1a',
      adsUrl: 'https://rentracks.vn/nIeso6'
    }, {
      imageLink: 'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Fads%20(10).jpg?alt=media&token=41212b98-045a-4638-b4cf-b36a58e8d723',
      adsUrl: 'https://rentracks.vn/gEKiML'
    },
    {
      imageLink: 'https://firebasestorage.googleapis.com/v0/b/campus-map-f1a9f.appspot.com/o/carouselImage%2Fads%20(11).jpg?alt=media&token=f971c71f-9729-4eeb-bcbb-717c5fc160fb',
      adsUrl: 'https://rentracks.vn/Rvb4xC'
    },
  ]

  return (
    <>
      {/* <ModalAds /> */}
      <MainHeader />
      <Box pl='15px'><SuggestedPlace /></Box>
      <Box w={"100%"} justifyContent="center" zIndex={2} textColor="#04408C" className="bodyContent" pt={'15px'} pb='30px'>


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

        <Box width={'fill'} m='0 6%'>
          <CarouselMultiItems adsImage={CarouselImageLink} />
        </Box>
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
