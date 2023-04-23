import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import Event from "components/events";
import Head from "next/head";
import FooterAds from "components/googleAds/footerAds";

function EventPage() {

    return (
        <>
            <Head>
                <title>Sự kiện - Campus Map</title>
            </Head>
            <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
                <NavigationBar title={"Sự kiện"} />
                <Event />
                <FooterAds />
            </Box>
        </>
    );
}

export default EventPage;
