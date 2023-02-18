import { Box, Flex, Link, Text } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import NextLink from "next/link";

const Blog = () => {
  const BlogList = [
    {
      title: "Lịch bảo vệ Khóa luận tốt nghiệp học kỳ Fall 2022 (Lần 2)",
      detail: "",
    },
    {
      title:
        "Thông báo lịch thi kết thúc các môn học TRS403, TRS501, TRS601 thuộc Half 1, học kỳ Spring2023",
      detail: "",
    },
    {
      title: "THÔNG BÁO NHẮC NHỞ LỊCH HỌC SAU KỲ NGHỈ TẾT",
      detail: "",
    },
    {
      title:
        "     Thông báo về việc thi thử Coursera_Đợt 2 môn SSL101c học kỳ Fall 2022",
      detail: "",
    },
    {
      title:
        "Thông báo về việc thi thử Coursera_Đợt 1 môn SSL101c học kỳ Fall 2022",
      detail: "",
    },
    {
      title:
        "Thông báo về việc thi thử Coursera_Đợt 2 môn SSL101c học kỳ Fall 2022",
      detail: "",
    },
    {
      title: "Lịch bảo vệ Khóa luận tốt nghiệp học kỳ Fall 2022 (Lần 2)",
      detail: "",
    },
    {
      title:
        "Thông báo lịch thi kết thúc các môn học TRS403, TRS501, TRS601 thuộc Half 1, học kỳ Spring2023",
      detail: "",
    },
    {
      title: "THÔNG BÁO NHẮC NHỞ LỊCH HỌC SAU KỲ NGHỈ TẾT",
      detail: "",
    },
    {
      title:
        " Thông báo về việc thi thử Coursera_Đợt 2 môn SSL101c học kỳ Fall 2022",
      detail: "",
    },
  ];

  return (
    <>
      <Flex direction={"column"} p="25px" gap={2}>
        {BlogList.map((blog) => {
          return (
            <NextLink key={blog.title} href="/home" passHref>
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
