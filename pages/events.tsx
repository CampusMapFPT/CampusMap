import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import AuthCheck from "components/authentication/AuthCheck";
import Event from "components/event";

function EventPage() {
  return (
    <Box maxW={"mobile"} padding="0" fontFamily="campus">
      {/* <AuthCheck>
        
      </AuthCheck> */}
      <NavigationBar title={"Sự kiện"} />
      <Event />
    </Box>
  );
}

export default EventPage;
