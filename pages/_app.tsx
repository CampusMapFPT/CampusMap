import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import { AuthContextProvider } from "contexts/AuthContext";
import { GlobalContextProvider } from "contexts/GlobalContext";
import Fonts from "fonts";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "../theme";
import Script from "next/script";
import "../components/assets/css/app.css"
import "../components/assets/css/font.css";
import "../components/direction/lineStyle.css";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: any) {
  return (
    <GlobalContextProvider>
      <AuthContextProvider>
        <ChakraProvider theme={theme}>
          <Fonts />
          <QueryClientProvider client={queryClient}>
            <Script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3470415777558514`}
              strategy="lazyOnload"
              crossOrigin="anonymous"
            />
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZWLWWMMGEE"></Script>
            <Script
              id='google-analytics'
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-ZWLWWMMGEE', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
            <Container maxW="420px" p="0px" className="box-container">
              <Component {...pageProps} />

            </Container>
          </QueryClientProvider>
        </ChakraProvider>
      </AuthContextProvider>
    </GlobalContextProvider>
  );
}

export default MyApp;
