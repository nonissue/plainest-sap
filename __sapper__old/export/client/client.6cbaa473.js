import{n as e,s as t,S as s,i as r,e as n,t as o,a,c as l,b as c,d as i,f as u,g as p,h as f,j as h,k as g,l as m,m as d,o as $,p as v,q as b,r as E,u as S,v as _,w as y,x as P,y as w,z as R,A as L,B as x,C as A,D as j,E as C,F as O}from"./index.0127214d.js";const U=[];function q(s,r=e){let n;const o=[];function a(e){if(t(s,e)&&(s=e,n)){const e=!U.length;for(let e=0;e<o.length;e+=1){const t=o[e];t[1](),U.push(t,s)}if(e){for(let e=0;e<U.length;e+=2)U[e][0](U[e+1]);U.length=0}}}return{set:a,update:function(e){a(e(s))},subscribe:function(t,l=e){const c=[t,l];return o.push(c),1===o.length&&(n=r(a)||e),t(s),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(n(),n=null)}}}}const N={},I=()=>({});function D(t){let s,r,d,$,v,b,E,S,_,y,P,w,R,L,x,A,j;return{c(){s=n("nav"),r=n("ul"),d=n("li"),$=n("a"),v=o("collate"),b=a(),E=n("li"),S=n("a"),_=o("about"),y=a(),P=n("li"),w=n("a"),R=o("blog"),L=a(),x=n("li"),A=n("a"),j=o("authors"),this.h()},l(e){s=l(e,"NAV",{class:!0});var t=c(s);r=l(t,"UL",{class:!0});var n=c(r);d=l(n,"LI",{class:!0});var o=c(d);$=l(o,"A",{class:!0,href:!0});var a=c($);v=i(a,"collate"),a.forEach(u),o.forEach(u),b=p(n),E=l(n,"LI",{class:!0});var f=c(E);S=l(f,"A",{href:!0,class:!0});var h=c(S);_=i(h,"about"),h.forEach(u),f.forEach(u),y=p(n),P=l(n,"LI",{class:!0});var g=c(P);w=l(g,"A",{rel:!0,href:!0,class:!0});var m=c(w);R=i(m,"blog"),m.forEach(u),g.forEach(u),L=p(n),x=l(n,"LI",{class:!0});var C=c(x);A=l(C,"A",{rel:!0,href:!0,class:!0});var O=c(A);j=i(O,"authors"),O.forEach(u),C.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){f($,"class","logo svelte-mgrglg"),f($,"href","."),h($,"selected",void 0===t[0]),f(d,"class","svelte-mgrglg"),f(S,"href","about"),f(S,"class","svelte-mgrglg"),h(S,"selected","about"===t[0]),f(E,"class","svelte-mgrglg"),f(w,"rel","prefetch"),f(w,"href","blog"),f(w,"class","svelte-mgrglg"),h(w,"selected","blog"===t[0]),f(P,"class","svelte-mgrglg"),f(A,"rel","prefetch"),f(A,"href","author"),f(A,"class","svelte-mgrglg"),h(A,"selected","author"===t[0]),f(x,"class","svelte-mgrglg"),f(r,"class","svelte-mgrglg"),f(s,"class","svelte-mgrglg")},m(e,t){g(e,s,t),m(s,r),m(r,d),m(d,$),m($,v),m(r,b),m(r,E),m(E,S),m(S,_),m(r,y),m(r,P),m(P,w),m(w,R),m(r,L),m(r,x),m(x,A),m(A,j)},p(e,[t]){1&t&&h($,"selected",void 0===e[0]),1&t&&h(S,"selected","about"===e[0]),1&t&&h(w,"selected","blog"===e[0]),1&t&&h(A,"selected","author"===e[0])},i:e,o:e,d(e){e&&u(s)}}}function k(e,t,s){let{segment:r}=t;return e.$set=(e=>{"segment"in e&&s(0,r=e.segment)}),[r]}class H extends s{constructor(e){super(),r(this,e,k,D,t,{segment:0})}}function B(e){let t,s,r;const o=new H({props:{segment:e[0]}}),i=e[2].default,h=d(i,e,e[1],null);return{c(){$(o.$$.fragment),t=a(),s=n("main"),h&&h.c(),this.h()},l(e){v(o.$$.fragment,e),t=p(e),s=l(e,"MAIN",{class:!0});var r=c(s);h&&h.l(r),r.forEach(u),this.h()},h(){f(s,"class","svelte-bxtarj")},m(e,n){b(o,e,n),g(e,t,n),g(e,s,n),h&&h.m(s,null),r=!0},p(e,[t]){const s={};1&t&&(s.segment=e[0]),o.$set(s),h&&h.p&&2&t&&h.p(E(i,e,e[1],null),S(i,e[1],t,null))},i(e){r||(_(o.$$.fragment,e),_(h,e),r=!0)},o(e){y(o.$$.fragment,e),y(h,e),r=!1},d(e){P(o,e),e&&u(t),e&&u(s),h&&h.d(e)}}}function J(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:o}=t;return e.$set=(e=>{"segment"in e&&s(0,r=e.segment),"$$scope"in e&&s(1,o=e.$$scope)}),[r,o,n]}class V extends s{constructor(e){super(),r(this,e,J,B,t,{segment:0})}}function K(e){let t,s,r=e[1].stack+"";return{c(){t=n("pre"),s=o(r)},l(e){t=l(e,"PRE",{});var n=c(t);s=i(n,r),n.forEach(u)},m(e,r){g(e,t,r),m(t,s)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&w(s,r)},d(e){e&&u(t)}}}function T(t){let s,r,h,d,$,v,b,E,S,_=t[1].message+"";document.title=s=t[0];let y=t[2]&&t[1].stack&&K(t);return{c(){r=a(),h=n("h1"),d=o(t[0]),$=a(),v=n("p"),b=o(_),E=a(),y&&y.c(),S=R(),this.h()},l(e){r=p(e),h=l(e,"H1",{class:!0});var s=c(h);d=i(s,t[0]),s.forEach(u),$=p(e),v=l(e,"P",{class:!0});var n=c(v);b=i(n,_),n.forEach(u),E=p(e),y&&y.l(e),S=R(),this.h()},h(){f(h,"class","svelte-8od9u6"),f(v,"class","svelte-8od9u6")},m(e,t){g(e,r,t),g(e,h,t),m(h,d),g(e,$,t),g(e,v,t),m(v,b),g(e,E,t),y&&y.m(e,t),g(e,S,t)},p(e,[t]){1&t&&s!==(s=e[0])&&(document.title=s),1&t&&w(d,e[0]),2&t&&_!==(_=e[1].message+"")&&w(b,_),e[2]&&e[1].stack?y?y.p(e,t):((y=K(e)).c(),y.m(S.parentNode,S)):y&&(y.d(1),y=null)},i:e,o:e,d(e){e&&u(r),e&&u(h),e&&u($),e&&u(v),e&&u(E),y&&y.d(e),e&&u(S)}}}function z(e,t,s){let{status:r}=t,{error:n}=t;return e.$set=(e=>{"status"in e&&s(0,r=e.status),"error"in e&&s(1,n=e.error)}),[r,n,!1]}class F extends s{constructor(e){super(),r(this,e,z,T,t,{status:0,error:1})}}function G(e){let t,s;const r=[e[4].props];var n=e[4].component;function o(e){let t={};for(let e=0;e<r.length;e+=1)t=L(t,r[e]);return{props:t}}if(n)var a=new n(o());return{c(){a&&$(a.$$.fragment),t=R()},l(e){a&&v(a.$$.fragment,e),t=R()},m(e,r){a&&b(a,e,r),g(e,t,r),s=!0},p(e,s){const l=16&s?x(r,[A(e[4].props)]):{};if(n!==(n=e[4].component)){if(a){C();const e=a;y(e.$$.fragment,1,0,()=>{P(e,1)}),O()}n?(a=new n(o()),$(a.$$.fragment),_(a.$$.fragment,1),b(a,t.parentNode,t)):a=null}else n&&a.$set(l)},i(e){s||(a&&_(a.$$.fragment,e),s=!0)},o(e){a&&y(a.$$.fragment,e),s=!1},d(e){e&&u(t),a&&P(a,e)}}}function M(e){let t;const s=new F({props:{error:e[0],status:e[1]}});return{c(){$(s.$$.fragment)},l(e){v(s.$$.fragment,e)},m(e,r){b(s,e,r),t=!0},p(e,t){const r={};1&t&&(r.error=e[0]),2&t&&(r.status=e[1]),s.$set(r)},i(e){t||(_(s.$$.fragment,e),t=!0)},o(e){y(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function W(e){let t,s,r,n;const o=[M,G],a=[];function l(e,t){return e[0]?0:1}return t=l(e),s=a[t]=o[t](e),{c(){s.c(),r=R()},l(e){s.l(e),r=R()},m(e,s){a[t].m(e,s),g(e,r,s),n=!0},p(e,n){let c=t;(t=l(e))===c?a[t].p(e,n):(C(),y(a[c],1,1,()=>{a[c]=null}),O(),(s=a[t])||(s=a[t]=o[t](e)).c(),_(s,1),s.m(r.parentNode,r))},i(e){n||(_(s),n=!0)},o(e){y(s),n=!1},d(e){a[t].d(e),e&&u(r)}}}function X(e){let t;const s=[{segment:e[2][0]},e[3].props];let r={$$slots:{default:[W]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)r=L(r,s[e]);const n=new V({props:r});return{c(){$(n.$$.fragment)},l(e){v(n.$$.fragment,e)},m(e,s){b(n,e,s),t=!0},p(e,[t]){const r=12&t?x(s,[4&t&&{segment:e[2][0]},8&t&&A(e[3].props)]):{};83&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){t||(_(n.$$.fragment,e),t=!0)},o(e){y(n.$$.fragment,e),t=!1},d(e){P(n,e)}}}function Y(e,t,s){let{stores:r}=t,{error:n}=t,{status:o}=t,{segments:a}=t,{level0:l}=t,{level1:c=null}=t;return j(N,r),e.$set=(e=>{"stores"in e&&s(5,r=e.stores),"error"in e&&s(0,n=e.error),"status"in e&&s(1,o=e.status),"segments"in e&&s(2,a=e.segments),"level0"in e&&s(3,l=e.level0),"level1"in e&&s(4,c=e.level1)}),[n,o,a,l,c,r]}class Q extends s{constructor(e){super(),r(this,e,Y,X,t,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Z=[/^\/author.json$/,/^\/author\/([^\/]+?).json$/,/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],ee=[{js:()=>import("./index.1b91b838.js"),css:["index.1b91b838.css"]},{js:()=>import("./index.5e458026.js"),css:["index.5e458026.css"]},{js:()=>import("./[author].034e2d23.js"),css:["[author].034e2d23.css"]},{js:()=>import("./about.3bcc56d9.js"),css:[]},{js:()=>import("./index.e8249de9.js"),css:["index.e8249de9.css"]},{js:()=>import("./[slug].4bd10150.js"),css:["[slug].4bd10150.css"]}],te=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/author\/?$/,parts:[{i:1}]},{pattern:/^\/author\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({author:e(t[1])})}]},{pattern:/^\/about\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:5,params:t=>({slug:e(t[1])})}]}])(decodeURIComponent);const se="undefined"!=typeof __SAPPER__&&__SAPPER__;let re,ne,oe,ae=!1,le=[],ce="{}";const ie={page:q({}),preloading:q(null),session:q(se&&se.session)};let ue,pe;ie.session.subscribe(async e=>{if(ue=e,!ae)return;pe=!0;const t=be(new URL(location.href)),s=ne={},{redirect:r,props:n,branch:o}=await ye(t);s===ne&&await _e(r,o,n,t.page)});let fe,he=null;let ge,me=1;const de="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},$e={};function ve(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function be(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(se.baseUrl))return null;let t=e.pathname.slice(se.baseUrl.length);if(""===t&&(t="/"),!Z.some(e=>e.test(t)))for(let s=0;s<te.length;s+=1){const r=te[s],n=r.pattern.exec(t);if(n){const s=ve(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(n):{},l={host:location.host,path:t,query:s,params:a};return{href:e.href,route:r,match:n,page:l}}}}function Ee(){return{x:pageXOffset,y:pageYOffset}}async function Se(e,t,s,r){if(t)ge=t;else{const e=Ee();$e[ge]=e,t=ge=++me,$e[ge]=s?e:{x:0,y:0}}ge=t,re&&ie.preloading.set(!0);const n=he&&he.href===e.href?he.promise:ye(e);he=null;const o=ne={},{redirect:a,props:l,branch:c}=await n;if(o===ne&&(await _e(a,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=$e[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}$e[ge]=e,e&&scrollTo(e.x,e.y)}}async function _e(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=be(new URL(e,document.baseURI));return s?(de[t.replaceState?"replaceState":"pushState"]({id:ge},"",e),Se(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(ie.page.set(r),ie.preloading.set(!1),re)re.$set(s);else{s.stores={page:{subscribe:ie.page.subscribe},preloading:{subscribe:ie.preloading.subscribe},session:ie.session},s.level0={props:await oe};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)we(e.nextSibling);we(e),we(t)}re=new Q({target:fe,props:s,hydrate:!0})}le=t,ce=JSON.stringify(r.query),ae=!0,pe=!1}async function ye(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let l;oe||(oe=se.preloaded[0]||I.call(a,{host:s.host,path:s.path,query:s.query,params:{}},ue));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const p=r[l];if(function(e,t,s,r){if(r!==ce)return!0;const n=le[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(l,p,i,n)&&(u=!0),o.segments[c]=r[l+1],!t)return{segment:p};const f=c++;if(!pe&&!u&&le[l]&&le[l].part===t.i)return le[l];u=!1;const{default:h,preload:g}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Pe);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(ee[t.i]);let m;return m=ae||!se.preloaded[l+1]?g?await g.call(a,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},ue):{}:se.preloaded[l+1],o[`level${f}`]={component:h,props:m,segment:p,match:i,part:t.i}}))}catch(e){o.error=e,o.status=500,l=[]}return{redirect:n,props:o,branch:l}}function Pe(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function we(e){e.parentNode.removeChild(e)}function Re(e){const t=be(new URL(e,document.baseURI));if(t)return he&&e===he.href||function(e,t){he={href:e,promise:t}}(e,ye(t)),he.promise}let Le;function xe(e){clearTimeout(Le),Le=setTimeout(()=>{Ae(e)},20)}function Ae(e){const t=Ce(e.target);t&&"prefetch"===t.rel&&Re(t.href)}function je(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Ce(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const o=be(n);if(o){Se(o,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),de.pushState({id:ge},"",n.href)}}function Ce(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Oe(e){if($e[ge]=Ee(),e.state){const t=be(new URL(location.href));t?Se(t,e.state.id):location.href=location.href}else(function(e){ge=e})(me=me+1),de.replaceState({id:ge},"",location.href)}!function(e){var t;"scrollRestoration"in de&&(de.scrollRestoration="manual"),t=e.target,fe=t,addEventListener("click",je),addEventListener("popstate",Oe),addEventListener("touchstart",Ae),addEventListener("mousemove",xe),Promise.resolve().then(()=>{const{hash:e,href:t}=location;de.replaceState({id:me},"",t);const s=new URL(location.href);if(se.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:o,status:a,error:l}=se;oe||(oe=o&&o[0]),_e(null,[],{error:l,status:a,session:n,level0:{props:oe},level1:{props:{status:a,error:l},component:F},segments:o},{host:t,path:s,query:ve(r),params:{}})}();const r=be(s);return r?Se(r,me,!0,e):void 0})}({target:document.querySelector("#sapper")});
