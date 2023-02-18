import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

type NavProps = {
  title: string;
};

const NavigationBar = ({ title }: NavProps) => {
  const router = useRouter();

  return (
    <Flex
      bgColor={"#3A88EC"}
      height="8rem"
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

      <Text textColor={"white"} fontSize={"24px"} lineHeight="34px">
        {title}
      </Text>
    </Flex>
  );
};

export default NavigationBar;
