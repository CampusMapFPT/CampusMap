import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import Home from "../components/home/index";
import MainHeader from "components/nav";
import MainFooter from "components/foot";
import AuthCheck from "components/authentication/AuthCheck";

function Index() {
  return (
    <Box maxW={"sm"} maxH="248px" fontFamily="campus">
      <AuthCheck>
        <Home />
      </AuthCheck>
    </Box>
  );
}

export default Index;
