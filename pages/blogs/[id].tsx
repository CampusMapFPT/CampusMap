import React from "react";
import { Box } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";

import BlogDetail from "components/blog/detail";
import Head from "next/head";
import FooterAds from "components/googleAds/footerAds";

function BlogDetailPage() {
  return (
    <>
      <Head>
        <title>Blog - Campus Map</title>
      </Head>
      <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
        {/* <AuthCheck> */}
        <NavigationBar title={"Blogs"} />
        <BlogDetail />
        {/* </AuthCheck> */}
        <FooterAds />
      </Box>
    </>
  );
}

export default BlogDetailPage;
