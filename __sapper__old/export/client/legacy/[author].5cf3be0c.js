import{a as t,b as r,c as n,d as s,i as a,s as o,e,S as c,f as u,t as i,g as f,h,j as l,k as p,l as v,m as g,o as m,q as d,r as b,D as y,n as x,M as E}from"./index.d1c2ce2f.js";import{_ as j}from"./slicedToArray.f13a096f.js";import{_ as k,a as A}from"./asyncToGenerator.ca7b4707.js";function D(t,r,n){var s=t.slice();return s[2]=r[n],s}function P(t){var r,n,s,a,o,e,c,x,E=t[2].title+"",j=t[2].author+"";return{c:function(){r=u("li"),n=u("a"),s=i(E),o=i("\n      by\n      "),e=u("code"),c=i(j),x=f(),this.h()},l:function(t){r=h(t,"LI",{});var a=l(r);n=h(a,"A",{rel:!0,href:!0});var u=l(n);s=p(u,E),u.forEach(v),o=p(a,"\n      by\n      "),e=h(a,"CODE",{});var i=l(e);c=p(i,j),i.forEach(v),x=g(a),a.forEach(v),this.h()},h:function(){m(n,"rel","prefetch"),m(n,"href",a="blog/"+t[2].slug)},m:function(t,a){d(t,r,a),b(r,n),b(n,s),b(r,o),b(r,e),b(e,c),b(r,x)},p:function(t,r){1&r&&E!==(E=t[2].title+"")&&y(s,E),1&r&&a!==(a="blog/"+t[2].slug)&&m(n,"href",a),1&r&&j!==(j=t[2].author+"")&&y(c,j)},d:function(t){t&&v(r)}}}function q(t){var r,n,s,a,o,e,c,k,A;document.title=r="Posts by "+t[1];for(var q=t[0],w=[],I=0;I<q.length;I+=1)w[I]=P(D(t,q,I));return{c:function(){n=f(),s=u("div"),a=u("span"),o=i("posts by"),e=f(),c=u("h2"),k=i(t[1]),A=f();for(var r=0;r<w.length;r+=1)w[r].c();this.h()},l:function(r){n=g(r),s=h(r,"DIV",{class:!0});var u=l(s);a=h(u,"SPAN",{class:!0});var i=l(a);o=p(i,"posts by"),i.forEach(v),e=g(u),c=h(u,"H2",{});var f=l(c);k=p(f,t[1]),f.forEach(v),A=g(u);for(var m=0;m<w.length;m+=1)w[m].l(u);u.forEach(v),this.h()},h:function(){m(a,"class","lede svelte-hvloaf"),m(s,"class","content svelte-hvloaf")},m:function(t,r){d(t,n,r),d(t,s,r),b(s,a),b(a,o),b(s,e),b(s,c),b(c,k),b(s,A);for(var u=0;u<w.length;u+=1)w[u].m(s,null)},p:function(t,n){var a=j(n,1)[0];if(2&a&&r!==(r="Posts by "+t[1])&&(document.title=r),2&a&&y(k,t[1]),1&a){var o;for(q=t[0],o=0;o<q.length;o+=1){var e=D(t,q,o);w[o]?w[o].p(e,a):(w[o]=P(e),w[o].c(),w[o].m(s,null))}for(;o<w.length;o+=1)w[o].d(1);w.length=q.length}},i:x,o:x,d:function(t){t&&v(n),t&&v(s),E(w,t)}}}function w(t){return I.apply(this,arguments)}function I(){return(I=k(A.mark(function t(r){var n,s,a,o,e;return A.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.params,r.query,t.next=3,this.fetch("author.json");case 3:return s=t.sent,t.next=6,s.json();case 6:if(a=t.sent,o=a,console.log(n),e=o.filter(function(t){return t.author===n.author}),console.log(e),200!==s.status){t.next=15;break}return t.abrupt("return",{posts:e,author:n.author});case 15:this.error(s.status,a.message);case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function S(t,r,n){var s=r.posts,a=r.author;return t.$set=function(t){"posts"in t&&n(0,s=t.posts),"author"in t&&n(1,a=t.author)},[s,a]}export default(function(u){function i(t){var c;return r(this,i),c=n(this,s(i).call(this)),a(e(c),t,S,q,o,{posts:0,author:1}),c}return t(i,c),i}());export{w as preload};
