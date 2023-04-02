import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Home from "../components/home/index";

function Index() {

  return (
    <Box w={"mobile"} h="812px" fontFamily="campus">
      {/* <AuthCheck>
        
      </AuthCheck> */}
      <Home />
    </Box>
  );
}

export default Index;
