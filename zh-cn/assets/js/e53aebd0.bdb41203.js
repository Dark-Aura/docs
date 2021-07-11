(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[212],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(n),m=a,v=l["".concat(p,".").concat(m)]||l[m]||u[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1838:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return l}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},p="deposit",s={unversionedId:"everpay-js/operate-api/deposit",id:"everpay-js/operate-api/deposit",isDocsHomePage:!1,title:"deposit",description:"\u529f\u80fd",source:"@site/docs/everpay-js/operate-api/deposit.md",sourceDirName:"everpay-js/operate-api",slug:"/everpay-js/operate-api/deposit",permalink:"/zh-cn/docs/everpay-js/operate-api/deposit",editUrl:"https://github.com/everFinance/docs/edit/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/everpay-js/operate-api/deposit.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"everpay-js",previous:{title:"\u4ecb\u7ecd",permalink:"/zh-cn/docs/everpay-js/operate-api/intro"},next:{title:"transfer",permalink:"/zh-cn/docs/everpay-js/operate-api/transfer"}},d=[{value:"\u529f\u80fd",id:"\u529f\u80fd",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u8fd4\u56de",id:"\u8fd4\u56de",children:[{value:"ethereum \u94b1\u5305",id:"ethereum-\u94b1\u5305",children:[]},{value:"arweave \u94b1\u5305",id:"arweave-\u94b1\u5305",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"ethereum \u94b1\u5305",id:"ethereum-\u94b1\u5305-1",children:[]},{value:"arweave \u94b1\u5305",id:"arweave-\u94b1\u5305-1",children:[]}]}],u={toc:d};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deposit"},"deposit"),(0,o.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,o.kt)("p",null,"\u6839\u636e Everpay \u5b9e\u4f8b\u521b\u5efa\u65f6\uff0c\u4f20\u9012\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"account"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"arJWK")," \u53c2\u6570\uff0c\u8c03\u7528\u5bf9\u5e94\uff08\u63d2\u4ef6\uff09\u94b1\u5305\u8f6c\u8d26\u529f\u80fd\uff0c\u5bf9 everPay \u8d26\u6237\u8fdb\u884c\u5145\u503c"),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../types#depositparams"},"DepositParams")),(0,o.kt)("h2",{id:"\u8fd4\u56de"},"\u8fd4\u56de"),(0,o.kt)("h3",{id:"ethereum-\u94b1\u5305"},"ethereum \u94b1\u5305"),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528 ethereum \u94b1\u5305\u5145\u503c\u65f6\uff08\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ethConnectedSigner")," \u914d\u7f6e\uff09 \u8fd4\u56de",(0,o.kt)("a",{parentName:"p",href:"../types#ethereumtransaction"},"EthereumTransaction")),(0,o.kt)("h3",{id:"arweave-\u94b1\u5305"},"arweave \u94b1\u5305"),(0,o.kt)("p",null,"\u5f53\u4f7f\u7528 arweave \u94b1\u5305\u5145\u503c\u65f6\uff08\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"arJWK")," \u914d\u7f6e\uff09 \u8fd4\u56de",(0,o.kt)("a",{parentName:"p",href:"../types#arweavetransaction"},"ArweaveTransaction")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("h3",{id:"ethereum-\u94b1\u5305-1"},"ethereum \u94b1\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const provider = new ethers.providers.Web3Provider(window.ethereum)\nconst signer = provider.getSigner()\nconst everpay = new Everpay({\n  account: window.ethereum.selectedAddress,\n  ethConnectedSigner: signer\n})\n\neverpay.deposit({\n  symbol: 'USDT',\n  amount: '5.26'\n}).then(console.log)\n\n/* \u8fd4\u56de\u7ed3\u679c\n{\n  nonce: 199,\n  gasPrice: BigNumber { _hex: '0x02540be400', _isBigNumber: true },\n  gasLimit: BigNumber { _hex: '0x882b', _isBigNumber: true },\n  to: '0xd85476C906B5301e8E9Eb58D174A6f96b9Dfc5Ee',\n  value: BigNumber { _hex: '0x00', _isBigNumber: true },\n  data: '0xa9059cbb000000000000000000000000a7ae99c13d82dd32fc6445ec09e38d197335f38a00000000000000000000000000000000000000000000000000000000005042e0',\n  chainId: 42,\n  v: 119,\n  r: '0xf069970e7384732913b1c4ff0a5be7f9df0742b8e7b5127ff661937562ff8362',\n  s: '0x55c10452f9ebdf2a09f1e599ca00ab9e937485e3c1f82819216b17d62f0e1140',\n  from: '0x26361130d5d6E798E9319114643AF8c868412859',\n  hash: '0x7d5cc18c44a8f45eaa5c357446157380ddc4526c07d4bea33721104296adcbe7',\n  type: null,\n  wait: [Function (anonymous)]\n}\n*/\n")),(0,o.kt)("h3",{id:"arweave-\u94b1\u5305-1"},"arweave \u94b1\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const arAddress = await window.arweaveWallet.getActiveAddress()\nconst everpay = new Everpay({\n  account: arAddress,\n  arJWK: 'use_wallet',\n})\n\neverpay.deposit(\n  symbol: 'ar',\n  amount: '0.01'\n}).then(console.log)\n\n/* \u8fd4\u56de\u7ed3\u679c\n{\n  format: 2,\n  id: 'mOnlcsKK58D_XHLoeNKhuyZWm4s1xg9P0QP-YVwJVNk',\n  last_tx: 'PyPNbSLO678m-dA5DPICym5tHwjtAPB1pSH3j-wLvcEK57y1Q7roq-1elFftq7tN',\n  owner: 'odtNk97a4PARR0I8g3kQpzlFVmPg-udyjfl81fbTioyP2pEw5tP5A1-FVqR-QFFPskW-j7yAze5usYNWHEir7oVQ9d9bbkcZIDEPqwSTO1JoD1BKXeeBK0xsmiSgxeY7uuRXWdhXREhlmIMsV8ObakEeXdbbxbs89XaZHBuES7boASrRVDXRz_mhMu6u_58OdLeMwR3I1BCH6nphNGVOehA7GOOqEBvtesBset0bNaLCb0JpSg5ZW_0AGLP-XydzE3IPLLx4NQEEJY21y8fChxYM4jntI78l5hojp9NlmS69EXlj0PoMjsbaWaz9WtnZaMAbnaOGAHhv8Y_TNmBI0FHpqHaGPP906Mnrgdm3tl2L40EX-Q6-liNVkB56CmPxXzSesu-4x5LLYxQ-aX3W6Hj7RCDTacxqUJHzOrhJqXSx6Jx0t8CwyfReMgVv4p5t1C3OZ8yYbJ_H3LdkeriVniaC5jQdMyIJ6QBMzr1XdXIw9WuEG2kCIYtvOp2qDuu9o2SY-9W4Yv7VWRDfWO38xxR4ZO65MMAdZxeaZ4w8sK_owH46Wm0XoT3Al-LPypaeijWqlHEu4R8c2ersD3xkDvXC_lNtaQw_qyfI3UEH5fWupY4zhZeDGkvXQh32Fv4CxlZL58iUHv9SvR7p5LgBCC3AVUbn7Sqc4xPUCZMj-Tc',\n  tags: [],\n  target: 'bX7sKd1s8L6PxUHxK-UPCfus7duyVFdf0J1lm90zehc',\n  quantity: '10000000000',\n  data_size: '0',\n  data: Uint8Array(0) [],\n  data_root: '',\n  reward: '1656360',\n  signature: 'E8QxqWGFee2wXhDXFqb_vHC8PJ-cPkyyVvkVSFJuWer4mRyTJz87jr7eyXPFxgRcqkjsLiY2Ez7p6vC4MuOv8L_IDmVw4dlLceX6Q4A0Xn4RWX6Dbo56Az93Rxs6kNkYEH8oddkjIbStvvypaWksm43NharW7SRmDHk2AxO5o9X38hMZX-tOTzCpZj3MNdK_FiTQVP0Xa4UjrblF5FC9L4gvKmSHYh_wEL4et_HTa7qN03ICJ5rY3Y_KB-bdRAQz4tStsFqrzX_wXg5aqvUNhH7NdXzUtdrcYVOggRFQOFDOOE49RPE6C6vLoXEgMv7OVB7PDXIG7JpJCR7UEewfEaxMHyUs62yoNlPYFZWiIyt5zfJL-ofSfhWvBtECwibUGsyeobminHGR2EOl6xaFed54Z8iid-igmGgv0rjDpLRfooqD06SLwJEFC08Cuj2sLJ5W5YqEx9L5D-7RvwNAve6ot11KtUNvCF9BAbYR5hvW5tTGSuFzB2MAUVDS2Jq6JgJUd5rqhuoEbG6LLl8CcfeWJPUspJ6Q5f7DvsIyvSmTZMVHb3Sm76PsAyKsBoTDaTCYbD7O1GvpXH0zcDS9pn8jOfxILUmqmNqlHblyHGGdQGIyEZJ3WDADeeQJmD_CBIoPrhcHiqu5Qg9HgX39V_dXyroekSWdWww8HYZ6zyo',\n  chunks: { chunks: [], data_root: Uint8Array(0) [], proofs: [] }\n}\n*/\n")))}l.isMDXComponent=!0}}]);