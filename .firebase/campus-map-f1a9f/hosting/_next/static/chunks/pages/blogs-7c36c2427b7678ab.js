(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{9061:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return r(5444)}])},9706:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(5893),o=r(8527),i=r(4651),l="/_next/static/media/backpack.0003f5f4.png";r(7294);var a=function(){return(0,n.jsxs)(o.kC,{gap:2,justifyContent:"center",alignItems:"center",height:"100vh",flexDirection:"column",bgColor:"#3A88EC",children:[(0,n.jsx)(i.Ee,{alt:"logo",sx:{width:"162px",height:"162px"},src:l}),(0,n.jsx)(o.kC,{alignItems:"center",color:"white",children:(0,n.jsx)(o.xv,{fontSize:"",children:"Your data is loading..."})})]})},c=r(1878),u=r(5867);var s=function(t){var e=t.children,r=(0,u.Z)(),o=r.user,i=r.loading;return o?e:o||i?(0,n.jsx)(a,{}):(0,n.jsx)(c.Z,{})}},1878:function(t,e,r){"use strict";r.d(e,{Z:function(){return m}});var n=r(5893),o=r(7294),i=r(3079),l=r(8527),a=r(4651),c=r(5113),u=r(1163),s=r(8097),f=r(1872),h=r(5867),d={user:null,accessToken:null,SetUser:function(){},SetAccessToken:function(){}},p=(0,o.createContext)(d);var g=function(){return(0,o.useContext)(p)},v="/_next/static/media/logo.208114f2.png";var m=function(){var t=(0,u.useRouter)(),e=(0,i.pm)(),r=(0,h.Z)(),d=r.user,p=(r.loading,g()),m=(p.SetUser,p.SetAccessToken),x=(0,o.useState)();return x[0],x[1],(0,n.jsx)(n.Fragment,{children:d?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)(l.kC,{flexDirection:"column",minH:"100vh",align:"center",justify:"center",bg:"#3A88EC",children:[(0,n.jsx)(a.Ee,{alt:"logo",sx:{width:"224px",height:"248px"},src:v}),(0,n.jsxs)(l.Kq,{spacing:8,mx:"auto",maxW:"2xl",py:12,px:6,children:[(0,n.jsx)(l.Kq,{align:"center",children:(0,n.jsx)(l.kC,{flexDirection:"row",children:(0,n.jsx)(l.xv,{fontSize:"xl",color:"gray.600"})})}),(0,n.jsx)(c.zx,{bg:"gray.500",color:"white",_hover:{bg:"gray.400"},onClick:function(){(0,s.qj)().then((function(r){console.log("result",r);var n=r.user;if(n)try{m(n.accessToken),e({title:"Login successfully!",status:"success",position:"top-right",isClosable:!0,duration:1e3}),t.push("/")}catch(o){e({title:"Error!",status:"error",position:"top-right",isClosable:!0,duration:1e3})}})).catch((function(t){console.log(t),e({title:"Login failed",status:"error",position:"top-right",isClosable:!0,duration:1e3})}))},children:(0,n.jsxs)(l.kC,{gap:2,sx:{alignItems:"center"},children:[(0,n.jsx)(f.JM8,{}),(0,n.jsx)(l.xv,{children:"Login with Google"})]})})]})]})})}},104:function(t,e,r){"use strict";var n=r(5893),o=r(9876),i=r(8527),l=r(5113),a=r(1163);e.Z=function(t){var e=t.title,r=(0,a.useRouter)();return(0,n.jsxs)(i.kC,{bgColor:"#3A88EC",height:"6rem",alignItems:"center",gap:3,pl:"1rem",children:[(0,n.jsx)(l.hU,{onClick:function(){return r.back()},bgColor:"transparent","aria-label":"back",icon:(0,n.jsx)(o.Rp,{color:"white",boxSize:5})}),(0,n.jsx)(i.xv,{textColor:"white",fontSize:"24px",lineHeight:"34px",children:e})]})}},5867:function(t,e,r){"use strict";var n=r(2829),o=r(7294);e.Z=function(){return(0,o.useContext)(n.V)}},1551:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],l=!0,a=!1;try{for(r=r.call(t);!(l=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);l=!0);}catch(c){a=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=void 0;var i,l=(i=r(7294))&&i.__esModule?i:{default:i},a=r(1003),c=r(880),u=r(9246);var s={};function f(t,e,r,n){if(t&&a.isLocalURL(e)){t.prefetch(e,r,n).catch((function(t){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:t&&t.locale;s[e+"%"+r+(o?"%"+o:"")]=!0}}var h=function(t){var e,r=!1!==t.prefetch,n=c.useRouter(),i=l.default.useMemo((function(){var e=o(a.resolveHref(n,t.href,!0),2),r=e[0],i=e[1];return{href:r,as:t.as?a.resolveHref(n,t.as):i||r}}),[n,t.href,t.as]),h=i.href,d=i.as,p=t.children,g=t.replace,v=t.shallow,m=t.scroll,x=t.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var y=(e=l.default.Children.only(p))&&"object"===typeof e&&e.ref,b=o(u.useIntersection({rootMargin:"200px"}),2),C=b[0],j=b[1],k=l.default.useCallback((function(t){C(t),y&&("function"===typeof y?y(t):"object"===typeof y&&(y.current=t))}),[y,C]);l.default.useEffect((function(){var t=j&&r&&a.isLocalURL(h),e="undefined"!==typeof x?x:n&&n.locale,o=s[h+"%"+d+(e?"%"+e:"")];t&&!o&&f(n,h,d,{locale:e})}),[d,h,j,x,r,n]);var S={ref:k,onClick:function(t){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(t),t.defaultPrevented||function(t,e,r,n,o,i,l,c){("A"!==t.currentTarget.nodeName.toUpperCase()||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&a.isLocalURL(r))&&(t.preventDefault(),e[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:l}))}(t,n,h,d,g,v,m,x)},onMouseEnter:function(t){e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(t),a.isLocalURL(h)&&f(n,h,d,{priority:!0})}};if(t.passHref||"a"===e.type&&!("href"in e.props)){var w="undefined"!==typeof x?x:n&&n.locale,E=n&&n.isLocaleDomain&&a.getDomainLocale(d,w,n&&n.locales,n&&n.domainLocales);S.href=E||a.addBasePath(a.addLocale(d,w,n&&n.defaultLocale))}return l.default.cloneElement(e,S)};e.default=h},9246:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],l=!0,a=!1;try{for(r=r.call(t);!(l=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);l=!0);}catch(c){a=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,r=t.rootMargin,n=t.disabled||!a,s=i.useRef(),f=o(i.useState(!1),2),h=f[0],d=f[1],p=o(i.useState(e?e.current:null),2),g=p[0],v=p[1],m=i.useCallback((function(t){s.current&&(s.current(),s.current=void 0),n||h||t&&t.tagName&&(s.current=function(t,e,r){var n=function(t){var e,r={root:t.root||null,margin:t.rootMargin||""},n=u.find((function(t){return t.root===r.root&&t.margin===r.margin}));n?e=c.get(n):(e=c.get(r),u.push(r));if(e)return e;var o=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var e=o.get(t.target),r=t.isIntersecting||t.intersectionRatio>0;e&&r&&e(r)}))}),t);return c.set(r,e={id:r,observer:i,elements:o}),e}(r),o=n.id,i=n.observer,l=n.elements;return l.set(t,e),i.observe(t),function(){if(l.delete(t),i.unobserve(t),0===l.size){i.disconnect(),c.delete(o);var e=u.findIndex((function(t){return t.root===o.root&&t.margin===o.margin}));e>-1&&u.splice(e,1)}}}(t,(function(t){return t&&d(t)}),{root:g,rootMargin:r}))}),[n,g,r,h]);return i.useEffect((function(){if(!a&&!h){var t=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(t)}}}),[h]),i.useEffect((function(){e&&v(e.current)}),[e]),[m,h]};var i=r(7294),l=r(4686),a="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},5444:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return u}});var n=r(5893),o=(r(7294),r(8527)),i=r(104),l=r(1664),a=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.kC,{direction:"column",p:"25px",gap:5,children:[{title:"L\u1ecbch b\u1ea3o v\u1ec7 Kh\xf3a lu\u1eadn t\u1ed1t nghi\u1ec7p h\u1ecdc k\u1ef3 Fall 2022 (L\u1ea7n 2)",detail:""},{title:"Th\xf4ng b\xe1o l\u1ecbch thi k\u1ebft th\xfac c\xe1c m\xf4n h\u1ecdc TRS403, TRS501, TRS601 thu\u1ed9c Half 1, h\u1ecdc k\u1ef3 Spring2023",detail:""},{title:"TH\xd4NG B\xc1O NH\u1eaeC NH\u1ede L\u1ecaCH H\u1eccC SAU K\u1ef2 NGH\u1ec8 T\u1ebeT",detail:""},{title:"     Th\xf4ng b\xe1o v\u1ec1 vi\u1ec7c thi th\u1eed Coursera_\u0110\u1ee3t 2 m\xf4n SSL101c h\u1ecdc k\u1ef3 Fall 2022",detail:""},{title:"Th\xf4ng b\xe1o v\u1ec1 vi\u1ec7c thi th\u1eed Coursera_\u0110\u1ee3t 1 m\xf4n SSL101c h\u1ecdc k\u1ef3 Fall 2022",detail:""},{title:"Th\xf4ng b\xe1o v\u1ec1 vi\u1ec7c thi th\u1eed Coursera_\u0110\u1ee3t 2 m\xf4n SSL101c h\u1ecdc k\u1ef3 Fall 2022",detail:""},{title:"L\u1ecbch b\u1ea3o v\u1ec7 Kh\xf3a lu\u1eadn t\u1ed1t nghi\u1ec7p h\u1ecdc k\u1ef3 Fall 2022 (L\u1ea7n 2)",detail:""},{title:"Th\xf4ng b\xe1o l\u1ecbch thi k\u1ebft th\xfac c\xe1c m\xf4n h\u1ecdc TRS403, TRS501, TRS601 thu\u1ed9c Half 1, h\u1ecdc k\u1ef3 Spring2023",detail:""},{title:"TH\xd4NG B\xc1O NH\u1eaeC NH\u1ede L\u1ecaCH H\u1eccC SAU K\u1ef2 NGH\u1ec8 T\u1ebeT",detail:""},{title:" Th\xf4ng b\xe1o v\u1ec1 vi\u1ec7c thi th\u1eed Coursera_\u0110\u1ee3t 2 m\xf4n SSL101c h\u1ecdc k\u1ef3 Fall 2022",detail:""}].map((function(t){return(0,n.jsx)(l.default,{href:"/blogdetail",passHref:!0,children:(0,n.jsx)(o.rU,{children:(0,n.jsxs)(o.kC,{justifyContent:"space-between",gap:3,children:[(0,n.jsx)(o.kC,{alignItems:"center",h:"1.2rem",children:(0,n.jsx)(o.xu,{borderRadius:"100%",bgColor:"#04408C",w:"5px",h:"5px"})}),(0,n.jsx)(o.xv,{color:"#04408C",fontSize:"14px",children:t.title})]})})},t.title)}))})})},c=r(9706);var u=function(){return(0,n.jsx)(o.xu,{maxW:"mobile",h:"812px",padding:"0",fontFamily:"campus",children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(i.Z,{title:"Blogs"}),(0,n.jsx)(a,{})]})})}},1664:function(t,e,r){t.exports=r(1551)},8357:function(t,e,r){"use strict";r.d(e,{w_:function(){return u}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),l=function(){return l=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},l.apply(this,arguments)},a=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function c(t){return t&&t.map((function(t,e){return n.createElement(t.tag,l({key:e},t.attr),c(t.child))}))}function u(t){return function(e){return n.createElement(s,l({attr:l({},t.attr)},e),c(t.child))}}function s(t){var e=function(e){var r,o=t.attr,i=t.size,c=t.title,u=a(t,["attr","size","title"]),s=i||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:r,style:l(l({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),t.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}}},function(t){t.O(0,[994,744,876,79,774,888,179],(function(){return e=9061,t(t.s=e);var e}));var e=t.O();_N_E=e}]);