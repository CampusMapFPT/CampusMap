(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{8216:function(e,n,r){e.exports=r(8387)},8387:function(e,n){"use strict";n.removeVI=void 0;var r=[{char:"a",regex:/\xe0|\xe1|\u1ea1|\u1ea3|\xe3|\xe2|\u1ea7|\u1ea5|\u1ead|\u1ea9|\u1eab|\u0103|\u1eb1|\u1eaf|\u1eb7|\u1eb3|\u1eb5/g},{char:"e",regex:/\xe8|\xe9|\u1eb9|\u1ebb|\u1ebd|\xea|\u1ec1|\u1ebf|\u1ec7|\u1ec3|\u1ec5/g},{char:"i",regex:/\xec|\xed|\u1ecb|\u1ec9|\u0129/g},{char:"o",regex:/\xf2|\xf3|\u1ecd|\u1ecf|\xf5|\xf4|\u1ed3|\u1ed1|\u1ed9|\u1ed5|\u1ed7|\u01a1|\u1edd|\u1edb|\u1ee3|\u1edf|\u1ee1/g},{char:"u",regex:/\xf9|\xfa|\u1ee5|\u1ee7|\u0169|\u01b0|\u1eeb|\u1ee9|\u1ef1|\u1eed|\u1eef/g},{char:"y",regex:/\u1ef3|\xfd|\u1ef5|\u1ef7|\u1ef9/g},{char:"d",regex:/\u0111/g}],t=[{char:"A",regex:/\xc0|\xc1|\u1ea0|\u1ea2|\xc3|\xc2|\u1ea6|\u1ea4|\u1eac|\u1ea8|\u1eaa|\u0102|\u1eb0|\u1eae|\u1eb6|\u1eb2|\u1eb4/g},{char:"E",regex:/\xc8|\xc9|\u1eb8|\u1eba|\u1ebc|\xca|\u1ec0|\u1ebe|\u1ec6|\u1ec2|\u1ec4/g},{char:"I",regex:/\xcc|\xcd|\u1eca|\u1ec8|\u0128/g},{char:"O",regex:/\xd2|\xd3|\u1ecc|\u1ece|\xd5|\xd4|\u1ed2|\u1ed0|\u1ed8|\u1ed4|\u1ed6|\u01a0|\u1edc|\u1eda|\u1ee2|\u1ede|\u1ee0/g},{char:"U",regex:/\xd9|\xda|\u1ee4|\u1ee6|\u0168|\u01af|\u1eea|\u1ee8|\u1ef0|\u1eec|\u1eee/g},{char:"Y",regex:/\u1ef2|\xdd|\u1ef4|\u1ef6|\u1ef8/g},{char:"D",regex:/\u0110/g}],o=/!|@|%|\^|\*|\(|\)|\+|\-|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_|\|/g,i={ignoreCase:!0,replaceSpecialCharacters:!0,concatBy:"-"};n.removeVI=function(e,n){void 0===e&&(e=""),void 0===n&&(n=i);var c=n.ignoreCase,a=void 0===c?i.ignoreCase:c,s=n.replaceSpecialCharacters,u=void 0===s?i.replaceSpecialCharacters:s,l=n.concatBy,x=void 0===l?i.concatBy:l,d=e||"";if(a&&(d=d.toLowerCase()),r.forEach((function(e){d=d.replace(e.regex,e.char)})),a||t.forEach((function(e){d=d.replace(e.regex,e.char)})),u){var h=x;d=d.replace(o,h).replace(new RegExp("\\"+h+"+\\"+h,"g"),h).replace(new RegExp("^\\"+h+"+|\\"+h+"+$","g"),"")}return d},n.removeVI},304:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/direction",function(){return r(3391)}])},8634:function(e,n){"use strict";n.Z={src:"/_next/static/media/destination.2c489476.png",height:25,width:25,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXUlEQVR42g3HMQrCMAAAwDMOOugognVwcRBFCaiTthBoU9IH9P8/aYYbjrdBskUARkV2BQT6mtYJFxvU/n2xU/x0kCTRUdb5cHDz0Gskayiiu3M1CVY0openbLZnAU2+CT7nJwTGAAAAAElFTkSuQmCC"}},5424:function(e,n){"use strict";n.Z={src:"/_next/static/media/location.bbeb116d.png",height:25,width:25,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAVElEQVR42g3HSwqDMBRA0dMOOmz30BRCUcEPaBJB3IT734qPCwcuUBWbApD1fpLBH5glW5TMwOhrsoQj8HCA0xNeskuvC3OcYkWzY1V5K5ojqprPDQ5vCJ1aG5SrAAAAAElFTkSuQmCC"}},104:function(e,n,r){"use strict";var t=r(5893),o=r(9876),i=r(8527),c=r(5113),a=r(1163);n.Z=function(e){var n=e.title,r=(0,a.useRouter)();return(0,t.jsxs)(i.kC,{bgColor:"#3A88EC",height:"6rem",alignItems:"center",gap:3,pl:"1rem",children:[(0,t.jsx)(c.hU,{onClick:function(){return r.back()},bgColor:"transparent","aria-label":"back",icon:(0,t.jsx)(o.Rp,{color:"white",boxSize:5})}),(0,t.jsx)(i.xv,{textColor:"white",fontSize:"24px",lineHeight:"34px",children:n})]})}},829:function(e,n,r){"use strict";var t=r(4051),o=r.n(t),i=r(7294),c=r(9669),a=r.n(c);function s(e,n,r,t,o,i,c){try{var a=e[i](c),s=a.value}catch(u){return void r(u)}a.done?n(s):Promise.resolve(s).then(t,o)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function c(e){s(i,t,o,c,a,"next",e)}function a(e){s(i,t,o,c,a,"throw",e)}c(void 0)}))}}n.Z=function(e){var n=(0,i.useState)([]),r=n[0],t=n[1],c=(0,i.useState)(!0),s=c[0],l=c[1],x=(0,i.useState)(!1),d=x[0],h=x[1];return(0,i.useEffect)((function(){var n=a().CancelToken.source();function r(){return(r=u(o().mark((function r(){var i,c;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,a().get(e,{cancelToken:n.token});case 3:i=r.sent,c=i&&i.data?i.data:[],t(c),l(!1),h(!1),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),a().isCancel(r.t0)?console.log("Request canceled",r.t0.message):(h(!0),l(!1));case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}return setTimeout((function(){!function(){r.apply(this,arguments)}()}),3e3),function(){n.cancel("Operation was canceled by user.")}}),[e]),{data:r,isLoading:s,isError:d}}},4243:function(e,n,r){"use strict";var t=r(5500),o=r(7294);n.Z=function(){return(0,o.useContext)(t.k)}},3391:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return C}});var t=r(5893),o=r(8527),i=r(4017),c=r(5113),a=r(7294),s=r(4612);function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var x=(0,a.forwardRef)((function(e,n){var r=e.onMouseEnter,o=e.onMouseMove,c=e.onMouseLeave,a=e.onClick,x=e.isDisabled,d=e.isFocusable,h=e.closeOnSelect,g=e.type,f=l(e,["onMouseEnter","onMouseMove","onMouseLeave","onClick","isDisabled","isFocusable","closeOnSelect","type"]),p=(0,i.iX)({onMouseEnter:r,onMouseMove:o,onMouseLeave:c,onClick:a,isDisabled:x,isFocusable:d,closeOnSelect:h,type:g},n),m=(p.role,l(p,["role"]));return(0,t.jsx)(s.II,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}({},m,f))})),d=x,h=r(4651),g=r(5424),f=r(8634),p=r(4243),m=r(1163),A=r(829),v=r(8216),b=function(){var e=(0,m.useRouter)(),n=(0,p.Z)(),r=(0,a.useState)(""),s=r[0],u=r[1],l=(0,a.useState)(""),x=l[0],b=l[1],j=(0,A.Z)("https://campusmapapi.azurewebsites.net/api/Room"),C=j.data,y=j.isLoading,k=(j.isError,e.query),w=(k.from,k.to,""===s?C.result:C.result.filter((function(e){return(0,v.removeVI)(e.name).includes((0,v.removeVI)(s))}))),S=""===x?C.result:C.result.filter((function(e){return(0,v.removeVI)(e.name).includes((0,v.removeVI)(x))})),O=(0,a.useCallback)((function(e){u(e.currentTarget.value)}),[]),E=(0,a.useCallback)((function(e){b(e.currentTarget.value)}),[]);return console.log(n),(0,t.jsx)(o.xu,{className:"map",children:(0,t.jsxs)(o.Kq,{px:8,mt:6,gap:1,children:[(0,t.jsxs)(i.v2,{children:[(0,t.jsx)(o.xu,{color:"#04408C",fontSize:17,children:"Choose your location"}),(0,t.jsx)(i.j2,{as:c.zx,bgColor:"#FFDD69",height:"50px",borderRadius:15,textAlign:"left",children:(0,t.jsxs)(o.kC,{children:[(0,t.jsx)(h.Ee,{src:g.Z.src,display:"block",p:"4"}),(0,t.jsx)(o.xu,{opacity:.5,fontSize:15,p:"1",alignSelf:"center",children:""==n.directionFrom.name||void 0===n.directionFrom.name?"Your location":n.directionFrom.name})]})}),(0,t.jsxs)(i.qy,{className:"myMenuList",children:[(0,t.jsx)(i.kS,{children:(0,t.jsx)(o.xu,{px:"4",children:(0,t.jsx)(d,{role:"search",size:"sm",onChange:O})})}),(0,t.jsx)(i.R,{}),(0,t.jsx)(i.kS,{children:(0,t.jsxs)(o.xu,{className:"locationList",maxH:164,children:[y&&(0,t.jsx)(i.sN,{disabled:!0,children:"Loading"}),!y&&w&&w.length>0&&w.map((function(e){return(0,t.jsx)(i.sN,{onClick:function(){n.SetDirectionFrom(e)},children:e.name},e.id)}))]})})]})]}),(0,t.jsxs)(i.v2,{children:[(0,t.jsx)(o.xu,{color:"#04408C",fontSize:17,children:"Choose your destination"}),(0,t.jsx)(i.j2,{as:c.zx,bgColor:"#FFDD69",height:"50px",borderRadius:15,textAlign:"left",children:(0,t.jsxs)(o.kC,{children:[(0,t.jsx)(h.Ee,{src:f.Z.src,display:"block",p:"4"}),(0,t.jsx)(o.xu,{opacity:.5,fontSize:15,p:"1",alignSelf:"center",children:""==n.directionTo.name||void 0===n.directionTo.name?"Your destination":n.directionTo.name})]})}),(0,t.jsxs)(i.qy,{className:"myMenuList",children:[(0,t.jsx)(i.kS,{children:(0,t.jsx)(o.xu,{px:"4",children:(0,t.jsx)(d,{role:"search",size:"sm",onChange:E})})}),(0,t.jsx)(i.R,{}),(0,t.jsx)(i.kS,{children:(0,t.jsxs)(o.xu,{maxH:164,className:"locationList",children:[y&&(0,t.jsx)(i.sN,{children:"Loading"}),!y&&S&&S.length>0&&S.map((function(e){return(0,t.jsx)(i.sN,{onClick:function(){n.SetDirectionTo(e)},children:e.name},e.id)}))]})})]})]}),(0,t.jsx)(o.kC,{pt:"2rem",w:"100%",minH:"3rem",children:(0,t.jsx)(c.zx,{w:"100%",minH:"3rem",onClick:function(){return e.push({pathname:"/direction/result",query:{from:n.directionFrom.name,to:n.directionTo.name}})},children:"Direct"})})]})})},j=r(104),C=function(){var e=(0,m.useRouter)();return(0,t.jsxs)(o.xu,{maxW:"mobile",h:"812px",padding:"0",fontFamily:"campus",children:[(0,t.jsx)(j.Z,{title:"Home"}),(0,t.jsx)(b,{locationQuery:e.query})]})}}},function(e){e.O(0,[920,876,612,921,669,774,888,179],(function(){return n=304,e(e.s=n);var n}));var n=e.O();_N_E=n}]);