if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,r,c)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const s={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return d;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-6c734c95"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/08/27/我发现微信、知乎、B站，居然都暗藏彩蛋！/index.html",revision:"ed3744ca8455921e90c802a57ae8f751"},{url:"2021/08/28/机器学习的通俗讲解/index.html",revision:"50269c3d4beb464b7ab233a1d9ad3501"},{url:"2021/08/30/下载全网音视频资源的神器—You-get/index.html",revision:"110f61e90a06593eff17e2d90831c79c"},{url:"2021/08/31/5 分钟完全解读 pyecharts 动态图表/index.html",revision:"284752587702183f8fc34eaac5059bc6"},{url:"2021/09/03/hello-world/index.html",revision:"a81b1e35769ad82d849e1b691a39a77a"},{url:"404.html",revision:"b7f3fe2ed444f7e0395c4645c368956c"},{url:"about/index.html",revision:"6ca11c8827ae7bc77565dcae9934507b"},{url:"archives/2021/08/index.html",revision:"9df75c4dc1e20e04eee8534eda1d77e4"},{url:"archives/2021/09/index.html",revision:"26aa4b333266cf3319bf935ec968db09"},{url:"archives/2021/index.html",revision:"ae7f1218a3b397d220851fb9c4f0e0e2"},{url:"archives/index.html",revision:"feae56832a85f2c22cde9e0909d1ec9a"},{url:"artitalk/index.html",revision:"4fcd795e28cbd9d4d815dac47ba70633"},{url:"assets/douban-loading.gif",revision:"b86c6b435fc25c1366acaafc3fb5c252"},{url:"books/index.html",revision:"0f2b17472b80586615fde785558507f9"},{url:"css/custom.css",revision:"9a66464f30d807c9d2cc7c2628ee23f9"},{url:"css/index.css",revision:"c8697680d0fc5c7ab0839b05094070a2"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/ar.jpg",revision:"d49e4c0e736c24439ddb233a7bda5c54"},{url:"img/bg2.jpg",revision:"ffde7ff5e016b8481b8449ddaf9d6ceb"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/v.png",revision:"2e8f8fb880aaa93a914774b9755d7ca8"},{url:"index.html",revision:"e2854b5ca5305e7b996c025000337d80"},{url:"js/chocolate.js",revision:"a363325dc1c1ef79c0caa0aed61f043d"},{url:"js/cursor.js",revision:"d446b3b4f7616a4d085fd385fe3a51fa"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/snow.js",revision:"1573702fb0596350e086edcf32a82328"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"cbb965734cf7e42b3b527be05b668640"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"96c097a8ed32b1c0f1fe97b27d32b5ce"},{url:"live2d-widget/demo/demo.html",revision:"7d38ca20c703a830a4473a3c92260f27"},{url:"live2d-widget/demo/login.html",revision:"20aad445e19a80d65a2a6eab796a9012"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"ffae28cfb316cb4f98cff1fe24683a7e"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"3a23dec44888c2b5100ca5ee7131bc06"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"movies/index.html",revision:"09e2cdd37c30568e2e8175c54734640e"},{url:"music/index.html",revision:"3aa691c9edf828281d2a07291a18755d"},{url:"video/index.html",revision:"02647378001561346572468857ed8eea"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
