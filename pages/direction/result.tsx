import { useRouter } from 'next/router'
import { Box } from "@chakra-ui/react";
import Direction from "components/direction/directArea";
import NavigationBar from "components/sections/navbar";
import GFloor from "../../components/assets/image/gfloor.png";
import { Image } from "@chakra-ui/react";
import Head from 'next/head';
import useHeadContext from 'hooks/useHeadContext';

const DirectionResultPage = () => {

  const router = useRouter()
  const headContext = useHeadContext();
  headContext.SetPageTitle('Campus Map - Tìm kiếm đường đi')

  console.log("query", router.query);
  return (
    <>
      <Box maxW={"mobile"} padding="0" fontFamily="campus">
        <NavigationBar title={"Tìm kiếm đường đi"} />
        {/* <Image src={GFloor.src} top="100px"/> */}

        <Direction
          locationQuery={router.query}
        />
      </Box>
    </>
  );
};

export default DirectionResultPage;
