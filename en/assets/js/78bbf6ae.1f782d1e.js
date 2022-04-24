(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3358],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9190:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:13},d="swapPrice",l={unversionedId:"sdk/server-api/basic-api/swapPrice",id:"sdk/server-api/basic-api/swapPrice",isDocsHomePage:!1,title:"swapPrice",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/swapPrice.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/swapPrice",permalink:"/en/docs/sdk/server-api/basic-api/swapPrice",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/swapPrice.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"sdk",previous:{title:"swapInfo",permalink:"/en/docs/sdk/server-api/basic-api/swapInfo"},next:{title:"Introduction",permalink:"/en/docs/sdk/server-api/operation-api/intro"}},s=[{value:"Function",id:"function",children:[]},{value:"Parameter",id:"parameter",children:[{value:"Return Fields",id:"return-fields",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Example return",id:"example-return",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"swapprice"},"swapPrice"),(0,i.kt)("h2",{id:"function"},"Function"),(0,i.kt)("p",null,"Get the number of currencies supported by everPay Swap"),(0,i.kt)("h2",{id:"parameter"},"Parameter"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{{swapEndpoint}}/dex/price?tokenIn={{tokenIn}}&tokenOut={{tokenOut}}&tokenInAmount={{tokenInAmount}}&tokenOutAmount={{tokenOutAmount}}")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"swapInfo")," interface endpoint is ",(0,i.kt)("inlineCode",{parentName:"p"},"swapEndpoint")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenIn"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag"),", which is everPay Swap pool received (i.e. assets transferred out by users). ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag")," is generated by combining ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," from ",(0,i.kt)("a",{parentName:"td",href:"./info#token-field-description"},"Token"),". Or you can via ",(0,i.kt)("a",{parentName:"td",href:"./info"},"info")," API to get")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenOut"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag"),", which transferred out from the everPay Swap pool (i.e., assets received by the user). ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag")," is generated by combining ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," from ",(0,i.kt)("a",{parentName:"td",href:"./info#token-field-description"},"Token"),". Or you can via ",(0,i.kt)("a",{parentName:"td",href:"./info"},"info")," API to get")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenInAmount"),(0,i.kt)("td",{parentName:"tr",align:null},"Optionally, the amount of assets received by the everPay Swap pool (i.e., assets transferred out by the user). Type uint. After passing ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenInAmount"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenOutAmount")," is no longer passed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenOutAmount"),(0,i.kt)("td",{parentName:"tr",align:null},"Optionally, the amount of assets transferred out of the everPay Swap pool (i.e. assets received by the user). Type uint. After passing ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenOutAmount"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenInAmount")," is no longer passed")))),(0,i.kt)("h3",{id:"return-fields"},"Return Fields"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"indicativePrice"),(0,i.kt)("td",{parentName:"tr",align:null},"Reference price when the exchange quantity is ",(0,i.kt)("inlineCode",{parentName:"td"},"0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"spreadPercent"),(0,i.kt)("td",{parentName:"tr",align:null},"The price difference between the current exchange quantity and the ",(0,i.kt)("inlineCode",{parentName:"td"},"indicativePrice")," reference price when the quantity is ",(0,i.kt)("inlineCode",{parentName:"td"},"0"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"spreadPercent * 100")," is the percentage of price difference")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenIn"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag"),", which is everPay Swap pool received (i.e. assets transferred out by users). ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag")," is generated by combining ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," from ",(0,i.kt)("a",{parentName:"td",href:"./info#token-field-description"},"Token"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenOut"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag"),", which transferred out from the everPay Swap pool (i.e., assets received by the user). ",(0,i.kt)("inlineCode",{parentName:"td"},"tokenTag")," is generated by combining ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," from ",(0,i.kt)("a",{parentName:"td",href:"./info#token-field-description"},"Token"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenInAmount"),(0,i.kt)("td",{parentName:"tr",align:null},"The amount of assets received by the everPay Swap pool (i.e., assets transferred out by the user). Type uint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenOutAmount"),(0,i.kt)("td",{parentName:"tr",align:null},"The amount of assets transferred out of the everPay Swap pool (i.e. assets received by the user). Type uint.")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://warriors-dev.everpay.io/dex/price?tokenIn=ethereum-eth-0x0000000000000000000000000000000000000000&tokenOut=ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee&tokenOutAmount=43919162'\n")),(0,i.kt)("h2",{id:"example-return"},"Example return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "currentPrice": "3031.5246998419752",\n  "spreadPercent": "0.0013229827141251552",\n  "tokenIn": "ethereum-eth-0x0000000000000000000000000000000000000000",\n  "tokenInAmount": "14817947643840912",\n  "tokenOut": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n  "tokenOutAmount": "43919162"\n}\n')))}c.isMDXComponent=!0}}]);