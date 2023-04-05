import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Authenticate from "components/authentication";
import { signIn, signOut } from "next-auth/react";
import MainHeader from "components/nav";

function AuthenticationPage() {
  return (
    <Box maxW={"mobile"} padding="0" fontFamily="campus">
      {/* <MainHeader /> */}
      <Authenticate />
    </Box>
  );
}

export default AuthenticationPage;
