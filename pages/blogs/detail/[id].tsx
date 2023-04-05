import React from "react";
import { Box, Container } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";

import BlogDetail from "components/blog/detail";
import AuthCheck from "components/authentication/AuthCheck";

function BlogDetailPage() {
  return (
    <Box maxW={"mobile"} padding="0" fontFamily="campus">
      {/* <AuthCheck> */}
      <NavigationBar title={"Blogs"} />
      <BlogDetail />
      {/* </AuthCheck> */}
    </Box>
  );
}

export default BlogDetailPage;
