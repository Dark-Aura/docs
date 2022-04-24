(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4652],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return l},kt:function(){return f}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?t.createElement(y,i(i({ref:r},l),{},{components:n})):t.createElement(y,i({ref:r},l))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7758:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var t=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:9},c="expressInfo",p={unversionedId:"sdk/everpay-js/basic-api/expressInfo",id:"sdk/everpay-js/basic-api/expressInfo",isDocsHomePage:!1,title:"expressInfo",description:"\u529f\u80fd",source:"@site/docs/sdk/everpay-js/basic-api/expressInfo.md",sourceDirName:"sdk/everpay-js/basic-api",slug:"/sdk/everpay-js/basic-api/expressInfo",permalink:"/docs/sdk/everpay-js/basic-api/expressInfo",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/basic-api/expressInfo.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"sdk",previous:{title:"txsByAccount",permalink:"/docs/sdk/everpay-js/basic-api/txsByAccount"},next:{title:"txByHash",permalink:"/docs/sdk/everpay-js/basic-api/txByHash"}},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[{value:"\u8fd4\u56de\u7c7b\u578b",id:"\u8fd4\u56de\u7c7b\u578b",children:[]},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",children:[]}],u={toc:l};function d(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"expressinfo"},"expressInfo"),(0,o.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,o.kt)("p",null,"\u83b7\u53d6 everPay \u5feb\u901f\u63d0\u73b0\u505a\u5e02\u5546\u8d26\u6237\u3001\u652f\u6301\u4ee3\u5e01\u5217\u8868\u3001\u4ee3\u5e01\u53ef\u5feb\u901f\u63d0\u73b0\u989d\u5ea6\u4ee5\u53ca\u9884\u4f30\u624b\u7eed\u8d39\u3002"),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,o.kt)("h3",{id:"\u8fd4\u56de\u7c7b\u578b"},"\u8fd4\u56de\u7c7b\u578b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../types#expressinfo"},"ExpressInfo")),(0,o.kt)("h3",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,o.kt)("p",null,"\u5b57\u6bb5\u4fe1\u606f\u53ef\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"../../server-api/basic-api/expressinfo#%E8%BF%94%E5%9B%9E%E5%AD%97%E6%AE%B5"},"Server API - \u57fa\u7840\u67e5\u8be2\u63a5\u53e3 - expressInfo - \u8fd4\u56de\u5b57\u6bb5")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay({ debug: true })\neverpay.expressInfo().then(console.log)\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "address": "0x9334435791aD7FbF24aFc0CA187a6B432Fba9f09",\n  "withdrawTimeCost": 60,\n  "tokens": [\n    {\n      "tokenTag": "ethereum-ETH-0x0000000000000000000000000000000000000000",\n      "withdrawFee": "572864391122100",\n      "walletBalance": "323719653678176720"\n    },\n    {\n      "tokenTag": "ethereum-USDT-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n      "withdrawFee": "2708852",\n      "walletBalance": "995882735697"\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);