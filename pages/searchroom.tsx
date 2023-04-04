import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import AuthCheck from "components/authentication/AuthCheck";
import SearchRoom from "components/room/searchroom";

function SearchRoomPage() {
  return (
    <Box maxW={"mobile"} h="812px" padding="0" fontFamily="campus">
      {/* <AuthCheck> */}
      <NavigationBar title={"Room List"} />
      <SearchRoom />
      {/* </AuthCheck> */}
    </Box>
  );
}

export default SearchRoomPage;
