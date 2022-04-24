(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6262],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=p(t),f=r,m=l["".concat(c,".").concat(f)]||l[f]||u[f]||i;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=l;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},4015:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o=["components"],d={sidebar_position:5},c="signBundleData",p={unversionedId:"sdk/everpay-js/operation-api/signBundleData",id:"sdk/everpay-js/operation-api/signBundleData",isDocsHomePage:!1,title:"signBundleData",description:"\u529f\u80fd",source:"@site/docs/sdk/everpay-js/operation-api/signBundleData.md",sourceDirName:"sdk/everpay-js/operation-api",slug:"/sdk/everpay-js/operation-api/signBundleData",permalink:"/docs/sdk/everpay-js/operation-api/signBundleData",editUrl:"https://github.com/everFinance/docs/edit/master/docs/sdk/everpay-js/operation-api/signBundleData.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sdk",previous:{title:"withdraw",permalink:"/docs/sdk/everpay-js/operation-api/withdraw"},next:{title:"bundle",permalink:"/docs/sdk/everpay-js/operation-api/bundle"}},s=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],u={toc:s};function l(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signbundledata"},"signBundleData"),(0,i.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,i.kt)("p",null,"\u6839\u636e Everpay \u5b9e\u4f8b\u521b\u5efa\u65f6\uff0c\u4f20\u9012\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"arJWK")," \u53c2\u6570\uff0c\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"bundleData")," \u8fdb\u884c\u7b7e\u540d\uff0c\u751f\u6210 ",(0,i.kt)("a",{parentName:"p",href:"../types#bundledatawithsigs"},(0,i.kt)("inlineCode",{parentName:"a"},"BundleDataWithSigs")),"\uff0c\u7528\u4e8e everPay \u6279\u91cf\u8f6c\u8d26\u4ea4\u6613\u7279\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," \u751f\u6210\u3002"),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../types#bundledata"},(0,i.kt)("inlineCode",{parentName:"a"},"BundleData"))),(0,i.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../types#bundledatawithsigs"},(0,i.kt)("inlineCode",{parentName:"a"},"BundleDataWithSigs"))),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const bundleData = {\n  items: [\n    {\n      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',\n      chainID: '42',\n      from: '0x26361130d5d6E798E9319114643AF8c868412859',\n      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      amount: '1000000000000000'\n    },\n    {\n      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n      chainID: '42',\n      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      to: '0x26361130d5d6E798E9319114643AF8c868412859',\n      amount: '10000000'\n    }\n  ],\n  expiration: 1630575873,\n  salt: 'a4d3f6b7-796a-452f-81cd-2462eacd840c',\n  version: 'v1'\n}\n\n// \u4f7f\u7528 5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo \u5bf9\u5e94\u7684\u79c1\u94a5\uff0c\u7b7e\u540d bundleData\nconst bundleDataWithSigs1 = await everpayArAccount.signBundleData(bundleData)\n/*\n{\n  items: [\n    {\n      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',\n      chainID: '42',\n      from: '0x26361130d5d6E798E9319114643AF8c868412859',\n      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      amount: '1000000000000000'\n    },\n    {\n      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n      chainID: '42',\n      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      to: '0x26361130d5d6E798E9319114643AF8c868412859',\n      amount: '10000000'\n    }\n  ],\n  expiration: 1630575873,\n  salt: 'a4d3f6b7-796a-452f-81cd-2462eacd840c',\n  version: 'v1',\n  sigs: {\n    '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo': 'G74XGPCApY2Rn3e9jixbdsiccPT6GreyzqvaTOW6VXvVJvVMUuVCZ7Bt7w_izPtHPiZFH0CYzAjn0FyttCPgR-mcp9CBNusnqwjqa4Q8NVthCCYl2ap1gCyv6t5BL7YgR522YDyFUJuKkgBAD7A9tJxOKLk8QSCBKDJsa3MScuLs8y-Cr4M6D95gfGT1iPCJO4RB5zKV4iMVia98z9ugTJEfoagCvRKWrkm4XS6su3VqCLRKcvqjkNzax5ZepvLjwO_ncBpl1uH0Lf0DRFxvhwwoL3oEdGxcjXrerMea5gIJIFPHqZ7YJINSbD0JRVdKP9k3c2KGUlBZ9MirFgLqzJdN6xt8UZCWj0v6QZk5XABc68eUZ559RhkWqXrDaaQUHLvtKkMjEEt-f-c1RfQYk9d-gDBg8B4J27RfdeAxKx1sbZb-m6nHmD22ZAT-DEJppJ2dfm_25suS1Dsl1rXXfKvSg93EaIjpNMlv7po7UiNE5ljcTisMGyP0mkqIKAm2KBDYRLJ4Rbj1CPCnpghft3DWgXcMxQ6JoUdzqqQ2s6mSXo2nG5ym8l3FaySOuQIxv09dF05WMZo2ZErRy9ktXFbsHPRlBZokJcOZiIBCGGfDqvE6D1xcX5ededepDRyogJlTOmI4A-CslPIFNPP19vxM7vh3ED_ppdHG3v6lq4o,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc'\n  }\n}\n*/\n\n// \u4f7f\u7528 0x26361130d5d6E798E9319114643AF8c868412859 \u5bf9\u5e94\u7684\u79c1\u94a5\uff0c\u7b7e\u540d bundleDataWithSigs1\nconst bundleDataWithSigs2 = await everpayEthAccount.signBundleData(bundleDataWithSigs1)\n/*\n{\n  items: [\n    {\n      tag: 'ethereum-eth-0x0000000000000000000000000000000000000000',\n      chainID: '42',\n      from: '0x26361130d5d6E798E9319114643AF8c868412859',\n      to: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      amount: '1000000000000000'\n    },\n    {\n      tag: 'ethereum-usdt-0xd85476c906b5301e8e9eb58d174a6f96b9dfc5ee',\n      chainID: '42',\n      from: '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo',\n      to: '0x26361130d5d6E798E9319114643AF8c868412859',\n      amount: '10000000'\n    }\n  ],\n  expiration: 1630575873,\n  salt: 'a4d3f6b7-796a-452f-81cd-2462eacd840c',\n  version: 'v1',\n  sigs: {\n    '5NPqYBdIsIpJzPeYixuz7BEH_W7BEk_mb8HxBD3OHXo': 'G74XGPCApY2Rn3e9jixbdsiccPT6GreyzqvaTOW6VXvVJvVMUuVCZ7Bt7w_izPtHPiZFH0CYzAjn0FyttCPgR-mcp9CBNusnqwjqa4Q8NVthCCYl2ap1gCyv6t5BL7YgR522YDyFUJuKkgBAD7A9tJxOKLk8QSCBKDJsa3MScuLs8y-Cr4M6D95gfGT1iPCJO4RB5zKV4iMVia98z9ugTJEfoagCvRKWrkm4XS6su3VqCLRKcvqjkNzax5ZepvLjwO_ncBpl1uH0Lf0DRFxvhwwoL3oEdGxcjXrerMea5gIJIFPHqZ7YJINSbD0JRVdKP9k3c2KGUlBZ9MirFgLqzJdN6xt8UZCWj0v6QZk5XABc68eUZ559RhkWqXrDaaQUHLvtKkMjEEt-f-c1RfQYk9d-gDBg8B4J27RfdeAxKx1sbZb-m6nHmD22ZAT-DEJppJ2dfm_25suS1Dsl1rXXfKvSg93EaIjpNMlv7po7UiNE5ljcTisMGyP0mkqIKAm2KBDYRLJ4Rbj1CPCnpghft3DWgXcMxQ6JoUdzqqQ2s6mSXo2nG5ym8l3FaySOuQIxv09dF05WMZo2ZErRy9ktXFbsHPRlBZokJcOZiIBCGGfDqvE6D1xcX5ededepDRyogJlTOmI4A-CslPIFNPP19vxM7vh3ED_ppdHG3v6lq4o,odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc',\n    '0x26361130d5d6E798E9319114643AF8c868412859': '0x3402039220dbb7f2a0cddf9fa8c8919e1dc153f839108f214e0cd156f39f01c82b44a91faf446758c9cd0f7f638376416d8c5a4f149e6f5ad3dedeec88e9717a1c'\n  }\n}\n*/\n\n")))}l.isMDXComponent=!0}}]);