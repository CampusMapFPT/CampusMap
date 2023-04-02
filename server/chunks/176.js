"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 8176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3714);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4609);
/* harmony import */ var hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_2__, hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__]);
([_index__WEBPACK_IMPORTED_MODULE_2__, hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function AuthCheck({ children  }) {
    const { user: FbUser , loading  } = (0,hooks_useAuthContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    // console.log(FbUser);
    // useEffect(() => {
    //   if (FbUser) {
    //     console.log("FbUser", FbUser);
    //   }
    // }, [FbUser]);
    // useEffect(() => {
    //   if (FbUser) {
    //     return children;
    //   } else {
    //     return <Authenticate />;
    //   }
    // }, [FbUser]);
    if (FbUser) {
        return children;
    } else if (!FbUser && !loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthCheck);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ authentication_Loading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./public/assets/images/backpack.png
/* harmony default export */ const backpack = ({"src":"/_next/static/media/backpack.0003f5f4.png","height":162,"width":162,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6klEQVR42mNABv+vMGj8esEgAuM/M57BBGbciJgh9rO0ct7v5ozLf7oL1v+vrej5X2cqyQADb/JiG7+mF/3/lZTz/29e4f+5s+7+7+48X8kAAzUlF4sXlZ75v7ns6M/+rgf/GLb+/8JQ/3MjA8MnSYYXixkEL9Z13LgTPeH/rYyZfxfuufF36exb/2/VbrjAEPyWh+HFcQazewtL/39dE/X/x5KY/2+etf25fnLB///vlN6/OFshzsDAwMAwsXJH+eS+Pb+X9az51rP41v95u649+fMvJIwBFfyXZ1D/Y8zg9cuVgeG/AEwUADXVdTxO3ig8AAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/authentication/Loading.tsx




function Loading() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        bgColor: "#3A88EC",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                alt: "logo",
                sx: {
                    width: "162px",
                    height: "162px"
                },
                src: backpack.src
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                alignItems: "center",
                color: "white",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    fontSize: "",
                    children: "Your data is loading..."
                })
            })
        ]
    });
}
/* harmony default export */ const authentication_Loading = (Loading);


/***/ })

};
;