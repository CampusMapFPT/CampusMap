import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import RoomList from "components/room";
import Head from "next/head";

function RoomListPage() {

  return (
    <>
      <Head>
        <title>Phòng học - Campus Map</title>
      </Head>
      <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
        {/* <AuthCheck> */}
        <NavigationBar title={"Phòng học"} />
        <RoomList />
        {/* </AuthCheck> */}
      </Box>
      <FooterAds />
    </>

  );
}

export default RoomListPage;
