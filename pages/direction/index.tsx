import { Box } from "@chakra-ui/react";
import Direction from "components/direction/directArea";
import NavigationBar from "components/sections/navbar";


const DirectionPage = () => {
    return (
        <Box maxW={"sm"} maxH="248px" padding="0" fontFamily="campus">
            <NavigationBar title={"Home"} />
            <Direction />
        </Box>)

}

export default DirectionPage;