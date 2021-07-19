(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3886],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),v=a,f=p["".concat(s,".").concat(v)]||p[v]||d[v]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},809:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=["components"],c={sidebar_position:6},s="Withdraw",l={unversionedId:"documentation/withdraw",id:"documentation/withdraw",isDocsHomePage:!1,title:"Withdraw",description:"Introduction",source:"@site/docs/documentation/withdraw.md",sourceDirName:"documentation",slug:"/documentation/withdraw",permalink:"/docs/documentation/withdraw",editUrl:"https://github.com/everFinance/docs/edit/master/docs/documentation/withdraw.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"documentation",previous:{title:"Transfer",permalink:"/docs/documentation/transfer"},next:{title:"Introduction",permalink:"/docs/documentation/server-api/intro"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Generate everPayTx for everPay withdrawal transactions",id:"generate-everpaytx-for-everpay-withdrawal-transactions",children:[]},{value:"Send everPayTx to everPay server",id:"send-everpaytx-to-everpay-server",children:[]},{value:"everPay multi-signature wallet transfer to user&#39;s withdrawal wallet address",id:"everpay-multi-signature-wallet-transfer-to-users-withdrawal-wallet-address",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"withdraw"},"Withdraw"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Withdraw is the operation of withdrawing the active balance from everPay account to the native chain."),(0,i.kt)("h2",{id:"generate-everpaytx-for-everpay-withdrawal-transactions"},"Generate everPayTx for everPay withdrawal transactions"),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"./everpay-tx"},"everPay \u4ea4\u6613")),(0,i.kt)("h2",{id:"send-everpaytx-to-everpay-server"},"Send everPayTx to everPay server"),(0,i.kt)("p",null,"See: ",(0,i.kt)("a",{parentName:"p",href:"./server-api/operation-api/tx"},"everpay server tx API"),". The everPay server receives the ",(0,i.kt)("inlineCode",{parentName:"p"},"everPayTx"),", verifies the cryptographic signature, and stores the ",(0,i.kt)("inlineCode",{parentName:"p"},"everPayTx")," on the arweave blockchain."),(0,i.kt)("h2",{id:"everpay-multi-signature-wallet-transfer-to-users-withdrawal-wallet-address"},"everPay multi-signature wallet transfer to user's withdrawal wallet address"),(0,i.kt)("p",null,"After everPay server confirms that the ",(0,i.kt)("inlineCode",{parentName:"p"},"everPayTx")," is stored on the arweave blockchain, it transfers token to the user's withdrawal wallet address via the multi-signature wallet."))}p.isMDXComponent=!0}}]);