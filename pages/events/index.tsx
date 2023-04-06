import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import AuthCheck from "components/authentication/AuthCheck";
import Event from "components/events";
import Head from "next/head";
import useHeadContext from "hooks/useHeadContext";

function EventPage() {
    const headContext = useHeadContext();
    headContext.SetPageTitle('Campus Map - Sự kiện')

    return (
        <>
            <Box maxW={"mobile"} padding="0" fontFamily="campus">
                {/* <AuthCheck>
        
      </AuthCheck> */}
                <NavigationBar title={"Sự kiện"} />
                <Event />
            </Box>
        </>
    );
}

export default EventPage;
