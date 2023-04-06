import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import useHeadContext from "hooks/useHeadContext";

export default function Privacy() {
  const router = useRouter();
  const headContext = useHeadContext();
  headContext.SetPageTitle('Campus Map - Không tìm thấy trang')

  return (
    <Box w="100vw" h="100vh">
      <Flex
        justifyContent={"center"}
        alignItems="center"
        h="100%"
        flexDirection={"column"}
      >
        <Text fontSize={"2xl"}>Opps, Page Not Found</Text>
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </Flex>
    </Box>
  );
}
