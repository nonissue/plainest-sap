import{S as t,i as s,s as a,a as e,e as o,t as r,g as n,c as i,b as c,d as h,f as l,h as u,k as f,l as p,y as d,n as m}from"./index.0127214d.js";function g(t){let s,a,g,v,x,y,H,j,E,b=t[0].title+"",k=t[0].author+"",q=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=o("h1"),v=r(b),x=e(),y=o("h3"),H=r(k),j=e(),E=o("div"),this.h()},l(t){a=n(t),g=i(t,"H1",{});var s=c(g);v=h(s,b),s.forEach(l),x=n(t),y=i(t,"H3",{});var e=c(y);H=h(e,k),e.forEach(l),j=n(t),E=i(t,"DIV",{class:!0}),c(E).forEach(l),this.h()},h(){u(E,"class","content svelte-1ycksgq")},m(t,s){f(t,a,s),f(t,g,s),p(g,v),f(t,x,s),f(t,y,s),p(y,H),f(t,j,s),f(t,E,s),E.innerHTML=q},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&b!==(b=t[0].title+"")&&d(v,b),1&a&&k!==(k=t[0].author+"")&&d(H,k),1&a&&q!==(q=t[0].html+"")&&(E.innerHTML=q)},i:m,o:m,d(t){t&&l(a),t&&l(g),t&&l(x),t&&l(y),t&&l(j),t&&l(E)}}}async function v({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function x(t,s,a){let{post:e}=s;return t.$set=(t=>{"post"in t&&a(0,e=t.post)}),[e]}export default class extends t{constructor(t){super(),s(this,t,x,g,a,{post:0})}}export{v as preload};
