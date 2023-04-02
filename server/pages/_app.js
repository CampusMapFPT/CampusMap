"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthContextProvider),
/* harmony export */   "V": () => (/* binding */ AuthContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7348);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_authentication__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);
([_firebase_authentication__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const initialUser = null;
const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    user: initialUser,
    loading: true
});
function AuthContextProvider({ children  }) {
    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let unsubscribe;
        unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_firebase_authentication__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8, (user)=>{
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user: user1,
            loading
        },
        children: children
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ fonts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: ./fonts/index.tsx


const Fonts = ()=>/*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Global, {
        styles: `
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
      `
    })
;
/* harmony default export */ const fonts = (Fonts);


/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2829);
/* harmony import */ var contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5500);
/* harmony import */ var fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8406);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4331);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);
contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_3__/* .GlobalContextProvider */ .n, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__/* .AuthContextProvider */ .H, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
                theme: _theme__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(fonts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {
                        client: queryClient,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                                maxW: "420px",
                                p: "0px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                display: "flex",
                                height: "62px",
                                bgColor: "#3A88EC",
                                zIndex: 99
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    colors: {
        primary: {
            transparent: "#52D6FF80",
            lighter: "#C7F6D5",
            light: "#93e4fc",
            main: "##3A88EC",
            dark: "#59b0ca",
            darker: "#25855A"
        },
        secondary: {
            lighter: "#FEFFE3",
            light: "#ecc889",
            main: "#FF8A50",
            dark: "#ee9702",
            darker: ""
        },
        yellow_light: "#FEFFE3",
        green_main: "#1B8838",
        light: "#FFFFFF",
        dark: "#000000",
        warning: "#ffaa00",
        error: "#e50e0e",
        link: "#017fed"
    },
    fonts: {
        body: "Balgin-Regular, system-ui, sans-serif",
        heading: "Balgin-Regular, Georgia, serif",
        mono: "Balgin-Regular, Menlo, monospace",
        campus: "Balgin-Regular, Cabin"
    },
    breakpoints: {
        mobile: "420px",
        xs: "50px",
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        "2xl": "2560px"
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 3773:
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ 4826:
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ 2344:
/***/ ((module) => {

module.exports = import("firebase/compat/database");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [348,500], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();