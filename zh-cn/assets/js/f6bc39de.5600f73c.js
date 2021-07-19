(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8903],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),l=p(t),f=a,A=l["".concat(u,".").concat(f)]||l[f]||d[f]||o;return t?r.createElement(A,c(c({ref:n},s),{},{components:t})):r.createElement(A,c({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=l;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3309:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),c=["components"],i={sidebar_position:2},u="info",p={unversionedId:"documentation/everpay-js/basic-api/info",id:"documentation/everpay-js/basic-api/info",isDocsHomePage:!1,title:"info",description:"\u529f\u80fd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/documentation/everpay-js/basic-api/info.md",sourceDirName:"documentation/everpay-js/basic-api",slug:"/documentation/everpay-js/basic-api/info",permalink:"/zh-cn/docs/documentation/everpay-js/basic-api/info",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/documentation/everpay-js/basic-api/info.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"documentation",previous:{title:"\u4ecb\u7ecd",permalink:"/zh-cn/docs/documentation/everpay-js/basic-api/intro"},next:{title:"balances",permalink:"/zh-cn/docs/documentation/everpay-js/basic-api/balances"}},s=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",children:[]}],d={toc:s};function l(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"info"},"info"),(0,o.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,o.kt)("p",null,"\u83b7\u53d6 everPay \u670d\u52a1\u76f8\u5173\u57fa\u672c\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"arLocker")," \u4ee3\u8868 arweave \u9501\u4ed3\u5730\u5740\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"ethLocker")," \u4ee3\u8868 etherum \u94fe\u9501\u4ed3\u5408\u7ea6\u3002"),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../types#everpayinfo"},"EverpayInfo")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay({ debug: true })\neverpay.info().then(console.log)\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "arLocker": "bX7sKd1s8L6PxUHxK-UPCfus7duyVFdf0J1lm90zehc",\n  "ethChainID": "42",\n  "ethLocker": "0xa7ae99C13d82dd32fc6445Ec09e38d197335F38a",\n  "everRootHash": "0x91fdcd368b9910bb802dcc7472b3079bcb12203317e3932c4155b12fc570f9e0",\n  "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n  "owner": "dQzTM9hXV5MD1fRniOKI3MvPF_-8b2XDLmpfcMN9hi8",\n  "rootHash": "0x622a1d82bea49b55781a97401d3a8c816e89ed79df9809cc7f8e06e2af2d863f",\n  "tokenList": [\n      {\n          "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n          "id": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n          "symbol": "AR",\n          "decimals": 12,\n          "totalSupply": "1371970463702",\n          "chainType": "arweave,ethereum",\n          "chainID": "0,42",\n          "burnFee": "15000",\n          "transferFee": "0"\n      },\n      {\n          "tag": "ethereum-eth-0x0000000000000000000000000000000000000000",\n          "id": "0x0000000000000000000000000000000000000000",\n          "symbol": "ETH",\n          "decimals": 18,\n          "totalSupply": "43630547196159703549",\n          "chainType": "ethereum",\n          "chainID": "42",\n          "burnFee": "20000000000000000",\n          "transferFee": "0"\n      },\n      {\n          "tag": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n          "id": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n          "symbol": "USDT",\n          "decimals": 6,\n          "totalSupply": "101315553998270991",\n          "chainType": "ethereum",\n          "chainID": "42",\n          "burnFee": "80000000",\n          "transferFee": "0"\n      }\n  ]\n}\n')))}l.isMDXComponent=!0}}]);