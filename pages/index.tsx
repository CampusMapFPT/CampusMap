import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Home from "../components/home/index";
import AuthCheck from "components/authentication/AuthCheck";

function Index() {
  return (
    <Box maxW={"mobile"} h="712px" fontFamily="campus">
      <AuthCheck>
        <Home />
        {/* Footer */}
      </AuthCheck>
    </Box>
  );
}

export default Index;
