(function(t){function e(e){for(var a,r,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function c(t){return s.p+"assets/js/"+({about:"about"}[t]||t)+"."+{about:"0e3f238f","chunk-1ea1817d":"01df9475","chunk-9cf1eecc":"2de30d6e"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1,"chunk-1ea1817d":1,"chunk-9cf1eecc":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="assets/css/"+({about:"about"}[t]||t)+"."+{about:"16a47b7b","chunk-1ea1817d":"cac38b10","chunk-9cf1eecc":"cb1ab3a5"}[t]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"11db":function(t,e,n){t.exports=n.p+"assets/img/me.2dd7a43c.jpeg"},"15e3":function(t,e,n){"use strict";n("fe2f")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"left-side"},[n("router-link",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/"}},[n("div",{staticClass:"logo"},[t._v(" 席佳 "),n("p",[t._v("HOME")])])]),t._m(0),t._m(1)],1),n("div",{staticClass:"right-side"},[n("transition",{attrs:{name:"slide-left",mode:"out-in"}},[n("router-view")],1)],1)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact-info"},[n("p",{staticClass:"contact-title"},[t._v("Email")]),n("p",{staticClass:"contact-content"},[t._v("bananajiajia@gmail.com")]),n("p",{staticClass:"contact-title"},[t._v("Phone")]),n("p",{staticClass:"contact-content"},[t._v("+45 50654380")]),n("p",{staticClass:"contact-title"},[t._v("Find Me On")]),n("div",{staticClass:"social-media"},[n("a",{attrs:{href:"https://www.linkedin.com/in/xi-jia-51673a171/"}},[n("i",{staticClass:"fa fa-linkedin-square",attrs:{"aria-hidden":"true"}})]),n("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100009823698804"}},[n("i",{staticClass:"fa fa-facebook-official",attrs:{"aria-hidden":"true"}})]),n("a",{attrs:{href:"https://www.instagram.com/xijiajiajia/"}},[n("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inspired"},[t._v(" This page is inspired by "),n("a",{attrs:{href:"https://www.behance.net/gallery/34183081/Personal-CV-or-VCard?tracking_source=search_projects_recommended%7Cresume%20web"}},[n("i",{staticClass:"fa fa-behance",attrs:{"aria-hidden":"true"}})])])}],i={},c=i,s=(n("034f"),n("8883"),n("2877")),u=Object(s["a"])(c,r,o,!1,null,"49772e58",null),l=u.exports,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"medium-picture"},[a("img",{attrs:{src:n("11db"),alt:"wat"}}),a("div",{staticClass:"intros"},[a("div",{staticClass:"name"},[t._v(" Jia Xi ")]),a("div",{staticClass:"title"},[t._v(" Developer ")]),a("div",{staticClass:"introduction"},[t._v(" I'm Jia, graduated from University of Copenhagen in October 2020. I love developments and cooking. I live in Copenhagen with my cute wife 🌈 and our small cat😺 and dog🐶. ")]),a("div",{staticClass:"button",attrs:{id:"portfolio"},on:{click:function(e){return t.$router.push("/portfolio")}}},[t._v(" PORTFOLIO ")]),a("div",{staticClass:"button",attrs:{id:"resume"},on:{click:function(e){return t.$router.push("/resume")}}},[t._v(" RESUME ")])])])},p=[],h={name:"Introduction"},m=h,b=(n("15e3"),Object(s["a"])(m,d,p,!1,null,"7b26d13a",null)),v=b.exports;a["a"].use(f["a"]);var g=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/portfolio",name:"Portfolio",component:function(){return n.e("about").then(n.bind(null,"d084"))}},{path:"/resume",name:"Resume",component:function(){return n.e("about").then(n.bind(null,"8dea"))}},{path:"/webapp",name:"WebApp",component:function(){return n.e("about").then(n.bind(null,"a7bb"))}},{path:"/ml",name:"ML",component:function(){return n.e("about").then(n.bind(null,"fc64"))}},{path:"/diy",name:"DIY",component:function(){return n.e("about").then(n.bind(null,"9a63"))}},{path:"/laser-piano",name:"LaserPiano",component:function(){return n.e("chunk-9cf1eecc").then(n.bind(null,"95ab"))}},{path:"/jian24",name:"Jian24",component:function(){return n.e("chunk-1ea1817d").then(n.bind(null,"475f"))}},{path:"/cook",name:"Cook",component:function(){return n.e("about").then(n.bind(null,"ac7b"))}},{path:"/photo",name:"Photo",component:function(){return n.e("about").then(n.bind(null,"c5ec"))}}],w=new f["a"]({mode:"history",base:"/",routes:g}),C=w,y=n("2f62");a["a"].use(y["a"]);var _=new y["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("1f54");a["a"].config.productionTip=!1,new a["a"]({router:C,store:_,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,n){},8883:function(t,e,n){"use strict";n("c077")},c077:function(t,e,n){},fe2f:function(t,e,n){}});
//# sourceMappingURL=app.974bcc4d.js.map