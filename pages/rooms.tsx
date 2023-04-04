import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import AuthCheck from "components/authentication/AuthCheck";
import RoomList from "components/room";

function RoomListPage() {
  return (
    <Box maxW={"mobile"} h="812px" padding="0" fontFamily="campus">
      {/* <AuthCheck> */}
      <NavigationBar title={"Room List"} />
      <RoomList />
      {/* </AuthCheck> */}
    </Box>
  );
}

export default RoomListPage;
