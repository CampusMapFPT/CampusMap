"use strict";
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 5500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ GlobalContextProvider),
/* harmony export */   "k": () => (/* binding */ GlobalContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    event: {
        image: "",
        title: "",
        unit: "",
        time: "",
        location: "",
        content: "",
        header: ""
    },
    directionTo: {},
    directionFrom: {},
    SetDirectionFrom: ()=>{},
    SetDirectionTo: ()=>{},
    SetEvent: ()=>{}
};
const GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);
function GlobalContextProvider({ children  }) {
    const { 0: event1 , 1: setEvent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState.event);
    const { 0: directionFrom , 1: setDirectionFrom  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState.directionFrom);
    const { 0: directionTo , 1: setDirectionTo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState.directionTo);
    function SetEvent(event) {
        if (event != null) setEvent(event);
        else setEvent(null);
    }
    function SetDirectionFrom(event) {
        if (event != null) setDirectionFrom(event);
        else setDirectionFrom(null);
    }
    function SetDirectionTo(event) {
        if (event != null) setDirectionTo(event);
        else setDirectionTo(null);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalContext.Provider, {
        value: {
            event: event1,
            directionFrom,
            directionTo,
            SetDirectionFrom,
            SetDirectionTo,
            SetEvent
        },
        children: children
    });
}



/***/ })

};
;