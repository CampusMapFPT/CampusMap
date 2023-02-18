import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Select,
  Skeleton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
//images and icons
//components

//hooks

import ScrollToTop from "components/sections/ScrollToTop";

const weekday = [
  { name: "Thứ Hai", value: 1 },
  { name: "Thứ Ba", value: 2 },
  { name: "Thứ Tư", value: 3 },
  { name: "Thứ Năm", value: 4 },
  { name: "Thứ Sáu", value: 5 },
  { name: "Thứ Bảy", value: 6 },
  { name: "Chủ nhật", value: 0 },
];

const Home = () => {
  return (
    //hooks

    //apis

    //variables

    //Delete all item in cart when change time range

    <Box
      overflow={"clip"}
      w={"100%"}
      justifyContent="center"
      zIndex={2}
      py="2rem"
    >
      <ScrollToTop smooth color="primary.main" width={"3rem"} />
      Home
    </Box>
  );
};

export default Home;
