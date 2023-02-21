import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  Textarea,
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
        <Text
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
        </Button>
        <Flex flexDirection={"column"} alignItems="center" gap={5} p={"1.5rem"}>
          <Text lineHeight={"18px"} fontSize={"13px"}>
            The application is developed and operated by: Nguyen Cong Danh, Le
            Thanh Dat, Huynh Minh Duc, Duong Tuan Minh, Do Thi Thanh Quyen,
            Nguyen Quy Thanh Tam, Mai Thu Thuy, Le Hieu Trung, Pham Ngoc Nhat
            Vy.  
          </Text>
          <Flex></Flex>
          <Text lineHeight={"18px"} fontSize={"13px"}>
            Based in D1 Street, Saigon Hi-tech Park, Long Thanh My Ward, Thu Duc
            City, Ho Chi Minh City
          </Text>
          <Flex></Flex>
          <Text lineHeight={"18px"} fontSize={"13px"}>
            Contact us: Email: campusmap@gmail.com Telephone: 079753499741
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutUs;
