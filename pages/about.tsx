import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import AboutUs from "components/about/index";
import Head from "next/head";

function AboutPage() {

  return (
    <>
      <Head>
        <title>Thông tin công ty - Campus Map</title>
      </Head>
      <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
        <NavigationBar title={"Thông tin công ty"} />
        <AboutUs />
      </Box>
    </>

  );
}

export default AboutPage;
