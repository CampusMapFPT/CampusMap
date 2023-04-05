import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import { API_BLOG } from "constants/api";
import useFetch from "hooks/fetch/useFetch";
import NextLink from "next/link";

const Blog = () => {
  const { data: blogData, isLoading, isError } = useFetch(API_BLOG)
  const blogList = blogData.result
  console.log(blogList);

  return (
    <>
      <Flex direction={"column"} p="25px" gap={5}>
        {blogList &&
          blogList.map((blog) => {
            return (
              <NextLink key={blog.title}
                href={{
                  pathname: `/blogs/detail/[id]`,
                  query: { id: blog.id }
                }} passHref>
                <Link>
                  <Flex justifyContent={"space-between"} gap={3}>
                    <Flex alignItems={"center"} h="1.2rem">
                      <Box
                        borderRadius={"100%"}
                        bgColor="#04408C"
                        w="5px"
                        h="5px"
                      />
                    </Flex>
                    <Text color="#04408C" fontSize={"14px"}>
                      {blog.title}
                    </Text>
                  </Flex>
                </Link>
              </NextLink>
            );
          })}
      </Flex>
    </>
  );
};

export default Blog;
