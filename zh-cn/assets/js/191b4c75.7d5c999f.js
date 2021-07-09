(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[150],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return t?r.createElement(v,o(o({ref:n},s),{},{components:t})):r.createElement(v,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6829:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(2122),a=t(9756),c=(t(7294),t(3905)),o=["components"],i={sidebar_position:4},l="balance",p={unversionedId:"everpay-js/basic-api/balance",id:"everpay-js/basic-api/balance",isDocsHomePage:!1,title:"balance",description:"\u529f\u80fd",source:"@site/docs/everpay-js/basic-api/balance.md",sourceDirName:"everpay-js/basic-api",slug:"/everpay-js/basic-api/balance",permalink:"/zh-cn/docs/everpay-js/basic-api/balance",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/everpay-js/basic-api/balance.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"everpay-js",previous:{title:"balances",permalink:"/zh-cn/docs/everpay-js/basic-api/balances"},next:{title:"txs",permalink:"/zh-cn/docs/everpay-js/basic-api/txs"}},s=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u793a\u4f8b\u8fd4\u56de",id:"\u793a\u4f8b\u8fd4\u56de",children:[]}],u={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"balance"},"balance"),(0,c.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,c.kt)("p",null,"\u83b7\u53d6 \u5bf9\u5e94 ",(0,c.kt)("inlineCode",{parentName:"p"},"account")," \u5728 everPay \u4e0a\u7684\u6307\u5b9a\u4ee3\u5e01\u7684\u8d44\u4ea7\u4fe1\u606f"),(0,c.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"../types#balanceparams"},"BalanceParams")),(0,c.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,c.kt)("p",null,"string"),(0,c.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"const everpay1 = new Everpay({ debug: true })\neverpay1.balance({ account: '0x26361130d5d6E798E9319114643AF8c868412859', symbol: 'ar' }).then(console.log)\n\n// \u6216\u8005\nconst everpay2 = new Everpay({ account: '0x26361130d5d6E798E9319114643AF8c868412859', debug: true })\neverpay.balance({ symbol: 'ar' }).then(console.log)\n\n// \u6216\u8005 \u8986\u76d6\u9ed8\u8ba4 account\nconst everpay3 = new Everpay({ account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92', debug: true })\neverpay3.balances({ account: '0x26361130d5d6E798E9319114643AF8c868412859', symbol: 'ar' }).then(console.log)\n")),(0,c.kt)("h2",{id:"\u793a\u4f8b\u8fd4\u56de"},"\u793a\u4f8b\u8fd4\u56de"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"'0.000765727502'\n")),(0,c.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},(0,c.kt)("inlineCode",{parentName:"p"},"symbol")," \u5927\u5c0f\u5199\u517c\u5bb9"))))}d.isMDXComponent=!0}}]);