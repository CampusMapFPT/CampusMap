import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  Textarea,
  UnorderedList,
} from "@chakra-ui/react";
import FptImg from "public/assets/images/fptcolor.png";

import { useState } from "react";
import { useRouter } from "next/router";
import useGlobalContext from "hooks/useGlobalContext";
const AboutUs = () => {
  const router = useRouter();
  const globalContext = useGlobalContext();

  return (
    <Flex
      textColor={"#04408C"}
      h="512px"
      flexDirection="column"
      alignItems={"center"}
      p={5}
    >
      <Image
        alt={"event img"}
        width={"94px"}
        height="42px"
        src={FptImg.src}
        zIndex={"1"}
      />
      <Flex flexDirection={"column"} alignItems="center">
        <Text fontWeight={600} fontSize="30px">
          Campus Map
        </Text>
        {/* <Text
          pl={"2.5rem"}
          alignSelf={"flex-start"}
          fontWeight={600}
          fontSize={"20px"}
        >
          Feedback
        </Text>
        <Textarea
          w="313px"
          h="193px"
          placeholder="Write your feedback"
          size="xl"
        ></Textarea>
        <Button
          mt={5}
          alignSelf={"center"}
          w="114px"
          h="38px"
          bgColor={"#04408C"}
          borderRadius="72px"
        >
          <Text fontWeight={600} fontSize="24px" textColor={"white"}>
            Submit
          </Text>
        </Button> */}
        <Flex flexDirection={"column"} alignItems="left" gap={5} p={"1.5rem"}>
          <Text lineHeight={"18px"} fontSize={"13px"}>
            Sản phẩm được phát triển và vận hành bởi:
            <UnorderedList>
              <ListItem>
                Nguyễn Công Danh
              </ListItem>
              <ListItem>
                Lê Thành Đạt
              </ListItem>
              <ListItem>
                Huỳnh Minh Đức
              </ListItem>
              <ListItem>
                Dương Tuấn Minh
              </ListItem>
              <ListItem>
                Đỗ Thị Thanh Quyên
              </ListItem>
              <ListItem>
                Nguyễn Quý Thanh Tâm
              </ListItem>
              <ListItem>
                Mai Thu Thủy
              </ListItem>
              <ListItem>
                Trần Lê Hiếu Trung
              </ListItem>
              <ListItem>
                Phạm Ngọc Nhật Vy
              </ListItem>
            </UnorderedList>

          </Text>
          <Flex></Flex>
          <Text lineHeight={"18px"} fontSize={"13px"}>
            Trụ sở ở Lô E2a-7, Đường D1, Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
          </Text>
          <Flex></Flex>
          <Text lineHeight={"18px"} fontSize={"13px"}>
            Liên hệ chúng tôi:
            <UnorderedList>
              <ListItem>
                Email: campusmap@gmail.com
              </ListItem>
              <ListItem>
                Fanpage: facebook.com/campusmap.fpt
              </ListItem>
              <ListItem>
                Điện thoại: 0788925011
              </ListItem>
            </UnorderedList>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
