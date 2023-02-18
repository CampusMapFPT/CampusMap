import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
import Home from "../components/Home/index";
import MainHeader from "components/nav";
import MainFooter from "components/foot";
import AuthCheck from "components/authentication/AuthCheck";

function Index() {
  return (
    <Container maxW={"sm"} maxH="248px" fontFamily="campus">
      <AuthCheck>
        <MainHeader />
        <Home />
        <MainFooter />
      </AuthCheck>
    </Container>
  );
}

export default Index;
