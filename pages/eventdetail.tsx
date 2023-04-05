import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import AuthCheck from "components/authentication/AuthCheck";
import Event from "components/event";
import EventDetail from "../components/event/detail";

function EventPage() {
  return (
    <Box maxW={"mobile"} padding="0" fontFamily="campus">
      {/* <AuthCheck> */}
      <NavigationBar title={"Events"} />
      <EventDetail />
      {/* </AuthCheck> */}
    </Box>
  );
}

export default EventPage;
