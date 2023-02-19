import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import AstronautImg from "public/assets/images/astronaut.png";
import LangCocImg from "public/assets/images/langcoc.png";
import DscImg from "public/assets/images/dsc.png";
import DscBigImg from "public/assets/images/dscbig.png";
import LovelottImg from "public/assets/images/lovelott.png";
import LovelottBigImg from "public/assets/images/lovelottbig.png";
import SoundHeartImg from "public/assets/images/soundheart.png";
import { useState } from "react";
import { useRouter } from "next/router";
import useGlobalContext from "hooks/useGlobalContext";
const Event = () => {
  const router = useRouter();
  const globalContext = useGlobalContext();
  const [selected, SetSelected] = useState("button1");
  const setEvent1 = async () => {
    const event = {
      image: AstronautImg.src,
      title: "HACKATHON",
      unit: "FPT AROUND - FPTU HCM",
      time: "Feb 18-19",
      location: "Library",
      header: "CUỘC THI KHỞI NGHIỆP DÀNH CHO SINH VIÊN FPTU",
      content:
        "FPT Entrepreneurial Hackathon SP-2023 chính thức quay trở lại với tổng giá trị giải thưởng lên đến 50.000.000 VND. Đây là một sự kiện về lập trình, nơi mà các lập trình viên máy tính, chuyên gia trong ngành phát triển phần mềm như: thiết kế đồ họa, quản lý dự án, thiết kế giao diện,… hoặc những ai có cùng mối quan tâm, hứng thú có thể hợp tác cùng nhau cải thiện hoặc xây dựng một chương trình phần mềm mới trong khoảng thời gian ngắn.  FPT Entrepreneurial Hackathon SP-2023 được tổ chức với mục đích thúc đẩy hoạt động khởi nghiệp tại Đại học FPT. Thông qua cuộc thi, Ban tổ chức mong muốn xây dựng môi trường khởi nghiệp, học tập năng động, sáng tạo, giúp sinh viên học hỏi lẫn nhau, từ đó nâng cao trình độ cá nhân của sinh viên. Đặc biệt, sản phẩm cuối cùng là những ứng dụng, sản phẩm mang lại nhiều trải nghiệm thú vị, hữu ích cho người dùng đồng thời giải quyết các vấn đề của xã hội.",
    };
    await globalContext.SetEvent(event);
    router.push("/eventdetail");
  };

  const setEvent2 = async () => {
    const event = {
      image: DscBigImg.src,
      title: "DSC SHOWCASE",
      unit: "Developer Student Community - FPTU HCMC",
      time: "Jan 5-6 (8:00 - 17:00 / Jan 7 (13:00 - 17:00)",
      location: "1st Floor Hall /  Auditorium C",
      header: "[SỰ KIỆN KHAI HỎA KÌ SPRING 2023]",
      content:
        "Vậy là sau bao ngày chuẩn bị, DSC chính thức khai pháo năm mới với DSC Showcase dành cho các bạn sinh viên đại học FPT nói chung và đặc biệt dành riêng cho các bạn K18.Với phương châm mang công nghệ thông tin đến gần gũi hơn với các bạn sinh viên trường đại học FPT, CLB DSC sẽ trình làng các sản phẩm đặc sắc nhất và độc đáo nhất của nhà DSC đến từ các branch Game, AI, Web, Media và Event.Ngoài ra, các bạn sinh viên còn có cơ hội trở thành một phần của nhà DSC khi có thể đăng kí trở thành một thành viên cộng đồng và cùng với đó là cơ hội để nhận những phần quà vô cùng hấp dẫn khi tham gia sự kiện cùng với CLB DSC.Mọi thứ đã sẵn sàng, nhà DSC đã sẵn sàng. Vậy thì còn chần chừ chi nữa mà không đăng ký tham gia sự kiện để trở thành một mảnh ghép của nhà DSC nào!!!",
    };
    await globalContext.SetEvent(event);
    router.push("/eventdetail");
  };

  const setEvent3 = async () => {
    const event = {
      image: LovelottBigImg.src,
      title: "LOVELOTT",
      unit: "Coc Sai Gon - FPTU HCM",
      time: "Feb 13-14",
      location: "Multiple Locations",
      header:
        "SAO TRỜI HỘI TỤ - VŨ TRỤ PHÁT BỒ: LOVELOTT 7 MANG DÒNG CHẢY TÌNH YÊU ĐẾN VỚI ĐH FPT TP. HCM ",
      content:
        " Tương truyền, khi yêu… nhà Khí là hay đùa giỡn bâng quơ nhà Lửa là không để người bơ vơ  nhà Nước là nghĩ nhiều chịu hong nổi nhà Đất là tưởng hiền chứ khó rờ Liệu lời đồn này có đúng với cách yêu của bạn?",
    };
    await globalContext.SetEvent(event);
    router.push("/eventdetail");
  };
  return (
    <>
      <Image
        alt={"event img"}
        width={"100%"}
        height="254px"
        src={AstronautImg.src}
        zIndex={"1"}
        onClick={() => setEvent1()}
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
        </Flex>
        <Flex alignItems={"center"} justifyContent="space-between">
          <Button
            w={selected == "button1" ? "190px" : "124px"}
            h={selected == "button1" ? "42px" : "36px"}
            bgColor={selected == "button1" ? "#04408C" : " #3A88EC"}
            onClick={() => SetSelected("button1")}
            borderRadius="24px"
            _hover={{
              bg: "#04408C",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
          >
            <Text
              color={"white"}
              fontFamily={"Balgin-Bold"}
              fontSize={selected == "button1" ? "18px" : "14px"}
            >
              On-going
            </Text>
          </Button>
          <Button
            w={selected != "button1" ? "190px" : "124px"}
            h={selected != "button1" ? "42px" : "36px"}
            bgColor={selected != "button1" ? "#04408C" : " #3A88EC"}
            onClick={() => SetSelected("button2")}
            borderRadius="24px"
            _hover={{
              bg: "#04408C",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
          >
            <Text
              color={"white"}
              fontFamily={"Balgin-Regular"}
              fontWeight={600}
              fontSize={selected != "button1" ? "18px" : "14px"}
            >
              Future
            </Text>
          </Button>
        </Flex>
        {selected == "button1" ? (
          <>
            {" "}
            <Flex flexDirection={"column"}>
              <Flex gap={2} pt={"1rem"} onClick={() => setEvent2()}>
                <Image
                  w={"152px"}
                  h="152px"
                  src={DscImg.src}
                  alt="event banner"
                />
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
          </>
        ) : (
          <>
            {" "}
            <Flex flexDirection={"column"}>
              <Flex gap={2} pt={"1rem"} onClick={() => setEvent3()}>
                <Image
                  w={"152px"}
                  h="152px"
                  src={LovelottImg.src}
                  alt="event banner"
                />
                <Flex flexDirection={"column"}>
                  <Text pb={2} fontSize={"15px"}>
                    LOVELOTT
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
                      Feb 13 - 14
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
                      Valentine Events: Lotts of Love, Mysterious Universe, Pot
                      Painting Workshop.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex gap={2} pt={"1rem"}>
                <Image
                  w={"152px"}
                  h="152px"
                  src={SoundHeartImg.src}
                  alt="event banner"
                />
                <Flex flexDirection={"column"}>
                  <Text pb={2} fontSize={"15px"}>
                    THE SOUND OF HEARTS
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
                      Feb 14
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
                      Valentine Liveshow.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
};

export default Event;
