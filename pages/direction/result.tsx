import { useRouter } from 'next/router'
import { Box, Button, Flex, IconButton, Menu, MenuButton, Stack, Text } from "@chakra-ui/react";
import Direction from "components/direction/directArea";
import { Image } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons';
import LocationIcon from "../../components/assets/icon/location.png";
import DestinationIcon from "../../components/assets/icon/destination.png";
import Head from 'next/head';
import FooterAds from 'components/googleAds/footerAds';

const DirectionResultPage = () => {

  const router = useRouter()
  const { fromLocation, toLocation } = router.query

  return (
    <>
      <Head>
        <title>Tìm kiếm đường đi - Campus Map</title>
      </Head>
      <Box maxW={"mobile"} padding="0" fontFamily="campus" className="header-body">
        {/* <Image src={GFloor.src} top="100px"/> */}
        <Flex
          bgColor={"#3A88EC"}
          gap={3}
          pl="1rem"
          pt={"15px"}
          flexDirection={'column'}
          className="header"
        >
          <Flex alignItems={"center"}>
            <IconButton
              onClick={() => router.back()}
              bgColor={"transparent"} aria-label="back"
              icon={<ArrowBackIcon color="white" boxSize={5} />}
            />
            <Text textColor={"white"} fontSize={"24px"} lineHeight="34px">
              Tìm kiếm đường đi
            </Text>
          </Flex>

          <Stack px={2} m={3} gap={1}>
            <Menu>
              <MenuButton
                as={Button}
                bgColor={"#FFDD69"}
                height={"50px"}
                borderRadius={15}
                textAlign={"left"}
              >
                <Flex>
                  <Image src={LocationIcon.src} display="block" p="4" />
                  <Box fontSize={15} p="1" alignSelf={"center"}>
                    {fromLocation}
                  </Box>
                </Flex>
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                bgColor={"#FFDD69"}
                height={"50px"}
                borderRadius={15}
                textAlign={"left"}
              >
                <Flex>
                  <Image src={DestinationIcon.src} display="block" p="4" />
                  <Box fontSize={15} p="1" alignSelf={"center"}>
                    {toLocation}
                  </Box>
                </Flex>
              </MenuButton>
            </Menu>
          </Stack>
        </Flex>

        <Direction
          locationQuery={router.query}
        />
        <FooterAds />
      </Box>
    </>
  );
};

export default DirectionResultPage;
