import { Box, Flex, Link, Text } from "@chakra-ui/react";

const BlogDetail = () => {
  return (
    <>
      <Flex direction={"column"} p="25px" gap={2} color="#04408C">
        <Text fontSize={"18px"}>
          Lịch bảo vệ Khóa luận tốt nghiệp học kỳ Fall 2022 (Lần 2)
        </Text>
        <Text fontSize={"14px"}>
          Phòng Khảo thí thông báo đến sinh viên lịch bảo vệ Khóa luận tốt
          nghiệp học kỳ Fall 2022 (Lần 2), chi tiết như bảng dưới: Lưu ý: Sinh
          viên vui lòng có mặt trước 30 phút để chuẩn bị tốt trước khi buổi bảo
          vệ bắt đầu, (các nhóm có thể bắt đầu sớm hoặc trễ hơn thời gian thông
          báo). Lịch chi tiết về buổi bảo vệ Khóa luận tốt nghiệp sẽ được gửi
          đến mail sinh viên. Chúc các bạn thành công với Khóa luận tốt nghiệp
          học kỳ Fall 2022! <Flex pt={1} /> Trân trọng, <Flex pt={2} />
          Phòng Khảo thí FPTUHCM.
        </Text>
      </Flex>
    </>
  );
};

export default BlogDetail;
