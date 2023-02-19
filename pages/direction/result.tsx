import { Box } from "@chakra-ui/react";
import Direction from "components/direction/directArea";
import NavigationBar from "components/sections/navbar";
import GFloor from "../../components/assets/image/gfloor.png";
import { Image } from "@chakra-ui/react";

const DirectionResultPage = () => {
  return (
    <Box maxW={"mobile"} h="812px" padding="0" fontFamily="campus">
      <NavigationBar title={"Home"} />
      {/* <Image src={GFloor.src} top="100px"/> */}

      <Direction />
    </Box>
  );
};

export default DirectionResultPage;
