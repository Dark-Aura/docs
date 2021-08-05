(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7498],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(s,".").concat(f)]||d[f]||l[f]||o;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3650:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=t(2122),i=t(9756),o=(t(7294),t(3905)),a=["components"],c={sidebar_position:1},s="Introduction",u={unversionedId:"sdk/server-api/basic-api/intro",id:"sdk/server-api/basic-api/intro",isDocsHomePage:!1,title:"Introduction",description:"Request everPay Server API base query service using GET request without wallet signature operation.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/intro.md",sourceDirName:"sdk/server-api/basic-api",slug:"/sdk/server-api/basic-api/intro",permalink:"/en/docs/sdk/server-api/basic-api/intro",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/server-api/basic-api/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sdk",previous:{title:"Environment",permalink:"/en/docs/sdk/server-api/environment"},next:{title:"info",permalink:"/en/docs/sdk/server-api/basic-api/info"}},p=[],l={toc:p};function d(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Request everPay Server API base query service using GET request without wallet signature operation."),(0,o.kt)("p",null,"For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api-dev.everpay.io/info'\n")))}d.isMDXComponent=!0}}]);