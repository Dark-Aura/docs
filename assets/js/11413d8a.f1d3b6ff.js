(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1363],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),f=a,v=l["".concat(s,".").concat(f)]||l[f]||d[f]||o;return t?n.createElement(v,i(i({ref:r},p),{},{components:t})):n.createElement(v,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=l;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},2182:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:5},s="Transfer",u={unversionedId:"documentation/transfer",id:"documentation/transfer",isDocsHomePage:!1,title:"Transfer",description:"Introduction",source:"@site/docs/documentation/transfer.md",sourceDirName:"documentation",slug:"/documentation/transfer",permalink:"/docs/documentation/transfer",editUrl:"https://github.com/everFinance/docs/edit/master/docs/documentation/transfer.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"documentation",previous:{title:"everPay Tx records on arweave",permalink:"/docs/documentation/deposit/record"},next:{title:"Withdraw",permalink:"/docs/documentation/withdraw"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Generate everPayTx for everPay transfer transactions",id:"generate-everpaytx-for-everpay-transfer-transactions",children:[]},{value:"Send everPayTx to everPay server",id:"send-everpaytx-to-everpay-server",children:[]},{value:"Account balance update",id:"account-balance-update",children:[]}],d={toc:p};function l(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transfer"},"Transfer"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"A transfer is a transfer that occurs between two everPay accounts. Any two everPay accounts can transfer funds between them, even transferring assets from an Ethereum address to an Arweave address."),(0,o.kt)("p",null,"everPay ensures the security of transfers through blockchain cryptographic signature verification."),(0,o.kt)("h2",{id:"generate-everpaytx-for-everpay-transfer-transactions"},"Generate everPayTx for everPay transfer transactions"),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"./everpay-tx"},"everPay \u4ea4\u6613")),(0,o.kt)("h2",{id:"send-everpaytx-to-everpay-server"},"Send everPayTx to everPay server"),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"./server-api/operation-api/tx"},"everpay server tx API"),", everPay server stores the ",(0,o.kt)("inlineCode",{parentName:"p"},"everPayTx")," on the arweave blockchain after receiving the ",(0,o.kt)("inlineCode",{parentName:"p"},"everPayTx"),", verified by cryptographic signature, and the balance is updated in real time."),(0,o.kt)("h2",{id:"account-balance-update"},"Account balance update"),(0,o.kt)("p",null,"via the ",(0,o.kt)("a",{parentName:"p",href:"./server-api/basic-api/balances"},"everpay server balances API"),"  to get the asset information on everPay for the wallet's corresponding everPay account. Real-time asset updates"))}l.isMDXComponent=!0}}]);