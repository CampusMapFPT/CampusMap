import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Home from "../components/home/index";
import AuthCheck from "components/authentication/AuthCheck";

function Index() {
  return (
    <Box maxW={"mobile"} h="812px" fontFamily="campus">
      <AuthCheck>
        <Home />
      </AuthCheck>
    </Box>
  );
}

export default Index;
