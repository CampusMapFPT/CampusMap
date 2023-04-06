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



const Home = () => {
  const router = useRouter();
  const globalContext = useGlobalContext();
  const center = { lat: 10.841359413957708, lng: 106.81034433729309 }; // FPTU HCMC
  const zoom = 15;

  const Marker = () => {
    return <Box>Marker</Box>;
  };

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

  const setEvent1 = async () => {
    const event1 = {
      image: DscBigImg.src,
      title: "DSC SHOWCASE",
      unit: "Developer Student Community - FPTU HCMC",
      time: "Jan 5-6 (8:00 - 17:00 / Jan 7 (13:00 - 17:00)",
      location: "1st Floor Hall /  Auditorium C",
      header: "[SỰ KIỆN KHAI HỎA KÌ SPRING 2023]",
      content:
        "Vậy là sau bao ngày chuẩn bị, DSC chính thức khai pháo năm mới với DSC Showcase dành cho các bạn sinh viên đại học FPT nói chung và đặc biệt dành riêng cho các bạn K18.Với phương châm mang công nghệ thông tin đến gần gũi hơn với các bạn sinh viên trường đại học FPT, CLB DSC sẽ trình làng các sản phẩm đặc sắc nhất và độc đáo nhất của nhà DSC đến từ các branch Game, AI, Web, Media và Event.Ngoài ra, các bạn sinh viên còn có cơ hội trở thành một phần của nhà DSC khi có thể đăng kí trở thành một thành viên cộng đồng và cùng với đó là cơ hội để nhận những phần quà vô cùng hấp dẫn khi tham gia sự kiện cùng với CLB DSC.Mọi thứ đã sẵn sàng, nhà DSC đã sẵn sàng. Vậy thì còn chần chừ chi nữa mà không đăng ký tham gia sự kiện để trở thành một mảnh ghép của nhà DSC nào!!!",
    };
    await globalContext.SetEvent(event1);
    router.push("/eventdetail");
  };

  const setEvent2 = async () => {
    const event1 = {
      image: Astronaut.src,
      title: "HACKATHON",
      unit: "FPT AROUND - FPTU HCM",
      time: "Feb 18-19",
      location: "Library",
      header: "CUỘC THI KHỞI NGHIỆP DÀNH CHO SINH VIÊN FPTU",
      content:
        "FPT Entrepreneurial Hackathon SP-2023 chính thức quay trở lại với tổng giá trị giải thưởng lên đến 50.000.000 VND. Đây là một sự kiện về lập trình, nơi mà các lập trình viên máy tính, chuyên gia trong ngành phát triển phần mềm như: thiết kế đồ họa, quản lý dự án, thiết kế giao diện,… hoặc những ai có cùng mối quan tâm, hứng thú có thể hợp tác cùng nhau cải thiện hoặc xây dựng một chương trình phần mềm mới trong khoảng thời gian ngắn.  FPT Entrepreneurial Hackathon SP-2023 được tổ chức với mục đích thúc đẩy hoạt động khởi nghiệp tại Đại học FPT. Thông qua cuộc thi, Ban tổ chức mong muốn xây dựng môi trường khởi nghiệp, học tập năng động, sáng tạo, giúp sinh viên học hỏi lẫn nhau, từ đó nâng cao trình độ cá nhân của sinh viên. Đặc biệt, sản phẩm cuối cùng là những ứng dụng, sản phẩm mang lại nhiều trải nghiệm thú vị, hữu ích cho người dùng đồng thời giải quyết các vấn đề của xã hội.",
    };
    await globalContext.SetEvent(event1);
    router.push("/eventdetail");
  };
  return (
    //hooks

    //apis

    //variables
    <>
      <ModalAds />
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
        {/* map */}
        <Flex my="10px">
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
          <Flex
            flexDirection="column"
            alignItems={"center"}
            onClick={() => setEvent1()}
          >
            <Image
              w="152px"
              h="152px"
              alt={"DSC Showcase"}
              src={EventBanner1.src}
            />
            <Text fontSize={"10px"} textTransform="uppercase">
              {"DSC Showcase"}
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems={"center"}
            onClick={() => setEvent2()}
          >
            <Image
              w="152px"
              h="152px"
              alt={"Hackathon"}
              src={EventBanner2.src}
            />
            <Text fontSize={"10px"} textTransform="uppercase">
              {"Hackathon"}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
