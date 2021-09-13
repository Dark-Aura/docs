(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1605],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8567:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:8},s="Swap",c={unversionedId:"guide/dive/swap",id:"guide/dive/swap",isDocsHomePage:!1,title:"Swap",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guide/dive/swap.md",sourceDirName:"guide/dive",slug:"/guide/dive/swap",permalink:"/en/docs/guide/dive/swap",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/guide/dive/swap.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"guide",previous:{title:"Bundle",permalink:"/en/docs/guide/dive/bundle"},next:{title:"Storage Based Computation Paradigm",permalink:"/en/docs/guide/refrence/storage-based-computation-paradigm"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Features",id:"features",children:[]},{value:"Implementation",id:"implementation",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"swap"},"Swap"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"everPay Swap is developed by ecological partner ",(0,i.kt)("a",{parentName:"p",href:"https://goblinpool.com/"},"Goblin")," team based on everPay ",(0,i.kt)("a",{parentName:"p",href:"./bundle"},"Bundle Schema"),". With the ability of everPay bundle transfers to arrive in real time, it enables the experience of a centralized exchange whilst being on a decentralized blockchain application."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exchange is done in real time with everPay's ability to bundle transfers in real time"),(0,i.kt)("li",{parentName:"ul"},"Better prices with AMM algorithm"),(0,i.kt)("li",{parentName:"ul"},"Price locked at the time of exchange, WYSIWYG, no miner extractable value -- ",(0,i.kt)("a",{parentName:"li",href:"https://coinmarketcap.com/alexandria/glossary/miner-extractable-value-mev"},"Miner Extractable Value (MEV)"))),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"User",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"by requesting ",(0,i.kt)("a",{parentName:"li",href:"../../sdk/server-api/basic-api/swapInfo"},"swapInfo")," interface to get everPays Swap market maker everPay account ID, list of supported tokens"),(0,i.kt)("li",{parentName:"ol"},"by requesting ",(0,i.kt)("a",{parentName:"li",href:"../../sdk/server-api/basic-api/swapPrice"},"swapPrice")," interface to get the exchange rate of the exchanged currency"),(0,i.kt)("li",{parentName:"ol"},"generate ",(0,i.kt)("a",{parentName:"li",href:"./bundle#bundledata"},(0,i.kt)("inlineCode",{parentName:"a"},"bundleData"))," based on market maker everPay account ID, quantity and exchange rate. Which corresponds to two internal transfer transactions. One is an internal transfer from the user to the market maker everPay account and the other is an internal transfer from the market maker everPay account to the user."),(0,i.kt)("li",{parentName:"ol"},"convert ",(0,i.kt)("inlineCode",{parentName:"li"},"bundleData")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"messageData")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"const messageData = JSON.stringfiy(bundleData)")," and perform subsequent signature processing"),(0,i.kt)("li",{parentName:"ol"},"Assemble ",(0,i.kt)("inlineCode",{parentName:"li"},"bundleData")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"sigs")," and pass ",(0,i.kt)("a",{parentName:"li",href:"../../sdk/server-api/operation-api/swapOrder"},"swapOrder")," requests to everPay Swap market maker"))),(0,i.kt)("li",{parentName:"ol"},"everPay Swap Market Maker",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"receive the ",(0,i.kt)("inlineCode",{parentName:"li"},"bundle")," data and check the quantity, exchange rate, etc."),(0,i.kt)("li",{parentName:"ol"},"convert ",(0,i.kt)("inlineCode",{parentName:"li"},"bundleData")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"messageData")," by ",(0,i.kt)("inlineCode",{parentName:"li"},"const messageData = JSON.stringfiy(bundleData)")," and perform subsequent signature processing"),(0,i.kt)("li",{parentName:"ol"},"assemble ",(0,i.kt)("inlineCode",{parentName:"li"},"bundleData")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"sigs")," (including the signature submitted by the developer) into ",(0,i.kt)("inlineCode",{parentName:"li"},"data")),(0,i.kt)("li",{parentName:"ol"},"Generate everPay ",(0,i.kt)("a",{parentName:"li",href:"./bundle"},"bundle transaction")," to everPay server"))),(0,i.kt)("li",{parentName:"ol"},"The everPay server receives the bundle transaction submitted by everPay Swap Market Maker, verifies the signatures of internal transfers and the signature of external transfer, and after the verification is passed, the two internal transfer transactions are completed in real time along with the external transfer transaction, and the assets are credited in real time")))}d.isMDXComponent=!0}}]);