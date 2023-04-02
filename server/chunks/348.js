"use strict";
exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 7348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "qj": () => (/* binding */ signInWithGoogle),
/* harmony export */   "ni": () => (/* binding */ logOut)
/* harmony export */ });
/* unused harmony export currentUser */
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4630);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _firebase__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _firebase__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


console.log(_firebase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)(_firebase__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
const currentUser = ()=>{
    return onAuthStateChanged(auth, (user)=>{});
};
const signInWithGoogle = ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup)(auth, new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider())
;
const logOut = ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut)(auth)
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4630:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3773);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4826);
/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2344);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_database__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_database__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const firebaseConfig = {
    apiKey: "AIzaSyB-A-7ajjyuCE04qlV0hF_c_u9jMQZft2s",
    authDomain: "campusmap-5c6de.firebaseapp.com",
    projectId: "campusmap-5c6de",
    storageBucket: "campusmap-5c6de.appspot.com",
    messagingSenderId: "546969496610",
    appId: "1:546969496610:web:2996e78b71650d5c0e2e7b",
    measurementId: "G-VJJNFBQF4S"
};
// let Firebase;
const Firebase = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
// init Storage
// export const firebaseStorage = getStorage(Firebase);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Firebase);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;