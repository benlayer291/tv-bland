if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/022badd1857e88fbb3db32fa64dd1ff6a235a9ad.e48df4f42fa5987f981d.js",revision:"fedbaa5a9b057749251c2616e5e053cc"},{url:"/_next/static/chunks/12.19300aecb123f12fba7b.js",revision:"85e6da2ffedfc9056a5b03f1c733dbd9"},{url:"/_next/static/chunks/248af6688e0f3f4c3ee70763f6643d9f38e8d1dc.8fe5b33db1cade430f47.js",revision:"4dbb19dcd040ca6b7e7f03320842c00b"},{url:"/_next/static/chunks/framework.b35f3e97370d86a863db.js",revision:"878ced1978f01c68807a23a67ff735c3"},{url:"/_next/static/chunks/main-3cc2c63ec7511691ee06.js",revision:"a8e9a266d882fc97fa8a0d6fa1817871"},{url:"/_next/static/chunks/pages/404-ff9fc9624381fd36bca7.js",revision:"87a27f7d33756fea8757b9a7b196a623"},{url:"/_next/static/chunks/pages/_app-334bc1f6626f84bab112.js",revision:"49beef668bc0d147012cd907e3eda1de"},{url:"/_next/static/chunks/pages/_error-5efcade778114a255845.js",revision:"141c627c0661c83a10d0cc1fef94f982"},{url:"/_next/static/chunks/pages/index-d896fbad6326517565f2.js",revision:"2f8f9ac68ce4b033e1400212a53099c6"},{url:"/_next/static/chunks/pages/shows/%5Bid%5D-4bd0b165e6ff9b0e30a5.js",revision:"09e8a24cddb9155f77257ff1edd26d6e"},{url:"/_next/static/chunks/pages/styleguide-c59e1c9803822f0027e2.js",revision:"7b131ef5630992d692ecac8c2d0419b6"},{url:"/_next/static/chunks/polyfills-fa276ba060a4a8ac7eef.js",revision:"d6e6a8bc3994b844b391066d75421272"},{url:"/_next/static/chunks/webpack-0527dce7d47642a68c63.js",revision:"667ee202d7f434c72e5a1717a2ac9d92"},{url:"/_next/static/css/36ab9cee13687808558d.css",revision:"0e9aab2e7ba6079242a39c604cd7bb03"},{url:"/_next/static/css/53fcedc9359b4751db9f.css",revision:"41b1e0bb2847ccb39f95c821f5337aef"},{url:"/_next/static/css/9941708230b7da355aaf.css",revision:"7b223e963513938f46b92305e65dfab9"},{url:"/_next/static/css/a71e539e04e7dca9e79a.css",revision:"ed514957ef2863766bcfa2b6df481e95"},{url:"/_next/static/css/b99d156ae6f276cd9986.css",revision:"263cc0938df0a02345ea2be2ea61d8b5"},{url:"/_next/static/css/f203e81ef9a069fddf44.css",revision:"cbd3cc659b1d9f53a50bfa5f63e10560"},{url:"/_next/static/zs5eFsO8hptbqQkonYVFr/_buildManifest.js",revision:"cb07d304b357db3be7a76194c09f92ef"},{url:"/_next/static/zs5eFsO8hptbqQkonYVFr/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/android-chrome-192x192.png",revision:"bb113d3a15ddbdd5e8643a704505db5b"},{url:"/android-chrome-256x256.png",revision:"e8289028f0dc2469ce00d0f088f6aca6"},{url:"/apple-touch-icon.png",revision:"523c48f6cb3fa79d33e586ed4743e6f9"},{url:"/browserconfig.xml",revision:"e4e40b0c82d228add33b5bcfe276a859"},{url:"/favicon-16x16.png",revision:"68418d814c4fa7fe68218a1a6d4cd4c7"},{url:"/favicon-32x32.png",revision:"60660bcad1dd8b2c7297da14f1510669"},{url:"/favicon.ico",revision:"c528b4a534fdac79d4ec2cca9909e37c"},{url:"/fonts/cabin-latin-700.woff",revision:"fc9e13e5e51f457dbe59c79a54a2d5a7"},{url:"/fonts/cabin-latin-700.woff2",revision:"2e67d86f7cf92d938b7a4bfd9b82476e"},{url:"/fonts/cabin-latin-regular.woff",revision:"1014d00eeec613152c46dc86bdb0a210"},{url:"/fonts/cabin-latin-regular.woff2",revision:"6e44ba2d8317c15a5c19fb6be859e515"},{url:"/manifest.json",revision:"d457a1ef725a2055d6bf2e13c8ec4491"},{url:"/mstile-150x150.png",revision:"3cb95c353925ab624900f77c9f2ec7d1"},{url:"/safari-pinned-tab.svg",revision:"a5b6ad44608a9cb66c277a89c37fe71c"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
