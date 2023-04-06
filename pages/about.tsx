import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import AuthCheck from "components/authentication/AuthCheck";
import AboutUs from "components/about/index";
import Head from "next/head";
import useHeadContext from "hooks/useHeadContext";

function AboutPage() {
  const headContext = useHeadContext();
  headContext.SetPageTitle('Campus Map - Thông tin công ty')

  return (
    <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
      <NavigationBar title={"Thông tin công ty"} />
      <AboutUs />
    </Box>
  );
}

export default AboutPage;
