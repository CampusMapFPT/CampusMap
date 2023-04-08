import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import EventDetail from "../../components/events/detail";
import Head from "next/head";

function EventPage() {
    return (
        <>
            <Head>
                <title>Sự kiện - Campus Map</title>
            </Head>
            <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
                {/* <AuthCheck> */}
                <NavigationBar title={"Events"} />
                <EventDetail />
                {/* </AuthCheck> */}
            </Box>
        </>
    );
}

export default EventPage;
