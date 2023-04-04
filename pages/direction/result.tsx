import { useRouter } from 'next/router'
import { Box } from "@chakra-ui/react";
import Direction from "components/direction/directArea";
import NavigationBar from "components/sections/navbar";
import GFloor from "../../components/assets/image/gfloor.png";
import { Image } from "@chakra-ui/react";

const DirectionResultPage = () => {
  const router = useRouter()

  console.log("query", router.query);
  return (
    <Box maxW={"mobile"} h="812px" padding="0" fontFamily="campus">
      <NavigationBar title={"Tìm kiếm đường đi"} />
      {/* <Image src={GFloor.src} top="100px"/> */}

      <Direction
        locationQuery={router.query}
      />
    </Box>
  );
};

export default DirectionResultPage;
