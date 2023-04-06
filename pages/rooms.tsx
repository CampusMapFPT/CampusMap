import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import AuthCheck from "components/authentication/AuthCheck";
import RoomList from "components/room";
import Head from "next/head";
import useHeadContext from "hooks/useHeadContext";

function RoomListPage() {
  const headContext = useHeadContext();
  headContext.SetPageTitle('Campus Map - Phòng học')

  return (
    <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
      {/* <AuthCheck> */}
      <NavigationBar title={"Phòng học"} />
      <RoomList />
      {/* </AuthCheck> */}
    </Box>
  );
}

export default RoomListPage;
