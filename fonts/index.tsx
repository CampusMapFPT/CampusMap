import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: PoppinsVN;
        font-weight: 400;
        src: url("public/fonts/PoppinsVN/PoppinsVN-400.woff2");
      },
      @font-face {
        font-family: PoppinsVN;
        font-weight: 500;
        src: url("public/fonts/PoppinVn/PoppinsVN-500.woff2");
      },
      @font-face {
        font-family: PoppinsVN;
        font-weight: 600;
        src: url("public/fonts/PoppinsVN/PoppinsVN-600-italic.woff2");
      },
      @font-face {
        font-family: PoppinsVN;
        font-weight: 600;
        src: url("public/fonts/PoppinsVN/PoppinsVN-600.woff2");
      },
      @font-face {
        font-family: PoppinsVN;
        font-weight: 700;
        src: url("public/fonts/PoppinsVN/PoppinsVN-700.woff2");
      },
      
      @font-face {
        font-family: Balgin-Light;
        font-weight: 400;
        src: url("public/fonts/Balgin/BalginLight.ttf");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      },    
      @font-face {
        font-family: Balgin-Regular;
        font-weight: 400;
        src: url("public/fonts/Balgin/BalginRegular.ttf");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      },   
      @font-face {
        font-family: Balgin-SemiBold;
        font-weight: 400;
        src: url("public/fonts/Balgin/BalginSemiBold.TTF");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      },
      @font-face {
        font-family: Balgin-Bold;
        font-weight: 400;
        src: url("public/fonts/Balgin/BalginBold.TTF");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);

export default Fonts;
