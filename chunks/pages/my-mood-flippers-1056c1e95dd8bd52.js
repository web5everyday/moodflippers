(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{8480:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-mood-flippers",function(){return r(45421)}])},31551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],s=!0,l=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(c){l=!0,a=c}finally{try{s||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s=(o=r(67294))&&o.__esModule?o:{default:o},l=r(41003),c=r(80880),i=r(69246);var u={};function d(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),o=s.default.useMemo((function(){var t=a(l.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),f=o.href,p=o.as,m=s.default.useRef(f),h=s.default.useRef(p),x=e.children,g=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof x&&(x=s.default.createElement("a",null,x));var j=(t=s.default.Children.only(x))&&"object"===typeof t&&t.ref,w=a(i.useIntersection({rootMargin:"200px"}),3),N=w[0],O=w[1],_=w[2],k=s.default.useCallback((function(e){h.current===p&&m.current===f||(_(),h.current=p,m.current=f),N(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[p,j,f,_,N]);s.default.useEffect((function(){var e=O&&r&&l.isLocalURL(f),t="undefined"!==typeof b?b:n&&n.locale,a=u[f+"%"+p+(t?"%"+t:"")];e&&!a&&d(n,f,p,{locale:t})}),[p,f,O,b,r,n]);var M={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,s,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:s}))}(e,n,f,p,g,v,y,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(f)&&d(n,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:n&&n.locale,L=n&&n.isLocaleDomain&&l.getDomainLocale(p,E,n&&n.locales,n&&n.domainLocales);M.href=L||l.addBasePath(l.addLocale(p,E,n&&n.defaultLocale))}return s.default.cloneElement(t,M)};t.default=f,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},69246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],s=!0,l=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(c){l=!0,a=c}finally{try{s||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,u=o.useRef(),d=a(o.useState(!1),2),f=d[0],p=d[1],m=a(o.useState(t?t.current:null),2),h=m[0],x=m[1],g=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=i.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),i.push(r));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:o,elements:a}),t}(r),a=n.id,o=n.observer,s=n.elements;return s.set(e,t),o.observe(e),function(){if(s.delete(e),o.unobserve(e),0===s.size){o.disconnect(),c.delete(a);var t=i.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&i.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:r}))}),[n,h,r,f]),v=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!l&&!f){var e=s.requestIdleCallback((function(){return p(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&x(t.current)}),[t]),[g,f,v]};var o=r(67294),s=r(44686),l="undefined"!==typeof IntersectionObserver;var c=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},56964:function(e,t,r){"use strict";var n=r(85893),a=r(9008),o=r(11163),s=r(89374),l=r(41664),c=r.n(l);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}t.Z=function(e){var t=e.title,r=e.description,l=e.children,d=u(e,["title","description","children"]);t=t||"Mood Flippers",r=r||"By Lucas Zanotto";var f=(0,o.useRouter)(),p="https://".concat("moodflippers-go0pqinnu-rcc.vercel.app"),m="".concat(p).concat(f.asPath),h="".concat(p,"/OG-MoodFlippers.jpg");return(0,n.jsxs)("div",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},d,{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{property:"og:title",content:t}),(0,n.jsx)("meta",{property:"og:description",content:r}),(0,n.jsx)("meta",{property:"og:image",content:h}),(0,n.jsx)("meta",{property:"og:url",content:m}),(0,n.jsx)("meta",{property:"og:site_name",content:t}),(0,n.jsx)("meta",{name:"twitter:title",content:t}),(0,n.jsx)("meta",{name:"twitter:description",content:r}),(0,n.jsx)("meta",{name:"twitter:image",content:h}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@moodrollers"})]}),(0,n.jsx)("header",{className:"bg-flipper-blue p-3 lg:p-5",children:(0,n.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,n.jsxs)("h1",{className:"flex-1 px-1 text-xl font-bold uppercase sm:text-3xl lg:text-4xl",children:[(0,n.jsx)("span",{className:"sm:hidden",children:"MF"}),(0,n.jsx)("span",{className:"hidden sm:block",children:"Mood Flippers"})]}),(0,n.jsx)(c(),{href:"/my-mood-flippers",children:(0,n.jsx)("a",{className:"bg-flipper-navy btn py-2 font-bold",children:"My Mood Flippers"})}),(0,n.jsx)(s.NL,{accountStatus:{smallScreen:"avatar",largeScreen:"full"}})]})}),l,(0,n.jsx)("section",{className:"bg-[#D2A6CD] py-20 px-6 sm:px-12 md:p-24 lg:text-2xl",children:(0,n.jsxs)("div",{className:"mx-auto grid max-w-md grid-cols-1 justify-center gap-12 md:max-w-4xl md:grid-cols-2 md:gap-20 lg:gap-32",children:[(0,n.jsxs)("div",{className:"mx-auto",children:[(0,n.jsx)("div",{className:"mx-auto mb-6 w-24 sm:w-48",children:(0,n.jsx)("img",{src:"/lucas.jpg",alt:"Lucas Zanotto",className:"rounded-full"})}),(0,n.jsxs)("p",{className:"text-center",children:["MoodFlippers are part of the"," ",(0,n.jsx)("a",{href:"https://twitter.com/moodrollers/",className:"underline",children:"MoodVerse"}),". Designed and animated by Lucas Zanotto,"," ",(0,n.jsx)("a",{href:"https://twitter.com/lucas_zanotto",className:"underline",children:"@lucas_zanotto"}),"."]})]}),(0,n.jsxs)("div",{className:"mx-auto",children:[(0,n.jsx)("div",{className:"mx-auto mb-6 w-24 sm:w-48",children:(0,n.jsx)("img",{src:"/RCCLogo.png",alt:"Random Character Collective",className:"rounded-full"})}),(0,n.jsxs)("p",{className:"text-center",children:["MoodFlippers are a proud member of Random Character Collective,"," ",(0,n.jsx)("a",{href:"https://discord.gg/rndm",className:"underline",children:"@RNDMCHARACTERS"}),"."]})]})]})}),(0,n.jsxs)("footer",{className:"bg-flipper-blue p-6 text-center font-semibold leading-loose md:flex ",children:[(0,n.jsx)("span",{children:"Mood Flippers"}),(0,n.jsx)("div",{className:"flex-auto"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{className:"hover:underline",href:"https://discord.gg/rndm",children:"Discord"})," ","\u2022"," ",(0,n.jsx)("a",{href:"https://opensea.io/collection/mood-flippers",className:"hover:underline",children:"OpenSea"})," ","\u2022"," ",(0,n.jsx)("a",{className:"hover:underline",href:"https://etherscan.io/address/0xFd5E3eB879798125E0363F54a8E6A0bB6e9a48D7",children:"Etherscan"})]})]})]}))}},31095:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(67294);function a(){var e=(0,n.useReducer)((function(){return!0}),!1),t=e[0],r=e[1];return(0,n.useEffect)(r,[]),t}},45421:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(85893),a=r(56964),o=r(5286),s=["mp4","gif","happy","sad","wav"],l={mp4:{base:"https://rndmcharacters-s3.s3.amazonaws.com/MoodFlippers-mp4/",ext:".mp4"},gif:{base:"https://rndmcharacters-s3.s3.amazonaws.com/MoodFlippers-gif/",ext:".gif"},happy:{base:"https://rndmcharacters-s3.s3.amazonaws.com/MoodFlippers-happy/",ext:".png"},sad:{base:"https://rndmcharacters-s3.s3.amazonaws.com/MoodFlippers-sad/",ext:".png"},wav:{base:"https://rndmcharacters-s3.s3.amazonaws.com/MoodFlippers-wav/",ext:".wav"}},c=function(e,t,r){return"".concat(r.token_id,"-").concat(t,".").concat(e[t].ext)},i=function(e,t,r){var n=e[t],a=[n.base];return n.subParts&&(r.token_id<1e3?a.push(n.subParts[0]):r.token_id>=1e3&&r.token_id<=1999?a.push(n.subParts[1]):r.token_id>=2e3&&r.token_id<2999?a.push(n.subParts[2]):r.token_id>=3e3&&r.token_id<3999?a.push(n.subParts[3]):r.token_id>=4e3&&r.token_id<4999?a.push(n.subParts[4]):r.token_id>=5e3&&a.push(n.subParts[5])),a.push(r.token_id),a.push(n.ext),a.join("")},u=r(89374),d=r(47459),f=r.n(d),p=r(31095),m=function(){var e=(0,o.mA)().data,t=f()("/api/balance?address=".concat(null===e||void 0===e?void 0:e.address),{depends:[null===e||void 0===e?void 0:e.address]}),r=t.data,a=t.isLoading;return(0,p.Z)()?!!(null===e||void 0===e?void 0:e.address)?a?(0,n.jsx)("div",{children:"Loading\u2026"}):(0,n.jsxs)("div",{children:[r&&0===r.length&&(0,n.jsx)("div",{className:"mx-auto max-w-xl rounded-xl border p-3 text-center",children:"You don't seem to be holding any Invisible Friends in the connected wallet?"}),r&&r.length>0&&(0,n.jsx)("div",{className:"grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-2 lg:gap-8",children:r.map((function(e){return(0,n.jsx)(h,{asset:e},e.token_id)}))})]}):(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(u.NL,{})}):null},h=function(e){var t=e.asset;return(0,n.jsxs)("div",{className:"w-full max-w-2xl space-y-2 bg-white p-2 text-flipper-blue shadow-lg",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsxs)("div",{className:"flex-1 font-bold",children:["#",t.token_id]}),(0,n.jsx)("div",{className:"flex-0",children:(0,n.jsx)("a",{href:t.permalink,className:"flex h-8 w-8 items-center justify-center bg-gray-200 p-2 hover:bg-gray-300 md:h-12 md:w-12 md:p-3",title:"View on OpenSea",target:"_blank",rel:"noreferrer",children:(0,n.jsx)("img",{src:"/opensea-logo-filled.svg",alt:"OpenSea",className:"inline-block w-full"})})})]}),(0,n.jsx)("video",{src:i(l,"mp4",t),autoPlay:!0,playsInline:!0,muted:!0,loop:!0,controls:!0,className:"w-full"}),(0,n.jsx)("div",{className:"grid grid-cols-5 space-x-2",children:s.map((function(e){return(0,n.jsx)("a",{href:i(l,e,t),className:"bg-gray-200 py-2 text-center text-xs uppercase hover:bg-gray-300",download:c(l,e,t),children:e},e)}))})]},t.token_id)},x=function(){return(0,n.jsx)(a.Z,{title:"My Mood Flippers",children:(0,n.jsxs)("div",{className:"bg-flipper-navy",children:[(0,n.jsx)("div",{className:"h-8"}),(0,n.jsxs)("header",{className:"mx-auto max-w-xl space-y-2 px-3 text-center md:text-xl lg:max-w-3xl lg:py-12 lg:text-3xl",children:[(0,n.jsx)("h1",{className:"text-3xl font-light italic md:text-5xl lg:text-7xl",children:"My Mood Flippers"}),(0,n.jsx)("h2",{className:"text-sea-600",children:"Flippers come in a few different formats to make it the easiest for you to use and share."})]}),(0,n.jsx)("div",{className:"h-6"}),(0,n.jsx)("div",{className:"mx-auto max-w-6xl px-4 lg:px-8",children:(0,n.jsx)(m,{})}),(0,n.jsx)("div",{className:"h-6 lg:h-12"})]})})}},9008:function(e,t,r){e.exports=r(83121)},41664:function(e,t,r){e.exports=r(31551)},11163:function(e,t,r){e.exports=r(80880)},47459:function(e,t,r){var n=r(57967);function a(e,t,r,n,o){var s=new Error(r,n,o);return s.name="UseFetchError",s.status=e,s.statusText=t,Object.setPrototypeOf(s,Object.getPrototypeOf(this)),Error.captureStackTrace&&Error.captureStackTrace(s,a),s}a.prototype=Object.create(Error.prototype,{constructor:{value:Error,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf(a,Error),e.exports=function(e,t,r){var o=(r&&r.depends||t&&t.depends||[]).reduce((function(e,t){return e||!t}),!1);return n(!o&&function(e,t,r){return fetch(e,t).then(r&&r.formatter||t&&t.formatter||function(e){if(!e.ok)throw new a(e.status,e.statusText,"Fetch error");return e.json()})},e,t||{},r||{})}},57967:function(e,t,r){var n=r(67294),a=r(86923);e.exports=function(e){var t=Array.prototype.slice.call(arguments,[1]),r=n.useState({isLoading:!!e});return n.useEffect((function(){e&&(!r[0].isLoading&&r[1]({data:r[0].data,isLoading:!0}),e.apply(null,t).then((function(e){r[1]({data:e,isLoading:!1})})).catch((function(e){r[1]({error:e,isLoading:!1})})))}),a(t)),r[0]}},86923:function(e){e.exports=function e(){for(var t=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n instanceof Array)for(var a=0;a<n.length;a++)t=t.concat(e(n[a]));else if("undefined"!==typeof URL&&n instanceof URL)t=t.concat(n.toJSON());else if(n instanceof Object)for(var o=Object.keys(n),s=0;s<o.length;s++){var l=o[s];t=t.concat([l]).concat(e(n[l]))}else t=t.concat(n)}return t}}},function(e){e.O(0,[774,888,179],(function(){return t=8480,e(e.s=t);var t}));var t=e.O();_N_E=t}]);