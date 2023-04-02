"use strict";
exports.id = 450;
exports.ids = [450];
exports.modules = {

/***/ 8634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/destination.2c489476.png","height":25,"width":25,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXUlEQVR42g3HMQrCMAAAwDMOOugognVwcRBFCaiTthBoU9IH9P8/aYYbjrdBskUARkV2BQT6mtYJFxvU/n2xU/x0kCTRUdb5cHDz0Gskayiiu3M1CVY0openbLZnAU2+CT7nJwTGAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 5424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/location.bbeb116d.png","height":25,"width":25,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAVElEQVR42g3HSwqDMBRA0dMOOmz30BRCUcEPaBJB3IT734qPCwcuUBWbApD1fpLBH5glW5TMwOhrsoQj8HCA0xNeskuvC3OcYkWzY1V5K5ojqprPDQ5vCJ1aG5SrAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const useFetch = (url)=>{
    const { 0: data1 , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const { 0: isError , 1: setIsError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const ourRequest = axios__WEBPACK_IMPORTED_MODULE_1___default().CancelToken.source();
        async function fetchData() {
            try {
                let res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(url, {
                    cancelToken: ourRequest.token
                });
                let data = res && res.data ? res.data : [];
                setData(data);
                setIsLoading(false);
                setIsError(false);
            } catch (e) {
                if (axios__WEBPACK_IMPORTED_MODULE_1___default().isCancel(e)) {
                    console.log('Request canceled', e.message);
                } else {
                    setIsError(true);
                    setIsLoading(false);
                }
            }
        }
        setTimeout(()=>{
            fetchData();
        }, 3000);
        return ()=>{
            ourRequest.cancel('Operation was canceled by user.');
        };
    }, [
        url
    ]);
    return {
        data: data1,
        isLoading,
        isError
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetch);


/***/ }),

/***/ 4243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5500);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// ----------------------------------------------------------------------
const useGlobalContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(contexts_GlobalContext__WEBPACK_IMPORTED_MODULE_0__/* .GlobalContext */ .k)
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGlobalContext);


/***/ })

};
;