import React from "react";
import { Box } from "@chakra-ui/react";
import Authenticate from "components/authentication";
import { signIn, signOut } from "next-auth/react";
import MainHeader from "components/nav";

function AuthenticationPage() {
  return (
    <Box fontFamily="campus">
      {/* <MainHeader /> */}
      {/* <Authenticate /> */}
    </Box>
  );
}

export default AuthenticationPage;
