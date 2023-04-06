import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Logo from "public/assets/images/logo-w-slogan.png";
import { useRouter } from "next/router";

const MainHeader = () => {
    //hooks
    const router = useRouter();


    return (
        <Box bgColor={"#3A88EC"} height="169px" mb="1rem" className="header">

            <Flex paddingTop='20px'
                alignItems={"center"} justifyContent={"center"}>
                <Image alt="fpt" src={Logo.src} width='70%' p='10px 0px' />
            </Flex>
            <Flex alignItems={"center"} justifyContent={"space-between"} p="20px">
                <Box
                    as="button"
                    display={"flex"}
                    w={"149px"}
                    h="50px"
                    bgColor={"#FFDD69"}
                    justifyContent="center"
                    alignItems={"center"}
                    borderRadius="15px"
                    boxShadow={"0px 4px 4px 0px #00000040"}
                    onClick={() => router.push("/direction")}
                >
                    <Text fontSize={"12px"}>Vị trí của bạn</Text>
                </Box>
                <Box px="11px">
                    <ArrowForwardIcon color="#FFDD69" />
                </Box>

                <Box
                    display={"flex"}
                    w={"149px"}
                    h="50px"
                    bgColor={"#FFDD69"}
                    justifyContent="center"
                    alignItems={"center"}
                    borderRadius="15px"
                    boxShadow={"0px 4px 4px 0px #00000040"}
                    onClick={() => router.push("/direction")}
                >
                    <Text fontSize={"12px"}>Điểm đến</Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default MainHeader;