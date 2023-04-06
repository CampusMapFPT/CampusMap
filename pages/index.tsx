import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Home from "../components/home/homeIndex";
import Head from "next/head";
import useHeadContext from "hooks/useHeadContext";

function Index() {
  const headContext = useHeadContext();
  headContext.SetPageTitle('Campus Map - Nền tảng chỉ dẫn phòng học')

  return (
    <Box w={"mobile"} fontFamily="campus" className="header-body">
      {/* <AuthCheck>
        
      </AuthCheck> */}
      <Home />
    </Box>
  );
}

export default Index;
