import{i as e,r as t,m as n,n as a,w as o,o as r,a as s,b as i,h as l,c,d,e as u,f as m,g as h,j as f,k as g,t as p,l as v,p as A,q as b,s as k,F as y,u as w,v as P,x as C,y as M,z as x,A as S,B as I,C as L,D as E,E as B,T,G as j,H as D,I as O,J as N}from"./common-283f1541.js";const $=Symbol();function F(){return function(){const t=e($);if(!t)throw new Error("useRouter() is called without provider.");return t}().route}function U(e,t,n=!1){const a=document.getElementById("app").offsetTop,o=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(o){const e=o.offsetTop-a-15;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}function _(e,t){const n=Array.from(document.querySelectorAll("meta"));let a=!0;const r=e=>{a?a=!1:(n.forEach((e=>document.head.removeChild(e))),n.length=0,e&&e.length&&e.forEach((e=>{const t=function([e,t,n]){const a=document.createElement(e);for(const e in t)a.setAttribute(e,t[e]);n&&(a.innerHTML=n);return a}(e);document.head.appendChild(t),n.push(t)})))};o((()=>{const n=e.value,a=t.value,o=n&&n.title;document.title=(o?o+" | ":"")+a.title,r([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:a.description}],...a.head,...n&&n.frontmatter.head||[]])}))}const H=Symbol();function R(){const t=e(H);if(!t)throw new Error("usePageData() is called without provider.");return t}const q="undefined"!=typeof window;function V(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),q){const e="/blog/";t=t.slice(e.length).replace(/\//g,"_")+".md";t=`${e}_assets/${t}.${__VP_HASH_MAP__[t]}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const W=new Set,G=()=>document.createElement("link");let z;const Y=q&&(z=G())&&z.relList&&z.relList.supports&&z.relList.supports("prefetch")?e=>{const t=G();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const X={setup(){const e=F();return function(){if(!q)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const a=()=>{n&&n.disconnect(),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:a}=t;if(!W.has(a)){W.add(a);const e=V(a);Y(e)}}}))})),t((()=>{document.querySelectorAll(".vitepress-content a").forEach((e=>{const{target:t,hostname:a,pathname:o}=e;"_blank"!==t&&a===location.hostname&&(o!==location.pathname?n.observe(e):W.add(o))}))}))};r(a),s(a),i((()=>{n&&n.disconnect()}))}(),()=>e.contentComponent?l(e.contentComponent):null}};const J=c((K='{"lang":"en-US","title":"YDYK","description":"A VitePress site","base":"/blog/","head":[["meta",{"name":"viewport","content":"width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}],["meta",{"name":"keywords","content":"YDYK"}],["link",{"rel":"icon","href":"/favicon.ico"}],["link",{"rel":"stylesheet","href":"https://lib.baomitu.com/gitalk/1.7.0/gitalk.min.css"}],["script",{"src":"https://lib.baomitu.com/gitalk/1.7.0/gitalk.min.js"}],["script",{"src":"https://lib.baomitu.com/axios/0.21.1/axios.js"}]],"themeConfig":{"displayAllHeaders":true,"logo":"/favicon.ico","pages":[{"frontMatter":{"date":"2021-11-30","title":"【算法】一些算法新坑","tags":["算法"],"describe":"学习 算法菜鸡的成长之路"},"regularPath":"/docs/arithmetic/arithmetic.html","relativePath":"docs/arithmetic/arithmetic.md"}],"author":"YDYK","search":true,"nav":[{"text":"🏠 首页","link":"/index"},{"text":"📅 归档","link":"/more/docs"},{"text":"📂 分类","link":"/more/tags"},{"text":"👫 友情链接","link":"/more/Friendship"}]},"locales":{}}',d(JSON.parse(K))));var K;function Q(){return J}const Z="undefined"!=typeof window;function ee(e,t){const n=function(e,t){t.sort(((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length}));for(const n of t)if(e.startsWith(n))return n}(t,Object.keys(e));return n?e[n]:void 0}function te(e,t){t=function(e,t){if(!Z)return t;const n=e.base,a=n.endsWith("/")?n.slice(0,-1):n;return t.slice(a.length)}(e,t);const n=ee(e.locales||{},t)||{},a=ee(e.themeConfig&&e.themeConfig.locales||{},t)||{};return{...e,...n,themeConfig:{...e.themeConfig,...a,locales:{}},locales:{}}}function ne(e=F()){return u((()=>te(J.value,e.path)))}const ae=/#.*$/,oe=/\.(md|html)$/,re=/^[a-z]+:/i;function se(e){return(Q().value.base+e).replace(/\/+/g,"/")}function ie(e){return decodeURI(e).replace(ae,"").replace(oe,"")}const le=e=>((e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.html$/,"")).endsWith("/")&&(e+="index"),e);var ce=m({components:{},props:{item:{type:Object,required:!0}},setup(e){const t=e.item,n=F(),a=u((()=>({active:o.value,external:r.value}))),o=u((()=>le(se(t.link))===le(n.path))),r=u((()=>{return e=t.link,re.test(e);var e})),s=u((()=>r.value?t.link:se(t.link))),i=u((()=>t.target?t.target:r.value?"_blank":"")),l=u((()=>t.rel?t.rel:r.value?"noopener noreferrer":""));return{classes:a,isActiveLink:o,isExternalLink:r,href:s,target:i,rel:l}}});const de={class:"nav-item"},ue=["href","target","rel","aria-label"];ce.render=function(e,t,n,a,o,r){return b(),h("div",de,[f("a",{class:A(["nav-link",e.classes]),href:"/"===e.href?"/":e.href+".html",target:e.target,rel:e.rel,"aria-label":e.item.ariaLabel},[g(p(e.item.text),1),v(' <OutboundLink v-if="isExternalLink" /> ')],10,ue)])};var me=m({name:"DropdownLink",components:{NavBarLink:ce},props:{item:{type:Object,required:!0}},setup(e){const t=c(!1),n=F();k((()=>n.path),(()=>{t.value=!1}));return{open:t,setOpen:e=>{t.value=e},isLastItemOfArray:(e,t)=>t.length&&t.indexOf(e)===t.length-1}}});const he=["aria-label"],fe={class:"nav-dropdown"},ge={key:0},pe={key:1,class:"dropdown-subitem-wrapper"};me.render=function(e,t,n,a,o,r){const s=M("NavBarLink");return b(),h("div",{class:A(["dropdown-wrapper",{open:e.open}])},[f("button",{class:"dropdown-title",type:"button","aria-label":e.item.ariaLabel,onClick:t[0]||(t[0]=t=>e.setOpen(!e.open))},[f("span",null,p(e.item.text),1),f("span",{class:A(["arrow",e.open?"down":"right"])},null,2)],8,he),f("ul",fe,[(b(!0),h(y,null,w(e.item.items,((t,n)=>(b(),h("li",{key:t.link||n,class:"dropdown-item"},[t.items?(b(),h("h4",ge,p(t.text),1)):v("v-if",!0),t.items?(b(),h("ul",pe,[(b(!0),h(y,null,w(t.items,(n=>(b(),h("li",{key:n.link,class:"dropdown-subitem"},[P(s,{item:n,onFocusout:a=>e.isLastItemOfArray(n,t.items)&&e.isLastItemOfArray(t,e.item.items)&&e.setOpen(!1)},null,8,["item","onFocusout"])])))),128))])):(b(),C(s,{key:2,item:t,onFocusout:n=>e.isLastItemOfArray(t,e.item.items)&&e.setOpen(!1)},null,8,["item","onFocusout"]))])))),128))])],2)};const ve=["GitHub","GitLab","Bitbucket"].map((e=>[e,new RegExp(e,"i")]));var Ae={components:{NavBarLink:ce,NavDropdownLink:me},setup(){const e=ne(),t=Q(),n=F(),a=u((()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;let a=e.repoLabel;if(n){const e=/^https?:/.test(n)?n:`https://github.com/${n}`;if(!a){const t=e.match(/^https?:\/\/[^/]+/);if(t){const e=t[0],n=ve.find((([t,n])=>n.test(e)));a=n&&n[0]}}return{link:e,text:a||"Source"}}return null})),o=u((()=>{const e=t.value.themeConfig.locales;if(!e)return null;const a=Object.keys(e);if(a.length<=1)return null;const o=q?t.value.base:"/",r=o.endsWith("/")?o.slice(0,-1):o,s=n.path.slice(r.length),i=a.find((e=>"/"!==e&&s.startsWith(e))),l=i?s.substring(i.length-1):s,c=a.map((t=>{const n=t.endsWith("/")?t.slice(0,-1):t;return{text:e[t].label||e[t].lang,link:`${n}${l}`}})),d=i||"/";return{text:e[d].selectText?e[d].selectText:"Languages",items:c}}));return{navData:u((()=>e.value.themeConfig.nav)),repoInfo:a,localeCandidates:o}}};const be={key:0,class:"nav-links"};Ae.render=function(e,t,n,a,o,r){const s=M("NavDropdownLink"),i=M("NavBarLink");return e.navData||e.repoInfo?(b(),h("nav",be,[e.navData?(b(!0),h(y,{key:0},w(e.navData,(e=>(b(),h(y,null,[e.items?(b(),C(s,{key:0,item:e},null,8,["item"])):(b(),C(i,{key:1,item:e},null,8,["item"]))],64)))),256)):v("v-if",!0),e.localeCandidates?(b(),C(s,{key:1,item:e.localeCandidates},null,8,["item"])):v("v-if",!0),e.repoInfo?(b(),C(i,{key:2,item:e.repoInfo},null,8,["item"])):v("v-if",!0)])):v("v-if",!0)};var ke={components:{NavBarLinks:Ae},setup:()=>({withBase:se})};const ye=["aria-label","href"],we=["src"],Pe=f("div",{class:"flex-grow"},null,-1);ke.render=function(e,t,n,a,o,r){const s=M("NavBarLinks");return b(),h(y,null,[f("a",{class:"title","aria-label":e.$site.title+", back to home",href:e.$site.base},[e.$theme.logo?(b(),h("img",{key:0,class:"logo",src:e.withBase(e.$theme.logo),alt:"logo"},null,8,we)):v("v-if",!0),f("span",null,p(e.$site.title),1)],8,ye),Pe,P(s,{class:"hide-mobile"}),x(e.$slots,"search")],64)};var Ce={setup:()=>({data:{platform:[{href:"https://juejin.cn/user/465848663286712",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABfVBMVEX///8Ad/8AgP8AgP8AgP8Aff8AgP8Af/8AgP8AVf8Af/8Af/8AgP8AgP8Af/8Afv8AAP8Afv8Afv8Aef8AgP8AdP8Afv8AgP8AgP8Acf8Ae/8AgP8Af/8AgP8Af/8Af/8AfP8Afv8AgP8Af/8Af/8Afv8Afv8AgP8Afv8AgP8Af/8Af/8AgP8AgP8Afv8AgP8Af/8AgP8AgP8AgP8Ae/8Afv8Af/8AgP8Af/8AgP8Af/8Af/8Aff8Af/8Abf8AgP8Af/8AgP8Af/8Af/8Afv8AgP8AgP8Afv8Afv8AgP8Af/8Aff8AgP8Afv8AgP8Aff8AgP8AfP8AgP8Ae/8AgP8Af/8AgP8AgP8AgP8Afv8AgP8AgP8AgP8Afv8AgP8AgP8AgP8AgP8AgP8Af/8AgP8Af/8Af/8Aev8Af/8AgP8Aff8Afv8AgP8AgP8AgP8Af/8AgP8Af/8Af/8AgP8Afv8AgP8AgP8AgP8AgP8Af/8AeP8Af/8Af/8Af//////rzEHnAAAAfXRSTlMAD7CCAivatxIDx5EMrP19AXdLEwgLR+6iCR/M0yLRzyFF7JupSXn8cw6v60Q0QeqzKtgeG237HMne850/6Qeq7QaZ+WdydHtj+OM3qENCMRYl1B3K2U7wnlWE/mhlirjkODa9FN/BF7/iNV/2kASNZpX1Wlf03C4stRGxgUPclqoAAAABYktHRACIBR1IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEaBzgZ4yeM3AAAAT9JREFUOMvNUldbwkAQvCAqsSBoABE7asSOBRUVVBQNNuy9996789+9cMFAMHnVebmdm+/bmdtbQv4dOFOW2UjPzgFyLfo6nweKfIMOBYWwFtmMPGz2Yj2pJI0JDq3udJW6VVbmKa9I192VQFV1ktXUAl5NB0cd4KpnORqsEO2ZIRpF9gJfE9Dckqq0KuZt7UAH5+8EPF3spjsRpCeQNO/tA/qDwIDA+OCQbBoKA8NOdjMySgcZGVM6jwcgRuUiSs0nlPFNSrEpJfU0jTLD6llqbvKxei7OzvkFNQohi0vAsj81+MoqsCaoPOQFgus/1LyxichW+hS2JWCHZ7VlF9jb187pIAYcHiViHAMnp5mTjJ8B5xeEXF4B1ze/fTh/C0h398DDI9HB07O8ci+vRBdvdGnfP4gBuM8vw7X/G3wDmFhFZEdxzjMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDEtMjZUMDc6NTY6MjUrMDE6MDA67pVWAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAxLTI2VDA3OjU2OjI1KzAxOjAwS7Mt6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAWdEVYdFRpdGxlAGp1ZWppbl9sb2dvIGNvcHlxapmKAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC"},{href:"https://www.yuque.com/shouhu-pelkv",icon:"/blog/_assets/yuque.2a316201.png"}]}})};const Me={class:"page-edit"},xe=["href"],Se=["src"],Ie=f("p",{class:"platform"},[g(" 以上皆为 "),f("a",{href:"javascript:;"},"瘦虎"),g(" 文章发布平台 ")],-1),Le=f("p",{class:"platform"},[g(" Copyright © 2020-2021 "),f("a",{href:"https://github.com/gelxgx"},"@Gelxgx")],-1);Ce.render=function(e,t,n,a,o,r){return b(),h("div",null,[f("footer",Me,[(b(!0),h(y,null,w(a.data.platform,((e,t)=>(b(),h("a",{key:t,href:e.href},[f("img",{class:"imgIcon",src:e.icon},null,8,Se)],8,xe)))),128))]),Ie,Le])};var Ee=m({components:{NavBarLink:ce,PageEdit:Ce},setup(){const e=R(),n=Q(),a=u((()=>e.value.frontmatter)),o=u((()=>({link:a.value.actionLink,text:a.value.actionText}))),r=u((()=>se(a.value.heroImage))),s=u((()=>n.value.title)),i=u((()=>n.value.description));let l=u((()=>n.value.themeConfig.pages));const c=t({page:0,pageSize:5}),d=(()=>{var e=new Array(Math.ceil(l.value.length/c.pageSize));for(let t=0;t<e.length;t++)e[t]=new Array;for(let t=0;t<l.value.length;t++)e[parseInt(t/c.pageSize)][t%c.pageSize]=l.value[t];return e})(),m=t({currentData:d[c.page],totalPages:d.length});return{data:a,actionLink:o,heroImageSrc:r,dynamicPage:m,base:"/blog",getChangePage:e=>{c.page+1===m.totalPages&&0===c.page||(c.page+=e,m.currentData=d[c.page])},siteTitle:s,initPage:c,siteDescription:i}}});const Be=["href"],Te={class:"article-header"},je={class:"title"},De=["datetime"],Oe=(e=>(L("data-v-19e92702"),e=e(),E(),e))((()=>f("div",{class:"line"},null,-1))),Ne={class:"describe"},$e={class:"paging"};Ee.render=function(e,t,n,a,o,r){const s=M("PageEdit");return b(),h("div",null,[(b(!0),h(y,null,w(e.dynamicPage.currentData,((t,n)=>S((b(),h("a",{href:e.base+t.regularPath||"",key:n,class:"article"},[f("div",Te,[f("div",je,p(t.frontMatter.title||""),1),f("time",{datetime:t.frontMatter.date,class:"time"},p(t.frontMatter.date||""),9,De)]),Oe,f("p",Ne,p(t.frontMatter.describe||""),1)],8,Be)),[[I,!t.frontMatter.home]]))),128)),f("div",$e,[0!==e.initPage.page?(b(),h("div",{key:0,class:"prev",onClick:t[0]||(t[0]=t=>e.getChangePage(-1))})):v("v-if",!0),f("span",null,p(e.dynamicPage.totalPages)+" - "+p(e.initPage.page+1),1),e.initPage.page+1!==e.dynamicPage.totalPages?(b(),h("div",{key:1,class:"next",onClick:t[1]||(t[1]=t=>e.getChangePage(1))})):v("v-if",!0)]),P(s)])},Ee.__scopeId="data-v-19e92702";var Fe={emits:["toggle"]};const Ue=[f("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[f("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1)];function _e(){let e=null,t=null;const n=decodeURIComponent,a=e=>e&&e.classList.remove("active"),o=n=>{if(a(t),a(e),t=document.querySelector(`.sidebar a[href="${n}"]`),t){t.classList.add("active");const n=t.closest(".sidebar > ul > li");n&&n!==t.parentElement?(e=n.querySelector("a"),e&&e.classList.add("active")):e=null}},l=()=>{const e=[].slice.call(document.querySelectorAll(".sidebar a")),t=[].slice.call(document.querySelectorAll(".header-anchor")).filter((t=>e.some((e=>e.hash===t.hash)))),a=document.getElementById("app").offsetTop,r=window.scrollY,s=e=>e.parentElement.offsetTop-a-15;for(let e=0;e<t.length;e++){const a=t[e],i=t[e+1];if(0===e&&0===r||r>=s(a)&&(!i||r<s(i))){const e=n(a.hash);return history.replaceState(null,document.title,e),void o(e)}}},c=function(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),a=!0,setTimeout((()=>{a=!1}),t))}}(l,300);r((()=>{l(),window.addEventListener("scroll",c)})),s((()=>{o(n(location.hash))})),i((()=>{window.removeEventListener("scroll",c)}))}Fe.render=function(e,t,n,a,o,r){return b(),h("div",{class:"sidebar-button",onClick:t[0]||(t[0]=t=>e.$emit("toggle"))},Ue)};const He=e=>{const{item:{link:t,text:n,children:a}}=e,o=F(),r=R(),s=Q(),i=(c=s.value.base,(d=t||"")?d.startsWith("#")?d:function(e,t){const n=e.endsWith("/"),a=t.startsWith("/");return n&&a?e.slice(0,-1)+t:n||a?e+t:`${e}/${t}`}(c,d):void 0);var c,d;const u=function(e,t){return void 0!==t&&ie(e.path)===ie(t)}(o,i),m=r.value.headers;return l("li",{class:"sidebar-item"},[We(u,n,i),Ge(u,a,m)])};var Re={components:{NavBarLinks:Ae,SideBarItem:He},setup(){const e=R(),t=ne(),n=F();return _e(),{items:u((()=>{const{headers:a,frontmatter:{sidebar:o,sidebarDepth:r=2}}=e.value;if("auto"===o)return qe(a,r);if(Array.isArray(o))return Ve(o);if(!1===o)return[];{const{sidebar:e}=t.value.themeConfig;if("auto"===e)return qe(a,r);if(Array.isArray(e))return Ve(e);if(!1===e)return[];if("object"==typeof e)return function(e,t,n,a){const o=[t,Object.keys(e)[0]].map((t=>e[function(e){const t=e.split("/");return t[t.length-1]&&t.pop(),function(e){return/(\.html|\/)$/.test(e)?e:`${e}/`}(t.join("/"))}(t)])).find(Boolean);if(Array.isArray(o))return Ve(o);if("auto"===o)return qe(n,a);return[]}(e,n.path,a,r)}}))}}};function qe(e,t){const n=[];if(void 0===e)return[];let a;return e.forEach((({level:e,title:o,slug:r})=>{if(e-1>t)return;const s={text:o,link:`#${r}`};2===e?(a=s,n.push(s)):a&&(a.children||(a.children=[])).push(s)})),n}function Ve(e,t){return e}function We(e,t,n){return l(n?"a":"p",{class:{"sidebar-link":!0,active:e},href:n},t)}function Ge(e,t,n){return t&&t.length>0?l("ul",{class:"sidebar-items"},t.map((e=>l(He,{item:e})))):e&&n?Ge(!1,function(e){return ze(function(e){let t;return(e=e.map((e=>Object.assign({},e)))).forEach((e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((e=>2===e.level))}(e))}(n)):null}function ze(e){return e.map((e=>({text:e.title,link:`#${e.slug}`,children:e.children?ze(e.children):void 0})))}const Ye={class:"sidebar"};Re.render=function(e,t,n,a,o,r){const s=M("NavBarLinks"),i=M("SideBarItem");return b(),h(y,null,[P(s,{class:"show-mobile"}),x(e.$slots,"top"),f("ul",Ye,[(b(!0),h(y,null,w(e.items,(e=>(b(),C(i,{item:e},null,8,["item"])))),256))]),x(e.$slots,"bottom")],64)};var Xe={setup(){const e=R(),t=Q(),n=e=>{let n;return Object.keys(t.value.themeConfig.sidebar).some((a=>t.value.themeConfig.sidebar[a].some((t=>(Array.isArray(t.children)&&(n=t.children.find((t=>t.link===e))),!!n))))),n},a=u((()=>{if(!1!==e.value.frontmatter.next)return"string"==typeof e.value.frontmatter.next?n(e.value.frontmatter.next):e.value.next})),o=u((()=>{if(!1!==e.value.frontmatter.prev)return"string"==typeof e.value.frontmatter.prev?n(e.value.frontmatter.prev):e.value.prev})),r=u((()=>!!a||!!o));return{next:a,prev:o,hasLinks:r}}};const Je={key:0,class:"links-wrapper"},Ke={class:"prev-link"},Qe={key:0},Ze=g(" ← "),et=["href"],tt={class:"next-link"},nt={key:0},at=["href"],ot=g(" → ");Xe.render=function(e,t,n,a,o,r){return e.hasLinks?(b(),h("div",Je,[f("div",Ke,[e.prev?(b(),h("div",Qe,[Ze,f("a",{href:e.prev.link},p(e.prev.text),9,et)])):v("v-if",!0)]),f("div",tt,[e.next?(b(),h("div",nt,[f("a",{href:e.next.link},p(e.next.text),9,at),ot])):v("v-if",!0)])])):v("v-if",!0)};var rt={components:{NextAndPrevLinks:Xe,PageEdit:Ce},setup:()=>({pageData:R()}),data:()=>({clickShowImg:!1,ImgUrl:""}),mounted(){this.$nextTick((()=>{setTimeout((()=>{var e=document.getElementsByTagName("img");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(e=>{this.ImgUrl=e.target.src,this.clickShowImg=!0}),!1)}),500)})),function(e){var t,n={},a="jinrishici-token";function o(){return document.getElementById("jinrishici-sentence")||0!=document.getElementsByClassName("jinrishici-sentence").length}function r(){n.load((function(e){var t=document.getElementById("jinrishici-sentence"),n=document.getElementsByClassName("jinrishici-sentence");if(t&&(t.innerText=e.data.content),0!==n.length)for(var a=0;a<n.length;a++)n[a].innerText=e.data.content}))}function s(e,t){var n=new XMLHttpRequest;n.open("get",t),n.withCredentials=!0,n.send(),n.onreadystatechange=function(t){if(4===n.readyState){var a=JSON.parse(n.responseText);"success"===a.status?e(a):console.error("今日诗词API加载失败，错误原因："+a.errMessage)}}}n.load=function(t){return e.localStorage&&e.localStorage.getItem(a)?(n=t,o=e.localStorage.getItem(a),s(n,"https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token="+encodeURIComponent(o))):function(t){return s((function(n){e.localStorage.setItem(a,n.token),t(n)}),"https://v2.jinrishici.com/one.json?client=browser-sdk/1.2")}(t);var n,o},e.jinrishici=n,o()?r():(t=function(){o()&&r()},"loading"!=document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",(function(){"complete"==document.readyState&&t()})))}(window)}};const st={class:"content"},it={class:"md-header"},lt={class:"md-title"},ct=f("span",{id:"jinrishici-sentence"},"正在加载今日诗词....",-1),dt={class:"md-date"},ut={class:"catalog"},mt=["href"],ht=["href"],ft=["src"];rt.render=function(e,t,n,a,o,r){const s=M("Content"),i=M("NextAndPrevLinks"),l=M("PageEdit");return b(),h(y,null,[f("div",st,[x(e.$slots,"top"),f("div",it,[f("div",lt,p(a.pageData.title),1),ct,f("div",dt,p(a.pageData.frontmatter.date),1)]),f("ul",ut,[(b(!0),h(y,null,w(a.pageData.headers,(e=>(b(),h("li",{class:"catalog-item",key:e},[2==e.level?(b(),h("a",{key:0,class:"level level-2",href:"#"+e.slug},p(e.title),9,mt)):v("v-if",!0),3==e.level?(b(),h("a",{key:1,class:"level level-3",href:"#"+e.slug},p(e.title),9,ht)):v("v-if",!0)])))),128))]),P(s),P(i),P(l),x(e.$slots,"bottom")]),v(" 只想点击背景才关闭 请使用 .self 修饰符 "),S(f("div",{onClick:t[0]||(t[0]=e=>o.clickShowImg=!1),class:"imgBox"},[f("img",{src:o.ImgUrl},null,8,ft)],512),[[I,o.clickShowImg]])],64)};var gt="/blog/_assets/t.4e4b3cb8.png",pt={props:{config:{type:Object,required:!0},style:{type:Object,required:!1}},data:()=>({src:gt,showModal:!1,modalUrl:""}),computed:{},methods:{showModalClick(e){console.log(e),this.modalUrl=e,this.showModal=!0},getMagnify(){console.log(111)}},created(){},mounted(){}};const vt={class:"card"},At={class:"console"},bt=(e=>(L("data-v-c2d2d9d4"),e=e(),E(),e))((()=>f("div",{class:"circle-yellow"},null,-1))),kt={class:"content"},yt={class:"card-title"},wt=["src"],Pt={class:"social"},Ct=["href"],Mt={class:"nickName"},xt={class:"skill-wrap"},St={class:"introduce"},It=["src"];pt.render=function(e,t,n,a,o,r){return b(),C(T,{name:"bounce"},{default:B((()=>[S(f("div",vt,[f("div",At,[f("div",{onClick:t[0]||(t[0]=e=>n.config.showCard=!1),class:"circle-red"}),bt,f("div",{onClick:t[1]||(t[1]=(...e)=>r.getMagnify&&r.getMagnify(...e)),class:"circle-green"})]),f("div",kt,[f("div",yt,[f("img",{src:n.config.headImg},null,8,wt),f("div",Pt,[(b(!0),h(y,null,w(n.config.iconArray,((e,t)=>(b(),h("a",{class:A(["iconfont",e.icon]),href:e.link?e.link:"javascript:;",[j(e.event.type)]:t=>r.showModalClick(e.event.imgUrl),key:e},null,16,Ct)))),128))])]),f("h4",Mt,p(n.config.nickName),1),f("div",xt,[(b(!0),h(y,null,w(n.config.skill,((e,t)=>(b(),h("span",{class:"skill",key:e},p(e),1)))),128))]),(b(!0),h(y,null,w(n.config.synopsis,((e,t)=>(b(),h("div",null,[f("p",St,p(e),1)])))),256)),o.showModal?(b(),h("div",{key:0,class:"modal",onClick:t[2]||(t[2]=D((e=>o.showModal=!1),["self"]))},[f("div",null,[f("img",{src:o.modalUrl},null,8,It)])])):v("v-if",!0)])],512),[[I,n.config.showCard]])])),_:1})},pt.__scopeId="data-v-c2d2d9d4";var Lt={updated(){this.modeSelect(localStorage.getItem("mode"))},mounted(){this.modeSelect(localStorage.getItem("mode"))},components:{Home:Ee,NavBar:ke,ToggleSideBarButton:Fe,SideBar:Re,Page:rt,Card:pt},data:()=>({themeMode:"theme",cardConfig:{showCard:!0,headImg:gt,iconArray:[{icon:"icon-weixin",link:!1,event:{type:"click",imgUrl:"/blog/_assets/mycode.91741545.jpg"}},{icon:"icon-github",link:"https://github.com/gelxgx",event:!1}],nickName:"瘦虎",skill:["🔨 Vue","🧑🏻‍💻 切图","🍻 喝酒"],synopsis:["前端切图仔，就职于百度网盘团队","努力学习React、TypeScrpt，偶尔研究有趣的源码"]}}),methods:{modeSelect(e){e&&(this.themeMode=e,localStorage.setItem("mode",e),document.querySelector("html").style.setProperty("background-color","theme"===this.themeMode?"#fff":"#0d1117"))}},setup(){const e=F(),t=R(),n=Q(),a=ne(),o=c(!1),r=u((()=>!!t.value.frontmatter.home)),s=u((()=>{const{themeConfig:e}=a.value,{frontmatter:o}=t.value;return!1!==o.navbar&&!1!==e.navbar&&(n.value.title||e.logo||e.repo||e.nav)})),i=u((()=>{const{frontmatter:e}=t.value,{themeConfig:n}=a.value;return!e.home&&!1!==e.sidebar&&("object"==typeof n.sidebar&&0!=Object.keys(n.sidebar).length||Array.isArray(n.sidebar)&&0!=n.sidebar.length)})),l=u((()=>[{"no-navbar":!s.value,"sidebar-open":o.value,"no-sidebar":!i.value}])),d=e=>{o.value="boolean"==typeof e?e:!o.value},m=d.bind(null,!1);return k(e,m),{showNavbar:s,showSidebar:i,openSideBar:o,pageClasses:l,enableHome:r,toggleSidebar:d}}};const Et={key:0,class:"navbar"},Bt={key:1,class:"home-bg"},Tt=[(e=>(L("data-v-cc5eb4e0"),e=e(),E(),e))((()=>f("div",{class:"content-bg"},[f("h1",null,[f("p",null,"保持耐心，无限进步")])],-1)))],jt={key:2,class:"home","aria-labelledby":"main-title"},Dt={key:3},Ot={class:"theme-select"};Lt.render=function(e,t,n,a,o,r){const s=M("NavBar"),i=M("ToggleSideBarButton"),l=M("SideBar"),c=M("Home"),d=M("Card"),u=M("Page"),m=M("Debug");return b(),h(y,null,[f("div",{id:"containerColor",class:A([a.pageClasses,o.themeMode])},[a.showNavbar?(b(),h("header",Et,[P(s,null,{search:B((()=>[x(e.$slots,"navbar-search")])),_:3}),P(i,{onToggle:a.toggleSidebar},null,8,["onToggle"])])):v("v-if",!0),f("aside",{class:A({open:a.openSideBar})},[P(l,null,{top:B((()=>[x(e.$slots,"sidebar-top")])),bottom:B((()=>[x(e.$slots,"sidebar-bottom")])),_:3})],2),a.enableHome?(b(),h("div",Bt,Tt)):v("v-if",!0),v(" TODO: make this button accessible "),f("div",{class:"sidebar-mask",onClick:t[0]||(t[0]=e=>a.toggleSidebar(!1))}),a.enableHome?(b(),h("main",jt,[P(c,{style:{flex:"1"}},{hero:B((()=>[x(e.$slots,"home-hero")])),features:B((()=>[x(e.$slots,"home-features")])),footer:B((()=>[x(e.$slots,"home-footer")])),_:3}),P(d,{config:o.cardConfig,class:"Card"},null,8,["config"])])):(b(),h("main",Dt,[P(u,null,{top:B((()=>[x(e.$slots,"page-top")])),bottom:B((()=>[x(e.$slots,"page-bottom")])),_:3})])),f("div",Ot,[f("ul",null,[f("li",{onClick:t[1]||(t[1]=e=>r.modeSelect("theme")),class:A("theme"==o.themeMode?"active":"")},"☀️",2),f("li",{onClick:t[2]||(t[2]=e=>r.modeSelect("theme themeDark")),class:A("theme"!==o.themeMode?"active":"")},"🌑",2)])])],2),P(m)],64)},Lt.__scopeId="data-v-cc5eb4e0";const Nt=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];var $t={setup:()=>({getMsg:()=>Nt[Math.floor(Math.random()*Nt.length)]})};const Ft={class:"theme"},Ut=f("h1",null,"404",-1),_t=["href"];$t.render=function(e,t,n,a,o,r){return b(),h("div",Ft,[Ut,f("blockquote",null,p(e.getMsg()),1),f("a",{href:e.$site.base,"aria-label":"go to home"}," Take me home. ",8,_t)])};const Ht={Layout:Lt,NotFound:$t};var Rt=m({setup(){const e=Q();return{data:u((()=>function(e){const t=[];let n=0,a=-1;for(let o=0;o<e.length;o++){const r=e[o],s=r.frontMatter.date.split("-")[0];s==n?t[a].push(r):(a++,t[a]=[],t[a].push(r),n=s)}return t}(e.value.themeConfig.pages))),base:"/blog"}}});const qt={class:""},Vt={class:"year"},Wt=["href"],Gt={class:"title"},zt={class:"date"};Rt.render=function(e,t,n,a,o,r){return b(),h("div",qt,[(b(!0),h(y,null,w(e.data,((t,n)=>(b(),h("div",{class:"years",key:n+t},[f("div",Vt,p(t[0].frontMatter.date.split("-")[0]),1),(b(!0),h(y,null,w(t,((t,n)=>S((b(),h("a",{href:e.base+t.regularPath||"",key:n,class:"article"},[f("div",Gt,p(t.frontMatter.title||""),1),f("div",zt,p(t.frontMatter.date.slice(5)||""),1)],8,Wt)),[[I,!t.frontMatter.home]]))),128))])))),128))])},Rt.__scopeId="data-v-e0977160";var Yt=m({setup(){const e=Q(),t=F(),n=u((()=>function(e){const t={};for(let n=0;n<e.length;n++){const a=e[n];a.frontMatter.tags.forEach((e=>{t[e]||(t[e]=[]),t[e].push(a)}))}return t}(e.value.themeConfig.pages)));let a=c("");return{data:n,route:t,toggleTag:e=>{a.value=e},selectTag:a,base:"/blog"}}});const Xt={class:"header"},Jt=["href"],Kt={class:"title"},Qt={class:"date"},Zt={class:"tags"},en=["onClick"];Yt.render=function(e,t,n,a,o,r){return b(),h(y,null,[f("div",Xt,p(e.selectTag),1),(b(!0),h(y,null,w(e.data[e.selectTag],((t,n)=>S((b(),h("a",{href:e.base+t.regularPath||"",key:n,class:"article"},[f("div",Kt,p(t.frontMatter.title||""),1),f("div",Qt,p(t.frontMatter.date.slice(5)||""),1)],8,Jt)),[[I,!t.frontMatter.home]]))),128)),f("div",Zt,[(b(!0),h(y,null,w(e.data,((t,n,a)=>(b(),h("span",{onClick:t=>e.toggleTag(n),class:"tag",key:a+n},p(n),9,en)))),128))])],64)},Yt.__scopeId="data-v-3aada489";var tn={name:"blog-comments",mounted(){const e={enable:!0,clientID:"5291b85384e2d6e9306a",clientSecret:"ae7841b520456eb854421561a0efa7500a99567b",repo:"blog",owner:"gelxgx",admin:["gelxgx"],id:decodeURI(window.location.pathname),proxy:"https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token",language:"zh-CN",distractionFreeMode:!0};new Gitalk(e).render("gitalk-container")}};const nn={id:"gitalk-container"};function an(){window.onbeforeprint=function(e){console.log(e)},window.onafterprint=function(t){window.document.body.innerHTML=e,location.reload()},location.hash="";let e=window.document.body.innerHTML,t="\x3c!--startPrint--\x3e",n=e.substr(e.indexOf(t)+t.length);n=n.substring(0,n.indexOf("\x3c!--endPrint--\x3e")),window.document.body.innerHTML=n,window.print()}tn.render=function(e,t,n,a,o,r){return b(),h("div",nn)};var on=m({setup:()=>({goPrint:an})});on.render=function(e,t,n,a,o,r){return b(),h("button",{class:"goPrint",onClick:t[0]||(t[0]=t=>e.goPrint())},"📄 打印")},on.__scopeId="data-v-48934957";var rn={data:()=>({img:gt,FriendshipData:[]}),mounted(){}};const sn={class:"Friendship"},ln=["href"],cn={class:"introduce"},dn={class:"nickName"};rn.render=function(e,t,n,a,o,r){return b(),h("div",sn,[(b(!0),h(y,null,w(o.FriendshipData,((e,t)=>(b(),h("a",{href:e.link,key:t+e.link,target:"_blank",rel:"noopener noreferrer"},[v(' <img :src="item.imgUrl" > '),f("div",{class:"img-div",style:O({background:"url("+e.imgUrl+") center center / cover no-repeat"})},null,4),f("div",cn,[f("p",dn,p(e.nickName),1),f("p",null,p(e.introduce),1)])],8,ln)))),128))])},rn.__scopeId="data-v-1ff3d8d5";var un={...Ht,enhanceApp({app:e,router:t,siteData:n}){e.component("Comment",tn),e.component("Tags",Yt),e.component("Docs",Rt),e.component("Friendship",rn),e.component("Print",on)}};const mn=un.NotFound||(()=>"404 Not Found");function hn(){const e=c();let o,r=q;const s=function(e,o){const r=t({path:"/",contentComponent:null}),s="undefined"!=typeof window;function i(e){e=e||(s?location.href:"/");const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),s&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),l(e)}async function l(t,i=0){const l=new URL(t,"http://a.com"),c=r.path=l.pathname;try{let t=e(r);if("then"in t&&"function"==typeof t.then&&(t=await t),r.path===c){if(!t)throw new Error(`Invalid route component: ${t}`);r.contentComponent=n(t),s&&a((()=>{if(l.hash&&!i){const e=document.querySelector(decodeURIComponent(l.hash));if(e)return void U(e,l.hash)}window.scrollTo(0,i)}))}}catch(e){e.message.match(/fetch/)||console.error(e),r.path===c&&(r.contentComponent=o?n(o):null)}}return s&&(window.addEventListener("click",(e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:a,hostname:o,pathname:r,hash:s,target:l}=t,c=window.location;e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===l||a!==c.protocol||o!==c.hostname||(e.preventDefault(),r===c.pathname?s&&s!==c.hash&&(history.pushState(null,"",s),U(t,s,t.classList.contains("header-anchor"))):i(n))}}),{capture:!0}),window.addEventListener("popstate",(e=>{l(location.href,e.state&&e.state.scrollPosition||0)})),window.addEventListener("hashchange",(e=>{e.preventDefault()}))),{route:r,go:i}}((t=>{let n=V(t.path);if(r&&(o=n),(r||o===n)&&(n=n.replace(/\.js$/,".lean.js")),q)return r=!1,import(n).then((t=>(t.__pageData&&(e.value=d(JSON.parse(t.__pageData))),t.default)));{const t=require(n);return e.value=JSON.parse(t.__pageData),t.default}}),mn),i=N(un.Layout);i.provide($,s),i.provide(H,e),i.component("Content",X),i.component("Debug",(()=>null));const l=ne(s.route);return q&&_(e,l),Object.defineProperties(i.config.globalProperties,{$site:{get:()=>J.value},$siteByRoute:{get:()=>l.value},$page:{get:()=>e.value},$theme:{get:()=>l.value.themeConfig}}),un.enhanceApp&&un.enhanceApp({app:i,router:s,siteData:l}),{app:i,router:s}}if(q){const{app:e,router:t}=hn();t.go().then((()=>{e.mount("#app")}))}export{hn as createApp};
