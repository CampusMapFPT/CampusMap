import { ChakraProvider } from "@chakra-ui/react";
import { AuthContextProvider } from "contexts/AuthContext";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../components/assets/css/font.css";
import theme from "../theme";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: any) {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
