if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return d[e]||(i=new Promise((async i=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},i=(i,d)=>{Promise.all(i.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(i)};self.define=(i,r,c)=>{d[i]||(d[i]=Promise.resolve().then((()=>{let d={};const s={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return d;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return d.default||(d.default=i),d}))})))}}define("./service-worker.js",["./workbox-6c734c95"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/08/27/我发现微信、知乎、B站，居然都暗藏彩蛋！/index.html",revision:"a386e6120c1ae978531ed1f46d6451f9"},{url:"2021/08/28/机器学习的通俗讲解/index.html",revision:"21b22b23d2da4e72996d2b70bd398690"},{url:"2021/08/30/下载全网音视频资源的神器—You-get/index.html",revision:"bc52dd7aa82835dda70c0c3d282bccd5"},{url:"2021/08/31/5 分钟完全解读 pyecharts 动态图表/index.html",revision:"4be9e11fe56ee3a12f6f8b9ec91e91d9"},{url:"2021/09/03/hello-world/index.html",revision:"42ff5e7546cd23c02a1ef414b62f6254"},{url:"404.html",revision:"0222aa534aadff00c07b5614bb9f4ff9"},{url:"about/index.html",revision:"1165c35bfa6fd242b6a177ba5090287f"},{url:"archives/2021/08/index.html",revision:"afa382630b1e66339544712ab29ff4c8"},{url:"archives/2021/09/index.html",revision:"d353e8f14c32a97a05c6a3a5c49901f4"},{url:"archives/2021/index.html",revision:"6697d9a33fe6820ced410927fc3e8c47"},{url:"archives/index.html",revision:"de1ce21a9b7e7f21d0e52c4f09f91f09"},{url:"artitalk/index.html",revision:"9578ae28593ff624ce9e5b051f9c21db"},{url:"assets/douban-loading.gif",revision:"b86c6b435fc25c1366acaafc3fb5c252"},{url:"books/index.html",revision:"fcf0b7d143fedff98c9c760fb8d64095"},{url:"css/custom.css",revision:"86d91df35d9307d046671de438e446b1"},{url:"css/index.css",revision:"c8697680d0fc5c7ab0839b05094070a2"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/ar.jpg",revision:"d49e4c0e736c24439ddb233a7bda5c54"},{url:"img/bg2.jpg",revision:"ffde7ff5e016b8481b8449ddaf9d6ceb"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/v.png",revision:"2e8f8fb880aaa93a914774b9755d7ca8"},{url:"index.html",revision:"3c6deadc04ffeb2d96794221abcdef0a"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"7328f8f86590f70f7a3d2307eecb3e6a"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"96c097a8ed32b1c0f1fe97b27d32b5ce"},{url:"live2d-widget/demo/demo.html",revision:"85b14ea0df3e8495bf51d51b49cd9f6a"},{url:"live2d-widget/demo/login.html",revision:"d5cad2f940456ff515d83adea3495a68"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"834707ea4c9cb0d01794f09776cf64a3"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"3a23dec44888c2b5100ca5ee7131bc06"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"movies/index.html",revision:"60fdcc7ac1868a92e917df145281341d"},{url:"music/index.html",revision:"82d35b64519daf866cb5944cdbcab3be"},{url:"video/index.html",revision:"b9cfa88f68a4a319b22c16ab4db08002"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
