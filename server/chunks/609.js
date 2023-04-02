"use strict";
exports.id = 609;
exports.ids = [609];
exports.modules = {

/***/ 7999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.208114f2.png","height":252,"width":228,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAeUlEQVR42gWAPQ4BQRSAvzEztqGSbDQicRWnUbqPyk9cQbROoKBVqvwlNjvMm/c2fBBsackWwhUM3ZVnPpW3rowA/42fuFrPXAK9I9XBF/Yed3egwShbM1mnuUQe/EhTubVjocF9a6+WUz82cWA55JlGV/m2vGzEsANyXTt6PqJhMwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 4609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7348);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(178);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fc__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5867);
/* harmony import */ var hooks_useUserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4853);
/* harmony import */ var _public_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7999);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_authentication__WEBPACK_IMPORTED_MODULE_4__, hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_6__]);
([_firebase_authentication__WEBPACK_IMPORTED_MODULE_4__, hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Authenticate() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
    const { user: FbUser , loading  } = (0,hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const { SetUser , SetAccessToken  } = (0,hooks_useUserContext__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { 0: confirm , 1: setConfirm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // useEffect(() => {
    //   if (FbUser) {
    //     router.replace("/");
    //   }h
    // }, [FbUser]);
    const LoginWithGoogle = ()=>{
        (0,_firebase_authentication__WEBPACK_IMPORTED_MODULE_4__/* .signInWithGoogle */ .qj)().then((result)=>{
            console.log("result", result);
            const user = result.user;
            if (user) {
                try {
                    SetAccessToken(user.accessToken);
                    toast({
                        title: "Login successfully!",
                        status: "success",
                        position: "top-right",
                        isClosable: true,
                        duration: 1000
                    });
                    router.push("/");
                } catch (error) {
                    toast({
                        title: "Error!",
                        status: "error",
                        position: "top-right",
                        isClosable: true,
                        duration: 1000
                    });
                }
            }
        }).catch((error)=>{
            console.log(error);
            toast({
                title: "Login failed",
                status: "error",
                position: "top-right",
                isClosable: true,
                duration: 1000
            });
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: FbUser ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            flexDirection: "column",
            minH: "100vh",
            align: "center",
            justify: "center",
            bg: "#3A88EC",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                    alt: "logo",
                    sx: {
                        width: "224px",
                        height: "248px"
                    },
                    src: _public_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"].src */ .Z.src
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    spacing: 8,
                    mx: "auto",
                    maxW: "2xl",
                    py: 12,
                    px: 6,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            align: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                flexDirection: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    fontSize: "xl",
                                    color: "gray.600"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            bg: "gray.500",
                            color: "white",
                            _hover: {
                                bg: "gray.400"
                            },
                            onClick: LoginWithGoogle,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                gap: 2,
                                sx: {
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_5__.FcGoogle, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        children: "Login with Google"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Authenticate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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

/***/ 5867:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var contexts_AuthContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2829);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contexts_AuthContext__WEBPACK_IMPORTED_MODULE_0__]);
contexts_AuthContext__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// ----------------------------------------------------------------------
const useAuthContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(contexts_AuthContext__WEBPACK_IMPORTED_MODULE_0__/* .AuthContext */ .V)
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuthContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hooks_useUserContext)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./contexts/UserContext.tsx


const initialState = {
    user: null,
    accessToken: null,
    SetUser: ()=>{},
    SetAccessToken: ()=>{}
};
const UserContext = /*#__PURE__*/ (0,external_react_.createContext)(initialState);
function UserContextProvider({ children  }) {
    const { 0: user1 , 1: setUser  } = useState(initialState.user);
    const { 0: accessToken1 , 1: setAccessToken  } = useState(initialState.accessToken);
    function SetUser(user) {
        if (user != null) setUser(user);
        else setUser(null);
    }
    function SetAccessToken(accessToken) {
        if (accessToken != null) setAccessToken(accessToken);
        else setAccessToken(null);
    }
    return /*#__PURE__*/ _jsx(UserContext.Provider, {
        value: {
            user: user1,
            accessToken: accessToken1,
            SetUser,
            SetAccessToken
        },
        children: children
    });
}


;// CONCATENATED MODULE: ./hooks/useUserContext.ts


// ----------------------------------------------------------------------
const useUserContext = ()=>(0,external_react_.useContext)(UserContext)
;
/* harmony default export */ const hooks_useUserContext = (useUserContext);


/***/ })

};
;