(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9141],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=d(n),u=r,b=f["".concat(s,".").concat(u)]||f[u]||l[u]||i;return n?a.createElement(b,c(c({ref:t},p),{},{components:n})):a.createElement(b,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var d=2;d<i;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7980:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),c=["components"],o={sidebar_position:9},s="txByHash",d={unversionedId:"sdk/everpay-js/basic-api/txByHash",id:"sdk/everpay-js/basic-api/txByHash",isDocsHomePage:!1,title:"txByHash",description:"\u529f\u80fd",source:"@site/docs/sdk/everpay-js/basic-api/txByHash.md",sourceDirName:"sdk/everpay-js/basic-api",slug:"/sdk/everpay-js/basic-api/txByHash",permalink:"/docs/sdk/everpay-js/basic-api/txByHash",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/basic-api/txByHash.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"sdk",previous:{title:"expressInfo",permalink:"/docs/sdk/everpay-js/basic-api/expressInfo"},next:{title:"mintedTxByChainTxHash",permalink:"/docs/sdk/everpay-js/basic-api/mintedTxByChainTxHash"}},p=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[{value:"\u8fd4\u56de\u7c7b\u578b",id:"\u8fd4\u56de\u7c7b\u578b",children:[]},{value:"\u8fd4\u56de\u5b57\u6bb5",id:"\u8fd4\u56de\u5b57\u6bb5",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",children:[]}],l={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"txbyhash"},"txByHash"),(0,i.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,i.kt)("p",null,"\u6bcf\u4e00\u7b14 everPay \u4ea4\u6613\uff0c\u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"everHash")," \u5b57\u7b26\u4e32\u3002\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"everHash")," \u67e5\u8be2\u8be5\u7b14\u4ea4\u6613\u7684\u5177\u4f53\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\u4e00\u7b14 \u666e\u901a\u63d0\u73b0\uff08\u975e\u5feb\u901f\u63d0\u73b0\uff09 \u4ea4\u6613\uff0c\u53ef\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"everHash")," \u67e5\u8be2\u8be5\u7b14\u4ea4\u6613\u8be6\u60c5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," \u4e0d\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u4ee3\u8868\u8be5\u7b14 \u666e\u901a\u63d0\u73b0 \u4ea4\u6613\uff0c\u662f\u5426\u5df2\u7ecf\u88ab\u8bb0\u5f55\u5230 arweave \u533a\u5757\u94fe\u4e0a\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u786e\u4fdd\u4e86\u8d26\u672c\u7684\u6b63\u786e\u6027")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"targetChainTxHash")," \u4e0d\u4e3a\u7a7a\uff0c\u4ee3\u8868\u8be5\u7b14 \u666e\u901a\u63d0\u73b0 \u4ea4\u6613\uff0c\u5728\u7528\u6237\u8981\u63d0\u73b0\u7684\u533a\u5757\u94fe\u4e0a\uff0c\u591a\u7b7e\u94b1\u5305/\u9501\u4ed3\u5730\u5740\uff0c\u5df2\u7ecf\u53d1\u9001\u4ea4\u6613\u5e76\u4e14\u5df2\u7ecf\u6253\u5305\u5b8c\u6210\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u7528\u6237\u63d0\u73b0\u7684\u8d44\u4ea7\u5df2\u5230\u8d26"),"\u3002")),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("p",null,"string"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6b64\u5904 string \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"everHash")," string"))),(0,i.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,i.kt)("h3",{id:"\u8fd4\u56de\u7c7b\u578b"},"\u8fd4\u56de\u7c7b\u578b"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../types#everpaytransaction"},"EverpayTransaction")),(0,i.kt)("h3",{id:"\u8fd4\u56de\u5b57\u6bb5"},"\u8fd4\u56de\u5b57\u6bb5"),(0,i.kt)("p",null,"\u5b57\u6bb5\u4fe1\u606f\u53ef\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"../../../guide/dive/transaction#%E4%BA%A4%E6%98%93%E8%AE%B0%E5%BD%95"},"\u6307\u5357 - \u6df1\u5165\u7406\u89e3 - \u4ea4\u6613 - \u4ea4\u6613\u8bb0\u5f55")),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const everHash = '0x999fb4266c33b87fe706d5f964692f3db8e755d08280da43f076c229e0a821f8'\nconst everpay = new Everpay({ debug: true })\neverpay.txByHash(everHash).then(console.log)\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "id": "bTpNVdf65ZDdKhWZElS1yg0g9xV_F4y41t7q56NAJqU",\n  "tokenSymbol": "ETH",\n  "action": "mint",\n  "from": "0xa6C17933505F5e19531C3a647C4DfAa34B1233a7",\n  "to": "0x26361130d5d6E798E9319114643AF8c868412859",\n  "amount": "10000000000000",\n  "fee": "0",\n  "feeRecipient": "0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1",\n  "nonce": 1625652570825,\n  "tokenID": "0x0000000000000000000000000000000000000000",\n  "chainType": "ethereum",\n  "chainID": "42",\n  "data": "{\\"hash\\": \\"0xb108424a3f6cc044ee3bf4b27bc9a56fa67ae58c4734711b3ced775639bf0d2b\\", \\"nonce\\": \\"0xc6\\", \\"blockHash\\": \\"0x2a9c4090b8110e602d7b346d07d34d2f7445d0b20c76fda12f1757f98189f354\\", \\"blockNumber\\": \\"0x18c3854\\", \\"transactionIndex\\": \\"0x1\\", \\"from\\": \\"0x26361130d5d6E798E9319114643AF8c868412859\\", \\"to\\": \\"0xa7ae99C13d82dd32fc6445Ec09e38d197335F38a\\", \\"value\\": \\"0x9184e72a000\\", \\"gas\\": \\"0x587a\\", \\"gasPrice\\": \\"0x1bf08eb00\\", \\"input\\": \\"0x\\", \\"r\\": \\"0xea4722b335b447a8d01c06fb6be4840494dea3869979a92b0ba5a4f4e4d5d6cc\\", \\"s\\": \\"0x23ce4a06c1185625244415de593f15fa4e97c32c5379ead26d788e864b917da4\\", \\"v\\": \\"0x77\\"}",\n  "sig": "0x9d7336dbcb1b06fcd0eed3fc60b1dffc5391cd27888def366b1aeaeaedf91ae663f8dfb9c1b53395572b7a668491eb91edfe2e1f49a5d9ffa592027a06e3a4ee1c",\n  "everHash": "0x999fb4266c33b87fe706d5f964692f3db8e755d08280da43f076c229e0a821f8",\n  "status": "packaged",\n  "timestamp": 1625653293000,\n  "targetChainTxHash": "0xb108424a3f6cc044ee3bf4b27bc9a56fa67ae58c4734711b3ced775639bf0d2b"\n}\n')))}f.isMDXComponent=!0}}]);