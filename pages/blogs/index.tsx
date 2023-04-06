import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import Blog from "components/blog";
import Head from "next/head";

function BlogPage() {

  return (
    <>
      <Head>
        <title>Campus Map - Blog</title>
      </Head>
      <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
        <NavigationBar title={"Blogs"} />
        <Blog />
      </Box>
    </>

  );
}

export default BlogPage;
