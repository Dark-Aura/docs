(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[268],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?t.createElement(y,i(i({ref:n},s),{},{components:r})):t.createElement(y,i({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3639:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var t=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:2},l="\u5b89\u88c5\u4e0e\u4f7f\u7528",p={unversionedId:"everpay-js/installation",id:"everpay-js/installation",isDocsHomePage:!1,title:"\u5b89\u88c5\u4e0e\u4f7f\u7528",description:"\u5b89\u88c5",source:"@site/docs/everpay-js/installation.md",sourceDirName:"everpay-js",slug:"/everpay-js/installation",permalink:"/zh-cn/docs/everpay-js/installation",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/everpay-js/installation.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"everpay-js",previous:{title:"\u4ecb\u7ecd",permalink:"/zh-cn/docs/everpay-js/intro"},next:{title:"\u4ecb\u7ecd",permalink:"/zh-cn/docs/everpay-js/configuration/intro"}},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u4f7f\u7528 yarn \u5b89\u88c5",id:"\u4f7f\u7528-yarn-\u5b89\u88c5",children:[]},{value:"\u4f7f\u7528 npm \u5b89\u88c5",id:"\u4f7f\u7528-npm-\u5b89\u88c5",children:[]}]},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[{value:"es module",id:"es-module",children:[]},{value:"commonjs",id:"commonjs",children:[]}]}],u={toc:s};function d(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5b89\u88c5\u4e0e\u4f7f\u7528"},"\u5b89\u88c5\u4e0e\u4f7f\u7528"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("h3",{id:"\u4f7f\u7528-yarn-\u5b89\u88c5"},"\u4f7f\u7528 yarn \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"yarn add everpay\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528-npm-\u5b89\u88c5"},"\u4f7f\u7528 npm \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"npm install everpay\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("h3",{id:"es-module"},"es module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Everpay from 'everpay'\nconst everpay = new Everpay()\n")),(0,a.kt)("h3",{id:"commonjs"},"commonjs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const Everpay = require('everpay')\nconst everpay = new Everpay()\n")))}d.isMDXComponent=!0}}]);