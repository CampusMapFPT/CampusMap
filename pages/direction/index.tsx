import { Box } from "@chakra-ui/react";
import SearchDirection from "components/direction/searchDirection";
import NavigationBar from "components/sections/navbar";
import useHeadContext from "hooks/useHeadContext";
import Head from "next/head";
import { useRouter } from "next/router";

const DirectionPage = () => {
  const headContext = useHeadContext();
  headContext.SetPageTitle('Campus Map - Tìm kiếm đường đi')

  const router = useRouter()
  return (
    <>
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
