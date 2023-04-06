import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";

import BlogDetail from "components/blog/detail";
import AuthCheck from "components/authentication/AuthCheck";
import Head from "next/head";
import useHeadContext from "hooks/useHeadContext";

function BlogDetailPage() {
  const headContext = useHeadContext();
  headContext.SetPageTitle('Campus Map - Blog')
  return (
    <>
      <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
        {/* <AuthCheck> */}
        <NavigationBar title={"Blogs"} />
        <BlogDetail />
        {/* </AuthCheck> */}
      </Box>
    </>
  );
}

export default BlogDetailPage;
