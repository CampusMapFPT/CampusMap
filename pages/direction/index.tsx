import { Box } from "@chakra-ui/react";
import Direction from "components/direction/directArea";
import NavigationBar from "components/sections/navbar";
import GFloor from '../../components/assets/image/gfloor.png';
import { Image } from '@chakra-ui/react'


const DirectionPage = () => {
    return (
        <Box maxW={"sm"} maxH="248px" padding="0" fontFamily="campus">
            <NavigationBar title={"Home"} />
            {/* <Image src={GFloor.src} top="100px"/> */}

            <Direction />
        </Box>)

}

export default DirectionPage;