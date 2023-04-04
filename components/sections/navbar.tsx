import { ArrowBackIcon, } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Text, Image } from "@chakra-ui/react";
import Logo from "public/assets/images/logo-w-slogan.png";
import { useRouter } from "next/router";

type NavProps = {
  title: string;
};

const NavigationBar = ({ title }: NavProps) => {
  const router = useRouter();

  return (
    <Flex
      bgColor={"#3A88EC"}
      height="6rem"
      alignItems={"center"}
      gap={3}
      pl="1rem"
    >
      <IconButton
        onClick={() => router.back()}
        bgColor={"transparent"}
        aria-label="back"
        icon={<ArrowBackIcon color="white" boxSize={5} />}
      />

      {title === null || title === undefined || title === '' ?
        <Image
          alt={"event img"}
          height="42px"
          src={Logo.src}
          zIndex={"1"}
        />
        : <Text textColor={"white"} fontSize={"24px"} lineHeight="34px">
          {title}
        </Text>
      }


    </Flex>
  );
};

export default NavigationBar;
