import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import NavigationBar from "components/sections/navbar";
import EventDetail from "../../components/events/detail";
import useHeadContext from "hooks/useHeadContext";

function EventPage() {
    const headContext = useHeadContext();
    headContext.SetPageTitle('Campus Map - Sự kiện')

    return (
        <>
            <Box maxW={"mobile"} padding="0" fontFamily="campus">
                {/* <AuthCheck> */}
                <NavigationBar title={"Events"} />
                <EventDetail />
                {/* </AuthCheck> */}
            </Box>
        </>
    );
}

export default EventPage;
