(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4843],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8746:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:7},l="txs",d={unversionedId:"sdk/server-api/basic-api/txs",id:"sdk/server-api/basic-api/txs",isDocsHomePage:!1,title:"txs",description:"Function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/txs.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/txs",permalink:"/en/docs/sdk/server-api/basic-api/txs",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/txs.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sdk",previous:{title:"fee",permalink:"/en/docs/sdk/server-api/basic-api/fee"},next:{title:"txsByAccount",permalink:"/en/docs/sdk/server-api/basic-api/txsByAccount"}},s=[{value:"Function",id:"function",children:[]},{value:"Parameter",id:"parameter",children:[]},{value:"Return Fields",id:"return-fields",children:[]},{value:"Example",id:"example",children:[]},{value:"Example Return",id:"example-return",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"txs"},"txs"),(0,i.kt)("h2",{id:"function"},"Function"),(0,i.kt)("p",null,"Get all transactions on everPay accessed by paging"),(0,i.kt)("h2",{id:"parameter"},"Parameter"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{{endpoint}}/txs?page={{page}}&tokenId={{tokenId}}&action={{action}}")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Query Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"page"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional, default is 1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenId"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional, via ",(0,i.kt)("a",{parentName:"td",href:"./info"},"info API")," interface to get")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional, note that ",(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("a",{parentName:"strong",href:"../../../guide/dive/withdraw#quick-withdrawal"},"Quick Withdrawals"))," are categorized in the ",(0,i.kt)("inlineCode",{parentName:"td"},"action: 'transfer'")," filter. ",(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"'mint'")," to deposit transactions"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"'transfer'")," to transfer transactions"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"'burn'")," to withdraw transactions"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"'bundle'")," to bundle transactions")))))),(0,i.kt)("h2",{id:"return-fields"},"Return Fields"),(0,i.kt)("p",null,"Field information can be viewed in ",(0,i.kt)("a",{parentName:"p",href:"../../../guide/dive/transaction#transaction-record"},"Guide - Dive - Transaction - Transaction Record")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-dev.everpay.io/txs?page=1'\n")),(0,i.kt)("h2",{id:"example-return"},"Example Return"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  currentPage: 1,\n  totalPages: 196,\n  txs: [\n    {\n      id: 'Lwml1yitCpuIyJ6w-MgCPWRpDjE1-5dQF_hGw7OQcoY',\n      tokenSymbol: 'ETH',\n      action: 'burn',\n      from: '0x295204c357963C07F7D696E61cB243A0CE92cC0c',\n      to: '0xB245ceC3b31707e2ffe1C58148cEC6b6017255a3',\n      amount: '979251798000000000',\n      fee: '20000000000000000',\n      feeRecipient: '0x6451eB7f668de69Fb4C943Db72bCF2A73DeeC6B1',\n      nonce: 1625733233558,\n      tokenID: '0x0000000000000000000000000000000000000000',\n      chainType: 'ethereum',\n      chainID: '42',\n      data: '',\n      sig: '0x53dd3941c422b514b59e55bbecd66143aea199fef582842dcfd7d0f64aad4cf21f0e95fcc2346a44bc027e1a0ef474960d51b5745a6e9685930a14920d2b1afa1b',\n      everHash: '0xaf5f8a2d95af57553eddc4d280ea5911d9152e346aaa8b772cb61db05ea05590',\n      status: 'packaged',\n      timestamp: 1625733624000,\n      targetChainTxHash: '0xdbe3cf5194b289deb674cb88c6510ae85de0572fdeefd83d0cd1dbdaf8f9d94e'\n    },\n    // etc.\n  ]\n}\n")))}u.isMDXComponent=!0}}]);