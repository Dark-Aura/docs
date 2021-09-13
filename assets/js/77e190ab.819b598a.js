(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8443],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(n),c=r,s=u["".concat(d,".").concat(c)]||u[c]||k[c]||i;return n?a.createElement(s,o(o({ref:t},m),{},{components:n})):a.createElement(s,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},477:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:11},d="swapPrice",l={unversionedId:"sdk/server-api/basic-api/swapPrice",id:"sdk/server-api/basic-api/swapPrice",isDocsHomePage:!1,title:"swapPrice",description:"\u529f\u80fd",source:"@site/docs/sdk/server-api/basic-api/swapPrice.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/swapPrice",permalink:"/docs/sdk/server-api/basic-api/swapPrice",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/server-api/basic-api/swapPrice.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"sdk",previous:{title:"swapInfo",permalink:"/docs/sdk/server-api/basic-api/swapInfo"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/sdk/server-api/operation-api/intro"}},m=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",children:[]}],k={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"swapprice"},"swapPrice"),(0,i.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,i.kt)("p",null,"\u83b7\u53d6 everPay Swap \u652f\u6301\u5151\u6362\u7684\u5e01\u79cd\u6570\u91cf"),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{{swapEndpoint}}/dex/price?tokenIn={{tokenIn}}&tokenOut={{tokenOut}}&tokenInAmount={{tokenInAmount}}&tokenOutAmount={{tokenOutAmount}}")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"swapInfo")," \u7684\u63a5\u53e3 endpoint \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"swapEndpoint")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u67e5\u8be2\u5b57\u6bb5"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenIn"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay Swap \u8d44\u91d1\u6c60\u6536\u5230\u7684\u8d44\u4ea7\uff08\u5373\u7528\u6237\u8f6c\u51fa\u7684\u8d44\u4ea7\uff09 ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag"),"\uff0c\u7531 ",(0,i.kt)("a",{parentName:"td",href:"./info#token-%E5%AD%97%E6%AE%B5%E6%8F%8F%E8%BF%B0"},"Token")," ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"td"},"-")," \u7ec4\u5408\uff0c\u53ef\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"td",href:"./info"},"info")," \u63a5\u53e3\u83b7\u5f97")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenOut"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay Swap \u8d44\u91d1\u6c60\u8f6c\u51fa\u7684\u8d44\u4ea7\uff08\u5373\u7528\u6237\u6536\u5230\u7684\u8d44\u4ea7\uff09 ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag"),"\uff0c\u7531 ",(0,i.kt)("a",{parentName:"td",href:"./info#token-%E5%AD%97%E6%AE%B5%E6%8F%8F%E8%BF%B0"},"Token")," ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"td"},"-")," \u7ec4\u5408\uff0c\u53ef\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"td",href:"./info"},"info")," \u63a5\u53e3\u83b7\u5f97")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenInAmount"),(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0ceverPay Swap \u8d44\u91d1\u6c60\u6536\u5230\u7684\u8d44\u4ea7\uff08\u5373\u7528\u6237\u8f6c\u51fa\u7684\u8d44\u4ea7\uff09\u6570\u989d\uff0c\u7c7b\u578b\u4e3a uint\u3002\u4f20\u9012 ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenInAmount")," \u540e\uff0c\u4e0d\u518d\u4f20\u9012 ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenOutAmount"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenOutAmount"),(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0ceverPay Swap \u8d44\u91d1\u6c60\u8f6c\u51fa\u7684\u8d44\u4ea7\uff08\u5373\u7528\u6237\u6536\u5230\u7684\u8d44\u4ea7\uff09\u6570\u989d\uff0c\u7c7b\u578b\u4e3a uint\u3002\u4f20\u9012 ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenOutAmount")," \u540e\uff0c\u4e0d\u518d\u4f20\u9012 ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenInAmount"))))),(0,i.kt)("h2",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"indicativePrice"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5151\u6362\u6570\u91cf\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," \u65f6\u7684\u53c2\u8003\u4ef7\u683c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"spreadPercent"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5151\u6362\u6570\u91cf\u4e0b\uff0c\u4e0e\u6570\u91cf\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"0")," \u65f6\u7684 ",(0,i.kt)("inlineCode",{parentName:"td"},"indicativePrice")," \u53c2\u8003\u4ef7\u683c\u7684\u4ef7\u5dee\uff0c",(0,i.kt)("inlineCode",{parentName:"td"},"spreadPercent * 100")," \u4e3a\u4ef7\u5dee\u767e\u5206\u6bd4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenIn"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay Swap \u8d44\u91d1\u6c60\u6536\u5230\u7684\u8d44\u4ea7\uff08\u5373\u7528\u6237\u8f6c\u51fa\u7684\u8d44\u4ea7\uff09 ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag"),"\uff0c\u7531 ",(0,i.kt)("a",{parentName:"td",href:"./info#token-%E5%AD%97%E6%AE%B5%E6%8F%8F%E8%BF%B0"},"Token")," ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"td"},"-")," \u7ec4\u5408")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenOut"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay Swap \u8d44\u91d1\u6c60\u8f6c\u51fa\u7684\u8d44\u4ea7\uff08\u5373\u7528\u6237\u6536\u5230\u7684\u8d44\u4ea7\uff09 ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag"),"\uff0c\u7531 ",(0,i.kt)("a",{parentName:"td",href:"./info#token-%E5%AD%97%E6%AE%B5%E6%8F%8F%E8%BF%B0"},"Token")," ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"td"},"-")," \u7ec4\u5408")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenInAmount"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay Swap \u8d44\u91d1\u6c60\u6536\u5230\u7684\u8d44\u4ea7\uff08\u5373\u7528\u6237\u8f6c\u51fa\u7684\u8d44\u4ea7\uff09\u6570\u989d\uff0c\u7c7b\u578b\u4e3a uint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenOutAmount"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay Swap \u8d44\u91d1\u6c60\u8f6c\u51fa\u7684\u8d44\u4ea7\uff08\u5373\u7528\u6237\u6536\u5230\u7684\u8d44\u4ea7\uff09\u6570\u989d\uff0c\u7c7b\u578b\u4e3a uint")))),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://warriors-dev.everpay.io/dex/price?tokenIn=ethereum-eth-0x0000000000000000000000000000000000000000&tokenOut=ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee&tokenOutAmount=43919162'\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "currentPrice": "3031.5246998419752",\n  "spreadPercent": "0.0013229827141251552",\n  "tokenIn": "ethereum-eth-0x0000000000000000000000000000000000000000",\n  "tokenInAmount": "14817947643840912",\n  "tokenOut": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n  "tokenOutAmount": "43919162"\n}\n')))}u.isMDXComponent=!0}}]);