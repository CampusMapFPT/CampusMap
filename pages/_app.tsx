import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import { AuthContextProvider } from "contexts/AuthContext";
import { GlobalContextProvider } from "contexts/GlobalContext";
import Fonts from "fonts";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../components/assets/css/font.css";
import theme from "../theme";
import "../components/direction/lineStyle.css";
import { HeadContextProvider } from "contexts/HeadContext";
import Head from "next/head";
import useHeadContext from "hooks/useHeadContext";
import Script from "next/script";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: any) {
  const headContext = useHeadContext();
  return (
    <HeadContextProvider>
      <GlobalContextProvider>
        <AuthContextProvider>
          <ChakraProvider theme={theme}>
            <Fonts />
            <QueryClientProvider client={queryClient}>
              <Head>
                <title>{headContext.pageTitle}</title>
              </Head>
              <Script
                async
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3470415777558514`}
                strategy="lazyOnload"
                crossOrigin="anonymous"
              />
              <Container maxW="420px" p="0px">
                <Component {...pageProps} />

                <Box
                  display={"flex"}
                  height="62px"
                  bgColor={"#3A88EC"}
                  zIndex={99}
                />
              </Container>


            </QueryClientProvider>
          </ChakraProvider>
        </AuthContextProvider>
      </GlobalContextProvider>
    </HeadContextProvider>
  );
}

export default MyApp;
