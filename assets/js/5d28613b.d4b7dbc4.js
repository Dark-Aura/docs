(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2889],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9666:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},u="getBundleData",d={unversionedId:"sdk/everpay-js/tool-api/getBundleData",id:"sdk/everpay-js/tool-api/getBundleData",isDocsHomePage:!1,title:"getBundleData",description:"\u529f\u80fd",source:"@site/docs/sdk/everpay-js/tool-api/getBundleData.md",sourceDirName:"sdk/everpay-js/tool-api",slug:"/sdk/everpay-js/tool-api/getBundleData",permalink:"/docs/sdk/everpay-js/tool-api/getBundleData",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/tool-api/getBundleData.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sdk",previous:{title:"getEverpayTxMessage",permalink:"/docs/sdk/everpay-js/tool-api/getEverpayTxMessage"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/sdk/everpay-js/operation-api/intro"}},p=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],c={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getbundledata"},"getBundleData"),(0,o.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,o.kt)("p",null,"\u6839\u636e\u6279\u91cf\u8f6c\u8d26\u7684\u5185\u90e8\u8f6c\u8d26\u4e8b\u52a1\u5217\u8868\uff0c\u751f\u6210\u6279\u91cf\u8f6c\u8d26 ",(0,o.kt)("inlineCode",{parentName:"p"},"bundleData")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"everpay.getBundleData(items: InternalTransferItem[], expiration?: number)\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"items"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../types#internaltransferitem"},"InternalTransferItem"),"[]"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6279\u91cf\u8f6c\u8d26\u7684\u5185\u90e8\u8f6c\u8d26\u4e8b\u52a1\u5217\u8868\uff0c\u5176\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"td"},"amount")," \u975e uint \u7c7b\u578b\uff0c\u5df2\u7ecf\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"td"},"decimals")," \u5904\u7406")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expiration"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u6240\u6709\u5185\u90e8\u8f6c\u8d26\u4e8b\u52a1\u7684\u8fc7\u671f\u65f6\u95f4\uff0cunix \u65f6\u95f4\u6233\u3002",(0,o.kt)("strong",{parentName:"td"},"\u6ce8\uff1a\u975e\u6beb\u79d2\u65f6\u95f4\u6233"))))),(0,o.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../types#bundledata"},(0,o.kt)("inlineCode",{parentName:"a"},"BundleData"))),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const bundleData = await everpayArAccount.getBundleData([\n  // \u4ee3\u8868 0x26361130d5d6E798E9319114643AF8c868412859 \u8d26\u6237 \u5411 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo \u8d26\u6237\u8f6c\u8d26 0.001 ETH\n  {\n    tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',\n    from: '0x26361130d5d6E798E9319114643AF8c868412859',\n    to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n    amount: '0.001'\n  },\n  // \u4ee3\u8868 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo \u8d26\u6237 \u5411 0x26361130d5d6E798E9319114643AF8c868412859 \u8d26\u6237\u8f6c\u8d26 10 USDT\n  {\n    tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n    from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n    to: '0x26361130d5d6E798E9319114643AF8c868412859',\n    amount: '10'\n  }\n])\n/* \u793a\u4f8b\u8fd4\u56de\n{\n  items: [\n    {\n      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',\n      chainID: '42',\n      from: '0x26361130d5d6E798E9319114643AF8c868412859',\n      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      amount: '1000000000000000'\n    },\n    {\n      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n      chainID: '42',\n      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      to: '0x26361130d5d6E798E9319114643AF8c868412859',\n      amount: '10000000'\n    }\n  ],\n  expiration: 1630575873,\n  salt: '3e4c7f38-b0e1-44ae-b3a0-1a5cfbaa322f',\n  version: 'v1'\n}\n")))}s.isMDXComponent=!0}}]);