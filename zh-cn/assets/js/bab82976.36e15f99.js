(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[809],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,A=d["".concat(p,".").concat(f)]||d[f]||l[f]||i;return r?t.createElement(A,c(c({ref:n},u),{},{components:r})):t.createElement(A,c({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},677:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var t=r(2122),a=r(9756),i=(r(7294),r(3905)),c=["components"],o={sidebar_position:2},p="info",s={unversionedId:"everpay-js/basic-api/info",id:"everpay-js/basic-api/info",isDocsHomePage:!1,title:"info",description:"\u529f\u80fd",source:"@site/docs/everpay-js/basic-api/info.md",sourceDirName:"everpay-js/basic-api",slug:"/everpay-js/basic-api/info",permalink:"/zh-cn/docs/everpay-js/basic-api/info",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/everpay-js/basic-api/info.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"everpay-js",previous:{title:"\u4ecb\u7ecd",permalink:"/zh-cn/docs/everpay-js/basic-api/intro"},next:{title:"balances",permalink:"/zh-cn/docs/everpay-js/basic-api/balances"}},u=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",children:[]}],l={toc:u};function d(e){var n=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"info"},"info"),(0,i.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,i.kt)("p",null,"\u83b7\u53d6 everPay \u670d\u52a1\u76f8\u5173\u57fa\u672c\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"arLocker")," \u4ee3\u8868 arweave \u9501\u4ed3\u5730\u5740\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"ethLocker")," \u4ee3\u8868 etherum \u94fe\u9501\u4ed3\u5408\u7ea6\u3002"),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("p",null,"\u65e0"),(0,i.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../types#everpayinfo"},"EverpayInfo")),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay({ debug: true })\neverpay.info().then(console.log)\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "arLocker": "bX7sKd1s8L6PxUHxK-UPCfus7duyVFdf0J1lm90zehc",\n  "ethChainID": "42",\n  "ethLocker": "0xa7ae99C13d82dd32fc6445Ec09e38d197335F38a",\n  "everRootHash": "0x91fdcd368b9910bb802dcc7472b3079bcb12203317e3932c4155b12fc570f9e0",\n  "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n  "owner": "dQzTM9hXV5MD1fRniOKI3MvPF_-8b2XDLmpfcMN9hi8",\n  "rootHash": "0x622a1d82bea49b55781a97401d3a8c816e89ed79df9809cc7f8e06e2af2d863f",\n  "tokenList": [\n      {\n          "tag": "arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n          "id": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0xcc9141efa8c20c7df0778748255b1487957811be",\n          "symbol": "AR",\n          "decimals": 12,\n          "totalSupply": "1371970463702",\n          "chainType": "arweave,ethereum",\n          "chainID": "0,42",\n          "burnFee": "15000",\n          "transferFee": "0"\n      },\n      {\n          "tag": "ethereum-eth-0x0000000000000000000000000000000000000000",\n          "id": "0x0000000000000000000000000000000000000000",\n          "symbol": "ETH",\n          "decimals": 18,\n          "totalSupply": "43630547196159703549",\n          "chainType": "ethereum",\n          "chainID": "42",\n          "burnFee": "20000000000000000",\n          "transferFee": "0"\n      },\n      {\n          "tag": "ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n          "id": "0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee",\n          "symbol": "USDT",\n          "decimals": 6,\n          "totalSupply": "101315553998270991",\n          "chainType": "ethereum",\n          "chainID": "42",\n          "burnFee": "80000000",\n          "transferFee": "0"\n      }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);