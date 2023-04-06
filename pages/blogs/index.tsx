import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import Blog from "components/blog";
import AuthCheck from "components/authentication/AuthCheck";
import Head from "next/head";
import useHeadContext from "hooks/useHeadContext";

function BlogPage() {
  const headContext = useHeadContext();
  headContext.SetPageTitle('Campus Map - Blog')


  return (
    <>
      <Box maxW={"mobile"} padding="0" fontFamily="campus">
        <NavigationBar title={"Blogs"} />
        <Blog />
      </Box>
    </>

  );
}

export default BlogPage;
