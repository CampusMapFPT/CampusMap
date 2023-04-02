import { Box } from "@chakra-ui/react";
import SearchDirection from "components/direction/searchDirection";
import NavigationBar from "components/sections/navbar";
import { useRouter } from "next/router";

const DirectionPage = () => {
  const router = useRouter()
  return (
    <Box maxW={"mobile"} h="812px" padding="0" fontFamily="campus">
      <NavigationBar title={"Home"} />

      <SearchDirection
        locationQuery={router.query}
      />
    </Box>
  );
};

export default DirectionPage;
