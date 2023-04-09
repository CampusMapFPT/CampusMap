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
import Logo from "public/assets/images/logo-w-slogan(blue).png";

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
        width={"80%"}
        src={Logo.src}
        zIndex={"1"}
      />
      <Flex flexDirection={"column"} alignItems="center">
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
                Điện thoại: 0788 925 011
              </ListItem>
            </UnorderedList>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
