import { Box, ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "contexts/AuthContext";
import { GlobalContextProvider } from "contexts/GlobalContext";
import Fonts from "fonts";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../components/assets/css/font.css";
import theme from "../theme";
import '../components/direction/lineStyle.css'

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: any) {
  return (
    <GlobalContextProvider>
      <AuthContextProvider>
        <ChakraProvider theme={theme}>
          <Fonts />
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <Box
              display={"flex"}
              height="62px"
              bgColor={"#3A88EC"}
              zIndex={99}
            />
          </QueryClientProvider>
        </ChakraProvider>
      </AuthContextProvider>
    </GlobalContextProvider>
  );
}

export default MyApp;
