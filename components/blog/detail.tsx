import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { API_BLOG } from "constants/api";
import useFetch from "hooks/fetchAPI/useFetch";
import { useRouter } from "next/router";

const BlogDetail = () => {
    const router = useRouter()
    const { data: blogData, isLoading, isError } = useFetch(`${API_BLOG}/${router.query.id}`)
    const blogDetail = blogData.result


    return (
        <Flex direction={"column"} p="25px" gap={2} color="#04408C" className="bodyContent">
            {
                blogDetail &&
                <>
                    <Text fontSize={"18px"}>
                        {blogDetail.title}
                    </Text>
                    <Text fontSize={"14px"} whiteSpace={'pre-line'}>
                        {blogDetail.content}
                    </Text>
                </>
            }

        </Flex>

    );
};

export default BlogDetail;
