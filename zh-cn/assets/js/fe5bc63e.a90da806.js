(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[278],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,v=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return t?r.createElement(v,o(o({ref:n},s),{},{components:t})):r.createElement(v,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},805:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],c={sidebar_position:1},p="debug",u={unversionedId:"everpay-js/configuration/debug",id:"everpay-js/configuration/debug",isDocsHomePage:!1,title:"debug",description:"\u914d\u7f6e\u9879\u529f\u80fd",source:"@site/docs/everpay-js/configuration/debug.md",sourceDirName:"everpay-js/configuration",slug:"/everpay-js/configuration/debug",permalink:"/zh-cn/docs/everpay-js/configuration/debug",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/everpay-js/configuration/debug.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"everpay-js",previous:{title:"\u5b89\u88c5\u4e0e\u4f7f\u7528",permalink:"/zh-cn/docs/everpay-js/installation"},next:{title:"account",permalink:"/zh-cn/docs/everpay-js/configuration/account"}},s=[{value:"\u914d\u7f6e\u9879\u529f\u80fd",id:"\u914d\u7f6e\u9879\u529f\u80fd",children:[]},{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",children:[]},{value:"\u6b63\u5f0f\u73af\u5883",id:"\u6b63\u5f0f\u73af\u5883",children:[]}],l={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"debug"},"debug"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u9879\u529f\u80fd"},"\u914d\u7f6e\u9879\u529f\u80fd"),(0,i.kt)("p",null,"\u7528\u4e8e \u6d4b\u8bd5\u3001\u6b63\u5f0f \u73af\u5883\u9009\u62e9\u3002"),(0,i.kt)("h2",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,i.kt)("p",null,"Everpay JS \u652f\u6301\u4f7f\u7528\u6d4b\u8bd5\u73af\u5883\u8fdb\u884c\u5f00\u53d1\u8c03\u8bd5\uff0c\u53ea\u9700\u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," \u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5373\u53ef\u4f7f\u7528 everPay \u6d4b\u8bd5\u73af\u5883\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay({\n  debug: true\n})\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6d4b\u8bd5\u73af\u5883")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"\u5f53\u4f7f\u7528 everPay \u6d4b\u8bd5\u73af\u5883\uff0c\u5982\u5f00\u53d1\u8005\u4f7f\u7528 Ethereum \u8d26\u6237\u8fde\u63a5\uff0c\u5145\u503c\u3001\u63d0\u73b0\u7684API \u8c03\u7528\uff0c\u4f1a\u4f7f\u7528 Ethereum Kovan \u7f51\u7edc\u8fdb\u884c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u56e0 Arweave \u6ca1\u6709\u6d4b\u8bd5\u7f51\u7edc\uff0c\u5373\u4f7f\u4f7f\u7528 everPay \u6d4b\u8bd5\u73af\u5883\uff0ceverPay \u5145\u503c\u3001\u63d0\u73b0\u7684API \u8c03\u7528\uff0cArweave \u4ecd\u7136\u4f7f\u7528\u4e3b\u7f51\u8fdb\u884c\u3002")))),(0,i.kt)("h2",{id:"\u6b63\u5f0f\u73af\u5883"},"\u6b63\u5f0f\u73af\u5883"),(0,i.kt)("p",null,"\u5f53\u9700\u8981\u4f7f\u7528 everPay \u6b63\u5f0f\u73af\u5883\u65f6\uff0c\u53ea\u9700\u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," \u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u6216\u4e0d\u4f20\u9012\uff0c\u5373\u53ef\u4f7f\u7528 everPay \u6b63\u5f0f\u73af\u5883\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay({\n  debug: false\n})\n\n// \u6216\nconst everpay = new Everpay({})\n\n// \u6216\nconst everpay = new Everpay()\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6d4b\u8bd5\u73af\u5883")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5f53\u4f7f\u7528 everPay \u6b63\u5f0f\u73af\u5883\uff0c\u5982\u5f00\u53d1\u8005\u4f7f\u7528 Ethereum \u8d26\u6237\u8fde\u63a5\uff0c\u5145\u503c\u3001\u63d0\u73b0\u7684API \u8c03\u7528\uff0c\u4f1a\u4f7f\u7528 Ethereum mainnet \u7f51\u7edc\u8fdb\u884c\u3002"))))}d.isMDXComponent=!0}}]);