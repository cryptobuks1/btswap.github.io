(function(t){function e(e){for(var r,o,u=e[0],c=e[1],i=e[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={index:0},a={index:0},s=[];function u(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-34dc1ff8":"48852fa0","chunk-9bef2ebe":"34108538"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-34dc1ff8":1,"chunk-9bef2ebe":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-34dc1ff8":"9517dccb","chunk-9bef2ebe":"a874b4fd"}[t]+".css",a=c.p+r,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var i=s[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],l=i.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],p.parentNode.removeChild(p),n(s)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(t);var f=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://cdn.jsdelivr.net/gh/btswap/btswap.github.io/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3aa7":function(t,e,n){t.exports=n.p+"img/slowmist.18792293.png"},"4ffd":function(t,e){t.exports="data:image/png;base64,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"},"56d7":function(t,e,n){"use strict";n.r(e);n("5466"),n("450d");var r=n("ecdf"),o=n.n(r),a=(n("38a0"),n("ad41")),s=n.n(a),u=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Nav"),n("router-view")],1)},i=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-container"},[r("header",[r("div",{staticClass:"left",on:{click:t.goEx}},[r("img",{attrs:{src:n("4ffd"),alt:""}}),r("span",{staticClass:"text"},[t._v("BTswap")]),t._m(0)]),r("div",{staticClass:"right"},[r("a",{staticClass:"text",attrs:{href:"http://btswap.com/whitepaper.pdf",target:"_blank"}},[t._v("Whitepaper")]),r("a",{staticClass:"text",attrs:{href:"https://github.com/btswap",target:"_blank"}},[t._v("Github")]),r("a",{staticClass:"text",attrs:{href:"#guide"}},[t._v("Guidelines")]),r("a",{directives:[{name:"show",rawName:"v-show",value:"Home"==t.poolRouter,expression:"poolRouter == 'Home'"}],staticClass:"text",attrs:{href:"javascript:;"},on:{click:t.goHome}},[t._v(t._s(t.poolRouter))]),r("a",{directives:[{name:"show",rawName:"v-show",value:"Mining Pool"==t.poolRouter,expression:"poolRouter == 'Mining Pool'"}],staticClass:"text",attrs:{href:"javascript:;"},on:{click:t.goToPool}},[t._v(t._s(t.poolRouter))]),r("a",{staticClass:"btn",attrs:{href:"https://ex.btswap.com/",target:"_blank"}},[t._v("Trade Now")])])])])},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"slowmist",attrs:{href:"https://btswap.com/SecurityAuditReport.pdf",target:"_blank"}},[r("img",{attrs:{src:n("3aa7")}})])}],p=(n("c975"),{name:"Nav",data:function(){return{poolRouter:"Home"}},mounted:function(){var t=this;this.$router.onReady((function(){t.$router.history.current.path.indexOf("home")<0?t.poolRouter="Home":t.poolRouter="Mining Pool"}))},methods:{goToPool:function(){this.poolRouter="Home",this.$router.push({path:"/pool"})},goHome:function(){this.poolRouter="Mining Pool",this.$router.push({path:"/home"})},goEx:function(){window.location.href="https://ex.btswap.com/#/"}}}),d=p,h=(n("6024"),n("2877")),m=Object(h["a"])(d,l,f,!1,null,"a4d76f54",null),g=m.exports,v={name:"App",components:{Nav:g}},b=v,w=(n("5c0b"),Object(h["a"])(b,c,i,!1,null,null,null)),y=w.exports,x=(n("d3b7"),n("8c4f"));u["default"].use(x["a"]);var O=[{path:"/",component:function(){return n.e("chunk-34dc1ff8").then(n.bind(null,"cfbd"))}},{path:"/pool",component:function(){return n.e("chunk-34dc1ff8").then(n.bind(null,"cfbd"))}},{path:"/home",component:function(){return n.e("chunk-9bef2ebe").then(n.bind(null,"5148"))}},{path:"*",component:function(){return n.e("chunk-9bef2ebe").then(n.bind(null,"5148"))}}],T=new x["a"]({mode:"hash",routes:O});n("77ed"),n("b20f");u["default"].config.productionTip=!1,u["default"].use(s.a),u["default"].use(o.a),new u["default"]({router:T,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},6024:function(t,e,n){"use strict";var r=n("858a"),o=n.n(r);o.a},"858a":function(t,e,n){},"9c0c":function(t,e,n){},b20f:function(t,e,n){}});