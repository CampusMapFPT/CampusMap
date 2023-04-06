import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import Event from "components/events";
import Head from "next/head";

function EventPage() {

    return (
        <>
            <Head>
                <title>Campus Map - Sự kiện</title>
            </Head>
            <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
                <NavigationBar title={"Sự kiện"} />
                <Event />
            </Box>
        </>
    );
}

export default EventPage;
