if(!self.define){let e,i={};const t=(t,s)=>(t=new URL(t+".js",s).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,n)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let r={};const l=e=>t(e,u),a={module:{uri:u},exports:r,require:l};i[u]=Promise.all(s.map((e=>a[e]||l(e)))).then((e=>(n(...e),r)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"astana-vue"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/https://github.com/mirlek/astana-vue/css/app.adb0a45a.css",revision:null},{url:"/https://github.com/mirlek/astana-vue/css/chunk-vendors.8a42e1de.css",revision:null},{url:"/https://github.com/mirlek/astana-vue/img/view_11.2cf5195d.jpg",revision:null},{url:"/https://github.com/mirlek/astana-vue/img/view_12.f0f08b05.jpg",revision:null},{url:"/https://github.com/mirlek/astana-vue/img/view_13.3795794c.jpg",revision:null},{url:"/https://github.com/mirlek/astana-vue/img/view_14.c83c4927.jpg",revision:null},{url:"/https://github.com/mirlek/astana-vue/img/view_8.9cd8b49d.jpg",revision:null},{url:"/https://github.com/mirlek/astana-vue/index.html",revision:"98b5e630ffe2e0543767d425c359034a"},{url:"/https://github.com/mirlek/astana-vue/js/app.fe2809f3.js",revision:null},{url:"/https://github.com/mirlek/astana-vue/js/chunk-vendors.df0b97f5.js",revision:null},{url:"/https://github.com/mirlek/astana-vue/manifest.json",revision:"da3ec3cc863e1a8e35e15e9dde64043c"},{url:"/https://github.com/mirlek/astana-vue/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
