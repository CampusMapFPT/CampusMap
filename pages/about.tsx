import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import AuthCheck from "components/authentication/AuthCheck";
import AboutUs from "components/about/iindex";

function AboutPage() {
  return (
    <Box maxW={"mobile"} h="812px" padding="0" fontFamily="campus">
      <AuthCheck>
        <NavigationBar title={"About Us"} />
        <AboutUs />
      </AuthCheck>
    </Box>
  );
}

export default AboutPage;
