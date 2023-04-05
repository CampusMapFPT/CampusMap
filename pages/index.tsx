import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Home from "../components/home/homeIndex";

function Index() {

  return (
    <Box w={"mobile"} fontFamily="campus">
      {/* <AuthCheck>
        
      </AuthCheck> */}
      <Home />
    </Box>
  );
}

export default Index;
