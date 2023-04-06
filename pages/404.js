import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Privacy() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Campus Map - Không tìm thấy trang</title>
      </Head>
      <Box w="100vw" h="100vh">
        <Flex
          justifyContent={"center"}
          alignItems="center"
          h="100%"
          flexDirection={"column"}
        >
          <Text fontSize={"2xl"}>Không tìm thấy trang</Text>
          <Button onClick={() => router.push("/")}>Trở về trang chủ</Button>
        </Flex>
      </Box>
    </>

  );
}
