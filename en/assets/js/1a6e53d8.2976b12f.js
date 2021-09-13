(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6845],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,A=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(A,l(l({ref:t},d),{},{components:n})):a.createElement(A,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2437:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=["components"],c={sidebar_position:4},o="balance",p={unversionedId:"sdk/server-api/basic-api/balance",id:"sdk/server-api/basic-api/balance",isDocsHomePage:!1,title:"balance",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/balance.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/balance",permalink:"/en/docs/sdk/server-api/basic-api/balance",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/balance.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sdk",previous:{title:"balances",permalink:"/en/docs/sdk/server-api/basic-api/balances"},next:{title:"txs",permalink:"/en/docs/sdk/server-api/basic-api/txs"}},d=[{value:"Function",id:"function",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Return Fields",id:"return-fields",children:[{value:"BalanceItem Field Description",id:"balanceitem-field-description",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Example Return",id:"example-return",children:[]}],u={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"balance"},"balance"),(0,i.kt)("h2",{id:"function"},"Function"),(0,i.kt)("p",null,"Get the asset balance of the specified token on everPay for the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"account"),"."),(0,i.kt)("h2",{id:"parameter"},"Parameter"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/balance/{{tokenTag}}/{{account}}")),(0,i.kt)("h2",{id:"return-fields"},"Return Fields"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"accid"),(0,i.kt)("td",{parentName:"tr",align:null},"everPay Account ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"balance"),(0,i.kt)("td",{parentName:"tr",align:null},"The designated token asset balance of this everPay account, as follows ",(0,i.kt)("a",{parentName:"td",href:"#balanceitem-field-description"},"BalanceItem Field Description"))))),(0,i.kt)("h3",{id:"balanceitem-field-description"},"BalanceItem Field Description"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tag"),(0,i.kt)("td",{parentName:"tr",align:null},"Generated by combining ",(0,i.kt)("inlineCode",{parentName:"td"},"chainType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," from ",(0,i.kt)("a",{parentName:"td",href:"./info#token-field-description"},"Token")," by ",(0,i.kt)("inlineCode",{parentName:"td"},"-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"amount"),(0,i.kt)("td",{parentName:"tr",align:null},"Asset balance, type uint")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"decimals"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-dev.everpay.io/balance/arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be/0x2ca81e1253f9426c62Df68b39a22A377164eec92'\n")),(0,i.kt)("h2",{id:"example-return"},"Example Return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accid": "0x2ca81e1253f9426c62Df68b39a22A377164eeC92",\n  "balance": {\n    "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n    "amount": "220000000",\n    "decimals": 12\n  }\n}\n')))}s.isMDXComponent=!0}}]);