import { Box } from "@chakra-ui/react";
import SearchDirection from "components/direction/searchDirection";
import NavigationBar from "components/sections/navbar";
import Head from "next/head";
import { useRouter } from "next/router";

const DirectionPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Campus Map - Tìm kiếm đường đi</title>
      </Head>
      <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
        <NavigationBar title={""} />

        <SearchDirection
          locationQuery={router.query}
        />
      </Box>
    </>
  );
};

export default DirectionPage;
