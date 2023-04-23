import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import Blog from "components/blog";
import Head from "next/head";
import FooterAds from "components/googleAds/footerAds";

function BlogPage() {

  return (
    <>
      <Head>
        <title>Blog - Campus Map</title>
      </Head>
      <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
        <NavigationBar title={"Blogs"} />
        <Blog />
        <FooterAds />
      </Box>
    </>

  );
}

export default BlogPage;
