(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[324],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:e},l),{},{components:r})):n.createElement(f,i({ref:e},l))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u.mdxType="string"==typeof t?t:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7796:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],u={sidebar_position:1},s="Tutorial Intro",c={unversionedId:"tutorial/intro",id:"tutorial/intro",isDocsHomePage:!1,title:"Tutorial Intro",description:"Let's discover Docusaurus in less than 5 minutes.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorial/intro.md",sourceDirName:"tutorial",slug:"/tutorial/intro",permalink:"/zh-cn/docs/tutorial/intro",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorial/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorial",next:{title:"\u57fa\u4e8e\u5b58\u50a8\u7684\u8ba1\u7b97\u8303\u5f0f",permalink:"/zh-cn/docs/tutorial/overview/storage-based-computation-paradigm"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Generate a new site",id:"generate-a-new-site",children:[]},{value:"Start your site",id:"start-your-site",children:[]}],p={toc:l};function d(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Get started by ",(0,a.kt)("strong",{parentName:"p"},"creating a new site"),"."),(0,a.kt)("p",null,"Or ",(0,a.kt)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://new.docusaurus.io"},"new.docusaurus.io")),"."),(0,a.kt)("h2",{id:"generate-a-new-site"},"Generate a new site"),(0,a.kt)("p",null,"Generate a new Docusaurus site using the ",(0,a.kt)("strong",{parentName:"p"},"classic template"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),(0,a.kt)("h2",{id:"start-your-site"},"Start your site"),(0,a.kt)("p",null,"Run the development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),(0,a.kt)("p",null,"Your site starts at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/intro.md")," and edit some lines: the site ",(0,a.kt)("strong",{parentName:"p"},"reloads automatically")," and display your changes."))}d.isMDXComponent=!0}}]);