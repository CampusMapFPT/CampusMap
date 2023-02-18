import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import Blog from "components/blog";

function BlogDetailPage() {
  return (
    <Box maxW={"sm"} maxH="248px" padding="0" fontFamily="campus">
      <NavigationBar title={"Blogs"} />
      <Blog />
    </Box>
  );
}

export default BlogDetailPage;
