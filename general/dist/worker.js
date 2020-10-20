!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){const r=n(1),{LinksTransformer:s,ProfileTransformer:o,SocialTransformer:i,TitleTransformer:a,BodyTransformer:c}=n(2),l=n(3);async function u(t){const e=new r;e.get("/links",t=>function(t){const e=JSON.stringify(l.links);return new Response(e,{headers:{"content-type":"application/json"}})}()),e.get("/",t=>async function(t){let e=new o(l.avatar,l.name),n=await fetch(l.pageUrl,{method:"get"});return(new HTMLRewriter).on("div#links",new s(l.links)).on("div#profile",e).on("img#avatar",e).on("h1#name",e).on("div#social",new i(l.socialLinks)).on("title",new a(l.name)).on("body",new c(l.backgroundColor)).transform(n)}());return await e.route(t)}addEventListener("fetch",t=>{t.respondWith(u(t.request))})},function(t,e){const n=t=>e=>e.method.toLowerCase()===t.toLowerCase(),r=n("connect"),s=n("delete"),o=n("get"),i=n("head"),a=n("options"),c=n("patch"),l=n("post"),u=n("put"),h=n("trace"),d=t=>e=>{const n=new URL(e.url).pathname;return(n.match(t)||[])[0]===n};t.exports=class{constructor(){this.routes=[]}handle(t,e){return this.routes.push({conditions:t,handler:e}),this}connect(t,e){return this.handle([r,d(t)],e)}delete(t,e){return this.handle([s,d(t)],e)}get(t,e){return this.handle([o,d(t)],e)}head(t,e){return this.handle([i,d(t)],e)}options(t,e){return this.handle([a,d(t)],e)}patch(t,e){return this.handle([c,d(t)],e)}post(t,e){return this.handle([l,d(t)],e)}put(t,e){return this.handle([u,d(t)],e)}trace(t,e){return this.handle([h,d(t)],e)}all(t){return this.handle([],t)}route(t){const e=this.resolve(t);return e?e.handler(t):new Response("resource not found",{status:404,statusText:"not found",headers:{"content-type":"text/plain"}})}resolve(t){return this.routes.find(e=>!(e.conditions&&(!Array.isArray(e)||e.conditions.length))||("function"==typeof e.conditions?e.conditions(t):e.conditions.every(e=>e(t))))}}},function(t,e){t.exports={LinksTransformer:class{constructor(t){this.links=t}async element(t){this.links.forEach(e=>{t.append(`<a href="${e.url}">${e.name}</a>`,{html:!0})})}},ProfileTransformer:class{constructor(t,e){this.avatar=t,this.name=e}async element(t){switch(t.tagName){case"div":t.removeAttribute("style");break;case"img":t.setAttribute("src",this.avatar);case"h1":t.setInnerContent(this.name)}}},SocialTransformer:class{constructor(t){this.links=t}async element(t){t.removeAttribute("style"),this.links.forEach(e=>{t.append(`\n\t\t\t\t<a href="${e.url}">\n\t\t\t\t\t<img src="${e.icon}" />\n\t\t\t\t</a>\n\t\t\t`,{html:!0})})}},TitleTransformer:class{constructor(t){this.name=t}async element(t){t.setInnerContent(this.name)}},BodyTransformer:class{constructor(t){this.color=t}async element(t){t.setAttribute("class","bg-blue-900")}}}},function(t){t.exports={pageUrl:"https://static-links-page.signalnerve.workers.dev",avatar:"https://gurleen.dev/img/avatar.jpeg",name:"Gurleen Singh",backgroundColor:"bg-blue-900",links:[{name:"Website",url:"https://gurleen.dev"},{name:"GitHub",url:"https://github.com/gurleens2000"},{name:"LinkedIn",url:"https://www.linkedin.com/in/gsingh2000/"}],socialLinks:[{icon:"https://simpleicons.org/icons/linkedin.svg",url:"https://www.linkedin.com/in/gsingh2000/"},{icon:"https://simpleicons.org/icons/instagram.svg",url:"https://www.instagram.com/gurleen_.s/"}]}}]);