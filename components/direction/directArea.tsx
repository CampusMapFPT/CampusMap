
import { Box, Button, extendTheme, Flex, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import LocationIcon from '../assets/icon/location.png'
import DestinationIcon from '../assets/icon/destination.png'
import GFloor from '../assets/image/gfloor.png'


const Direction = () => {
    return <div>
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
            <Box py={6}>
                <Grid
                    h='200px'
                    templateRows='repeat(6, 1fr)'
                    templateColumns='repeat(6 , 1fr)'
                    gap={4}
                >
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='papayawhip' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='tomato    ' />
                    <GridItem className="n1" colSpan={1} bg='tomato' />
                    {/* bg='tomato' */}
                </Grid>
                <Image src={GFloor.src} />
            </Box>
        </Stack>
        <Box borderWidth={"6px 0 0 0"} mt={6} borderTopColor="#BAD8FF">
            <Box fontSize='4xl' px={8}> Introduction</Box>
        </Box>
    </div>
}
export default Direction;