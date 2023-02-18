import { Box, ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "contexts/AuthContext";
import Fonts from "fonts";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../components/assets/css/font.css";
import theme from "../theme";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: any) {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <Box
            bgColor={"#3A88EC"}
            position="relative"
            top="70px"
            height="62px"
          />
        </QueryClientProvider>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
