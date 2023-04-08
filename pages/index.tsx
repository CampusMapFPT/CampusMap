import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Home from "../components/home/homeIndex";
import Head from "next/head";

function Index() {

  return (
    <>
      <Head>
        <title>Nền tảng chỉ dẫn phòng học - Campus Map</title>
      </Head>
      <Box w={"mobile"} fontFamily="campus" className="header-body">
        {/* <AuthCheck>
        
      </AuthCheck> */}
        <Home />
      </Box>
    </>

  );
}

export default Index;
