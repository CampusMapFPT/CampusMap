"use strict";
exports.id = 506;
exports.ids = [506];
exports.modules = {

/***/ 4506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ searchroom)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./public/assets/images/classroom.png
/* harmony default export */ const classroom = ({"src":"/_next/static/media/classroom.2183b079.png","height":52,"width":45,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR4nAHoABf/AffMkQDy9PsGDQ4MgAQFBXkDAgPa/wAAZwH8+cAB9suRYf8CBXkCAgMl/Pz9AAQEBQAICggA//z8rQHWs4jbFxEIJAH9+7u33w3HNRT0+AwNCHLq+QvEAXuapmk/+9q6KzUj3crc9oUi+t967f8OlY77Lr8Bk6aqaz8T8LEpGPub3+r/SA0A9wDi/RJov+YKAQGSpqtmKQLpuw4I+8USDQb8BwkMzd7r/XHN7wc4AbC6ugqhu8cVFxcZVSoUDbRuYPPnlq4bN+7y9boBm6ipAAuoVwEtapYFyfQcVmRSsqSgqkUMYFZX9HcnaoA/rCHkAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/room/searchroom.tsx






const SearchRoom = ()=>{
    const router = (0,router_.useRouter)();
    const { 0: search , 1: SetSearch  } = (0,external_react_.useState)("61");
    const { 0: hide , 1: SetHide  } = (0,external_react_.useState)(false);
    const rooms = [
        {
            name: "Room 611",
            image: classroom.src,
            description: "Classroom"
        },
        {
            name: "Room 612",
            image: classroom.src,
            description: "Classroom"
        },
        {
            name: "Room 613",
            image: classroom.src,
            description: "Classroom"
        },
        {
            name: "Room 614",
            image: classroom.src,
            description: "Classroom"
        },
        {
            name: "Room 615",
            image: classroom.src,
            description: "Classroom"
        },
        {
            name: "Room 616",
            image: classroom.src,
            description: "Classroom"
        },
        {
            name: "Room 617",
            image: classroom.src,
            description: "Classroom"
        }, 
    ];
    (0,external_react_.useEffect)(()=>{
        if (search === "61") SetHide(false);
        else SetHide(true);
    }, [
        search
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                justifyContent: "center",
                position: "relative",
                bottom: "20px",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.InputGroup, {
                    sx: {
                        w: "293px",
                        h: "50px",
                        borderRadius: "20px"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.InputLeftElement, {
                            pointerEvents: "none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.SearchIcon, {
                                color: "black"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                            color: "black",
                            bgColor: "#FFDD69",
                            type: "text",
                            value: search,
                            onChange: (e)=>{
                                SetSearch(e.target.value);
                            },
                            boxShadow: "0px 4px 4px 0px #00000040",
                            borderRadius: "20px"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                direction: "column",
                px: "25px",
                gap: 1,
                color: "#04408C",
                display: hide ? "none" : "flex",
                children: rooms.map((room)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        flexDirection: "column",
                        py: "1rem",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            gap: 5,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                    alt: room.name,
                                    src: room.image,
                                    w: "50px",
                                    h: "63px"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            children: room.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            fontFamily: "Balgin-Light",
                                            children: room.description
                                        })
                                    ]
                                })
                            ]
                        })
                    }, room.name);
                })
            })
        ]
    });
};
/* harmony default export */ const searchroom = (SearchRoom);


/***/ })

};
;