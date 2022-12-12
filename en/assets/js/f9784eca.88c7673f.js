(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[7400],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8935:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],c={sidebar_position:3},u="account",p={unversionedId:"sdk/everpay-js/configuration/account",id:"sdk/everpay-js/configuration/account",isDocsHomePage:!1,title:"account",description:"Configuration item function",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/configuration/account.md",sourceDirName:"sdk/everpay-js/configuration",slug:"/sdk/everpay-js/configuration/account",permalink:"/en/docs/sdk/everpay-js/configuration/account",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/en/docusaurus-plugin-content-docs/current/sdk/everpay-js/configuration/account.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sdk",previous:{title:"debug",permalink:"/en/docs/sdk/everpay-js/configuration/debug"},next:{title:"chainType",permalink:"/en/docs/sdk/everpay-js/configuration/chainType"}},s=[{value:"Configuration item function",id:"configuration-item-function",children:[]},{value:"Basic Query API Example",id:"basic-query-api-example",children:[{value:"Default account",id:"default-account",children:[]},{value:"Override account",id:"override-account",children:[]}]},{value:"Operation API Example",id:"operation-api-example",children:[]}],l={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"account"},"account"),(0,o.kt)("h2",{id:"configuration-item-function"},"Configuration item function"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When calling everpay-js ",(0,o.kt)("a",{parentName:"li",href:"../basic-api/intro"},"basic api"),", this ",(0,o.kt)("inlineCode",{parentName:"li"},"account")," configuration item is passed to the basic API as the default account parameter"),(0,o.kt)("li",{parentName:"ul"},"When calling everpay-js ",(0,o.kt)("a",{parentName:"li",href:"../operation-api/intro"},"operation API"),"(everPay deposit, transfer, withdraw), this ",(0,o.kt)("inlineCode",{parentName:"li"},"account")," configuration item ",(0,o.kt)("strong",{parentName:"li"},"must be passed and satisfy one of the following wallet addresses"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The same address with the ethereum wallet address corresponding to ",(0,o.kt)("inlineCode",{parentName:"li"},"ethConnectedSigner")),(0,o.kt)("li",{parentName:"ul"},"The same address with the arweave wallet address corresponding to ",(0,o.kt)("inlineCode",{parentName:"li"},"arJWK"))))),(0,o.kt)("h2",{id:"basic-query-api-example"},"Basic Query API Example"),(0,o.kt)("h3",{id:"default-account"},"Default account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay({\n  debug: false,\n  account: '0x26361130d5d6E798E9319114643AF8c868412859'\n})\n// Query account 0x26361130d5d6E798E9319114643AF8c868412859 for ETH asset balance on everpay production environment\neverpay.balance({\n  tag: 'ethereum-eth-0x0000000000000000000000000000000000000000'\n})\n")),(0,o.kt)("h3",{id:"override-account"},"Override account"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const everpay = new Everpay({\n  debug: false,\n  account: '0x26361130d5d6E798E9319114643AF8c868412859'\n})\n\n// Query the balance of ETH assets on another account 0x2ca81e1253f9426c62Df68b39a22A377164eeC92 on the everpay production environment\neverpay.balance({\n  tag: 'ethereum-eth-0x0000000000000000000000000000000000000000'\n  account: '0x2ca81e1253f9426c62Df68b39a22A377164eeC92'\n})\n")),(0,o.kt)("h2",{id:"operation-api-example"},"Operation API Example"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"./ethConnectedSigner"},"ethConnectedSigner")," or ",(0,o.kt)("a",{parentName:"p",href:"./arJWK"},"arJWK")," for details."))}d.isMDXComponent=!0}}]);