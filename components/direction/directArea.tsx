
import { Box, Button, extendTheme, Flex, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import LocationIcon from '../assets/icon/location.png'
import DestinationIcon from '../assets/icon/destination.png'
import GFloor from '../assets/image/gfloor.png'
import { Text } from '@chakra-ui/react'

const arr = [30, 20];
const Direction = () => {
    return <Box className="map" >
        <Stack px={8} mt={6} gap={1}>
            <Menu >
                <Box color={"#04408C"} fontSize={17}>Choose your location</Box>
                <MenuButton as={Button} bgColor={"#FFDD69"} height={'50px'} borderRadius={15} textAlign={'left'} >
                    <Flex>
                        <Image src={LocationIcon.src} display="block" p='4' />
                        <Box opacity={0.5} fontSize={15} p='1' alignSelf={'center'}>Your location</Box>
                    </Flex>
                </MenuButton>
                <MenuList >
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
            <Menu >
                <Box color={"#04408C"} fontSize={17}>Choose your destination</Box>
                <MenuButton as={Button} bgColor={"#FFDD69"} height={'50px'} borderRadius={15} textAlign={'left'} >
                    <Flex>
                        <Image src={DestinationIcon.src} display="block" p='4' />
                        <Box opacity={0.5} fontSize={15} p='1' alignSelf={'center'}>Your destination</Box>
                    </Flex>
                </MenuButton>
                <MenuList >
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
            <Box className="" py={6}>
                <Image src={GFloor.src} top="100px" />
                <div className="point"></div>

            </Box>
        </Stack>

        <Box borderWidth={"6px 0 0 0"} mt={6} borderTopColor="#BAD8FF">
            <Box fontSize='4xl' margin={"auto 0"} textAlign="center"> Introduction</Box>
            <Text px={8}>
                1- Go to the Exit, which is opposite Passio.<br /> 2- Go up to 6th Floor.<br /> 3- Click the Exit icon to go to Floor 6
            </Text>
            
        </Box>
    </Box>
}
export default Direction;