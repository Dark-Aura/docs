(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9317],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2443:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:11},l="expressInfo",p={unversionedId:"sdk/server-api/basic-api/expressInfo",id:"sdk/server-api/basic-api/expressInfo",isDocsHomePage:!1,title:"expressInfo",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/expressInfo.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/expressInfo",permalink:"/en/docs/sdk/server-api/basic-api/expressInfo",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/expressInfo.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"sdk",previous:{title:"mintedTxByChainTxHash",permalink:"/en/docs/sdk/server-api/basic-api/mintedTxByChainTxHash"},next:{title:"Introduction",permalink:"/en/docs/sdk/server-api/operation-api/intro"}},d=[{value:"Function",id:"function",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Return Fields",id:"return-fields",children:[]},{value:"Example",id:"example",children:[]},{value:"Example Return",id:"example-return",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"expressinfo"},"expressInfo"),(0,i.kt)("h2",{id:"function"},"Function"),(0,i.kt)("p",null,"Get access to everPay Quick Withdrawal Market Maker account, list of supported tokens, the amount of tokens that can be quick withdrawn, and estimated fees."),(0,i.kt)("h2",{id:"parameter"},"Parameter"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{{expressEndpoint}}/withdraw/info")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"expressInfo")," interface endpoint is ",(0,i.kt)("inlineCode",{parentName:"p"},"expressEndpoint")))),(0,i.kt)("h2",{id:"return-fields"},"Return Fields"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"Quick Withdrawal Market Maker everPay Account ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"withdrawTimeCost"),(0,i.kt)("td",{parentName:"tr",align:null},"Estimated time to complete a quick withdrawal (in seconds)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokens"),(0,i.kt)("td",{parentName:"tr",align:null},"List of assets and information supported by quick withdrawal market makers for quick withdrawals:",(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag"),". Generated by combining ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," from ",(0,i.kt)("a",{parentName:"td",href:"./info#token-field-description"},"Token")," by ",(0,i.kt)("inlineCode",{parentName:"td"},"-")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"withdrawFee"),". Stands for the handling fee to be deducted for quick withdrawals"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"walletBalance")," represents the amount that can be quickly withdrawn from the market maker's wallet for that asset")))))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://express-dev.everpay.io/withdraw/info'\n")),(0,i.kt)("h2",{id:"example-return"},"Example Return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "address": "0x9334435791aD7FbF24aFc0CA187a6B432Fba9f09",\n  "withdrawTimeCost": 60,\n  "tokens": [\n    {\n      "tokenTag": "ethereum-ETH-0x0000000000000000000000000000000000000000",\n      "withdrawFee": "572864391122100",\n      "walletBalance": "323719653678176720"\n    },\n    {\n      "tokenTag": "ethereum-USDT-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n      "withdrawFee": "2708852",\n      "walletBalance": "995882735697"\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);