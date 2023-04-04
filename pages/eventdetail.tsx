import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import AuthCheck from "components/authentication/AuthCheck";
import Event from "components/event";
import EventDetail from "../components/event/detail";

function EventPage() {
  return (
    <Box maxW={"mobile"} h="812px" padding="0" fontFamily="campus">
      <AuthCheck>
        <NavigationBar title={"Sự kiện"} />
        <EventDetail />
      </AuthCheck>
    </Box>
  );
}

export default EventPage;
