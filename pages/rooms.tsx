import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import RoomList from "components/room";
import Head from "next/head";

function RoomListPage() {

  return (
    <>

      <Head>
        <title>Campus Map - Phòng học</title>
      </Head>
      <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
        {/* <AuthCheck> */}
        <NavigationBar title={"Phòng học"} />
        <RoomList />
        {/* </AuthCheck> */}
      </Box>
    </>

  );
}

export default RoomListPage;
