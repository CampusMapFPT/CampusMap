import {
  Box,
  Button,
  extendTheme,
  Flex,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import LocationIcon from "../assets/icon/location.png";
import DestinationIcon from "../assets/icon/destination.png";
import GFloor from "../assets/image/gfloor.png";
import { Text } from "@chakra-ui/react";
import useGlobalContext from "hooks/useGlobalContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
const arr = [30, 20];
const SearchDirection = () => {
  const router = useRouter();
  const globalContext = useGlobalContext();
  return (
    <Box className="map">
      <Stack px={8} mt={6} gap={1}>
        <Menu>
          <Box color={"#04408C"} fontSize={17}>
            Choose your location
          </Box>
          <MenuButton
            as={Button}
            bgColor={"#FFDD69"}
            height={"50px"}
            borderRadius={15}
            textAlign={"left"}
          >
            <Flex>
              <Image src={LocationIcon.src} display="block" p="4" />
              <Box opacity={0.5} fontSize={15} p="1" alignSelf={"center"}>
                {globalContext.directionFrom == ""
                  ? "Your location"
                  : globalContext.directionFrom}
              </Box>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => globalContext.SetDirectionFrom("Room 404")}
            >
              Room 404
            </MenuItem>
            <MenuItem
              onClick={() => globalContext.SetDirectionFrom("Passio Coffee")}
            >
              Passio Coffee
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <Box color={"#04408C"} fontSize={17}>
            Choose your destination
          </Box>
          <MenuButton
            as={Button}
            bgColor={"#FFDD69"}
            height={"50px"}
            borderRadius={15}
            textAlign={"left"}
          >
            <Flex>
              <Image src={DestinationIcon.src} display="block" p="4" />
              <Box opacity={0.5} fontSize={15} p="1" alignSelf={"center"}>
                {globalContext.directionTo == ""
                  ? "Your destination"
                  : globalContext.directionTo}
              </Box>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => globalContext.SetDirectionTo("7 Eleven")}>
              7 Eleven
            </MenuItem>
            <MenuItem
              onClick={() => globalContext.SetDirectionTo("Eating Area")}
            >
              Eating Area
            </MenuItem>
          </MenuList>
        </Menu>
        <Flex pt={"2rem"} w="100%" minH="3rem">
          <Button
            w="100%"
            minH="3rem"
            onClick={() => router.push("/direction/result")}
          >
            Direct
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};
export default SearchDirection;
