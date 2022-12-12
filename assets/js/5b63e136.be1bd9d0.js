(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8787],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return A}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),A=r,m=s["".concat(o,".").concat(A)]||s[A]||u[A]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9780:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],c={sidebar_position:4},o="balance",p={unversionedId:"sdk/server-api/basic-api/balance",id:"sdk/server-api/basic-api/balance",isDocsHomePage:!1,title:"balance",description:"\u529f\u80fd",source:"@site/docs/sdk/server-api/basic-api/balance.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/balance",permalink:"/docs/sdk/server-api/basic-api/balance",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/server-api/basic-api/balance.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sdk",previous:{title:"balances",permalink:"/docs/sdk/server-api/basic-api/balances"},next:{title:"fees",permalink:"/docs/sdk/server-api/basic-api/fees"}},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",children:[{value:"BalanceItem \u5b57\u6bb5\u63cf\u8ff0",id:"balanceitem-\u5b57\u6bb5\u63cf\u8ff0",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",children:[]}],u={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"balance"},"balance"),(0,i.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,i.kt)("p",null,"\u83b7\u53d6 \u5bf9\u5e94 ",(0,i.kt)("inlineCode",{parentName:"p"},"account")," \u5728 everPay \u4e0a\u7684 \u6307\u5b9a\u4ee3\u5e01 \u7684\u8d44\u4ea7\u4f59\u989d"),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/balance/{{tokenTag}}/{{account}}")),(0,i.kt)("h2",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accid"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay \u8d26\u6237 ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"balance"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8be5 everPay \u8d26\u6237 \u6307\u5b9a\u4ee3\u5e01 \u8d44\u4ea7\u4f59\u989d\uff0c\u89c1\u5982\u4e0b ",(0,i.kt)("a",{parentName:"td",href:"#balanceitem-%E5%AD%97%E6%AE%B5%E6%8F%8F%E8%BF%B0"},"BalanceItem \u5b57\u6bb5\u63cf\u8ff0"))))),(0,i.kt)("h3",{id:"balanceitem-\u5b57\u6bb5\u63cf\u8ff0"},"BalanceItem \u5b57\u6bb5\u63cf\u8ff0"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tag"),(0,i.kt)("td",{parentName:"tr",align:null},"\u7531 ",(0,i.kt)("a",{parentName:"td",href:"./info#token-%E5%AD%97%E6%AE%B5%E6%8F%8F%E8%BF%B0"},"Token")," ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," \u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"td"},"-")," \u7ec4\u5408")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"amount"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8d44\u4ea7\u4f59\u989d\uff0c\u7c7b\u578b\u4e3a uint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"decimals"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-dev.everpay.io/balance/arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be/0x2ca81e1253f9426c62Df68b39a22A377164eec92'\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accid": "0x2ca81e1253f9426c62Df68b39a22A377164eeC92",\n  "balance": {\n    "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n    "amount": "220000000",\n    "decimals": 12\n  }\n}\n')))}s.isMDXComponent=!0}}]);