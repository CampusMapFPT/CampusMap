import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import Blog from "components/blog";
import AuthCheck from "components/authentication/AuthCheck";

function BlogPage() {
  return (
    <Box maxW={"mobile"} h="812px" padding="0" fontFamily="campus">
      <AuthCheck>
        <NavigationBar title={"Blogs"} />
        <Blog />
      </AuthCheck>
    </Box>
  );
}

export default BlogPage;