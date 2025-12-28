// ==UserScript==
// @name            Complain
// @version         0.8
// @author          Wealthy#0749
// @match           *://*moomoo.io/*
// @match           *://*.moomoo.io/*
// @description     none
// @run-at          document-start
// @require         https://unpkg.com/brain.js
// @require         https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js
// @require         https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.js
// @icon            https://www.google.com/s2/favicons?domain=https://moomoo.io
// ==/UserScript==

/* kawaks circular obstacle pathfind */
(()=>{function t(i){var n=r[i];if(void 0!==n)return n.exports;var s=r[i]={id:i,loaded:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var e={657:(t,e,r)=>{t.exports=r(558)},558:(t,e,r)=>{t.exports={Node:r(289),Grid:r(809),Heap:r(981),Util:r(408),Heuristic:r(430),AStarFinder:r(131),BestFirstFinder:r(644),BreadthFirstFinder:r(904),DijkstraFinder:r(607),BiAStarFinder:r(713),BiBestFirstFinder:r(325),BiBreadthFirstFinder:r(513),BiDijkstraFinder:r(511),AStarFinderMinTurns:r(928)}},809:(t,e,r)=>{function i(t,e,r){this.width=t,this.height=e,this.matrix=r,this.nodes=this._buildNodes(t,e,r)}var n=r(289);i.prototype._buildNodes=function(t,e,r){var i,s,o=Array(e);for(i=0;i<e;++i)for(o[i]=Array(t),s=0;s<t;++s)o[i][s]=new n(s,i,0);if(void 0===r){for(r=[],i=0;i<e;++i)for(r.push([]),s=0;s<t;++s)r[i][s]=0;this.matrix=r}if(r.length!==e||r[0].length!==t)throw Error("Matrix size does not fit");for(i=0;i<e;++i)for(s=0;s<t;++s)if(!r[i][s]){var a=o[i][s];0==i||r[i-1][s]||a.neighbors.push(o[i-1][s]),i==e-1||r[i+1][s]||a.neighbors.push(o[i+1][s]),0==s||r[i][s-1]||a.neighbors.push(o[i][s-1]),s==t-1||r[i][s+1]||a.neighbors.push(o[i][s+1])}return o},i.prototype.getNodeAt=function(t,e){return this.nodes[e][t]},i.prototype.isWalkableAt=function(t,e){return this.isInside(t,e)&&0==this.matrix[e][t]},i.prototype.isInside=function(t,e){return t>=0&&t<this.width&&e>=0&&e<this.height},i.prototype.setWalkableAt=function(t,e,r){this.matrix[e][t]=r?0:1,this.nodes=this._buildNodes(this.width,this.height,this.matrix)},i.prototype.getNeighbors=function(t){return t.neighbors},i.prototype.clone=function(){var t,e,r=this.width,n=this.height,s=(this.nodes,new i(r,n));for(t=0;t<n;++t)for(e=0;e<r;++e){var o=s.getNodeAt(e,t);oldNode=this.getNodeAt(e,t),o.neighbors=[];for(var a=0;a<oldNode.neighbors.length;a++)o.neighbors.push(s.getNodeAt(oldNode.neighbors[a].x,oldNode.neighbors[a].y))}return s},t.exports=i},981:function(t,e,r){var i,n,s,o,a,p,l,u,c,f,d,g,y,x,v;t=r.nmd(t),s=Math.floor,f=Math.min,n=function(t,e){return t<e?-1:t>e?1:0},c=function(t,e,r,i,o){var a;if(null==r&&(r=0),null==o&&(o=n),r<0)throw Error("lo must be non-negative");for(null==i&&(i=t.length);o(r,i)<0;)o(e,t[a=s((r+i)/2)])<0?i=a:r=a+1;return[].splice.apply(t,[r,r-r].concat(e)),e},p=function(t,e,r){return null==r&&(r=n),t.push(e),x(t,0,t.length-1,r)},a=function(t,e){var r,i;return null==e&&(e=n),r=t.pop(),t.length?(i=t[0],t[0]=r,v(t,0,e)):i=r,i},u=function(t,e,r){var i;return null==r&&(r=n),i=t[0],t[0]=e,v(t,0,r),i},l=function(t,e,r){var i;return null==r&&(r=n),t.length&&r(t[0],e)<0&&(e=(i=[t[0],e])[0],t[0]=i[1],v(t,0,r)),e},o=function(t,e){var r,i,o,a,p,l;for(null==e&&(e=n),p=[],i=0,o=(a=function(){l=[];for(var e=0,r=s(t.length/2);0<=r?e<r:e>r;0<=r?e++:e--)l.push(e);return l}.apply(this).reverse()).length;i<o;i++)r=a[i],p.push(v(t,r,e));return p},y=function(t,e,r){var i;return null==r&&(r=n),i=t.indexOf(e),x(t,0,i,r),v(t,i,r)},d=function(t,e,r){var i,s,a,p,u;if(null==r&&(r=n),!(s=t.slice(0,e)).length)return s;for(o(s,r),a=0,p=(u=t.slice(e)).length;a<p;a++)i=u[a],l(s,i,r);return s.sort(r).reverse()},g=function(t,e,r){var i,s,p,l,u,d,g,y,x;if(null==r&&(r=n),10*e<=t.length){if(!(p=t.slice(0,e).sort(r)).length)return p;for(s=p[p.length-1],l=0,d=(g=t.slice(e)).length;l<d;l++)r(i=g[l],s)<0&&(c(p,i,0,null,r),p.pop(),s=p[p.length-1]);return p}for(o(t,r),x=[],u=0,y=f(e,t.length);0<=y?u<y:u>y;0<=y?++u:--u)x.push(a(t,r));return x},x=function(t,e,r,i){var s,o,a;for(null==i&&(i=n),s=t[r];r>e&&i(s,o=t[a=r-1>>1])<0;)t[r]=o,r=a;return t[r]=s},v=function(t,e,r){var i,s,o,a,p;for(null==r&&(r=n),s=t.length,p=e,o=t[e],i=2*e+1;i<s;)(a=i+1)<s&&!(r(t[i],t[a])<0)&&(i=a),t[e]=t[i],i=2*(e=i)+1;return t[e]=o,x(t,p,e,r)},i=function(){function t(t){this.cmp=null!=t?t:n,this.nodes=[]}return t.name="Heap",t.push=p,t.pop=a,t.replace=u,t.pushpop=l,t.heapify=o,t.nlargest=d,t.nsmallest=g,t.prototype.push=function(t){return p(this.nodes,t,this.cmp)},t.prototype.pop=function(){return a(this.nodes,this.cmp)},t.prototype.peek=function(){return this.nodes[0]},t.prototype.contains=function(t){return-1!==this.nodes.indexOf(t)},t.prototype.replace=function(t){return u(this.nodes,t,this.cmp)},t.prototype.pushpop=function(t){return l(this.nodes,t,this.cmp)},t.prototype.heapify=function(){return o(this.nodes,this.cmp)},t.prototype.updateItem=function(t){return y(this.nodes,t,this.cmp)},t.prototype.clear=function(){return this.nodes=[]},t.prototype.empty=function(){return 0===this.nodes.length},t.prototype.size=function(){return this.nodes.length},t.prototype.clone=function(){var e;return(e=new t).nodes=this.nodes.slice(0),e},t.prototype.toArray=function(){return this.nodes.slice(0)},t.prototype.insert=t.prototype.push,t.prototype.remove=t.prototype.pop,t.prototype.top=t.prototype.peek,t.prototype.front=t.prototype.peek,t.prototype.has=t.prototype.contains,t.prototype.copy=t.prototype.clone,t}(),(null!==t?t.exports:void 0)?t.exports=i:window.Heap=i},430:t=>{t.exports={manhattan:function(t,e,r){return t+e+r},euclidean:function(t,e,r){return Math.sqrt(t*t+e*e+r*r)},chebyshev:function(t,e,r){return Math.max(t,e,r)}}},289:t=>{t.exports=function(t,e,r){this.x=t,this.y=e,this.z=r,this.neighbors=[]}},408:(t,e)=>{function r(t){for(var e=[[t.x,t.y,t.z]];t.parent;)t=t.parent,e.push([t.x,t.y,t.z]);return e.reverse()}function i(t,e,r,i){var n,s,o,a,p,l,u=Math.abs,c=[];for(n=t<r?1:-1,s=e<i?1:-1,p=(o=u(r-t))-(a=u(i-e));c.push([t,e]),t!==r||e!==i;)(l=2*p)>-a&&(p-=a,t+=n),l<o&&(p+=o,e+=s);return c}e.backtrace=r,e.biBacktrace=function(t,e){var i=r(t),n=r(e);return i.concat(n.reverse())},e.pathLength=function(t){var e,r,i,n,s,o,a=0;for(e=1;e<t.length;++e)r=t[e-1],i=t[e],n=r[0]-i[0],s=r[1]-i[1],o=r[2]-i[2],a+=Math.sqrt(n*n+s*s+o*o);return a},e.getLine=i,e.smoothenPath=function(t,e){var r,n,s,o,a,p,l,u,c,f,d,g,y,x=e.length,v=e[0][0],b=e[0][1],m=e[x-1][0],M=e[x-1][1];for(r=v,n=b,a=e[1][0],p=e[1][1],l=[[r,n]],u=2;u<x;++u){for(d=i(r,n,s=(f=e[u])[0],o=f[1]),y=!1,c=1;c<d.length;++c)if(g=d[c],!t.isWalkableAt(g[0],g[1])){y=!0,l.push([a,p]),r=a,n=p;break}y||(a=s,p=o)}return l.push([m,M]),l}},131:(t,e,r)=>{function i(t){t=t||{},this.heuristic=t.heuristic||o.manhattan,this.weight=t.weight||1}var n=r(981),s=r(408),o=r(430);i.prototype.findPath=function(t,e,r){var i,o,a,p,l,u,c,f,d,g=new n((function(t,e){return t.f-e.f})),y=this.heuristic,x=this.weight,v=Math.abs;for(t.g=0,t.f=0,g.push(t),t.opened=!0;!g.empty();){if((i=g.pop()).closed=!0,i===e)return s.backtrace(e);for(p=0,l=(o=i.neighbors).length;p<l;++p)(a=o[p]).closed||(u=a.x,c=a.y,f=a.z,d=i.g+Math.sqrt(Math.pow(u-i.x,2)+Math.pow(c-i.y,2)+Math.pow(f-i.z,2)),(!a.opened||d<a.g)&&(a.g=d,a.h=a.h||x*y(v(u-e.x),v(c-e.y),v(f-e.z)),a.f=a.g+a.h,a.parent=i,a.opened?g.updateItem(a):(g.push(a),a.opened=!0)))}return[]},t.exports=i},928:(t,e,r)=>{function i(t){t=t||{},this.heuristic=t.heuristic||o.manhattan,this.weight=t.weight||1,this.turnAngleWeight=t.turnAngleWeight||1}var n=r(981),s=r(408),o=r(430);i.prototype.findPath=function(t,e,r){var i,o,a,p,l,u,c,f,d,g=new n((function(t,e){return t.f-e.f})),y=this.heuristic,x=this.weight,v=this.turnAngleWeight,b=Math.abs;for(t.g=0,t.f=0,g.push(t),t.opened=!0;!g.empty();){if((i=g.pop()).closed=!0,i===e)return s.backtrace(e);for(p=0,l=(o=i.neighbors).length;p<l;++p)if(!(a=o[p]).closed){u=a.x,c=a.y,f=a.z;var m=0;if(i.parent){var M=u-i.x,_=c-i.y,A=f-i.z,B=i.x-i.parent.x,k=i.y-i.parent.y,H=i.z-i.parent.z;m=Math.abs(Math.acos((M*B+_*k+A*H)/Math.sqrt(M*M+_*_+A*A)+Math.sqrt(B*B+k*k+H*H)))}d=i.g+Math.sqrt(Math.pow(u-i.x,2)+Math.pow(c-i.y,2)+Math.pow(f-i.z,2))+m*v,(!a.opened||d<a.g)&&(a.g=d,a.h=a.h||x*y(b(u-e.x),b(c-e.y),b(f-e.z)),a.f=a.g+a.h,a.parent=i,a.opened?g.updateItem(a):(g.push(a),a.opened=!0))}}return[]},t.exports=i},644:(t,e,r)=>{function i(t){n.call(this,t);var e=this.heuristic;this.heuristic=function(t,r,i){return 1e6*e(t,r)}}var n=r(131);i.prototype=new n,i.prototype.constructor=i,t.exports=i},713:(t,e,r)=>{function i(t){t=t||{},this.heuristic=t.heuristic||o.manhattan,this.weight=t.weight||1}var n=r(981),s=r(408),o=r(430);i.prototype.findPath=function(t,e,r){var i,o,a,p,l,u,c,f,d,g=function(t,e){return t.f-e.f},y=new n(g),x=new n(g),v=this.heuristic,b=this.weight,m=Math.abs,M=Math.SQRT2;for(t.g=0,t.f=0,y.push(t),t.opened=1,e.g=0,e.f=0,x.push(e),e.opened=2;!y.empty()&&!x.empty();){for((i=y.pop()).closed=!0,p=0,l=(o=i.neighbors).length;p<l;++p)if(!(a=o[p]).closed){if(2===a.opened)return s.biBacktrace(i,a);u=a.x,c=a.y,f=a.z,d=i.g+(u-i.x==0||c-i.y==0?1:M),(!a.opened||d<a.g)&&(a.g=d,a.h=a.h||b*v(m(u-e.x),m(c-e.y),m(f-e.z)),a.f=a.g+a.h,a.parent=i,a.opened?y.updateItem(a):(y.push(a),a.opened=1))}for((i=x.pop()).closed=!0,p=0,l=(o=i.neighbors).length;p<l;++p)if(!(a=o[p]).closed){if(1===a.opened)return s.biBacktrace(a,i);u=a.x,c=a.y,d=i.g+(u-i.x==0||c-i.y==0?1:M),(!a.opened||d<a.g)&&(a.g=d,a.h=a.h||b*v(m(u-t.x),m(c-t.y),m(f-t.z)),a.f=a.g+a.h,a.parent=i,a.opened?x.updateItem(a):(x.push(a),a.opened=2))}}return[]},t.exports=i},325:(t,e,r)=>{function i(t){n.call(this,t);var e=this.heuristic;this.heuristic=function(t,r){return 1e6*e(t,r)}}var n=r(713);i.prototype=new n,i.prototype.constructor=i,t.exports=i},513:(t,e,r)=>{function i(t){t=t||{}}var n=r(408);i.prototype.findPath=function(t,e,r){var i,s,o,a,p,l=[],u=[];for(l.push(t),t.opened=!0,t.by=0,u.push(e),e.opened=!0,e.by=1;l.length&&u.length;){for((o=l.shift()).closed=!0,a=0,p=(i=o.neighbors).length;a<p;++a)if(!(s=i[a]).closed)if(s.opened){if(1===s.by)return n.biBacktrace(o,s)}else l.push(s),s.parent=o,s.opened=!0,s.by=0;for((o=u.shift()).closed=!0,a=0,p=(i=o.neighbors).length;a<p;++a)if(!(s=i[a]).closed)if(s.opened){if(0===s.by)return n.biBacktrace(s,o)}else u.push(s),s.parent=o,s.opened=!0,s.by=1}return[]},t.exports=i},511:(t,e,r)=>{function i(t){n.call(this,t),this.heuristic=function(t,e,r){return 0}}var n=r(713);i.prototype=new n,i.prototype.constructor=i,t.exports=i},904:(t,e,r)=>{function i(t){t=t||{}}var n=r(408);i.prototype.findPath=function(t,e,r){var i,s,o,a,p,l=[];for(l.push(t),t.opened=!0;l.length;){if((o=l.shift()).closed=!0,o===e)return n.backtrace(e);for(a=0,p=(i=o.neighbors).length;a<p;++a)(s=i[a]).closed||s.opened||(l.push(s),s.opened=!0,s.parent=o)}return[]},t.exports=i},607:(t,e,r)=>{function i(t){n.call(this,t),this.heuristic=function(t,e){return 0}}var n=r(131);i.prototype=new n,i.prototype.constructor=i,t.exports=i}},r={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var i in r)t.o(r,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:r[i]})},t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{"use strict";var e=t(657),r=t(430);class i{minx=0;miny=0;maxx=0;maxy=0;constructor(t){this.circle=t}}class n{f=0;g=0;h=0;neighbors=[];constructor(t,e,r){this.x=t,this.y=e,this.z=r}}class s{active=!0;_hash_index=-1;_hash_grids={};_hash_need_update=!0;constructor(t,e,r){this.aabb=new i(this),this.x=t,this.y=e,this.radius=r}getAABB(){const t=this.aabb;return t.minx=this.x-this.radius,t.miny=this.y-this.radius,t.maxx=this.x+this.radius,t.maxy=this.y+this.radius,t}}class o{objects=[];grid=new Map;duplicates=new Map;constructor(t){this.shift=t}hasHash(t,e){return t=Math.floor(t/this.shift),e=Math.floor(e/this.shift),this.grid.has(t+":"+e)}remove(t,e=!0){if(e){if(-1===t._hash_index)throw Error("[Spatial Grid] Object was already removed!");const e=t._hash_index,r=this.objects.length-1;if(e!==r){const t=this.objects[r];this.objects[r]=this.objects[e],this.objects[e]=t,t._hash_index=e}this.objects.pop(),t._hash_index=-1}for(let e in t._hash_grids){const r=t._hash_grids[e],i=this.grid.get(e),n=i.length-1;if(r!==n){const t=i[n];i[n]=i[r],i[r]=t,t._hash_grids[e]=r}i.pop(),0===i.length&&this.grid.delete(e),delete t._hash_grids[e]}}insert(t,e=!0){const r=t.getAABB();let i=Math.floor(r.minx/this.shift),n=Math.floor(r.miny/this.shift),s=Math.ceil(r.maxx/this.shift),o=Math.ceil(r.maxy/this.shift);if(e){const e=this.objects.length;this.objects.push(t),t._hash_index=e}for(let e=i;e<s;e++)for(let r=n;r<o;r++){let i=e+":"+r;this.grid.has(i)||this.grid.set(i,[]);let n=this.grid.get(i),s=n.length;n[s]=t,t._hash_grids[i]=s}}queryPoint(t,e,r=1){let i=Math.floor((t-r)/this.shift),n=Math.floor((e-r)/this.shift),s=Math.ceil((t+r)/this.shift),o=Math.ceil((e+r)/this.shift);const a=[],p=this.duplicates;p.clear();for(let t=i;t<s;t++)for(let e=n;e<o;e++){let r=t+":"+e;if(this.grid.has(r)){const t=this.grid.get(r);for(let e=0;e<t.length;e++){let r=t[e]._hash_index;p.has(r)||(a.push(t[e]),p.set(r,!0))}}}return a}search(t){let e=Math.floor((t.minx-1)/this.shift),r=Math.floor((t.miny-1)/this.shift),i=Math.ceil((t.maxx+1)/this.shift),n=Math.ceil((t.maxy+1)/this.shift);const s=[],o=this.duplicates;o.clear();for(let t=e;t<i;t++)for(let e=r;e<n;e++){let r=t+":"+e;if(this.grid.has(r)){const t=this.grid.get(r);for(let e=0;e<t.length;e++){let r=t[e]._hash_index;o.has(r)||(s.push(t[e]),o.set(r,!0))}}}return s}update_system(){const t=this.objects,e=t.length;let r=null;for(let i=0;i<e;i++)r=t[i],r._hash_need_update&&(this.remove(r,!1),this.insert(r,!1),r._hash_need_update=!1)}}window.K2Finder=class{circles=[];finder=new e.DijkstraFinder({allowDiagonal:!0,dontCrossCorners:!1,weight:1,heuristic:r.euclidean});_nodes=[];constructor(t,e){this.spatialHash=new o(e),this.quality=t}addCircle(t,e,r){const i=new s(t,e,r);return this.circles.push(i),this.spatialHash.insert(i),i}removeCircle(t){const e=this.circles.indexOf(t);this.circles.splice(e,1),this.spatialHash.remove(t)}getPolysOnLine(t,e,r,i){const n=this.spatialHash.shift;let s=t/n,o=e/n,a=r/n,p=i/n,l=Math.abs(a-s),u=Math.abs(p-o),c=Math.floor(s),f=Math.floor(o),d=1,g=0,y=0,x=0;0==l?(g=0,x=1/0):a>s?(g=1,d+=Math.floor(a)-c,x=(Math.floor(s)+1-s)*u):(g=-1,d+=c-Math.floor(a),x=(s-Math.floor(s))*u),0==u?(y=0,x-=1/0):p>o?(y=1,d+=Math.floor(p)-f,x-=(Math.floor(o)+1-o)*l):(y=-1,d+=f-Math.floor(p),x-=(o-Math.floor(o))*l),this.spatialHash.duplicates.clear();let v=[];for(;d>0;--d){const t=c+":"+f;if(this.spatialHash.grid.has(t)){const t=this.spatialHash.grid.get(c+":"+f);for(let e=0;e<t.length;e++){const r=t[e];this.spatialHash.duplicates.has(r._hash_index)||(this.spatialHash.duplicates.set(r._hash_index,!0),v.push(r))}}x>0?(f+=y,x-=l):(c+=g,x+=u)}return v}pointInCircle(t,e,r){const i=r.x-t,n=r.y-e;return i*i+n*n<r.radius*r.radius}vec1=[0,0];vec2=[0,0];vec3=[0,0];lineCircle(t,e,r,i,n,s,o){let a=this.vec1;a[0]=n-t,a[1]=s-e;let p=this.vec2;p[0]=r-t,p[1]=i-e;var l=this.dot(p,p),u=this.dot(a,p)/l;u=(u=u<0?0:u)>1?1:u;let h=this.vec3;return h[0]=p[0]*u+t-n,h[1]=p[1]*u+e-s,this.dot(h,h)+30<o*o}dot(t,e){return t[0]*e[0]+t[1]*e[1]}tmpAABB=new i(null);lineHitAnyCircle(t,e,r,i){const n=this.tmpAABB;n.minx=Math.min(t,r),n.miny=Math.min(e,i),n.maxx=Math.max(t,r),n.maxy=Math.max(e,i);const s=this.spatialHash.search(n);for(let n=0;n<s.length;n++){const o=s[n];if(o.active&&this.lineCircle(t,e,r,i,o.x,o.y,o.radius))return!0}return!1}isPointBlocked(t,e){const r=this.spatialHash.queryPoint(t,e);for(let i=0;i<r.length;i++){const n=r[i];if(this.pointInCircle(t,e,n))return!0}return!1}getPath(t,e,r,i){const circles=this.getPolysOnLine(t,e,r,i),s=this.quality,o=new n(t,e,0),a=new n(r,i,0),p=[o,a];for(let t=0;t<circles.length;t++){const e=circles[t],r=[];for(let t=0;t<s;t++){const i=e.radius+.1,o=2*Math.PI*(t/s),a=e.x+Math.cos(o)*i,l=e.y+Math.sin(o)*i;if(this.isPointBlocked(a,l))r.push(null);else{const t=new n(a,l,0);p.push(t),r.push(t)}}e.active=!1;for(let t=1;t<r.length+1;t++){const e=r[t%r.length],i=r[t-1];e&&i&&(this.lineHitAnyCircle(e.x,e.y,i.x,i.y)||(e.neighbors.push(i),i.neighbors.push(e)))}e.active=!0}for(let t=0;t<p.length;t++){const e=p[t];for(let r=t+1;r<p.length;r++){const t=p[r],i=1/0,n=e.x-t.x,s=e.y-t.y;n*n+s*s>i*i||this.lineHitAnyCircle(e.x,e.y,t.x,t.y)||(e.neighbors.push(t),t.neighbors.push(e))}}let l=this.finder.findPath(o,a,p),u=this.search(o,a);const c=[];for(let t=0;t<u.length;t++)c.push([u[t].x,u[t].y]);return[].push(c,l),l}search(t,e){function r(t,e){let r=e.x-t.x,i=e.y-t.y;return Math.sqrt(r*r+i*i)}let i=[t],n=[],s=[];for(;i.length>0;){let t=0;for(let e=0;e<i.length;e++)i[e].f<i[t].f&&(t=e);let o=i[t];if(o===e){let t=o;for(s.push(t);t.parent;)s.push(t.parent),t=t.parent;return s.reverse()}i.splice(t,1),n.push(o);let a=o.neighbors;for(let t=0;t<a.length;t++){let s=a[t];if(!n.includes(s)){let t=o.g+1;if(i.includes(s)){if(t>=s.g)continue}else i.push(s);s.g=t,s.h=r(s,e),s.f=s.g+s.h,s.parent=o}}}return[]}}})()})();

/* msgpack-lite */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;(e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).msgpack=t()}}(function(){return(function t(e,r,n){function i(o,u){if(!r[o]){if(!e[o]){var s="function"==typeof require&&require;if(!u&&s)return s(o,!0);if(f)return f(o,!0);var a=Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}var c=r[o]={exports:{}};e[o][0].call(c.exports,function(t){var r;return i(e[o][1][t]||t)},c,c.exports,t,e,r,n)}return r[o].exports}for(var f="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i})({1:[function(t,e,r){r.encode=t("./encode").encode,r.decode=t("./decode").decode,r.Encoder=t("./encoder").Encoder,r.Decoder=t("./decoder").Decoder,r.createCodec=t("./ext").createCodec,r.codec=t("./codec").codec},{"./codec":10,"./decode":12,"./decoder":13,"./encode":15,"./encoder":16,"./ext":20}],2:[function(t,e,r){(function(t){function r(t){return t&&t.isBuffer&&t}e.exports=r(void 0!==t&&t)||r(this.Buffer)||r("undefined"!=typeof window&&window.Buffer)||this.Buffer}).call(this,t("buffer").Buffer)},{buffer:29}],3:[function(t,e,r){r.copy=function t(e,r,n,i){n||(n=0),i||0===i||(i=this.length),r||(r=0);var f,o=i-n;if(e===this&&n<r&&r<i)for(f=o-1;f>=0;f--)e[f+r]=this[f+n];else for(f=0;f<o;f++)e[f+r]=this[f+n];return o},r.toString=function t(e,r,n){var i=0|r;n||(n=this.length);for(var f="",o=0;i<n;)(o=this[i++])<128?f+=String.fromCharCode(o):(192==(224&o)?o=(31&o)<<6|63&this[i++]:224==(240&o)?o=(15&o)<<12|(63&this[i++])<<6|63&this[i++]:240==(248&o)&&(o=(7&o)<<18|(63&this[i++])<<12|(63&this[i++])<<6|63&this[i++]),o>=65536?(o-=65536,f+=String.fromCharCode((o>>>10)+55296,(1023&o)+56320)):f+=String.fromCharCode(o));return f},r.write=function t(e,r){for(var n=this,i=r||(r|=0),f=e.length,o=0,u=0;u<f;)(o=e.charCodeAt(u++))<128?n[i++]=o:o<2048?(n[i++]=192|o>>>6,n[i++]=128|63&o):o<55296||o>57343?(n[i++]=224|o>>>12,n[i++]=128|o>>>6&63,n[i++]=128|63&o):(o=(o-55296<<10|e.charCodeAt(u++)-56320)+65536,n[i++]=240|o>>>18,n[i++]=128|o>>>12&63,n[i++]=128|o>>>6&63,n[i++]=128|63&o);return i-r}},{}],4:[function(t,e,r){function n(t){return Array(t)}var i=t("./bufferish"),r=e.exports=n(0);r.alloc=n,r.concat=i.concat,r.from=function t(e){if(!i.isBuffer(e)&&i.isView(e))e=i.Uint8Array.from(e);else if(i.isArrayBuffer(e))e=new Uint8Array(e);else{if("string"==typeof e)return i.from.call(r,e);if("number"==typeof e)throw TypeError('"value" argument must not be a number')}return Array.prototype.slice.call(e)}},{"./bufferish":8}],5:[function(t,e,r){function n(t){return new f(t)}var i=t("./bufferish"),f=i.global,r=e.exports=i.hasBuffer?n(0):[];r.alloc=i.hasBuffer&&f.alloc||n,r.concat=i.concat,r.from=function t(e){if(!i.isBuffer(e)&&i.isView(e))e=i.Uint8Array.from(e);else if(i.isArrayBuffer(e))e=new Uint8Array(e);else{if("string"==typeof e)return i.from.call(r,e);if("number"==typeof e)throw TypeError('"value" argument must not be a number')}return f.from&&1!==f.from.length?f.from(e):new f(e)}},{"./bufferish":8}],6:[function(t,e,r){function n(t,e,r,n){var o=u.isBuffer(this),s=u.isBuffer(t);if(o&&s)return this.copy(t,e,r,n);if(c||o||s||!u.isView(this)||!u.isView(t))return f.copy.call(this,t,e,r,n);var a=r||null!=n?i.call(this,r,n):this;return t.set(a,e),a.length}function i(t,e){var r=this.slice||!c&&this.subarray;if(r)return r.call(this,t,e);var i=u.alloc.call(this,e-t);return n.call(this,i,0,t,e),i}var f=t("./buffer-lite"),o="write";r.copy=n,r.slice=i,r.toString=function t(e,r,n){return(!a&&u.isBuffer(this)?this.toString:f.toString).apply(this,arguments)},r.write=function t(){return(this[o]||f[o]).apply(this,arguments)};var u=t("./bufferish"),s=u.global,a=u.hasBuffer&&"TYPED_ARRAY_SUPPORT"in s,c=a&&!s.TYPED_ARRAY_SUPPORT},{"./buffer-lite":3,"./bufferish":8}],7:[function(t,e,r){function n(t){return new Uint8Array(t)}var i=t("./bufferish"),r=e.exports=i.hasArrayBuffer?n(0):[];r.alloc=n,r.concat=i.concat,r.from=function t(e){if(i.isView(e)){var n=e.byteOffset,f=e.byteLength;(e=e.buffer).byteLength!==f&&(e.slice?e=e.slice(n,n+f):(e=new Uint8Array(e)).byteLength!==f&&(e=Array.prototype.slice.call(e,n,n+f)))}else{if("string"==typeof e)return i.from.call(r,e);if("number"==typeof e)throw TypeError('"value" argument must not be a number')}return new Uint8Array(e)}},{"./bufferish":8}],8:[function(t,e,r){function n(t){return f(this).alloc(t)}function i(t){var e=3*t.length,r=n.call(this,e),i=y.write.call(r,t);return e!==i&&(r=y.slice.call(r,0,i)),r}function f(t){return h(t)?p:_(t)?d:$(t)?l:a?p:c?d:l}function o(){return!1}function u(t,e){return t="[object "+t+"]",function(r){return null!=r&&({}).toString.call(e?r[e]:r)===t}}var s=r.global=t("./buffer-global"),a=r.hasBuffer=s&&!!s.isBuffer,c=r.hasArrayBuffer="undefined"!=typeof ArrayBuffer,$=r.isArray=t("isarray");r.isArrayBuffer=c?function t(e){return e instanceof ArrayBuffer||v(e)}:o;var h=r.isBuffer=a?s.isBuffer:o,_=r.isView=c?ArrayBuffer.isView||u("ArrayBuffer","buffer"):o;r.alloc=n,r.concat=function t(e,i){i||(i=0,Array.prototype.forEach.call(e,function t(e){i+=e.length}));var f=this!==r&&this||e[0],o=n.call(f,i),u=0;return Array.prototype.forEach.call(e,function t(e){u+=y.copy.call(e,o,u)}),o},r.from=function t(e){return"string"==typeof e?i.call(this,e):f(this).from(e)};var l=r.Array=t("./bufferish-array"),p=r.Buffer=t("./bufferish-buffer"),d=r.Uint8Array=t("./bufferish-uint8array"),y=r.prototype=t("./bufferish-proto"),v=u("ArrayBuffer")},{"./buffer-global":2,"./bufferish-array":4,"./bufferish-buffer":5,"./bufferish-proto":6,"./bufferish-uint8array":7,isarray:34}],9:[function(t,e,r){function n(t){return this instanceof n?(this.options=t,void this.init()):new n(t)}function i(t,e){return t&&e?function r(){return t.apply(this,arguments),e.apply(this,arguments)}:t||e}function f(t){return new n(t)}var o=t("isarray");r.createCodec=f,r.install=function t(e){for(var r in e)n.prototype[r]=i(n.prototype[r],e[r])},r.filter=function t(e){return o(e)?function t(e){function r(t,e){return e(t)}return e=e.slice(),function(t){return e.reduce(r,t)}}(e):e};var u=t("./bufferish");n.prototype.init=function(){var t=this.options;return t&&t.uint8array&&(this.bufferish=u.Uint8Array),this},r.preset=f({preset:!0})},{"./bufferish":8,isarray:34}],10:[function(t,e,r){t("./read-core"),t("./write-core"),r.codec={preset:t("./codec-base").preset}},{"./codec-base":9,"./read-core":22,"./write-core":25}],11:[function(t,e,r){function n(t){if(!(this instanceof n))return new n(t);if(t&&(this.options=t,t.codec)){var e=this.codec=t.codec;e.bufferish&&(this.bufferish=e.bufferish)}}r.DecodeBuffer=n;var i=t("./read-core").preset;t("./flex-buffer").FlexDecoder.mixin(n.prototype),n.prototype.codec=i,n.prototype.fetch=function(){return this.codec.decode(this)}},{"./flex-buffer":21,"./read-core":22}],12:[function(t,e,r){r.decode=function t(e,r){var i=new n(r);return i.write(e),i.read()};var n=t("./decode-buffer").DecodeBuffer},{"./decode-buffer":11}],13:[function(t,e,r){function n(t){return this instanceof n?void f.call(this,t):new n(t)}r.Decoder=n;var i=t("event-lite"),f=t("./decode-buffer").DecodeBuffer;n.prototype=new f,i.mixin(n.prototype),n.prototype.decode=function(t){arguments.length&&this.write(t),this.flush()},n.prototype.push=function(t){this.emit("data",t)},n.prototype.end=function(t){this.decode(t),this.emit("end")}},{"./decode-buffer":11,"event-lite":31}],14:[function(t,e,r){function n(t){if(!(this instanceof n))return new n(t);if(t&&(this.options=t,t.codec)){var e=this.codec=t.codec;e.bufferish&&(this.bufferish=e.bufferish)}}r.EncodeBuffer=n;var i=t("./write-core").preset;t("./flex-buffer").FlexEncoder.mixin(n.prototype),n.prototype.codec=i,n.prototype.write=function(t){this.codec.encode(this,t)}},{"./flex-buffer":21,"./write-core":25}],15:[function(t,e,r){r.encode=function t(e,r){var i=new n(r);return i.write(e),i.read()};var n=t("./encode-buffer").EncodeBuffer},{"./encode-buffer":14}],16:[function(t,e,r){function n(t){return this instanceof n?void f.call(this,t):new n(t)}r.Encoder=n;var i=t("event-lite"),f=t("./encode-buffer").EncodeBuffer;n.prototype=new f,i.mixin(n.prototype),n.prototype.encode=function(t){this.write(t),this.emit("data",this.read())},n.prototype.end=function(t){arguments.length&&this.encode(t),this.flush(),this.emit("end")}},{"./encode-buffer":14,"event-lite":31}],17:[function(t,e,r){r.ExtBuffer=function t(e,r){return this instanceof t?(this.buffer=n.from(e),void(this.type=r)):new t(e,r)};var n=t("./bufferish")},{"./bufferish":8}],18:[function(t,e,r){function n(e){return u||(u=t("./encode").encode),u(e)}function i(t){return t.valueOf()}function f(t){(t=RegExp.prototype.toString.call(t).split("/")).shift();var e=[t.pop()];return e.unshift(t.join("/")),e}function o(t){var e={};for(var r in $)e[r]=t[r];return e}r.setExtPackers=function t(e){e.addExtPacker(14,Error,[o,n]),e.addExtPacker(1,EvalError,[o,n]),e.addExtPacker(2,RangeError,[o,n]),e.addExtPacker(3,ReferenceError,[o,n]),e.addExtPacker(4,SyntaxError,[o,n]),e.addExtPacker(5,TypeError,[o,n]),e.addExtPacker(6,URIError,[o,n]),e.addExtPacker(10,RegExp,[f,n]),e.addExtPacker(11,Boolean,[i,n]),e.addExtPacker(12,String,[i,n]),e.addExtPacker(13,Date,[Number,n]),e.addExtPacker(15,Number,[i,n]),"undefined"!=typeof Uint8Array&&(e.addExtPacker(17,Int8Array,c),e.addExtPacker(18,Uint8Array,c),e.addExtPacker(19,Int16Array,c),e.addExtPacker(20,Uint16Array,c),e.addExtPacker(21,Int32Array,c),e.addExtPacker(22,Uint32Array,c),e.addExtPacker(23,Float32Array,c),"undefined"!=typeof Float64Array&&e.addExtPacker(24,Float64Array,c),"undefined"!=typeof Uint8ClampedArray&&e.addExtPacker(25,Uint8ClampedArray,c),e.addExtPacker(26,ArrayBuffer,c),e.addExtPacker(29,DataView,c)),s.hasBuffer&&e.addExtPacker(27,a,s.from)};var u,s=t("./bufferish"),a=s.global,c=s.Uint8Array.from,$={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1}},{"./bufferish":8,"./encode":15}],19:[function(t,e,r){function n(e){return s||(s=t("./decode").decode),s(e)}function i(t){return RegExp.apply(null,t)}function f(t){return function(e){var r=new t;for(var n in $)r[n]=e[n];return r}}function o(t){return function(e){return new t(e)}}function u(t){return new Uint8Array(t).buffer}r.setExtUnpackers=function t(e){e.addExtUnpacker(14,[n,f(Error)]),e.addExtUnpacker(1,[n,f(EvalError)]),e.addExtUnpacker(2,[n,f(RangeError)]),e.addExtUnpacker(3,[n,f(ReferenceError)]),e.addExtUnpacker(4,[n,f(SyntaxError)]),e.addExtUnpacker(5,[n,f(TypeError)]),e.addExtUnpacker(6,[n,f(URIError)]),e.addExtUnpacker(10,[n,i]),e.addExtUnpacker(11,[n,o(Boolean)]),e.addExtUnpacker(12,[n,o(String)]),e.addExtUnpacker(13,[n,o(Date)]),e.addExtUnpacker(15,[n,o(Number)]),"undefined"!=typeof Uint8Array&&(e.addExtUnpacker(17,o(Int8Array)),e.addExtUnpacker(18,o(Uint8Array)),e.addExtUnpacker(19,[u,o(Int16Array)]),e.addExtUnpacker(20,[u,o(Uint16Array)]),e.addExtUnpacker(21,[u,o(Int32Array)]),e.addExtUnpacker(22,[u,o(Uint32Array)]),e.addExtUnpacker(23,[u,o(Float32Array)]),"undefined"!=typeof Float64Array&&e.addExtUnpacker(24,[u,o(Float64Array)]),"undefined"!=typeof Uint8ClampedArray&&e.addExtUnpacker(25,o(Uint8ClampedArray)),e.addExtUnpacker(26,u),e.addExtUnpacker(29,[u,o(DataView)])),a.hasBuffer&&e.addExtUnpacker(27,o(c))};var s,a=t("./bufferish"),c=a.global,$={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1}},{"./bufferish":8,"./decode":12}],20:[function(t,e,r){t("./read-core"),t("./write-core"),r.createCodec=t("./codec-base").createCodec},{"./codec-base":9,"./read-core":22,"./write-core":25}],21:[function(t,e,r){function n(){if(!(this instanceof n))return new n}function i(){if(!(this instanceof i))return new i}function f(){return this.buffers&&this.buffers.length?(this.flush(),this.pull()):this.fetch()}function o(t){(this.buffers||(this.buffers=[])).push(t)}function u(t){return function e(r){for(var n in t)r[n]=t[n];return r}}r.FlexDecoder=n,r.FlexEncoder=i;var s=t("./bufferish"),a="BUFFER_SHORTAGE";n.mixin=u({bufferish:s,write:function t(e){var r=this.offset?s.prototype.slice.call(this.buffer,this.offset):this.buffer;this.buffer=r?e?this.bufferish.concat([r,e]):r:e,this.offset=0},fetch:function t(){throw Error("method not implemented: fetch()")},flush:function t(){for(;this.offset<this.buffer.length;){var e,r=this.offset;try{e=this.fetch()}catch(n){if(n&&n.message!=a)throw n;this.offset=r;break}this.push(e)}},push:o,pull:function t(){return(this.buffers||(this.buffers=[])).shift()},read:f,reserve:function t(e){var r=this.offset,n=r+e;if(n>this.buffer.length)throw Error(a);return this.offset=n,r},offset:0}),n.mixin(n.prototype),i.mixin=u({bufferish:s,write:function t(){throw Error("method not implemented: write()")},fetch:function t(){var e=this.start;if(e<this.offset){var r=this.start=this.offset;return s.prototype.slice.call(this.buffer,e,r)}},flush:function t(){for(;this.start<this.offset;){var e=this.fetch();e&&this.push(e)}},push:o,pull:function t(){var e=this.buffers||(this.buffers=[]),r=e.length>1?this.bufferish.concat(e):e[0];return e.length=0,r},read:f,reserve:function t(e){var r=0|e;if(this.buffer){var n=this.buffer.length,i=0|this.offset,f=i+r;if(f<n)return this.offset=f,i;this.flush(),e=Math.max(e,Math.min(2*n,this.maxBufferSize))}return e=Math.max(e,this.minBufferSize),this.buffer=this.bufferish.alloc(e),this.start=0,this.offset=r,0},send:function t(e){var r=e.length;if(r>this.minBufferSize)this.flush(),this.push(e);else{var n=this.reserve(r);s.prototype.copy.call(e,this.buffer,n)}},maxBufferSize:65536,minBufferSize:2048,offset:0,start:0}),i.mixin(i.prototype)},{"./bufferish":8}],22:[function(t,e,r){function n(){var t,e,r=this.options;return this.decode=(t=r,e=u.getReadToken(t),function t(r){var n=o(r),i=e[n];if(!i)throw Error("Invalid type: "+(n?"0x"+n.toString(16):n));return i(r)}),r&&r.preset&&f.setExtUnpackers(this),this}var i=t("./ext-buffer").ExtBuffer,f=t("./ext-unpacker"),o=t("./read-format").readUint8,u=t("./read-token"),s=t("./codec-base");s.install({addExtUnpacker:function t(e,r){(this.extUnpackers||(this.extUnpackers=[]))[e]=s.filter(r)},getExtUnpacker:function t(e){return(this.extUnpackers||(this.extUnpackers=[]))[e]||function t(r){return new i(r,e)}},init:n}),r.preset=n.call(s.preset)},{"./codec-base":9,"./ext-buffer":17,"./ext-unpacker":19,"./read-format":23,"./read-token":24}],23:[function(t,e,r){function n(t,e){var r,n={},i=Array(e),f=Array(e),o=t.codec.decode;for(r=0;r<e;r++)i[r]=o(t),f[r]=o(t);for(r=0;r<e;r++)n[i[r]]=f[r];return n}function i(t,e){var r,n=new Map,i=Array(e),f=Array(e),o=t.codec.decode;for(r=0;r<e;r++)i[r]=o(t),f[r]=o(t);for(r=0;r<e;r++)n.set(i[r],f[r]);return n}function f(t,e){for(var r=Array(e),n=t.codec.decode,i=0;i<e;i++)r[i]=n(t);return r}function o(t,e){var r=t.reserve(e);return A.toString.call(t.buffer,"utf-8",r,r+e)}function u(t,e){var r=t.reserve(e),n=A.slice.call(t.buffer,r,r+e);return U.from(n)}function s(t,e){var r=t.reserve(e),n=A.slice.call(t.buffer,r,r+e);return U.Uint8Array.from(n).buffer}function a(t,e){var r=t.reserve(e+1),n=t.buffer[r++],i=r+e,f=t.codec.getExtUnpacker(n);if(!f)throw Error("Invalid ext type: "+(n?"0x"+n.toString(16):n));return f(A.slice.call(t.buffer,r,i))}function c(t){var e=t.reserve(1);return t.buffer[e]}function $(t){var e=t.reserve(1),r=t.buffer[e];return 128&r?r-256:r}function h(t){var e=t.reserve(2),r=t.buffer;return r[e++]<<8|r[e]}function _(t){var e=t.reserve(2),r=t.buffer,n=r[e++]<<8|r[e];return 32768&n?n-65536:n}function l(t){var e=t.reserve(4),r=t.buffer;return 16777216*r[e++]+(r[e++]<<16)+(r[e++]<<8)+r[e]}function p(t){var e=t.reserve(4),r=t.buffer;return r[e++]<<24|r[e++]<<16|r[e++]<<8|r[e]}function d(t,e){return function(r){var n=r.reserve(t);return e.call(r.buffer,n,R)}}function y(t){return new B(this,t).toNumber()}function v(t){return new P(this,t).toNumber()}function b(t){return new B(this,t)}function g(t){return new P(this,t)}function w(t){return m.read(this,t,!1,23,4)}function E(t){return m.read(this,t,!1,52,8)}var m=t("ieee754"),x=t("int64-buffer"),B=x.Uint64BE,P=x.Int64BE;r.getReadFormat=function t(e){var r=U.hasArrayBuffer&&e&&e.binarraybuffer,m=e&&e.int64;return{map:k&&e&&e.usemap?i:n,array:f,str:o,bin:r?s:u,ext:a,uint8:c,uint16:h,uint32:l,uint64:d(8,m?b:y),int8:$,int16:_,int32:p,int64:d(8,m?g:v),float32:d(4,w),float64:d(8,E)}},r.readUint8=c;var U=t("./bufferish"),A=t("./bufferish-proto"),k="undefined"!=typeof Map,R=!0},{"./bufferish":8,"./bufferish-proto":6,ieee754:32,"int64-buffer":33}],24:[function(t,e,r){function n(t){var e,r=Array(256);for(e=0;e<=127;e++)r[e]=i(e);for(e=128;e<=143;e++)r[e]=o(e-128,t.map);for(e=144;e<=159;e++)r[e]=o(e-144,t.array);for(e=160;e<=191;e++)r[e]=o(e-160,t.str);for(r[192]=i(null),r[193]=null,r[194]=i(!1),r[195]=i(!0),r[196]=f(t.uint8,t.bin),r[197]=f(t.uint16,t.bin),r[198]=f(t.uint32,t.bin),r[199]=f(t.uint8,t.ext),r[200]=f(t.uint16,t.ext),r[201]=f(t.uint32,t.ext),r[202]=t.float32,r[203]=t.float64,r[204]=t.uint8,r[205]=t.uint16,r[206]=t.uint32,r[207]=t.uint64,r[208]=t.int8,r[209]=t.int16,r[210]=t.int32,r[211]=t.int64,r[212]=o(1,t.ext),r[213]=o(2,t.ext),r[214]=o(4,t.ext),r[215]=o(8,t.ext),r[216]=o(16,t.ext),r[217]=f(t.uint8,t.str),r[218]=f(t.uint16,t.str),r[219]=f(t.uint32,t.str),r[220]=f(t.uint16,t.array),r[221]=f(t.uint32,t.array),r[222]=f(t.uint16,t.map),r[223]=f(t.uint32,t.map),e=224;e<=255;e++)r[e]=i(e-256);return r}function i(t){return function(){return t}}function f(t,e){return function(r){var n=t(r);return e(r,n)}}function o(t,e){return function(r){return e(r,t)}}var u=t("./read-format");r.getReadToken=function t(e){var r=u.getReadFormat(e);return e&&e.useraw?function t(e){var r,i=n(e).slice();for(i[217]=i[196],i[218]=i[197],i[219]=i[198],r=160;r<=191;r++)i[r]=o(r-160,e.bin);return i}(r):n(r)}},{"./read-format":23}],25:[function(t,e,r){function n(){var t,e,r=this.options;return this.encode=(t=r,e=o.getWriteType(t),function t(r,n){var i=e[typeof n];if(!i)throw Error('Unsupported type "'+typeof n+'": '+n);i(r,n)}),r&&r.preset&&f.setExtPackers(this),this}var i=t("./ext-buffer").ExtBuffer,f=t("./ext-packer"),o=t("./write-type"),u=t("./codec-base");u.install({addExtPacker:function t(e,r,n){function f(t){return n&&(t=n(t)),new i(t,e)}n=u.filter(n);var o=r.name;o&&"Object"!==o?(this.extPackers||(this.extPackers={}))[o]=f:(this.extEncoderList||(this.extEncoderList=[])).unshift([r,f])},getExtPacker:function t(e){var r=this.extPackers||(this.extPackers={}),n=e.constructor,i=n&&n.name&&r[n.name];if(i)return i;for(var f=this.extEncoderList||(this.extEncoderList=[]),o=f.length,u=0;u<o;u++){var s=f[u];if(n===s[0])return s[1]}},init:n}),r.preset=n.call(u.preset)},{"./codec-base":9,"./ext-buffer":17,"./ext-packer":18,"./write-type":27}],26:[function(t,e,r){function n(){var t=d.slice();return t[196]=i(196),t[197]=f(197),t[198]=o(198),t[199]=i(199),t[200]=f(200),t[201]=o(201),t[202]=u(202,4,g.writeFloatBE||c,!0),t[203]=u(203,8,g.writeDoubleBE||$,!0),t[204]=i(204),t[205]=f(205),t[206]=o(206),t[207]=u(207,8,s),t[208]=i(208),t[209]=f(209),t[210]=o(210),t[211]=u(211,8,a),t[217]=i(217),t[218]=f(218),t[219]=o(219),t[220]=f(220),t[221]=o(221),t[222]=f(222),t[223]=o(223),t}function i(t){return function(e,r){var n=e.reserve(2),i=e.buffer;i[n++]=t,i[n]=r}}function f(t){return function(e,r){var n=e.reserve(3),i=e.buffer;i[n++]=t,i[n++]=r>>>8,i[n]=r}}function o(t){return function(e,r){var n=e.reserve(5),i=e.buffer;i[n++]=t,i[n++]=r>>>24,i[n++]=r>>>16,i[n++]=r>>>8,i[n]=r}}function u(t,e,r,n){return function(i,f){var o=i.reserve(e+1);i.buffer[o++]=t,r.call(i.buffer,f,o,n)}}function s(t,e){new l(this,e,t)}function a(t,e){new p(this,e,t)}function c(t,e){h.write(this,t,e,!1,23,4)}function $(t,e){h.write(this,t,e,!1,52,8)}var h=t("ieee754"),_=t("int64-buffer"),l=_.Uint64BE,p=_.Int64BE,d=t("./write-uint8").uint8,y=t("./bufferish"),v=y.global,b=y.hasBuffer&&"TYPED_ARRAY_SUPPORT"in v&&!v.TYPED_ARRAY_SUPPORT,g=y.hasBuffer&&v.prototype||{};r.getWriteToken=function t(e){var r,i;return e&&e.uint8array?(r=n(),r[202]=u(202,4,c),r[203]=u(203,8,$),r):b||y.hasBuffer&&e&&e.safe?(i=d.slice(),i[196]=u(196,1,v.prototype.writeUInt8),i[197]=u(197,2,v.prototype.writeUInt16BE),i[198]=u(198,4,v.prototype.writeUInt32BE),i[199]=u(199,1,v.prototype.writeUInt8),i[200]=u(200,2,v.prototype.writeUInt16BE),i[201]=u(201,4,v.prototype.writeUInt32BE),i[202]=u(202,4,v.prototype.writeFloatBE),i[203]=u(203,8,v.prototype.writeDoubleBE),i[204]=u(204,1,v.prototype.writeUInt8),i[205]=u(205,2,v.prototype.writeUInt16BE),i[206]=u(206,4,v.prototype.writeUInt32BE),i[207]=u(207,8,s),i[208]=u(208,1,v.prototype.writeInt8),i[209]=u(209,2,v.prototype.writeInt16BE),i[210]=u(210,4,v.prototype.writeInt32BE),i[211]=u(211,8,a),i[217]=u(217,1,v.prototype.writeUInt8),i[218]=u(218,2,v.prototype.writeUInt16BE),i[219]=u(219,4,v.prototype.writeUInt32BE),i[220]=u(220,2,v.prototype.writeUInt16BE),i[221]=u(221,4,v.prototype.writeUInt32BE),i[222]=u(222,2,v.prototype.writeUInt16BE),i[223]=u(223,4,v.prototype.writeUInt32BE),i):n()}},{"./bufferish":8,"./write-uint8":28,ieee754:32,"int64-buffer":33}],27:[function(t,e,r){var n=t("isarray"),i=t("int64-buffer"),f=i.Uint64BE,o=i.Int64BE,u=t("./bufferish"),s=t("./bufferish-proto"),a=t("./write-token"),c=t("./write-uint8").uint8,$=t("./ext-buffer").ExtBuffer,h="undefined"!=typeof Uint8Array,_="undefined"!=typeof Map,l=[];l[1]=212,l[2]=213,l[4]=214,l[8]=215,l[16]=216,r.getWriteType=function t(e){function r(t,e){if(null===e)return i(t,e);if(w(e))return E(t,e);if(n(e))return function t(e,r){var n=r.length;v[n<16?144+n:n<=65535?220:221](e,n);for(var i=e.codec.encode,f=0;f<n;f++)i(e,r[f])}(t,e);if(f.isUint64BE(e))return r=t,u=e,void v[207](r,u.toArray());if(o.isInt64BE(e))return s=t,a=e,void v[211](s,a.toArray());var r,u,s,a,h,_,p,d,y=t.codec.getExtPacker(e);return y&&(e=y(e)),e instanceof $?(h=t,_=e,p=_.buffer,d=p.length,void(v[l[d]||(d<255?199:d<=65535?200:201)](h,d),c[_.type](h),h.send(p))):void m(t,e)}function i(t,e){v[192](t,e)}function p(t,e){var r=e.length;v[r<255?196:r<=65535?197:198](t,r),t.send(e)}function d(t,e){var r=Object.keys(e),n=r.length;v[n<16?128+n:n<=65535?222:223](t,n);var i=t.codec.encode;r.forEach(function(r){i(t,r),i(t,e[r])})}var y,v=a.getWriteToken(e),b=e&&e.useraw,g=h&&e&&e.binarraybuffer,w=g?u.isArrayBuffer:u.isBuffer,E=g?function t(e,r){p(e,new Uint8Array(r))}:p,m=_&&e&&e.usemap?function t(e,r){if(!(r instanceof Map))return d(e,r);var n=r.size;v[n<16?128+n:n<=65535?222:223](e,n);var i=e.codec.encode;r.forEach(function(t,r,n){i(e,r),i(e,t)})}:d;return{boolean:function t(e,r){v[r?195:194](e,r)},function:i,number:function t(e,r){var n,i=0|r;return r!==i?void v[n=203](e,r):void v[n=-32<=i&&i<=127?255&i:0<=i?i<=255?204:i<=65535?205:206:-128<=i?208:-32768<=i?209:210](e,i)},object:b?function t(e,n){var i,f,o;return w(n)?(i=e,f=n,o=f.length,void(v[o<32?160+o:o<=65535?218:219](i,o),i.send(f))):void r(e,n)}:r,string:(y=b?function t(e){return e<32?1:e<=65535?3:5}:function t(e){return e<32?1:e<=255?2:e<=65535?3:5},function t(e,r){var n=r.length,i=5+3*n;e.offset=e.reserve(i);var f=e.buffer,o=y(n),u=e.offset+o,a=y(n=s.write.call(f,r,u));if(o!==a){var c=u+n;s.copy.call(f,f,u+a-o,u,c)}v[1===a?160+n:a<=3?215+a:219](e,n),e.offset+=n}),symbol:i,undefined:i}}},{"./bufferish":8,"./bufferish-proto":6,"./ext-buffer":17,"./write-token":26,"./write-uint8":28,"int64-buffer":33,isarray:34}],28:[function(t,e,r){function n(t){return function(e){var r=e.reserve(1);e.buffer[r]=t}}for(var i=r.uint8=Array(256),f=0;f<=255;f++)i[f]=n(f)},{}],29:[function(t,e,r){(function(e){"use strict";function n(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,e){if(n()<e)throw RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=f.prototype:(null===t&&(t=new f(e)),t.length=e),t}function f(t,e,r){if(!(f.TYPED_ARRAY_SUPPORT||this instanceof f))return new f(t,e,r);if("number"==typeof t){if("string"==typeof e)throw Error("If encoding is specified then the first argument must be a string");return s(this,t)}return o(this,t,e,r)}function o(t,e,r,n){if("number"==typeof e)throw TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function t(e,r,n,i){if(r.byteLength,n<0||r.byteLength<n)throw RangeError("'offset' is out of bounds");if(r.byteLength<n+(i||0))throw RangeError("'length' is out of bounds");return r=void 0===n&&void 0===i?new Uint8Array(r):void 0===i?new Uint8Array(r,n):new Uint8Array(r,n,i),f.TYPED_ARRAY_SUPPORT?(e=r).__proto__=f.prototype:e=a(e,r),e}(t,e,r,n):"string"==typeof e?function t(e,r,n){if("string"==typeof n&&""!==n||(n="utf8"),!f.isEncoding(n))throw TypeError('"encoding" must be a valid string encoding');var o=0|$(r,n),u=(e=i(e,o)).write(r,n);return u!==o&&(e=e.slice(0,u)),e}(t,e,r):function t(e,r){if(f.isBuffer(r)){var n=0|c(r.length);return 0===(e=i(e,n)).length||r.copy(e,0,0,n),e}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||function(t){return t!=t}(r.length)?i(e,0):a(e,r);if("Buffer"===r.type&&z(r.data))return a(e,r.data)}throw TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function u(t){if("number"!=typeof t)throw TypeError('"size" argument must be a number');if(t<0)throw RangeError('"size" argument must not be negative')}function s(t,e){if(u(e),t=i(t,e<0?0:0|c(e)),!f.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function a(t,e){var r=e.length<0?0:0|c(e.length);t=i(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function c(t){if(t>=n())throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function $(t,e){if(f.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return L(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return D(t).length;default:if(n)return L(t).length;e=(""+e).toLowerCase(),n=!0}}function h(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0)||(r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return P(this,e,r);case"utf8":case"utf-8":return m(this,e,r);case"ascii":return x(this,e,r);case"latin1":case"binary":return B(this,e,r);case"base64":return E(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,e,r);default:if(n)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function _(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function l(t,e,r,n,i){if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),isNaN(r=+r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return -1;r=t.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof e&&(e=f.from(e,n)),f.isBuffer(e))return 0===e.length?-1:p(t,e,r,n,i);if("number"==typeof e)return e&=255,f.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):p(t,[e],r,n,i);throw TypeError("val must be string, number or Buffer")}function p(t,e,r,n,i){function f(t,e){return 1===u?t[e]:t.readUInt16BE(e*u)}var o,u=1,s=t.length,a=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;u=2,s/=2,a/=2,r/=2}if(i){var c=-1;for(o=r;o<s;o++)if(f(t,o)===f(e,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===a)return c*u}else -1!==c&&(o-=o-c),c=-1}else for(r+a>s&&(r=s-a),o=r;o>=0;o--){for(var $=!0,h=0;h<a;h++)if(f(t,o+h)!==f(e,h)){$=!1;break}if($)return o}return -1}function d(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var f=e.length;if(f%2!=0)throw TypeError("Invalid hex string");n>f/2&&(n=f/2);for(var o=0;o<n;++o){var u=parseInt(e.substr(2*o,2),16);if(isNaN(u))break;t[r+o]=u}return o}function y(t,e,r,n){return O(L(e,t.length-r),t,r,n)}function v(t,e,r,n){return O(function t(e){for(var r=[],n=0;n<e.length;++n)r.push(255&e.charCodeAt(n));return r}(e),t,r,n)}function b(t,e,r,n){return v(t,e,r,n)}function g(t,e,r,n){return O(D(e),t,r,n)}function w(t,e,r,n){return O(function t(e,r){for(var n,i,f,o=[],u=0;u<e.length&&!((r-=2)<0);++u)i=(n=e.charCodeAt(u))>>8,o.push(f=n%256),o.push(i);return o}(e,t.length-r),t,r,n)}function E(t,e,r){return 0===e&&r===t.length?F.fromByteArray(t):F.fromByteArray(t.slice(e,r))}function m(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var f,o,u,s,a=t[i],c=null,$=a>239?4:a>223?3:a>191?2:1;if(i+$<=r)switch($){case 1:a<128&&(c=a);break;case 2:128==(192&(f=t[i+1]))&&(s=(31&a)<<6|63&f)>127&&(c=s);break;case 3:f=t[i+1],o=t[i+2],128==(192&f)&&128==(192&o)&&(s=(15&a)<<12|(63&f)<<6|63&o)>2047&&(s<55296||s>57343)&&(c=s);break;case 4:f=t[i+1],o=t[i+2],u=t[i+3],128==(192&f)&&128==(192&o)&&128==(192&u)&&(s=(15&a)<<18|(63&f)<<12|(63&o)<<6|63&u)>65535&&s<1114112&&(c=s)}null===c?(c=65533,$=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),i+=$}return function t(e){var r=e.length;if(r<=V)return String.fromCharCode.apply(String,e);for(var n="",i=0;i<r;)n+=String.fromCharCode.apply(String,e.slice(i,i+=V));return n}(n)}function x(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function B(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function P(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",f=e;f<r;++f)i+=C(t[f]);return i}function U(t,e,r){for(var n=t.slice(e,r),i="",f=0;f<n.length;f+=2)i+=String.fromCharCode(n[f]+256*n[f+1]);return i}function A(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function k(t,e,r,n,i,o){if(!f.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function R(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,f=Math.min(t.length-r,2);i<f;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function I(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,f=Math.min(t.length-r,4);i<f;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function T(t,e,r,n,i,f){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function S(t,e,r,n,i){return i||T(t,e,r,4,34028234663852886e22,-34028234663852886e22),j.write(t,e,r,n,23,4),r+4}function Y(t,e,r,n,i){return i||T(t,e,r,8,17976931348623157e292,-17976931348623157e292),j.write(t,e,r,n,52,8),r+8}function C(t){return t<16?"0"+t.toString(16):t.toString(16)}function L(t,e){e=e||1/0;for(var r,n=t.length,i=null,f=[],o=0;o<n;++o){if((r=t.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(e-=3)>-1&&f.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&f.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(e-=3)>-1&&f.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;f.push(r)}else if(r<2048){if((e-=2)<0)break;f.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;f.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw Error("Invalid code point");if((e-=4)<0)break;f.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return f}function D(t){return F.toByteArray(function t(e){var r;if((e=(r=e,r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")).replace(M,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(t))}function O(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}function N(t){return t!=t}var F=t("base64-js"),j=t("ieee754"),z=t("isarray");r.Buffer=f,r.SlowBuffer=function t(e){return+e!=e&&(e=0),f.alloc(+e)},r.INSPECT_MAX_BYTES=50,f.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function t(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(r){return!1}}(),r.kMaxLength=n(),f.poolSize=8192,f._augment=function(t){return t.__proto__=f.prototype,t},f.from=function(t,e,r){return o(null,t,e,r)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(t,e,r){var n,f,o;return n=t,f=e,o=r,u(n),n<=0?i(null,n):void 0!==f?"string"==typeof o?i(null,n).fill(f,o):i(null,n).fill(f):i(null,n)},f.allocUnsafe=function(t){return s(null,t)},f.allocUnsafeSlow=function(t){return s(null,t)},f.isBuffer=function(t){return!(null==t||!t._isBuffer)},f.compare=function(t,e){if(!f.isBuffer(t)||!f.isBuffer(e))throw TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){if(!z(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var r,n=f.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var o=t[r];if(!f.isBuffer(o))throw TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},f.byteLength=$,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)_(this,e,e+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)_(this,e,e+3),_(this,e+1,e+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)_(this,e,e+7),_(this,e+1,e+6),_(this,e+2,e+5),_(this,e+3,e+4);return this},f.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?m(this,0,t):h.apply(this,arguments)},f.prototype.equals=function(t){if(!f.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},f.prototype.compare=function(t,e,r,n,i){if(!f.isBuffer(t))throw TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,u=r-e,s=Math.min(o,u),a=this.slice(n,i),c=t.slice(e,r),$=0;$<s;++$)if(a[$]!==c[$]){o=a[$],u=c[$];break}return o<u?-1:u<o?1:0},f.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},f.prototype.indexOf=function(t,e,r){return l(this,t,e,r,!0)},f.prototype.lastIndexOf=function(t,e,r){return l(this,t,e,r,!1)},f.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i,f,o,u,s=this.length-e;if((void 0===r||r>s)&&(r=s),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return d(this,t,e,r);case"utf8":case"utf-8":return y(this,t,e,r);case"ascii":return v(this,t,e,r);case"latin1":case"binary":return i=this,f=t,o=e,v(i,f,o,u=r);case"base64":return g(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return w(this,t,e,r);default:if(a)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var V=4096;f.prototype.slice=function(t,e){var r,n=this.length;if(t=~~t,e=void 0===e?n:~~e,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),e<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),f.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=f.prototype;else{var i=e-t;r=new f(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+t]}return r},f.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||A(t,e,this.length);for(var n=this[t],i=1,f=0;++f<e&&(i*=256);)n+=this[t+f]*i;return n},f.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||A(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},f.prototype.readUInt8=function(t,e){return e||A(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,e){return e||A(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,e){return e||A(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,e){return e||A(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,e){return e||A(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||A(t,e,this.length);for(var n=this[t],i=1,f=0;++f<e&&(i*=256);)n+=this[t+f]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},f.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||A(t,e,this.length);for(var n=e,i=1,f=this[t+--n];n>0&&(i*=256);)f+=this[t+--n]*i;return f>=(i*=128)&&(f-=Math.pow(2,8*e)),f},f.prototype.readInt8=function(t,e){return e||A(t,1,this.length),128&this[t]?-((255-this[t]+1)*1):this[t]},f.prototype.readInt16LE=function(t,e){e||A(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(t,e){e||A(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(t,e){return e||A(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return e||A(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,e){return e||A(t,4,this.length),j.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return e||A(t,4,this.length),j.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return e||A(t,8,this.length),j.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return e||A(t,8,this.length),j.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var i=Math.pow(2,8*r)-1;k(this,t,e,r,i,0)}var f=1,o=0;for(this[e]=255&t;++o<r&&(f*=256);)this[e+o]=t/f&255;return e+r},f.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){var i=Math.pow(2,8*r)-1;k(this,t,e,r,i,0)}var f=r-1,o=1;for(this[e+f]=255&t;--f>=0&&(o*=256);)this[e+f]=t/o&255;return e+r},f.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,1,255,0),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},f.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):R(this,t,e,!0),e+2},f.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):R(this,t,e,!1),e+2},f.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):I(this,t,e,!0),e+4},f.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):I(this,t,e,!1),e+4},f.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);k(this,t,e,r,i-1,-i)}var f=0,o=1,u=0;for(this[e]=255&t;++f<r&&(o*=256);)t<0&&0===u&&0!==this[e+f-1]&&(u=1),this[e+f]=(t/o>>0)-u&255;return e+r},f.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);k(this,t,e,r,i-1,-i)}var f=r-1,o=1,u=0;for(this[e+f]=255&t;--f>=0&&(o*=256);)t<0&&0===u&&0!==this[e+f+1]&&(u=1),this[e+f]=(t/o>>0)-u&255;return e+r},f.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,1,127,-128),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):R(this,t,e,!0),e+2},f.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):R(this,t,e,!1),e+2},f.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):I(this,t,e,!0),e+4},f.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||k(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):I(this,t,e,!1),e+4},f.prototype.writeFloatLE=function(t,e,r){return S(this,t,e,!0,r)},f.prototype.writeFloatBE=function(t,e,r){return S(this,t,e,!1,r)},f.prototype.writeDoubleLE=function(t,e,r){return Y(this,t,e,!0,r)},f.prototype.writeDoubleBE=function(t,e,r){return Y(this,t,e,!1,r)},f.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("sourceStart out of bounds");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},f.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i,o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(i=e;i<r;++i)this[i]=t;else{var u=f.isBuffer(t)?t:L(new f(t,n).toString()),s=u.length;for(i=0;i<r-e;++i)this[i+e]=u[i%s]}return this};var M=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":30,ieee754:32,isarray:34}],30:[function(t,e,r){"use strict";function n(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function i(t){return o[t>>18&63]+o[t>>12&63]+o[t>>6&63]+o[63&t]}function f(t,e,r){for(var n,f=[],o=e;o<r;o+=3)f.push(i(n=(t[o]<<16)+(t[o+1]<<8)+t[o+2]));return f.join("")}r.byteLength=function t(e){return 3*e.length/4-n(e)},r.toByteArray=function t(e){var r,i,f,o,a,c,$=e.length;a=n(e),c=new s(3*$/4-a),f=a>0?$-4:$;var h=0;for(r=0,i=0;r<f;r+=4,i+=3)o=u[e.charCodeAt(r)]<<18|u[e.charCodeAt(r+1)]<<12|u[e.charCodeAt(r+2)]<<6|u[e.charCodeAt(r+3)],c[h++]=o>>16&255,c[h++]=o>>8&255,c[h++]=255&o;return 2===a?(o=u[e.charCodeAt(r)]<<2|u[e.charCodeAt(r+1)]>>4,c[h++]=255&o):1===a&&(o=u[e.charCodeAt(r)]<<10|u[e.charCodeAt(r+1)]<<4|u[e.charCodeAt(r+2)]>>2,c[h++]=o>>8&255,c[h++]=255&o),c},r.fromByteArray=function t(e){for(var r,n=e.length,i=n%3,u="",s=[],a=0,c=n-i;a<c;a+=16383)s.push(f(e,a,a+16383>c?c:a+16383));return 1===i?(u+=o[(r=e[n-1])>>2],u+=o[r<<4&63],u+="=="):2===i&&(u+=o[(r=(e[n-2]<<8)+e[n-1])>>10],u+=o[r>>4&63],u+=o[r<<2&63],u+="="),s.push(u),s.join("")};for(var o=[],u=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,$=a.length;c<$;++c)o[c]=a[c],u[a.charCodeAt(c)]=c;u["-".charCodeAt(0)]=62,u["_".charCodeAt(0)]=63},{}],31:[function(t,e,r){!function(t){function r(t){for(var e in o)t[e]=o[e];return t}function n(t,e){var r,o=this;if(arguments.length){if(e){if(r=i(o,t,!0)){if(!(r=r.filter(function t(r){return r!==e&&r.originalListener!==e})).length)return n.call(o,t);o[f][t]=r}}else if((r=o[f])&&(delete r[t],!Object.keys(r).length))return n.call(o)}else delete o[f];return o}function i(t,e,r){if(!r||t[f]){var n=t[f]||(t[f]={});return n[e]||(n[e]=[])}}void 0!==e&&(e.exports=t);var f="listeners",o={on:function t(e,r){return i(this,e).push(r),this},once:function t(e,r){function f(){n.call(o,e,f),r.apply(this,arguments)}var o=this;return f.originalListener=r,i(o,e).push(f),o},off:n,emit:function t(e,r){var n=this,f=i(n,e,!0);if(!f)return!1;var o=arguments.length;if(1===o)f.forEach(function t(e){e.call(n)});else if(2===o)f.forEach(function t(e){e.call(n,r)});else{var u=Array.prototype.slice.call(arguments,1);f.forEach(function t(e){e.apply(n,u)})}return!!f.length}};r(t.prototype),t.mixin=r}(function t(){if(!(this instanceof t))return new t})},{}],32:[function(t,e,r){r.read=function(t,e,r,n,i){var f,o,u=8*i-n-1,s=(1<<u)-1,a=s>>1,c=-7,$=r?i-1:0,h=r?-1:1,_=t[e+$];for($+=h,f=_&(1<<-c)-1,_>>=-c,c+=u;c>0;f=256*f+t[e+$],$+=h,c-=8);for(o=f&(1<<-c)-1,f>>=-c,c+=n;c>0;o=256*o+t[e+$],$+=h,c-=8);if(0===f)f=1-a;else{if(f===s)return o?NaN:(_?-1:1)*(1/0);o+=Math.pow(2,n),f-=a}return(_?-1:1)*o*Math.pow(2,f-n)},r.write=function(t,e,r,n,i,f){var o,u,s,a=8*f-i-1,c=(1<<a)-1,$=c>>1,h=23===i?5960464477539062e-23:0,_=n?0:f-1,l=n?1:-1,p=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(u=isNaN(e)?1:0,o=c):(o=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-o))<1&&(o--,s*=2),(e+=o+$>=1?h/s:h*Math.pow(2,1-$))*s>=2&&(o++,s/=2),o+$>=c?(u=0,o=c):o+$>=1?(u=(e*s-1)*Math.pow(2,i),o+=$):(u=e*Math.pow(2,$-1)*Math.pow(2,i),o=0));i>=8;t[r+_]=255&u,_+=l,u/=256,i-=8);for(o=o<<i|u,a+=i;a>0;t[r+_]=255&o,_+=l,o/=256,a-=8);t[r+_-l]|=128*p}},{}],33:[function(t,e,r){(function(t){var e,n,i,f;!function(r){function o(t,e,n){function i(t,e,r,n){return this instanceof i?function t(e,r,n,i,f){if(g&&w&&(r instanceof w&&(r=new g(r)),i instanceof w&&(i=new g(i))),!(r||n||i||y))return void(e.buffer=h(E,0));if(!c(r,n)){var u=y||Array;f=n,i=r,n=0,r=new u(8)}e.buffer=r,e.offset=n|=0,v!==typeof i&&("string"==typeof i?function t(e,r,n,i){var f=0,u=n.length,s=0,a=0;"-"===n[0]&&f++;for(var c=f;f<u;){var $=parseInt(n[f++],i);if(!($>=0))break;a=a*i+$,s=s*i+Math.floor(a/x),a%=x}c&&(s=~s,a?a=x-a:s++),o(e,r+P,s),o(e,r+U,a)}(r,n,i,f||10):c(i,f)?$(r,n,i,f):"number"==typeof f?(o(r,n+P,i),o(r,n+U,f)):i>0?T(r,n,i):i<0?S(r,n,i):$(r,n,E,0))}(this,t,e,r,n):new i(t,e,r,n)}function f(){var t=this.buffer,e=this.offset,r=m(t,e+P),i=m(t,e+U);return n||(r|=0),r?r*x+i:i}function o(t,e,r){t[e+I]=255&r,r>>=8,t[e+R]=255&r,r>>=8,t[e+k]=255&r,r>>=8,t[e+A]=255&r}function m(t,e){return t[e+A]*B+(t[e+k]<<16)+(t[e+R]<<8)+t[e+I]}var P=e?0:4,U=e?4:0,A=e?0:3,k=e?1:2,R=e?2:1,I=e?3:0,T=e?_:p,S=e?l:d,Y=i.prototype,C="is"+t,L="_"+C;return Y.buffer=void 0,Y.offset=0,Y[L]=!0,Y.toNumber=f,Y.toString=function t(e){var r=this.buffer,i=this.offset,f=m(r,i+P),o=m(r,i+U),u="",s=!n&&2147483648&f;for(s&&(f=~f,o=x-o),e=e||10;;){var a=f%e*x+o;if(f=Math.floor(f/e),o=Math.floor(a/e),u=(a%e).toString(e)+u,!f&&!o)break}return s&&(u="-"+u),u},Y.toJSON=f,Y.toArray=u,b&&(Y.toBuffer=s),g&&(Y.toArrayBuffer=a),i[C]=function t(e){return!(!e||!e[L])},r[t]=i,i}function u(t){var e=this.buffer,r=this.offset;return y=null,!1!==t&&0===r&&8===e.length&&m(e)?e:h(e,r)}function s(e){var r=this.buffer,n=this.offset;if(y=b,!1!==e&&0===n&&8===r.length&&t.isBuffer(r))return r;var i=new b(8);return $(i,0,r,n),i}function a(t){var e=this.buffer,r=this.offset,n=e.buffer;if(y=g,!1!==t&&0===r&&n instanceof w&&8===n.byteLength)return n;var i=new g(8);return $(i,0,e,r),i.buffer}function c(t,e){var r=t&&t.length;return e|=0,r&&e+8<=r&&"string"!=typeof t[e]}function $(t,e,r,n){e|=0,n|=0;for(var i=0;i<8;i++)t[e++]=255&r[n++]}function h(t,e){return Array.prototype.slice.call(t,e,e+8)}function _(t,e,r){for(var n=e+8;n>e;)t[--n]=255&r,r/=256}function l(t,e,r){var n=e+8;for(r++;n>e;)t[--n]=255&-r^255,r/=256}function p(t,e,r){for(var n=e+8;e<n;)t[e++]=255&r,r/=256}function d(t,e,r){var n=e+8;for(r++;e<n;)t[e++]=255&-r^255,r/=256}var y,v="undefined",b=v!==typeof t&&t,g=v!==typeof Uint8Array&&Uint8Array,w=v!==typeof ArrayBuffer&&ArrayBuffer,E=[0,0,0,0,0,0,0,0],m=Array.isArray||function t(e){return!!e&&"[object Array]"==Object.prototype.toString.call(e)},x=4294967296,B=16777216;e=o("Uint64BE",!0,!0),n=o("Int64BE",!0,!1),i=o("Uint64LE",!1,!0),f=o("Int64LE",!1,!1)}("object"==typeof r&&"string"!=typeof r.nodeName?r:this||{})}).call(this,t("buffer").Buffer)},{buffer:29}],34:[function(t,e,r){var n={}.toString;e.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},{}]},{},[1])(1)});

/* building list & groups & ais*/
const groups = [{id:0,name:"food",layer:0},{id:1,name:"walls",place:!0,limit:30,layer:0},{id:2,name:"spikes",place:!0,limit:15,layer:0},{id:3,name:"mill",place:!0,limit:7,layer:1},{id:4,name:"mine",place:!0,limit:1,layer:0},{id:5,name:"trap",place:!0,limit:6,layer:-1},{id:6,name:"booster",place:!0,limit:12,layer:-1},{id:7,name:"turret",place:!0,limit:2,layer:1},{id:8,name:"watchtower",place:!0,limit:12,layer:1},{id:9,name:"buff",place:!0,limit:4,layer:-1},{id:10,name:"spawn",place:!0,limit:1,layer:-1},{id:11,name:"sapling",place:!0,limit:2,layer:0},{id:12,name:"blocker",place:!0,limit:3,layer:-1},{id:13,name:"teleporter",place:!0,limit:2,layer:-1}];
const list = [{group:groups[0],name:"apple",desc:"restores 20 health when consumed",req:["food",10],consume:function(e){return e.changeHealth(20,e)},scale:22,holdOffset:15},{age:3,group:groups[0],name:"cookie",desc:"restores 40 health when consumed",req:["food",15],consume:function(e){return e.changeHealth(40,e)},scale:27,holdOffset:15},{age:7,group:groups[0],name:"cheese",desc:"restores 30 health and another 50 over 5 seconds",req:["food",25],consume:function(e){return!!(e.changeHealth(30,e)||e.health<1/0)&&(e.dmgOverTime.dmg=-10,e.dmgOverTime.doer=e,e.dmgOverTime.time=5,!0)},scale:27,holdOffset:15},{group:groups[1],name:"wood wall",desc:"provides protection for your village",req:["wood",10],projDmg:!0,health:380,scale:50,holdOffset:20,placeOffset:-5},{age:3,group:groups[1],name:"stone wall",desc:"provides improved protection for your village",req:["stone",25],health:900,scale:50,holdOffset:20,placeOffset:-5},{age:7,group:groups[1],name:"castle wall",desc:"provides powerful protection for your village",req:["stone",35],health:1500,scale:52,holdOffset:20,placeOffset:-5},{group:groups[2],name:"spikes",desc:"damages enemies when they touch them",req:["wood",20,"stone",5],health:400,dmg:20,scale:49,spritePadding:-23,holdOffset:8,placeOffset:-5},{age:5,group:groups[2],name:"greater spikes",desc:"damages enemies when they touch them",req:["wood",30,"stone",10],health:500,dmg:35,scale:52,spritePadding:-23,holdOffset:8,placeOffset:-5},{age:9,group:groups[2],name:"poison spikes",desc:"poisons enemies when they touch them",req:["wood",35,"stone",15],health:600,dmg:30,pDmg:5,scale:52,spritePadding:-23,holdOffset:8,placeOffset:-5},{age:9,group:groups[2],name:"spinning spikes",desc:"damages enemies when they touch them",req:["wood",30,"stone",20],health:500,dmg:45,turnSpeed:.003,scale:52,spritePadding:-23,holdOffset:8,placeOffset:-5},{group:groups[3],name:"windmill",desc:"generates gold over time",req:["wood",50,"stone",10],health:400,pps:1,turnSpeed:.0016,spritePadding:25,iconLineMult:12,scale:45,holdOffset:20,placeOffset:5},{age:5,group:groups[3],name:"faster windmill",desc:"generates more gold over time",req:["wood",60,"stone",20],health:500,pps:1.5,turnSpeed:.0025,spritePadding:25,iconLineMult:12,scale:47,holdOffset:20,placeOffset:5},{age:8,group:groups[3],name:"power mill",desc:"generates more gold over time",req:["wood",100,"stone",50],health:800,pps:2,turnSpeed:.005,spritePadding:25,iconLineMult:12,scale:47,holdOffset:20,placeOffset:5},{age:5,group:groups[4],type:2,name:"mine",desc:"allows you to mine stone",req:["wood",20,"stone",100],iconLineMult:12,scale:65,holdOffset:20,placeOffset:0},{age:5,group:groups[11],type:0,name:"sapling",desc:"allows you to farm wood",req:["wood",150],iconLineMult:12,colDiv:.5,scale:110,holdOffset:50,placeOffset:-15},{age:4,group:groups[5],name:"pit trap",desc:"pit that traps enemies if they walk over it",req:["wood",10,"stone",10],trap:!0,ignoreCollision:!0,hideFromEnemy:!0,health:500,colDiv:.2,scale:50,holdOffset:20,placeOffset:-5},{age:4,group:groups[6],name:"boost pad",desc:"provides boost when stepped on",req:["stone",20,"wood",5],ignoreCollision:!0,boostSpeed:1.5,health:150,colDiv:.7,scale:45,holdOffset:20,placeOffset:-5},{age:7,group:groups[7],doUpdate:!0,name:"turret",desc:"defensive structure that shoots at enemies",req:["wood",200,"stone",150],health:800,projectile:1,shootRange:700,shootRate:2200,scale:43,holdOffset:20,placeOffset:-5},{age:7,group:groups[8],name:"platform",desc:"platform to shoot over walls and cross over water",req:["wood",20],ignoreCollision:!0,zIndex:1,health:300,scale:43,holdOffset:20,placeOffset:-5},{age:7,group:groups[9],name:"healing pad",desc:"standing on it will slowly heal you",req:["wood",30,"food",10],ignoreCollision:!0,healCol:15,health:400,colDiv:.7,scale:45,holdOffset:20,placeOffset:-5},{age:9,group:groups[10],name:"spawn pad",desc:"you will spawn here when you die but it will dissapear",req:["wood",100,"stone",100],health:400,ignoreCollision:!0,spawnPoint:!0,scale:45,holdOffset:20,placeOffset:-5},{age:7,group:groups[12],name:"blocker",desc:"blocks building in radius",req:["wood",30,"stone",25],ignoreCollision:!0,blocker:300,health:400,colDiv:.7,scale:45,holdOffset:20,placeOffset:-5},{age:7,group:groups[13],name:"teleporter",desc:"teleports you to a random point on the map",req:["wood",60,"stone",60],ignoreCollision:!0,teleport:!0,health:200,colDiv:.7,scale:45,holdOffset:20,placeOffset:-5}];
const ais = [{id:0,src:"cow_1",killScore:150,health:500,weightM:.8,speed:95e-5,turnSpeed:.001,scale:72,drop:["food",50]},{id:1,src:"pig_1",killScore:200,health:800,weightM:.6,speed:85e-5,turnSpeed:.001,scale:72,drop:["food",80]},{id:2,name:"Bull",src:"bull_2",hostile:!0,dmg:20,killScore:1e3,health:1800,weightM:.5,speed:94e-5,turnSpeed:74e-5,scale:78,viewRange:800,chargePlayer:!0,drop:["food",100]},{id:3,name:"Bully",src:"bull_1",hostile:!0,dmg:20,killScore:2e3,health:2800,weightM:.45,speed:.001,turnSpeed:8e-4,scale:90,viewRange:900,chargePlayer:!0,drop:["food",400]},{id:4,name:"Wolf",src:"wolf_1",hostile:!0,dmg:8,killScore:500,health:300,weightM:.45,speed:.001,turnSpeed:.002,scale:84,viewRange:800,chargePlayer:!0,drop:["food",200]},{id:5,name:"Quack",src:"chicken_1",dmg:8,killScore:2e3,noTrap:!0,health:300,weightM:.2,speed:.0018,turnSpeed:.006,scale:70,drop:["food",100]},{id:6,name:"MOOSTAFA",nameScale:50,src:"enemy",hostile:!0,dontRun:!0,fixedSpawn:!0,spawnDelay:6e4,noTrap:!0,colDmg:100,dmg:40,killScore:8e3,health:18e3,weightM:.4,speed:7e-4,turnSpeed:.01,scale:80,spriteMlt:1.8,leapForce:.9,viewRange:1e3,hitRange:210,hitDelay:1e3,chargePlayer:!0,drop:["food",100]},{id:7,name:"Treasure",hostile:!0,nameScale:35,src:"crate_1",fixedSpawn:!0,spawnDelay:12e4,colDmg:200,killScore:5e3,health:2e4,weightM:.1,speed:0,turnSpeed:0,scale:70,spriteMlt:1},{id:8,name:"MOOFIE",src:"wolf_2",hostile:!0,fixedSpawn:!0,dontRun:!0,hitScare:4,spawnDelay:3e4,noTrap:!0,nameScale:35,dmg:10,colDmg:100,killScore:3e3,health:7e3,weightM:.45,speed:.0015,turnSpeed:.002,scale:90,viewRange:800,chargePlayer:!0,drop:["food",1e3]}];

/* weapons & projectiles  & weapon variants*/
const projectiles = [{type:0,indx:0,layer:0,src:"arrow_1",dmg:25,speed:1.6,scale:103,name:"bow",range:1e3},{type:1,indx:1,layer:1,dmg:25,scale:20,range:700,name:"turret",speed:1.5},{type:2,indx:0,layer:0,src:"arrow_1",dmg:35,speed:2.5,scale:103,name:"crossbow",range:1200},{type:3,indx:0,layer:0,src:"arrow_1",dmg:30,speed:2,scale:103,name:"repeater crossbow",range:1200},{type:4,indx:1,layer:1,dmg:16,scale:20,speed:1.5},{type:5,indx:0,layer:0,src:"bullet_1",dmg:50,speed:3.6,scale:160,name:"musket",range:1400}];
const weapons = [{id:0,type:0,name:"tool hammer",desc:"tool for gathering all resources",src:"hammer_1",length:140,width:140,xOff:-3,yOff:18,dmg:25,range:65,gather:1,speed:300},{id:1,type:0,age:2,name:"hand axe",desc:"gathers resources at a higher rate",src:"axe_1",length:140,width:140,xOff:3,yOff:24,dmg:30,spdMult:1,range:70,gather:2,speed:400},{id:2,type:0,age:8,name:"great axe",desc:"deal more damage and gather more resources",src:"great_axe_1",length:140,width:140,xOff:-8,yOff:25,dmg:35,spdMult:1,range:75,gather:4,speed:400},{id:3,type:0,age:2,name:"short sword",desc:"increased attack power but slower move speed",src:"sword_1",iPad:1.3,length:130,width:210,xOff:-8,yOff:46,dmg:35,spdMult:.85,range:110,gather:1,speed:300},{id:4,type:0,age:8,name:"katana",desc:"greater range and damage",src:"samurai_1",iPad:1.3,length:130,width:210,xOff:-8,yOff:59,dmg:40,spdMult:.8,range:118,gather:1,speed:300},{id:5,type:0,age:2,name:"polearm",desc:"long range melee weapon",src:"spear_1",iPad:1.3,length:130,width:210,xOff:-8,yOff:53,dmg:45,knock:.2,spdMult:.82,range:142,gather:1,speed:700},{id:6,type:0,age:2,name:"bat",desc:"fast long range melee weapon",src:"bat_1",iPad:1.3,length:110,width:180,xOff:-8,yOff:53,dmg:20,knock:.7,range:110,gather:1,speed:300},{id:7,type:0,age:2,name:"daggers",desc:"really fast short range weapon",src:"dagger_1",iPad:.8,length:110,width:110,xOff:18,yOff:0,dmg:20,knock:.1,range:65,gather:1,hitSlow:.1,spdMult:1.13,speed:100},{id:8,type:0,age:2,name:"stick",desc:"great for gathering but very weak",src:"stick_1",length:140,width:140,xOff:3,yOff:24,dmg:1,spdMult:1,range:70,gather:7,speed:400},{id:9,type:1,age:6,name:"hunting bow",desc:"bow used for ranged combat and hunting",src:"bow_1",req:["wood",4],length:120,width:120,xOff:-6,yOff:0,projectile:0,spdMult:.75,speed:600},{id:10,type:1,age:6,name:"great hammer",desc:"hammer used for destroying structures",src:"great_hammer_1",length:140,width:140,xOff:-9,yOff:25,dmg:10,spdMult:.88,range:75,sDmg:7.5,gather:1,speed:400},{id:11,type:1,age:6,name:"wooden shield",desc:"blocks projectiles and reduces melee damage",src:"shield_1",length:120,width:120,shield:.2,xOff:6,yOff:0,spdMult:.7},{id:12,type:1,age:8,name:"crossbow",desc:"deals more damage and has greater range",src:"crossbow_1",req:["wood",5],aboveHand:!0,armS:.75,length:120,width:120,xOff:-4,yOff:0,projectile:2,spdMult:.7,speed:850},{id:13,type:1,age:9,name:"repeater crossbow",desc:"high firerate crossbow with reduced damage",src:"crossbow_2",req:["wood",10],aboveHand:!0,armS:.75,length:120,width:120,xOff:-4,yOff:0,projectile:3,spdMult:.7,speed:300},{id:14,type:1,age:6,name:"mc grabby",desc:"steals resources from enemies",src:"grab_1",length:130,width:210,xOff:-8,yOff:53,dmg:0,steal:250,knock:.2,spdMult:1.05,range:125,gather:0,speed:700},{id:15,type:1,age:9,name:"musket",desc:"slow firerate but high damage and range",src:"musket_1",req:["stone",10],aboveHand:!0,rec:.35,armS:.6,hndS:.3,hndD:1.6,length:205,width:205,xOff:25,yOff:0,projectile:5,hideProjectile:!0,spdMult:.6,speed:1750}];
const variants = [{id:0,src:"",xp:0,val:1},{id:1,src:"_g",xp:3000,val:1.1},{id:2,src:"_d",xp:7000,val:1.18},{id:3,src:"_r",poison:true,xp:12000,val:1.18}];

/* hats & accessories */
const hats = [{id:45,name:"Shame!",dontSell:!0,price:0,scale:120,desc:"hacks are for losers"},{id:51,name:"Moo Cap",price:0,scale:120,desc:"coolest mooer around"},{id:50,name:"Apple Cap",price:0,scale:120,desc:"apple farms remembers"},{id:28,name:"Moo Head",price:0,scale:120,desc:"no effect"},{id:29,name:"Pig Head",price:0,scale:120,desc:"no effect"},{id:30,name:"Fluff Head",price:0,scale:120,desc:"no effect"},{id:36,name:"Pandou Head",price:0,scale:120,desc:"no effect"},{id:37,name:"Bear Head",price:0,scale:120,desc:"no effect"},{id:38,name:"Monkey Head",price:0,scale:120,desc:"no effect"},{id:44,name:"Polar Head",price:0,scale:120,desc:"no effect"},{id:35,name:"Fez Hat",price:0,scale:120,desc:"no effect"},{id:42,name:"Enigma Hat",price:0,scale:120,desc:"join the enigma army"},{id:43,name:"Blitz Hat",price:0,scale:120,desc:"hey everybody i'm blitz"},{id:49,name:"Bob XIII Hat",price:0,scale:120,desc:"like and subscribe"},{id:57,name:"Pumpkin",price:50,scale:120,desc:"Spooooky"},{id:8,name:"Bummle Hat",price:100,scale:120,desc:"no effect"},{id:2,name:"Straw Hat",price:500,scale:120,desc:"no effect"},{id:15,name:"Winter Cap",price:600,scale:120,desc:"allows you to move at normal speed in snow",coldM:1},{id:5,name:"Cowboy Hat",price:1e3,scale:120,desc:"no effect"},{id:4,name:"Ranger Hat",price:2e3,scale:120,desc:"no effect"},{id:18,name:"Explorer Hat",price:2e3,scale:120,desc:"no effect"},{id:31,name:"Flipper Hat",price:2500,scale:120,desc:"have more control while in water",watrImm:!0},{id:1,name:"Marksman Cap",price:3e3,scale:120,desc:"increases arrow speed and range",aMlt:1.3},{id:10,name:"Bush Gear",price:3e3,scale:160,desc:"allows you to disguise yourself as a bush"},{id:48,name:"Halo",price:3e3,scale:120,desc:"no effect"},{id:6,name:"Soldier Helmet",price:4e3,scale:120,desc:"reduces damage taken but slows movement",spdMult:.94,dmgMult:.75},{id:23,name:"Anti Venom Gear",price:4e3,scale:120,desc:"makes you immune to poison",poisonRes:1},{id:13,name:"Medic Gear",price:5e3,scale:110,desc:"slowly regenerates health over time",healthRegen:3},{id:9,name:"Miners Helmet",price:5e3,scale:120,desc:"earn 1 extra gold per resource",extraGold:1},{id:32,name:"Musketeer Hat",price:5e3,scale:120,desc:"reduces cost of projectiles",projCost:.5},{id:7,name:"Bull Helmet",price:6e3,scale:120,desc:"increases damage done but drains health",healthRegen:-5,dmgMultO:1.5,spdMult:.96},{id:22,name:"Emp Helmet",price:6e3,scale:120,desc:"turrets won't attack but you move slower",antiTurret:1,spdMult:.7},{id:12,name:"Booster Hat",price:6e3,scale:120,desc:"increases your movement speed",spdMult:1.16},{id:26,name:"Barbarian Armor",price:8e3,scale:120,desc:"knocks back enemies that attack you",dmgK:.6},{id:21,name:"Plague Mask",price:1e4,scale:120,desc:"melee attacks deal poison damage",poisonDmg:5,poisonTime:6},{id:46,name:"Bull Mask",price:1e4,scale:120,desc:"bulls won't target you unless you attack them",bullRepel:1},{id:14,name:"Windmill Hat",topSprite:!0,price:1e4,scale:120,desc:"generates points while worn",pps:1.5},{id:11,name:"Spike Gear",topSprite:!0,price:1e4,scale:120,desc:"deal damage to players that damage you",dmg:.45},{id:53,name:"Turret Gear",topSprite:!0,price:1e4,scale:120,desc:"you become a walking turret",turret:{proj:1,range:700,rate:2500},spdMult:.7},{id:20,name:"Samurai Armor",price:12e3,scale:120,desc:"increased attack speed and fire rate",atkSpd:.78},{id:58,name:"Dark Knight",price:12e3,scale:120,desc:"restores health when you deal damage",healD:.4},{id:27,name:"Scavenger Gear",price:15e3,scale:120,desc:"earn double points for each kill",kScrM:2},{id:40,name:"Tank Gear",price:15e3,scale:120,desc:"increased damage to buildings but slower movement",spdMult:.3,bDmg:3.3},{id:52,name:"Thief Gear",price:15e3,scale:120,desc:"steal half of a players gold when you kill them",goldSteal:.5},{id:55,name:"Bloodthirster",price:2e4,scale:120,desc:"Restore Health when dealing damage. And increased damage",healD:.25,dmgMultO:1.2},{id:56,name:"Assassin Gear",price:2e4,scale:120,desc:"Go invisible when not moving. Can't eat. Increased speed",noEat:!0,spdMult:1.1,invisTimer:1e3}];
const accessories = [{id:12,name:"Snowball",price:1e3,scale:105,xOff:18,desc:"no effect"},{id:9,name:"Tree Cape",price:1e3,scale:90,desc:"no effect"},{id:10,name:"Stone Cape",price:1e3,scale:90,desc:"no effect"},{id:3,name:"Cookie Cape",price:1500,scale:90,desc:"no effect"},{id:8,name:"Cow Cape",price:2e3,scale:90,desc:"no effect"},{id:11,name:"Monkey Tail",price:2e3,scale:97,xOff:25,desc:"Super speed but reduced damage",spdMult:1.35,dmgMultO:.2},{id:17,name:"Apple Basket",price:3e3,scale:80,xOff:12,desc:"slowly regenerates health over time",healthRegen:1},{id:6,name:"Winter Cape",price:3e3,scale:90,desc:"no effect"},{id:4,name:"Skull Cape",price:4e3,scale:90,desc:"no effect"},{id:5,name:"Dash Cape",price:5e3,scale:90,desc:"no effect"},{id:2,name:"Dragon Cape",price:6e3,scale:90,desc:"no effect"},{id:1,name:"Super Cape",price:8e3,scale:90,desc:"no effect"},{id:7,name:"Troll Cape",price:8e3,scale:90,desc:"no effect"},{id:14,name:"Thorns",price:1e4,scale:115,xOff:20,desc:"no effect"},{id:15,name:"Blockades",price:1e4,scale:95,xOff:15,desc:"no effect"},{id:20,name:"Devils Tail",price:1e4,scale:95,xOff:20,desc:"no effect"},{id:16,name:"Sawblade",price:12e3,scale:90,spin:!0,xOff:0,desc:"deal damage to players that damage you",dmg:.15},{id:13,name:"Angel Wings",price:15e3,scale:138,xOff:22,desc:"slowly regenerates health over time",healthRegen:3},{id:19,name:"Shadow Wings",price:15e3,scale:138,xOff:22,desc:"increased movement speed",spdMult:1.1},{id:18,name:"Blood Wings",price:2e4,scale:178,xOff:26,desc:"restores health when you deal damage",healD:.2},{id:21,name:"Corrupt X Wings",price:2e4,scale:178,xOff:26,desc:"deal damage to players that damage you",dmg:.25}];

/* skins */
const skinColors = ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373"];

/* hook websocket & deal with data*/
const { msgpack } = window;
let send, socket = {};

/*
0: pp [ping server]
6: ch [chat]

D: 2 [look]
d: c [hit, place]
c: 13c [equip hat or tail]
G: 5 [choose weapons, obj]
K: 7 [0 lock, 1 hit]
S: x [ping map]
a: 33 [walk angle]
M: sp [spawn]

L: create tribe
b: join tribe
Q: kick player
P: accept player
*/

class wsHandler {
    static setup(ws){
        socket = ws;
        document.ws = ws;

        console.log("Connected to", ws.url)
        window.webSocket = ws;
        ws.addEventListener("message", this.message);
        ws.addEventListener("close", (event) => console.log(event.code))

        send = (...args) => {
            const skipCheck = ["0", "D", "d"].includes(args[0]);

            const encoded = wsHandler.encode(...args);

            ws.readyState && ws.send(encoded, skipCheck);
        }

        pingReq();
        setInterval(pingReq, 5e3);
    }

    static encode = function(e, t, n) {
        t = Array.prototype.slice.call(arguments, 1);
        n = msgpack.encode([e, t]);

        return n;
    }

    static message(buffer, data){
        data = new Uint8Array(buffer.data);

        const parsed = msgpack.decode(data);
        data = parsed[1];

        scanEvent(parsed[0], data);
    }

    static check(data, skip) {
        const log = false;

        data = new Uint8Array(data);
        const parsed = msgpack.decode(data);

        data = parsed[1];
        let item = parsed[0];

        let oldData = data;
        data = data[0];

        let interrupt;

        /* Removing moomoo.io's built in packets */
        if(!skip) {
            const useless = ["0", "D","S","d"];

            if(useless.includes(item)) return false;
        }

        /* Managing packets */
        if(item === "a") moveAngle = data;
        if(item === "K") {
            let type = data === 1 ? "gathering" : "locked";

            player[type] = !player[type];

            if(type == "gathering") beforeHit(true);
        } else if(item === "d") {
            // if(player.hitting && data) return false;

            player.hitting = data;

            if(player.hitting) beforeHit(true);
        }

        /* Packet log */
        let Stringified = `"${item}"`;
        if(oldData.length) for(let piece of oldData) Stringified += `, ${piece}`;

        log && console.log(Stringified);

        updatePPS();

        if(PPS.length < 85) {
            PPS.push(Date.now());

            updateDisplay();

            if(interrupt) return this.encode(item, data);
            return true;
        }

        return false;
    }
}

/* ws hook */
const wsProto = WebSocket.prototype;

wsProto.send = new Proxy(wsProto.send, {
    apply: function(target, args, reciever) {
        if(args.url.includes("moomoo") && (!socket || socket.url != args.url)) wsHandler.setup(args);

        return Reflect.apply(target, args, reciever);
    }
});

wsProto.vanillaSend = wsProto.send;
wsProto.send = function(data, skipCheck){
    const Continue = wsHandler.check(data, skipCheck);

    if(!Continue) return 0;

    if(typeof Continue !== "boolean") data = Continue;

    this.vanillaSend(data);
}

/* bot data */
const Bot = {
    bots: [],
    skin: 0,
    name: null,
    sent: false,
    amount: 1,
    mode: "Life Guard",
    chat: "",
    hats: true,
    set: [7, 20, 31, 27, 9, 37, 12, 13],
    primary: 4,
    secondary: 10,
    pathSize: 2e3,
    pathQuality: 2
};

/* websocket on message data types */
let tribes, players = [], player = {}, pings = [], buildings = [], drawPlace = [], animals = [], TickBase = [], PPS = [], moveAngle, Smoothie = [], keyDown = [], itemCounts = [], lastBuild = [], Bullets = [], tribeMap = [], tribe = [], bots = [], buttonDown = [], Requests = [], botIds = [], mooMap = [],
    mouse, enemies, enemy, pingDate, pingIncome, Grecaptcha, tmpDir, Canvas, screenControl, ctx, mapDisplay, ctx2, ctx3, ctx4, pingCanvas, fpsCanvas, inGame, lastUpdate, Delta, TrapWeapon, Trap, pushPos, inPush, pushAngle, pushOffset, cardHTML, newDiv, currentMenu, menuChange, Element, Length, pageZoom,
    timer = 0, leakTime, mapScale = 14400, userSkin = 0, activeNotifs = 0, previousDir = 0, lastSent = 0, tickSpeed = 1e3 / 9, chatChange, gotInPush = Date.now(), ping = 0,
    auto = { skin: 0, tail: 0, dir: !1, move: !1, weapon: 0 }, BlockEl = ["chatBox","allianceInput","nameInput"], Checkers = ["botAutoAccept", "mapSize", "mapBiomes", "mapBots", "mapEnemies", "mapAnimals", "mapBuilds", "botHatLoop", "botSpawn", "botPathFinder", "botLagger", "zombieMode", "goldMode", "guardMode", "cleanerMode", "adjustMode", "showPing"], RemoveElements = ["promoImgHolder", "linksContainer2", "adCard", "errorNotification", "joinPartyButton"], Inputs = ["pathQuality", "pathSize", "botChat", "botAmount", "botName", "skin", "primary", "secondary", "set", "userSkin"],keyEvents=[{name:"keydown",doer:!0},{name:"keyup",doer:!1}],Cam={x:0, y:0}, Offset={x:0, y:0}, ArrowImg = new Image(), Notifications=`<div class="notifications-holder"></div><style>.box span {font-size: 20px;white-space: nowrap;}.box {width: max-content;height: 25px;display: flex;align-items: center;background: rgba(0, 0, 0, .25);border-radius: 4px;padding: 5px;margin-bottom: 5px;}.notifications-holder {position: absolute;left: 20px;top: 20px;display: flex;flex-direction: column;}</style>`, defaultNames = ["Lola","Jacob","Dylan","Finley","Ruby","Sonny","Holly","Florence","Liam","Lyra","Alfred","Grace","Arlo","Luna","Mohammed","Charlotte","Samuel","Sophia","Iris","Gabriel","Zachary","Emily","Charles","Eliza","Ethan","George","Tobias","Hunter","Sienna","Brody","Lottie","Elliot","Violet","Milo","Rose","Freya","Joseph","Noah","Margot","Ellie","Ellis","David","Eva","Jackson","Jude","Oakley","Ezra","Evelyn","Jasmine","Alice","Muhammad","Teddy","Theodore","Beatrice","Thomas","Harriet","Robyn","Edward","Eleanor","Yusuf","Arthur","Kai","Nathan","Albert","Emilia","Olive","Jesse","Michael","Oscar","Poppy","Lucy","Blake","Harry","Aurora","Elizabeth","Max","Molly","Jack","Benjamin","Rowan","Ivy","Imogen","Phoebe","Grayson","Evie","Ayla","Daniel","Sophie","Millie","Maria","Freddie","Otis","Maryam","Harper","Harvey","Joshua","Theo","Luca","Amelie","Arabella","Heidi","Rosie","Hugo","Lucas","Maisie","Willow","Isabelle","Clara","Hannah","Frederick","Henry","Darcie","Elodie","Ronnie","Lara","Hudson","Louie","Sara","Ollie","Chester","James","Louis","Layla","Archie","Nancy","Finn","Aria","Rupert","Mia","Mason","Charlie","Maya","Gracie","Felix","Eden","Jasper","Mabel","Albie","Lilly","Lily","Sebastian","Caleb","Frankie","Roman","William","Isaac","Reggie","Scarlett","Hallie","Elsie","Reuben","Bella","Alfie","Isla","Rory","Jessica","Isabella","Amelia","Delilah","Stanley","Harrison","Bobby","Logan","Olivia","Mohammad","Lyla","Summer","Toby","Esme","Emma","Zara","Chloe","Oliver","Amber","Myles ","Ella","Erin","Adam","Ralph","Anna","Orla","Sofia","Thea","Elijah","Ada","Myla","Jaxon","Penelope","Edith","Carter","Alexander","Riley","Leo","Ava","Bonnie","Matilda","Mila","Daisy","Maeve","Tommy"];

/* main functions */
const Slice = (data, index, length) => {
    return data.slice(length * index, length * index + length);
}

const isEnemy = (person) => {
    if(typeof person === "number") person = {sid: person};

    const Ally = isAlly(person.sid);

    return player.sid != person.sid && !Ally;
}

const findPlayer = (sid) => {
    if(player.sid === sid) return player;

    const length = players.length;

    for(let index = 0; index < length; index += 1) {
        const user = players[index];

        if(user && user.sid == sid) return user;
    }

    return false;
}

const findBuild = (sid) => {
    const length = buildings.length;

    for(let index = 0; index < length; index += 1) {
        const building = buildings[index];

        if(building && building.sid == sid) return building;
    }
}

const isAlly = (sid) => {
    return player.tribe && tribe.includes(sid)
}

const getEnemy = () => {
    enemies = [];
    enemy = null;

    enemies = players.filter((person) => person.visible && isEnemy(person));

    if(enemies.length) {
        enemies = enemies.sort((person, person2) => {
            const distance = [
                getDistance(player.x, player.y, person.x, person.y),
                getDistance(player.x, player.y, person2.x, person2.y)
            ];

            return (distance[0] - distance[1]);
        });

        enemy = enemies[0];

    }
}

const canBuild = (spot, id, dir, skipRes) => {
    const item = list[id];

    if(!window.inSandbox && item.req && !skipRes){
        Length = item.req.length;

        for(let index = 0; index < Length; index += 2) {
            const resources = player.res[item.req[index]];
            const price = item.req[index + 1];

            const enough = resources >= price;

            if(!enough) return false;
        }
    }

    const scale = (35 + item.scale + (item.placeOffset || 0));

    let newSpot = {x: spot.x, y: spot.y}
    newSpot.x += scale * Math.cos(dir);
    newSpot.y += scale * Math.sin(dir);

    const outdated = !skipRes && lastBuild[3] ? (Date.now() - lastBuild[3] > tickSpeed) : true;

    if(!outdated) {
        const newItem = list[lastBuild[1]];
        const newScale = (35 + newItem.scale + (newItem.placeOffset || 0));
        const newDir = lastBuild[2];

        buildings.push({
            x: lastBuild[0].x + newScale * Math.cos(newDir),
            y: lastBuild[0].y + newScale * Math.sin(newDir),
            getScale() {
                return newItem.scale;
            }
        });
    }

    const ableToBuild = checkItemLocation(newSpot, item.scale, false);

    if(!outdated) buildings.pop();

    return ableToBuild;
}

const checkItemLocation = (spot, scale) => {
    const buildingse = buildings.filter(building => getDistance(spot.x, spot.y, building.x, building.y) <= 400);
    for (let index = 0; index < buildingse.length; index += 1) {

        const building = buildingse[index];
        const scale2 = (building.blocker ? 300 : building.getScale(0.6, true));
        const distance = getDistance(spot.x, spot.y, building.x, building.y);
        const collide = distance < (scale + scale2);

        if (building.active && collide) {
            return false;
        }
    }

    if (spot.y >= 6838 && spot.y <= 7562) return false;

    return true;
}

const insideOf = (obj, person) => {
    let scale = obj.scale + person.scale;

    const Diff = {
        x: person.nextPos.x - obj.x,
        y: person.nextPos.y - obj.y,
    };

    if (Math.abs(Diff.x) <= scale || Math.abs(Diff.y) <= scale) {
        scale = person.scale + (obj.getScale ? obj.getScale() : obj.scale);

        let distance = Math.sqrt(Diff.x * Diff.x + Diff.y * Diff.y) - scale;

        if (distance <= 0) return true;
    }

    return false;
}

const predictDamage = () => {
    const damage = {
        total: 0,
        spikes: 0,
        primary: 0,
        secondary: 0,
        turret: 0,
        bullets: 0
    }

    Length = enemies.length;

    for(let index = 0; index < Length; index += 1) {
        const person = enemies[index];

        if(person.damage.primary > (person.damage.secondary + person.damage.turret)) {
            damage.primary += person.damage.primary * 1.5;
        } else {
            damage.secondary += person.damage.secondary;
            damage.turret += person.damage.turret;
        }
    }

    Length = buildings.length;

    for(let index = 0; index < Length; index += 1) {
        const build = buildings[index];

        if(build.dmg && insideOf(build, player)) damage.spikes += build.dmg;
    }

    Length = Bullets.length;

    for(let index = 0; index < Length; index += 1) {
        const bullet = Bullets[index];

        if(bullet.estimated <= 1) damage.bullets += bullet.dmg;
    }

    damage.total = damage.spikes + damage.primary + damage.secondary + damage.turret + damage.bullets;

    return damage;
}

const updatePPS = () => {
    for(let Packet of PPS) {
        const outdated = (Date.now() - Packet >= 1e3);

        if(outdated) PPS.shift();
    }

    updateDisplay();
}

setInterval(updatePPS, 50);

const pingReq = () => {
    if(pingIncome) return;
    pingIncome = true;

    pingDate = Date.now();
    send("0");
}

const updateDisplay = (text) => {
    const display = document.getElementById("pingDisplay");

    if(display) {
        display.innerText = `PPS: ${PPS.length} Ping: ${ping} ms`;
        if(enemies && enemies.length) display.innerText += ` Dmg: ${predictDamage().total}`;

        if(!enemy || !buttonDown[2]) return
        display.innerText = Math.round(getDistance(walk.x, walk.y, player.x, player.y)).toString()
    }
}

const pingRes = () => {
    ping = Date.now() - pingDate;

    updateDisplay();

    pingIncome = false;
}

const cursor = () => {
    if(!mouse) return 0;

    const mouseAngle = Math.atan2(mouse.clientY - Canvas.clientHeight / 2, mouse.clientX - Canvas.clientWidth / 2);

    return Number(mouseAngle.toFixed(2))
}

const autoAccept = () => {
    if(!player.tribe) Requests = [];

    for(let index = 0; index < Requests.length; index += 1) {
        Bot.bots.length && !isAlly(Requests[index].sid) && botIds.includes(Requests[index].sid) && Packet.respond(Requests[index].sid, true);
    }
}

const defaultName = (text) => {
    if(typeof text != "string" || Bot.name === text) return true;
    text = text.toLowerCase();

    if(text.includes("] ")) text = text.split("] ")[1];

    Length = defaultNames.length;
    for(let index = 0; index < Length; index += 1) {
        const Name = defaultNames[index].toLowerCase();

        if(Name === text) return true;
    }
    return false;
}

const ChangeMap = (px, spectate) => {
    document.getElementById("scoreDisplay").style.bottom = `${spectate ? 40 : px + 40}px`;

    const Style = mapDisplay.style;

    Style.width = `${px}px`
    Style.height = `${px}px`

    if(!spectate) {
        if(Style.bottom != "20px") {
            Style.left = "20px"
            Style.bottom = "20px"
        }

        return
    }

    px /= 2;

    Style.left = `${window.innerWidth / 2 - px}px`
    Style.bottom = `${window.innerHeight / 2 - px}px`
    }

const Dealer = () => {
    /* auto accept */
    Element = document.getElementById("botAutoAccept");

    Element && Element.checked && Requests.length && autoAccept();

    /* show ping */
    Element = document.getElementById("showPing");

    let mustDisplay = Element.checked ? "block" : "none";
    Element = document.getElementById("pingDisplay");

    if(Element && Element.style.display !== mustDisplay) {
        Element.style.display = mustDisplay;
        $("body").append(Element);
    }

    /* mini-map scale */
    Element = document.getElementById("mapSize");

    const spectateMap = 600 / 970 * window.innerHeight;
    const hugeMap = 220;

    if((keyDown[192] && keyDown[16])) {

        ChangeMap(spectateMap, true);
        return
    }

    if(Element && Element.checked && mapDisplay.style.width !== `${hugeMap}px`) {
        ChangeMap(hugeMap);
    } else if(!Element.checked && mapDisplay.style.width !== "130px"){
        ChangeMap(130);
    }

}

const randomName = () => {
    const Index = Math.floor(defaultNames.length * Math.random());

    return defaultNames[Index];
}

async function getUrl(){
    const token = await grecaptcha.execute("6LevKusUAAAAAAFknhlV8sPtXAk5Z5dGP5T2FYIZ", {action: "homepage"});
    const url = `${socket.url.split("token")[0]}token=${encodeURIComponent(token)}`;
    console.log(url)
    return url;
}

const scanEvent = (type, data) => {
    const length = Events.length;

    for(let index = 0; index < length; index += 1) {
        const Event = Events[index];

        if(Event[type]) Event.serve(data);
    }
}

let Get = {
    x: (x, diviser = 1) => {
        return x / mapScale * (mapDisplay.width / diviser);
    },
    y: (y, diviser = 1) => {
        return y / mapScale * (mapDisplay.height / diviser);
    }
}

const updateMap = () => {
    if(!player || !player.alive) return;

    ctx2.clearRect(0, 0, mapDisplay.width, mapDisplay.height);

    if(document.getElementById("mapBiomes").checked) {
        ctx2.globalAlpha = .2;

        /* Draw snow */
        ctx2.fillStyle = "#fff";
        ctx2.fillRect(0, 0, mapDisplay.width, Get.y(2400));

        /* Draw river */
        ctx2.fillStyle = "#91b2db";
        ctx2.fillRect(0, Get.y((mapScale / 2) - 362), mapDisplay.width, Get.y((mapScale / 2) + 362, 10));

        /* Draw desert */
        ctx2.fillStyle = "#dbc666";
        ctx2.fillRect(0, Get.y(mapScale - 2400), mapDisplay.width, mapDisplay.height);
    }

    /* Draw Bots */
    if(Bot.bots.length) drawBots();

    let pos;

    /* Draw Tribe Members */
    if(player.tribe && tribe.length >= 4 && tribeMap.length) {
        for(let tribeMate of tribeMap) {
            pos = {
                x: Get.x(tribeMate.x),
                y: Get.y(tribeMate.y)
            }

            Circle(pos, skinColors[9], .8, 6, false, true);
        }
    }

    /* Draw Owner */
    pos = {
        x: Get.x(player.x3),
        y: Get.y(player.y3)
    }

    Circle(pos, "#fff", 1, 6, false, true);
}

const drawBots = () => {
    let drawnEnemies = [],
        drawnAnimals = [];

    for(let index = 0; index < Bot.bots.length; index += 1) {
        const bot = Bot.bots[index];

        if(bot.readyState === 1) {
            /* Draw bots */
            if(document.getElementById("mapBots").checked) {
                const pos2 = {
                    x: Get.x(bot.x),
                    y: Get.y(bot.y)
                };

                const shouldStroke = isAlly(bot.sid) ? 0 : 3;

                Circle(pos2, "#fff", .5, 6 - shouldStroke / 2, shouldStroke, true);
            }

            /* Draw enemies */
            if(bot.enemies.length && document.getElementById("mapEnemies").checked) {
                for(let index2 = 0; index2 < bot.enemies.length; index2 += 1) {
                    const botEnemy = bot.enemies[index2];

                    if(!drawnEnemies.includes(botEnemy.sid)) {
                        drawnEnemies.push(botEnemy.sid);

                        const pos2 = {
                            x: Get.x(botEnemy.x),
                            y: Get.y(botEnemy.y)
                        };

                        Circle(pos2, "red", .5, 6, false, true);
                    }
                }
            }

            /* Draw animals */
            if(bot.animals.length && document.getElementById("mapAnimals").checked) {
                for(let index2 = 0; index2 < bot.animals.length; index2 += 1) {
                    const botAnimal = bot.animals[index2];
                    const Indicator = Math.round(botAnimal.x - botAnimal.y);

                    if(botAnimal.dmg && !drawnAnimals.includes(Indicator)) {
                        drawnAnimals.push(Indicator);

                        const pos2 = {
                            x: Get.x(botAnimal.x),
                            y: Get.y(botAnimal.y)
                        };

                        Circle(pos2, "blue", .5, 6, false, true);
                    }
                }
            }
        }
    }

    /* Draw buildings */
    updateMapBuilds();
}
const updateMapBuilds = () => {
    if((!document.getElementById("mapBuilds").checked || pageZoom != window.innerHeight) && mooMap.length) {
        for(let index2 = 0; index2 < mooMap.length; index2 += 1) {
            mooMap[index2] && mooMap[index2].remove();
        }

        mooMap = [];
    }

    pageZoom = window.innerHeight;

    const botBuilds = buildings;

    for(let index = 0; index < Bot.bots.length; index += 1) {
        const bot = Bot.bots[index];

        if(bot.readyState === 1) {
            for(let index2 = 0; index2 < bot.buildings.length; index2 += 1) {
                const build = bot.buildings[index2];

                if(!botBuilds.includes(build)) botBuilds.push(build);
            }
        }
    }

    if(!botBuilds.length || !document.getElementById("mapBuilds").checked) return

    const miniMapSize = Number(document.getElementById("mapDisplay").style.width.split("px")[0]);

    for(let index = 0; index < botBuilds.length; index += 1) {
        const build = botBuilds[index];

        const inMooMap = mooMap[build.sid];

        if(!inMooMap) {
            const imgUrl = (() => {
                if(build.isItem) return list[build.id].img;

                switch(build.type) {
                    case 0:
                        return "https://moomoo.io/img/resources/wood_ico.png"
                        break;
                    case 1:
                        if(build.y < 12e3) return "https://media.discordapp.net/attachments/1086555931040567307/1088511319478648862/Food_Bush-removebg-preview.png"
                        return "https://media.discordapp.net/attachments/1086555931040567307/1088513154151100457/image-removebg-preview_1.png"
                        break;
                    case 2:
                        return "https://moomoo.io/img/resources/stone_ico.png"
                        break;
                    case 3:
                        return "https://moomoo.io/img/resources/gold_ico.png"
                        break;
                }
            })();

            const Get = {
                x: (x) => {
                    return x / mapScale * mapDisplay.width;
                },
                y: (y) => {
                    return y / mapScale * mapDisplay.height;
                }
            }

            const mapRect = document.getElementById("mapDisplay").getBoundingClientRect();

            let targets = [build.x, build.y, build.scale].map(num => (miniMapSize * num) / mapScale);
            const pos = {
                x: targets[0],
                y: targets[1],
                scale: targets[2] * 3
            }

            pos.x -= pos.scale / 2;
            pos.y -= pos.scale / 2;

            const newImage = document.createElement("div");
            newImage.rawX = pos.x;
            newImage.rawY = pos.y;
            newImage.rimgURL = imgUrl;
            newImage.style = `background-image: url("${imgUrl}"); background-size: ${pos.scale}px ${pos.scale}px; width:${pos.scale}px; height:${pos.scale}px; position:absolute; left: ${mapRect.x + pos.x}px; top:${mapRect.y + pos.y}px; opacity:0; z-index:100; cursor: pointer;`;
            newImage.className = "mapTarget";

            document.getElementsByTagName("body")[0].appendChild(newImage);

            $(newImage).animate({opacity: 1});

            mooMap[build.sid] = newImage;
        } else if(inMooMap && !build.active){
            $(inMooMap).animate({ opacity: 0 }, 750, () => {
                $(inMooMap).remove();
            });
        }
    }
}

let walkEnemy;

const bowInsta = async () => {
    if(!enemy) return;
    const distance = getDistance(enemy.x, enemy.y, player.x, player.y);

    const ranges = [696, 694, 695, 697, 698, 699];

    if(!ranges.includes(Math.round(distance))) {
        walkerMode = [ranges, bowInsta];
        console.log('lol')

        return;
    }

    console.log(distance, ranges.includes(Math.round(distance)));

    await syncTick();

    Packet.equip(53, 11);

    !player.gathering && Packet.gather();

    if(player.age >= 6 && player.weapons[1] !== 6) {
        Packet.choose(9);
        Packet.watch(getAngle(player, enemy));

        await syncTick();
    }

    if(player.age >= 7) {
        !player.items.includes(38) && Packet.choose(38);
        player.weapons[1] === 6 && Packet.choose(12);

        Packet.watch(getAngle(player, enemy));

        await syncTick();

        Packet.choose(15);
        Packet.watch(getAngle(player, enemy));

        await syncTick();

        player.gathering && Packet.gather();
    }
}

const Insta = async () => {
    Packet.equip(7, 18);
    Packet.hold(player.weapons[0], true);

    Packet.watch(enemy ? getAngle(player, enemy) : cursor());
    !player.gathering && Packet.gather();

    await syncTick();

    !player.gathering && Packet.gather();
    Packet.equip(53, 11);
    Packet.hold(player.weapons[1], true);

    await syncTick();

    player.gathering && Packet.gather();
    Packet.hold(player.weapons[0], true);
}

const keyUpdate = (keyCode, doer, event) => {
    keyDown[keyCode] = doer;

    if(!player || !player.alive) return;

    if(!doer) return;
    if([49, 50, 97, 98].includes(keyCode)) { /* 1 2 */
        const WeaponType = [[49, 97].includes(keyCode), [50, 98].includes(keyCode)];
        auto.weapon = Number(WeaponType[1]);
    }

    /* A W S D + Arrows*/
    if(walkerMode && [65, 67, 83, 87, 37, 38, 39, 40].includes(keyCode)) walkerMode = null;

    if(keyCode === 76) { /* L */
        if(!enemy || player.age < 6) return null;
        bowInsta();
    }

    if(keyCode === 82) { /* R */
        Insta();
        return
        let ab = buildings.filter(c => getDistance(c.x, c.y, player.x, player.y) < 300);
        console.log(ab)
        return
        if(!enemy || document.ka) {
            if(document.ka)clearInterval(walkEnemy)
            document.ka = false
            Packet.move(null);
            return
        }
        document.ka = true;
        walkEnemy = setInterval(() => {
            pathFind(enemy)
            if(path[1]){
                let Pointe = {
                    x: path[1][0],
                    y: path[1][1]
                }
                Packet.move(getAngle(player, Pointe));
            }
        }, 111);

        setInterval(() => {
            let position = {
            x: player.x + Math.cos(cursor()) * 400,
            y: player.y + Math.sin(cursor()) * 400
        }
        pathFind(position)
        }, 111);
        /* let position = {
            x: player.x + Math.cos(cursor()) * 700,
            y: player.y + Math.sin(cursor()) * 700
        }
        pathFind(position);*/
        //   console.log(Bot.bots)
        /* createCanvas();
        console.log(Bot.bots)
        Packet.chat("Brr!")

        let Circleable = [];

        for(let bot of Bot.bots) {
            const { parent } = bot;

            if(parent.readyState === 1 && bot.readyState === 1) Circleable.push(bot);
        }

        Length = Circleable.length;

        for(let dir = 0; dir < Math.PI * 2; dir += Math.PI * 2 / Length) {
            let bot = Circleable[0];

            if(bot) bot.parent.vanillaSend(JSON.stringify({type: "updateCircle", sid: bot.sid, dir: dir, range: 300}));

            Circleable.shift();
        }
        let position = {
            x: player.x + Math.cos(cursor()) * 400,
            y: player.y + Math.sin(cursor()) * 400
        }
        pathFind(position);*/
    }
    if(keyCode === 9) { /*  Tab */
        event.preventDefault();
        toggleMenu();
        console.log(player)
    }
}

const Heal = () => {
    if(!player.alive || player.health <= 0 || player.health === 100 || player.skin === 45 || ((player.items[0] === 0 && player.res.food < 10) || (player.items[0] !== 0 && player.res.food < 15))) return 0;

    const delta = Date.now() - player.hitTime;
    const damage = 100 - player.health;

    const consume = () => {
        const amount = Math.ceil(damage / (player.items[0] === 0 ? 20 : 40));

        Packet.build(player.items[0], null, amount);
    }

    if(delta >= 100) return consume();

    if(!enemy) return;
    const Potential = predictDamage();
    /*{
        total
        spikes
        primary
        secondary
        turret
        bullets
    }*/


    const newAnti = enemy && player.reloads[0].done && player.health + player.damage.primary / 5 - 50 > 0 && player.skin === 6 && enemy.skin === 7 && enemy.reloads[2].done && enemy.reloads[1].done && Math.abs(100 - player.health - enemy.damage.primary * 1.5 * .75) < 5;

    if((Potential.total > player.health || keyDown[81]) && !newAnti && player.shameCount < 7) return consume();
}

const Knock = () => {

}

document.pushAmount = 5;
document.pushSpot = 50;

const AutoPush = () => {
    inPush = false;

    if(!enemy) return 0;

    const trap = (() => {
        let temp = 0;
        Length = buildings.length;

        for(let index2 = 0; index2 < Length; index2 += 1) {
            const build = buildings[index2];
            const isTrap = build.active && build.isItem && getDistance(build.x, build.y, enemy.x, enemy.y) <= 50 && build.trap && build.ownerSid === player.sid;

            if(isTrap) temp = build;
        }

        return temp;
    })();

    if(!trap) return 0;

    const spikes = (() => {
        Length = buildings.length;
        let temp = [];


        for(let index = 0; index < Length; index += 1) {
            const build = buildings[index];
            const isSpike = build.active && build.isItem && getDistance(build.x, build.y, trap.x, trap.y) <= trap.getScale() + build.getScale() + player.scale * 2 && build.dmg && build.ownerSid === player.sid;

            if(isSpike) temp.push(build);
        }

        Length = temp.length;

        if(!Length) return false;

        if(Length > 1) {
            temp = temp.sort((obj, obj2) => {
                const distance = [
                    getDistance(trap.x, trap.y, obj.x, obj.y),
                    getDistance(trap.x, trap.y, obj2.x, obj2.y)
                ];

                return (distance[0] - distance[1]);
            });
        }

        return temp;
    })();

    if(!spikes.length) return console.log("no spike");

    inPush = true;

    let spike = (() => {
        if(spikes.length > 1) {
            const dist = getDistance(spikes[0].x, spikes[0].y, spikes[1].x, spikes[1].y) / 2;
            const minDist = player.scale * 1.5 + spikes[0].getScale() * 2;

            if(dist * 2 > minDist) return spikes[0];

            const angle = getAngle(spikes[0], spikes[1]);

            return {
                x: spikes[0].x + Math.cos(angle) * dist,
                y: spikes[0].y + Math.sin(angle) * dist,
                double: true
            }
        } else return spikes[0];
    })();

    const enemyDist = getDistance(spike.x, spike.y, enemy.x, enemy.y);

    let angle = getAngle(spike, enemy);
    let distance = enemyDist + 80;

    pushPos = {
        x: spike.x + (distance * Math.cos(angle)),
        y: spike.y + (distance * Math.sin(angle))
    }

    const trapAngle = getAngle(player, trap);
    const spikeAngle = getAngle(player, spike);

    const pushSide = trapAngle > spikeAngle ? "right" : "left";

    pushOffset = Math.abs(getAngle(player, spike) - getAngle(player, trap));
    pushAngle = getAngle(player, enemy);

    const offsetSize = Math.min(0, (enemyDist - (spike.double ? 40 : spike.getScale()) - player.scale) / 50);
    const offset = pushOffset * (document.pushAmount * offsetSize);

    switch(pushSide) {
        case "right":
            pushAngle -= offset;
            break;

        case "left":
            pushAngle += offset;
            break;
    }

    const distToPush = getDistance(pushPos.x, pushPos.y, player.x, player.y);

    inPush = distToPush < document.pushSpot;

    angle = getAngle(player, pushPos);
    const Angles = [angle, pushAngle];

    angle = Angles[Number(inPush)];

    buttonDown[2] && Packet.move(angle);
}

let walk = 0;
let skips = 0;
let walkerMode;
let finishDate = Date.now();

//[382, 383, 384]

const Walker = (range, pos, finish) => {
    skips -= 1;

    if(skips > 1 && !player.speed) skips = 0;

    if(!enemy || skips > 0 || !walkerMode) return;

    range = walkerMode[0];

    let distance = getDistance(enemy.x, enemy.y, player.x, player.y);
    let angle = getAngle({x:enemy.x, y:enemy.y}, {x:player.x, y:player.y});

    pos = {
        x: enemy.x + Math.cos(angle) * range[0],
        y: enemy.y + Math.sin(angle) * range[0]
    }

    const toPoint = Math.round(getDistance(walk.x, walk.y, player.x, player.y));

    if(Date.now() - finishDate > 5e3 && toPoint < 25 && ![0, 1, 2].includes(toPoint)) {
        finishDate = Date.now();
        skips = 4;
        Packet.move(angle);
        return
    }

    walk = pos;
    angle = getAngle({x:player.x, y:player.y}, pos);

    const skin = hats.find(hat => hat.id === player.skin);
    const tail = accessories.find(accessory => accessory.id === player.tail);

    let spdMult = player.buildIndex >= 0 ? 0.5 : 1;
    spdMult *= (weapons[player.weaponIndex].spdMult || 1);
    spdMult *= (skin ? (skin.spdMult || 1) : 1);
    spdMult *= (tail ? (tail.spdMult || 1) : 1);
    spdMult *= (player.y <= 2400 ? (skin && skin.coldM ? 1 : 0.75) : 1);

    const speed = spdMult * 37;
    const nowStop = Math.round(speed * 1.2727 / 1.6206);

    const speedDiff = player.speed - speed;
    const perfectSpeed = Math.abs(speedDiff) <= 1;

    const currentStop = player.speed * 1.2727 / 1.6206
    const stopDist = perfectSpeed ? nowStop : (currentStop);

    const futurePos = {
        x: player.x + Math.cos(angle) * stopDist,
        y: player.y + Math.sin(angle) * stopDist
    }

    if(toPoint < 50 && player.buildIndex < 0) {
        Packet.hold(player.items[0]);

        auto.skin = Skins[40] ? 40 : 6;
    } else if(player.buildIndex > -1) Packet.hold(player.weapons[0], true);

    let enemyDist = distance;
    distance = getDistance(enemy.x, enemy.y, futurePos.x, futurePos.y);

    const speedDist = [[], []]

    speedDist[0][20] = 15;
    speedDist[0][19] = 14;
    speedDist[0][19] = 14;
    speedDist[0][18] = 14;
    speedDist[0][16] = 13;
    speedDist[0][15] = 9;
    speedDist[0][14] = 11;
    speedDist[0][13] = 9;
    speedDist[0][12] = 7;
    speedDist[0][11] = 7;
    speedDist[0][10] = 7;
    speedDist[0][9] = 6;
    speedDist[0][8] = 5;
    speedDist[0][7] = 5;
    speedDist[0][6] = 3;
    speedDist[0][3] = 2;
    speedDist[0][2] = 1;
    speedDist[0][1] = 0;

    speedDist[1][17] = 13;
    speedDist[1][16] = 12;
    speedDist[1][15] = 11;
    speedDist[1][14] = 10;
    speedDist[1][12] = 7;
    speedDist[1][11] = 7;
    speedDist[1][10] = 6;
    speedDist[1][9] = 3;
    speedDist[1][8] = 3;
    speedDist[1][7] = 4;
    speedDist[1][6] = 3;
    speedDist[1][5] = 2;
    speedDist[1][4] = 1;
    speedDist[1][3] = 1;
    speedDist[1][2] = 0;
    speedDist[1][1] = 0;

    const shouldTry = player.speed && range.includes(Math.round(distance));
    const Memory = speedDist[Number(player.oldSpeed > player.speed)][Math.round(player.speed)];

    const useMemory = [0, 1, 2].includes(Math.abs(toPoint - Memory));

    if(useMemory || shouldTry){
        Packet.move(null)
        skips = 6;
        finish = true;
    }

    if([0, 1, 2].includes(Math.abs(Math.round(toPoint))) && !player.speed) {
        finishDate = Date.now();
        skips = 10;
        finish = true;
        walkerMode[1]();

        walkerMode = null;
    }

    if(!finish) Packet.move(angle)
}

const AntiTrap = () => {
    const trap = (() => {
        const Length = buildings.length;

        for(let index = 0; index < Length; index += 1) {
            const build = buildings[index];
            const isTrap = build.active && build.isItem && getDistance(build.x, build.y, player.x, player.y) <= 50 && build.trap && isEnemy(build.ownerSid);

            if(isTrap) return build;
        }
    })();

    if(!trap) {
        if(Trap) {
            auto.dir = !1;

            for(let dir = 0; dir < Math.PI * 2; dir += Math.PI / 6) Packet.build(player.items[4], dir);

            Trap = null;
        }

        return;
    }

    Trap = trap;

    const angle = getAngle(player, trap);
    const hasHammer = (player.weapons[1] && player.weapons[1] === 10);

    const weaponIndex = hasHammer ? 1 : 0;
    const weaponId = player.weapons[weaponIndex];

    const buildDamage = {
        primary: weapons[player.weapons[0]].dmg * player.reloads[0].weaponRarity * (weapons[player.weapons[0]].sDmg || 1) * (Skins[40] ? 3.3 : 1),
        secondary: hasHammer ? weapons[10].dmg * player.reloads[1].weaponRarity * (weapons[player.weapons[1]].sDmg || 1) * (Skins[40] ? 3.3 : 1) : 0
    }

    const faster = (player.reloads[0].max - player.reloads[0].count) >= (player.reloads[1].max - player.reloads[1].count) ? 1 : 0;

    const mainReady = player.reloads[weaponIndex].done;

    const noDifference = trap.health <= buildDamage.primary && trap.health <= buildDamage.secondary
    const couldBreak = hasHammer && player.reloads[0].done && !mainReady && trap.health <= buildDamage.primary

    if(noDifference) Packet.hold(faster, true);

    TrapWeapon = !noDifference ? (couldBreak ? 0 : Number(weaponId >= 9)) : faster;

    if(mainReady || couldBreak) {
        !noDifference && Packet.hold(couldBreak ? player.weapons[0] : weaponId, true);

        auto.dir = angle;

        Packet.hit(angle);
    }
}

const beforeHit = (sent) => {
    const Reload = player.reloads[Number(player.weaponIndex >= 9)];

    if(!Reload.done || ((!player.gathering && !sent) || (Date.now() - lastSent <= 1e3 / 9))) return 0;

    lastSent = Date.now();

    Packet.watch(auto.dir);

    return true;
};

let Tails = { "0": true };
for (let i = 0; i < accessories.length; i += 1) {
    if (accessories[i].price <= 0) Tails[accessories[i].id] = true;
}
let Skins = { "0": true };
for (let i = 0; i < hats.length; i += 1) {
    if (hats[i].price <= 0) Skins[hats[i].id] = true;
}

const Clothing = (Skip) => {
    if(!Trap) auto.dir = cursor();

    /* Manage skins */
    if(!Skip) {
        const In = {
            water: player.y >= 6850 && player.y <= 7550,
            snow: player.y <= 2400
        }

        /* Biomes */
        if(In.water) {
            auto.skin = 31;
        } else if(In.snow) {
            auto.skin = 15;
        } else auto.skin = 12;

        /* Shame */
        if(player.skin === 45) auto.skin = 13;

        /* Enemy */
        if(enemy) {
            const weaponRange = 35 + (weapons[enemy.weaponIndex].range || -100)
            const inDistance = getDistance(enemy.x, enemy.y, player.x, player.y) <= weaponRange + 35;

            if(inDistance) auto.skin = 6;
        }

        /* Hit hats */
        const Gathering = beforeHit();

        if(Gathering) {
            const weaponRange = 35 + (weapons[player.weaponIndex].range || -100)

            const hitMats = (() => {
                Length = buildings.length;

                for(let index = 0; index < Length; index += 1) {
                    const build = buildings[index];

                    const Fits = build.active && !build.isItem;
                    const inDistance = getDistance(build.x, build.y, player.x, player.y) <= weaponRange + build.getScale();
                    const inView = Math.abs(getAngle(player, build) - auto.dir) <= Math.PI / 2.6;

                    if(inView && inDistance && Fits) return build;
                }
            })();

            const hitBuild = (() => {
                Length = buildings.length;

                for(let index = 0; index < Length; index += 1) {
                    const build = buildings[index];

                    const Fits = build.active && build.isItem;
                    const inDistance = getDistance(build.x, build.y, player.x, player.y) <= weaponRange + build.getScale();
                    const inView = Math.abs(getAngle(player, build) - auto.dir) <= Math.PI / 2.6;

                    if(inView && inDistance && Fits) return build;
                }
            })();

            const hitPlayer = (() => {
                Length = enemies.length;

                for(let index = 0; index < Length; index += 1) {
                    const person = enemies[index];

                    const inDistance = getDistance(person.x, person.y, player.x, player.y) <= weaponRange + 35;
                    const inView = Math.abs(getAngle(player, person) - auto.dir) <= Math.PI / 2.6;

                    if(inView && inDistance) return person;
                }
            })();

            const hitAnimal = (() => {
                Length = animals.length;

                for(let index = 0; index < Length; index += 1) {
                    const animal = animals[index];

                    const Fits = ["Bull", "Bully", "Wolf", "Quack", "MOOFIE", "MOOSTAFA", "Treasure"].includes(animal.obj.name);
                    const inDistance = getDistance(animal.x, animal.y, player.x, player.y) <= weaponRange + animal.scale;
                    const inView = Math.abs(getAngle(player, animal) - auto.dir) <= Math.PI / 2.6;

                    if(inView && inDistance && Fits) return animal;
                }
            })();

            if(hitMats) auto.skin = 20;
            if(hitBuild) auto.skin = 40;
            if(hitAnimal || hitPlayer) {
                auto.skin = 7;
                auto.tail = 18;
            }
        }

        /* Tank */
        if(Trap) {
            if(player.reloads[TrapWeapon].done) {
                auto.skin = 40;
            } else {
                Length = enemies.length;

                for(let index = 0; index < Length; index += 1) {
                    const person = enemies[index];

                    const riskyDistance = (weapons[person.reloads[0].id].range || 100) + 35;
                    const inDistance = getDistance(person.x, person.y, player.x, player.y) <= riskyDistance;

                    if(person.reloads[0].done && inDistance) auto.skin = 26;
                }
            }
        }

        /* Bullet defense */
        Length = Bullets.length;

        for(let index = 0; index < Length; index += 1) {
            const bullet = Bullets[index];

            if(bullet.estimated === 2) auto.skin = 6;
        }

        /* Bull Tick */ // predictDamage();
        if(keyDown[16] && player.health === 100 && player.shameCount > 0 && (!leakTime || leakTime === (timer - 1) % 9)) auto.skin = 7;

        /* New Anti */
        if(enemy && player.reloads[0].done && player.health + player.damage.primary / 5 - 50 > 0 && player.skin === 6 && enemy.skin === 7 && enemy.reloads[2].done && enemy.reloads[1].done && Math.abs(100 - player.health - enemy.damage.primary * 1.5 * .75) < 5) {
            Packet.hold(player.weapons[0], true);
            Packet.hit(getAngle(player, enemy));
            auto.skin = 22;

            console.log(`New Anti: [${player.health + player.damage.primary / 5 - 50}, ${100 - player.health} ${enemy.damage.primary * 1.5 * .75}]`);
        }
    }

    /* Manage tails */
    if([31, 15, 12].includes(auto.skin)) {
        auto.tail = 11;
    } else if(auto.skin === 7){
        auto.tail = 18;
    } else if(auto.skin === 6){
        auto.tail = 18;
    } else if(auto.skin === 22){
        auto.tail = 18;
    } else auto.tail = 0;

    /* Release */
    player.skin != 45 && Packet.equip(auto.skin, auto.tail);
}

let Ticked = function(){};
let syncTick = function(){
    return new Promise((e) => (Ticked = e))
}

const Tick = () => {
    Dealer();

    Length = TickBase.length;
    timer += 1;

    for(let index = 0; index < Length; index++) TickBase[index].function(...TickBase[index].data);
    TickBase = [];

    Length = Bullets.length;
    for(let index = 0; index < Length; index += 1) Bullets[index] && Bullets[index].update();

    getEnemy();

    if(!player.alive) return;

    Object.assign(auto, { skin: 0, tail: 0 });

    Heal();
    AntiTrap();
    AutoPush();
    Walker();

    Clothing();

    Ticked();
    const cpsDelay = ((1e3 / 9) - ping * 1.5);
    setTimeout(Placer.update, cpsDelay);
}

// Predict projectile path
const degree = (r) => {return Math.PI / 180 * r};
const getAngle = (n,t) =>(n.nextPos&&(n=n.nextPos),t.nextPos&&(t=t.nextPos),Math.atan2(t.y-n.y,t.x-n.x));
const getDirection=(t,n,a,c)=>Math.atan2(n-c,t-a);
const getDistance = (n,r,t,u) => {return Math.sqrt((t-=n)*t+(u-=r)*u)};
const lineInRect = (r,$,a,f,i,n,v,t) => {let u=i,e=v;if(i>v&&(u=v,e=i),e>a&&(e=a),u<r&&(u=r),u>e)return!1;var _=n,b=t,c=v-i;if(Math.abs(c)>1e-7){var o=(t-n)/c,s=n-o*i;_=o*u+s,b=o*e+s}if(_>b){var d=b;b=_,_=d}return b>f&&(b=f),_<$&&(_=$),!(_>b)};

function Predict(x, y, dir, range, scale, object, owner){
    let logs = false;
    let skipMov = true;
    let objectsHit = new Array();

    logs && console.log(`Currently predicting ${object.name}'s projectile path [by ${owner.name}]`);

    for(let distance = 0; distance < range; distance += 10) { // Checks every 10 px
        if (!skipMov) {
            x += distance * Math.cos(dir);
            y += distance * Math.sin(dir);
            range -= distance;

            if (range <= 0) {
                logs && console.log("Projectile range has exceeded.");

                return 0;
            }
        } else {
            skipMov = false;
        }

        const length = players.length + animals.length;
        for (let index = 0; index < length; ++index) {
            let tmpObj = players[index] || animals[index - players.length];
            let inWay = tmpObj.alive && tmpObj != owner && (!owner || !(owner.team && tmpObj.team == owner.team));

            if (inWay) {
                let lineInRectCheck = lineInRect(tmpObj.x - tmpObj.scale, tmpObj.y - tmpObj.scale, tmpObj.x + tmpObj.scale, tmpObj.y + tmpObj.scale, x, y, x + (distance * Math.cos(dir)), y + (distance * Math.sin(dir)))

                lineInRectCheck && objectsHit.push(tmpObj);
            }
        }

        const tmpList = manager.getGridArrays(x, y, scale);

        for (let x2 = 0; x2 < tmpList.length; ++x2) {
            for (let y2 = 0; y2 < tmpList[x2].length; ++y2) {
                let tmpObj = tmpList[x2][y2];
                let tmpScale = tmpObj.getScale();
                let inWay = tmpObj != owner && tmpObj.active && objectsHit.indexOf(tmpObj) < 0 && !tmpObj.ignoreCollision;

                if (inWay) {
                    let lineInRectCheck = lineInRect(tmpObj.x - tmpScale, tmpObj.y - tmpScale, tmpObj.x + tmpScale, tmpObj.y + tmpScale, x, y, x + (distance * Math.cos(dir)), y + (distance * Math.sin(dir)))

                    lineInRectCheck && objectsHit.push(tmpObj);
                }
            }
        }

        // HIT OBJECTS:
        if (objectsHit.length > 0) {
            let hitObj = null;
            let shortDist = null;
            let tmpDist = null;
            for (var i = 0; i < objectsHit.length; i += 1) {
                tmpDist = getDistance(x, y, objectsHit[i].x, objectsHit[i].y);
                if (shortDist == null || tmpDist < shortDist) {
                    shortDist = tmpDist;
                    hitObj = objectsHit[i];
                }
            }

            if(logs) console.log("Obj hit:", hitObj);

            return hitObj;
        }
    }
}

const addProjectile = (x, y, dir, range, speed, indx, layer, sid) => {
    const isTurret = Number(range == 700 && speed == 1.5);

    for(let Musketeer of players){
        const Distance = Math.round(Math.hypot(Musketeer.y - y, Musketeer.x - x));
        const Turret = (isTurret && Musketeer.reloads[2].done && Musketeer.skin == 53 && Number(Distance) <= 5);
        const Secondary = !isTurret && weapons[Musketeer.weaponIndex].projectile !== undefined && Musketeer.dir - dir === 0 && [69, 70, 71, 72].includes(Distance);

        if(Musketeer.visible && (Secondary || Turret)) {
            if(isTurret){
                Musketeer.reloads[2].count = 0;
                Musketeer.reloads[2].done = false;
                Musketeer.reloads[2].date = Date.now();
            } else {
                Musketeer.reloads[1].count = 0;
                Musketeer.reloads[1].done = false;
                Musketeer.reloads[1].date = Date.now();
            }

            const object = projectiles[indx];
            const Target = Predict(x, y, dir, range, object.scale, object, Musketeer);

            if(Target === player) {
                const estimated = Math.ceil((getDistance(x, y, Target.x, Target.y) - object.scale) / (object.speed * (1e3 / 9)));

                Bullets.push(new Bullet(x, y, dir, estimated, object, Musketeer));
            }
        }
    }
}

ArrowImg.onload = function(){
    this.isLoaded = true;
    this.onload = null;
};

ArrowImg.src = "https://i.ibb.co/ZhFjvfX/left-arrow-removebg-preview-1.png";

const DrawImg = (img, pos, angle, angleOffset, visibility, size, isMap) => {
    const context = isMap ? ctx2 : ctx;

    context.save();
    context.translate(pos.x - (isMap ? 0 : Offset.x), pos.y - (isMap ? 0 : Offset.y));
    context.rotate(angle + angleOffset);
    context.globalAlpha = visibility;
    context.drawImage(img, -size / 2, -size / 2, size, size);
    context.restore();
}

const Circle = (pos, color, visibility, scale, isStroke, isMap) => {
    const mapZero = typeof isMap === "string";
    const context = mapZero ? ctx : isMap ? ctx2 : ctx;

    context.save();
    context[isStroke ? "strokeStyle" : "fillStyle"] = color;
    context.globalAlpha = visibility;
    context.beginPath();
    if(isStroke) context.lineWidth = isStroke;
    context.arc(pos.x - (isMap || mapZero ? 0 : Offset.x), pos.y - (isMap || mapZero ? 0 : Offset.y), scale, 0, 2 * Math.PI);
    context[isStroke ? "stroke" : "fill"]();
    context.restore();
}

const Line = (pos, pos2, color, lineWidth, visibility = 1, isMap) => {
    const context = typeof isMap === "string" ? ctx3 : (isMap ? ctx2 : ctx);

    context.save();
    context.beginPath();
    //  context.setLineDash([15, 15]);
    context.strokeStyle = color
    context.globalAlpha = visibility;
    context.lineWidth = lineWidth;
    context.moveTo(pos.x - (isMap ? 0 : Offset.x), pos.y - (isMap ? 0 : Offset.y));
    context.lineTo(pos2.x - (isMap ? 0 : Offset.x), pos2.y - (isMap ? 0 : Offset.y));
    context.stroke();
    context.restore();
}

document.fx = 12;

const Healthbar = (pos, scale, health, maxHealth, color, text) => {
    ctx.fillStyle = "#292b43"
    ctx.roundRect(true, pos.x - Offset.x - 50, pos.y - Offset.y + scale + 34, 109, 17, 8)
    ctx.fill()
    ctx.fillStyle = color;
    ctx.roundRect(true, pos.x - Offset.x - 45.5, pos.y - Offset.y + scale + 38.5, 100 * (health / maxHealth), 8, 7);
    ctx.fill();
    if(text) {
        text = `HP: ${health}/${maxHealth}`;

        ctx.font = `12px Hammersmith One`
        ctx.fillStyle = "#fff"
        ctx.textBaseline = "middle"
        ctx.textAlign = "center"
        ctx.lineWidth = 6;
        ctx.lineJoin = "round"
        ctx.strokeText(text, pos.x - Offset.x + 4.5, pos.y - Offset.y + scale + 38.5)
        ctx.fillText(text, pos.x - Offset.x + 4.5, pos.y - Offset.y + scale + 38.5)
    }
}

const circleBar = (visibility, pi, pos, scale, health, maxHealth = 100, color, color2, stroke, side, strokeFilter) => {
    health = Math.min(health, maxHealth)

    let normalGap = scale * .1;
    let normalStart = scale / 2;
    let Filler = side ? 0 - pi / (maxHealth / health) : pi / (maxHealth / health);

    ctx.save()
    ctx.globalAlpha = visibility;

    if(stroke) {
        ctx.beginPath();
        ctx.lineCap = 'round';
        if(strokeFilter) ctx.filter = ctx.filter = `contrast(${strokeFilter})`;
        ctx.strokeStyle = color2;
        ctx.lineWidth = normalGap * stroke;
        ctx.arc(pos.x - Offset.x, pos.y - Offset.y, normalStart, Math.PI / 2, Math.PI / 2 + Filler, side);
        ctx.stroke();
        ctx.closePath();
    }
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.lineWidth = normalGap;
    ctx.strokeStyle = color;
    ctx.arc(pos.x - Offset.x, pos.y - Offset.y, normalStart, Math.PI / 2, Math.PI / 2 + Filler, side);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
};

let Finder;

let Obstacles = [];
let startPoint;
let pathAngle;
let endPoint;
let path;

document.gs = 12

const pathFind = (endP) => {
    Finder = new window.K2Finder(document.gs, 2e3);

    Obstacles = [];
    startPoint = player;
    endPoint = endP;

    for(let build of buildings) {
        if(build.active && (!build.ignoreCollision || build.teleport)) {
            const distance = getDistance(player.x, player.y, build.x, build.y);
            const addScale = build.isItem && build.dmg ? 30 : 0;

            if(distance < 700) Finder.addCircle(build.x, build.y, build.getScale() + ([6, 7, 8, 9].includes(build.id) ? 50 : build.id === 16 ? 70 : build.teleport ? 70 : 25) + addScale);
            Obstacles.push(build);
        }
    }

    path = Finder.getPath(startPoint.x, startPoint.y, endPoint.x, endPoint.y)

    return path;
}

const mainFrame = () => {
    updateMap();

    const Time = Date.now();

    Delta = Time - lastUpdate;
    lastUpdate = Time;

    if (player) {
        const Distance = getDistance(Cam.x, Cam.y, player.x3, player.y3),
              Dir = getDirection(player.x3, player.y3, Cam.x, Cam.y),
              Speed = Math.min(Distance * 0.01 * Delta, Distance);

        if (Distance > 0.05) {
            Cam.x += Speed * Math.cos(Dir);
            Cam.y += Speed * Math.sin(Dir);
        } else {
            Cam.x = player.x;
            Cam.y = player.y;
        }
    } else {
        Cam.x = 7200;
        Cam.y = 7200;
    }

    const lastTime = Time - (1000 / 9);
    Length = players.length;

    for (let index = 0; index < Length; index += 1) {
        let person = players[index];

        if (person && person.visible) {
            if (person.forcePos) {
                person.x3 = person.x;
                person.y3 = person.y;
                person.d2 = person.dir;
            } else {
                let total = person.t2 - person.t1,
                    fraction = lastTime - person.t1,
                    ratio = (fraction / total),
                    rate = 170;

                person.dt += Delta;
                let Rate = Math.min(1.7, person.dt / rate),
                    Diff = (person.x - person.x4);

                person.x3 = person.x4 + (Diff * Rate);
                Diff = (person.y - person.y4);
                person.y3 = person.y4 + (Diff * Rate);
                person.d2 = Math.lerpAngle(person.dir, person.d1, Math.min(1.2, ratio));
            }
        }
    }

    Offset = {
        x: Cam.x - 960,
        y: Cam.y - 540
    }
}

const pushWatch = () => {
    if(!inPush) return

    Line(player, {x: player.x + Math.cos(pushAngle) * 80, y: player.y + Math.sin(pushAngle) * 80}, "#9cbb23", 33, .7);
}

const buildHealth = () => {
    Length = buildings.length;

    for(let index = 0; index < Length; index += 1) {
        const build = buildings[index];

        if(build && build.isItem && build.active) {
            const Color = (isEnemy(build.ownerSid) ? "#85354d" : "#5c854d");
            const Distance = getDistance(build.x, build.y, player.x2, player.y2);

            build.health > 0 && Distance - build.getScale() - 35 < 300 && circleBar(build.trap ? .5 : 1, Math.PI * 2, build, build.scale / 1.5, build.health, build.maxHealth, Color, "#35354d", 2.95)
        }
    }
}

const pathWatch = () => {
    if(!Obstacles || !Obstacles.length) return

    Length = Obstacles.length;

    for(let index = 0; index < Length; index += 1) {
        const obstacle = Obstacles[index];

        const distance = getDistance(player.x, player.y, obstacle.x, obstacle.y);

        if(distance < 2e3) {
            const position = {
                x: obstacle.x,
                y: obstacle.y
            }

            Circle(position, "#bd3a3a", .5, typeof obstacle.layer === "number"? obstacle.getScale() : obstacle.isPlayer ? 17 : (obstacle.scale + 35));
        }
    }

    Length = path.length;

    let pathPoint = {
        x: startPoint.x,
        y: startPoint.y
    };
    let endPointDraw = {
        x: endPoint.x,
        y: endPoint.y
    };

    Circle(pathPoint, "#37912c", .5, 20);
    Circle(endPointDraw, "#212483", .5, 20);

    for(let index = 0; index < Length; index += 1) {
        let newPath = path[index];
        let newPoint = {
            x: newPath[0],
            y: newPath[1]
        }

        Line(pathPoint, newPoint, "#9cbb23", 4, .3);

        pathPoint = newPoint;
    }
}


function renderStar(ctxt, spikes, outer, inner) {
    var rot = Math.PI / 2 * 3;
    var x, y;
    var step = Math.PI / spikes;
    ctxt.beginPath();
    ctxt.moveTo(0, -outer);
    for (var i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outer;
        y = Math.sin(rot) * outer;
        ctxt.lineTo(x, y);
        rot += step;
        x = Math.cos(rot) * inner;
        y = Math.sin(rot) * inner;
        ctxt.lineTo(x, y);
        rot += step;
    }
    ctxt.lineTo(0, -outer);
    ctxt.closePath();
}

function renderCircle(x, y, scale, tmpContext, dontStroke, dontFill) {
    tmpContext = tmpContext||ctx;
    tmpContext.beginPath();
    tmpContext.arc(x, y, scale, 0, 2 * Math.PI);
    if (!dontFill) tmpContext.fill();
    if (!dontStroke) tmpContext.stroke();
}
function renderLeaf(x, y, l, r, ctxt) {
    var endX = x + (l * Math.cos(r));
    var endY = y + (l * Math.sin(r));
    var width = l * 0.4;
    ctxt.moveTo(x, y);
    ctxt.beginPath();
    ctxt.quadraticCurveTo(((x + endX) / 2) + (width * Math.cos(r + Math.PI/2)),
                          ((y + endY) / 2) + (width * Math.sin(r + Math.PI/2)), endX, endY);
    ctxt.quadraticCurveTo(((x + endX) / 2) - (width * Math.cos(r + Math.PI/2)),
                          ((y + endY) / 2) - (width * Math.sin(r + Math.PI/2)), x, y);
    ctxt.closePath();
    ctxt.fill();
    ctxt.stroke();
}
let randInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function renderRectCircle(x, y, s, sw, seg, ctxt, stroke) {
    ctxt.save();
    ctxt.translate(x, y);
    seg = Math.ceil(seg / 2);
    for (var i = 0; i < seg; i++) {
        renderRect(0, 0, s * 2, sw, ctxt, stroke);
        ctxt.rotate(Math.PI / seg);
    }
    ctxt.restore();
}
function renderRect(x, y, w, h, ctxt, stroke) {
    ctxt.fillRect(x - (w / 2), y - (h / 2), w, h);
    if (!stroke) ctxt.strokeRect(x - (w / 2), y - (h / 2), w, h);
}
function renderTriangle(s, ctx) {
    ctx = ctx||mainContext;
    var h = s * (Math.sqrt(3)/2);
    ctx.beginPath();
    ctx.moveTo(0, -h / 2);
    ctx.lineTo( -s / 2, h / 2);
    ctx.lineTo(s / 2, h / 2);
    ctx.lineTo(0, -h / 2);
    ctx.fill();
    ctx.closePath();
}
// GET ITEM SPRITE:
let itemSprites = [];
function getItemSprite(obj, asIcon) {
    let tmpSprite = itemSprites[obj.id];
    if (!tmpSprite || asIcon) {
        let tmpCanvas = document.createElement('canvas');
        tmpCanvas.width = tmpCanvas.height = (obj.scale * 2.5) + 5.5 + (obj.spritePadding||0);
        let tmpContext = tmpCanvas.getContext('2d');
        tmpContext.translate((tmpCanvas.width / 2), (tmpCanvas.height / 2));
        tmpContext.rotate(asIcon?0:(Math.PI/2));
        tmpContext.strokeStyle = "#525252";
        tmpContext.lineWidth = 5.5 * (asIcon?(tmpCanvas.width/81):1);
        if (obj.name == "spikes" || obj.name == "greater spikes" || obj.name == "poison spikes"
            || obj.name == "spinning spikes") {
            tmpContext.fillStyle = (obj.name == "poison spikes")?"#7b935d":"#939393";
            var tmpScale = (obj.scale * 0.6);
            renderStar(tmpContext, (obj.name == "spikes")?5:6, obj.scale, tmpScale);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, tmpScale, tmpContext);
            tmpContext.fillStyle = "#c9b758";
            renderCircle(0, 0, tmpScale/2, tmpContext, true);
        } else if (obj.name == "windmill" || obj.name == "faster windmill" || obj.name == "power mill") {
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fillStyle = "#c9b758";
            renderRectCircle(0, 0, obj.scale * 1.5, 29, 4, tmpContext);
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, obj.scale * 0.5, tmpContext);
        } else if (obj.name == "pit trap") {
            tmpContext.fillStyle = "#a5974c";
            renderStar(tmpContext, 3, obj.scale * 1.1, obj.scale * 1.1);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#525252";
            renderStar(tmpContext, 3, obj.scale * 0.65, obj.scale * 0.65);
            tmpContext.fill();
        } else if (obj.name == "boost pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale*2, obj.scale*2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#dbd97d";
            renderTriangle(obj.scale * 1, tmpContext);
        } else if (obj.name == "turret") {
            tmpContext.fillStyle = "#a5974c";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#939393";
            var tmpLen = 50;
            renderRect(0, -tmpLen/2, obj.scale * 0.9, tmpLen, tmpContext);
            renderCircle(0, 0, obj.scale * 0.6, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
        } else if (obj.name == "platform") {
            tmpContext.fillStyle = "#cebd5f";
            var tmpCount = 4;
            var tmpS = obj.scale * 2;
            var tmpW = tmpS / tmpCount;
            var tmpX = -(obj.scale/2);
            for (var i = 0; i < tmpCount; ++i) {
                renderRect(tmpX - (tmpW/2), 0, tmpW, obj.scale*2, tmpContext);
                tmpContext.fill();
                tmpContext.stroke();
                tmpX += tmpS / tmpCount;
            }
        } else if (obj.name == "healing pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale*2, obj.scale*2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#db6e6e";
            renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
        } else if (obj.name == "spawn pad") {
            tmpContext.fillStyle = "#7e7f82";
            renderRect(0, 0, obj.scale*2, obj.scale*2, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.fillStyle = "#71aad6";
            renderCircle(0, 0, obj.scale * 0.6, tmpContext);
        } else if (obj.name == "blocker") {
            tmpContext.fillStyle = "#7e7f82";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.rotate(Math.PI / 4);
            tmpContext.fillStyle = "#db6e6e";
            renderRectCircle(0, 0, obj.scale * 0.65, 20, 4, tmpContext, true);
        } else if (obj.name == "teleporter") {
            tmpContext.fillStyle = "#7e7f82";
            renderCircle(0, 0, obj.scale, tmpContext);
            tmpContext.fill();
            tmpContext.stroke();
            tmpContext.rotate(Math.PI / 4);
            tmpContext.fillStyle = "#d76edb";
            renderCircle(0, 0, obj.scale * 0.5, tmpContext, true);
        }
        tmpSprite = tmpCanvas;
        if (!asIcon) itemSprites[obj.id] = tmpSprite;
    }
    return tmpSprite;
}

let imgPlace = [];

const placeWatch = () => {
    Placer.update(true)
    for(const drawObj of drawPlace) {
        const outdated = (Date.now() - drawObj.date >= 50);

        if(outdated) {
            drawPlace.shift();
        } else {
            //console.log(drawObj.free)
            const item = list[drawObj.id];
            // const img = imgPlace[drawObj.id];

            const posDist = (35 + item.scale + (item.placeOffset || 0));
            const pos = {
                x: player.x3,// + Math.cos(drawObj.angle) * posDist,
                y: player.y3// + Math.sin(drawObj.angle) * posDist
            };

            var tmpSprite = getItemSprite(item);
            ctx.save();
            ctx.translate(pos.x - Offset.x, pos.y - Offset.y);
            Circle({x: Math.cos(drawObj.angle) * posDist, y: Math.sin(drawObj.angle) * posDist}, drawObj.free ? "green" : "red", .1, tmpSprite.width / 2, false, "")
            ctx.rotate(drawObj.angle);
            ctx.filter = "contrast(.7)"
            ctx.globalAlpha = .7;
            ctx.drawImage(tmpSprite, 35 - item.holdOffset, -tmpSprite.width / 2);
            ctx.restore();
            //if(img && img.isLoaded) DrawImg(img, pos, drawObj.angle, 0, .7, img.height * 4)
        }
    }
}
document.kqw = Math.PI / 2
const reloadWatch = () => {
    walk && Line(walk, player, "#9cbb23", 4, .3);
    Length = players.length;

    let Color;

    for(let index = 0; index < Length; index += 1) {
        const user = players[index];

        const pos = {
            x: Offset.x,
            y: Offset.y - 17// + Offset.y
        }

        if(user && user.visible) {
            ctx.save();
            ctx.translate(user.x3 - Offset.x, user.y3 - Offset.y);

            const angle = user.sid === player.sid && !player.locked ? cursor() : user.d2
            ctx.rotate(angle - document.kqw);

            pos.x -= 7;
            Color = Date.now() - user.reloads[0].date >= user.reloads[0].max2 ? "orange" : "yellow";
            circleBar(.7, Math.PI / 3, pos, 30, Date.now() - user.reloads[0].date, user.reloads[0].max2, Color, "#35354d", 4.5, false);

            pos.x += 7 * 2;
            Color = user.reloads[1].done ? "orange" : "yellow";
            circleBar(.7, Math.PI / 3, pos, 30, Date.now() - user.reloads[1].date, user.reloads[1].max2, Color, "#35354d", 4.5, true);
            ctx.restore();
            ctx.restore();
        }
        /* pos.y += 20;
            Color = user.reloads[2].done ? "orange" : "yellow";
            circleBar(.7, Math.PI / 3, pos, 30, Date.now() - user.reloads[2].date, user.reloads[2].max2, Color, "#35354d", 4.5, true);

            pos.x -= 7 * 2;
            const Clown = Date.now() - user.shameAt <= 30e3;
            Color = Clown ? "yellow" : (user.shameCount === 0 ? "orange" : "yellow");
            circleBar(.7, Math.PI / 3, pos, 30, Clown ? 30e3 - (Date.now() - user.shameAt) : (8 - user.shameCount), Clown ? 30e3 : 8, Color, "#35354d", 4.5, false);*/
    }
}

const frameUpdate = () => {
    mainFrame();

    //if(!player.alive) return

    buildHealth();

    pathWatch();

    reloadWatch();
    pushWatch();
    placeWatch();

    window.requestAnimFrame(frameUpdate);
}

const addGather = (sid, hitBuild, weaponIndex) => {
    const user = findPlayer(sid);

    if(user) user.gather(hitBuild, weaponIndex);
}

function Notify(text = "Hello World!", color = "#fff") {
    if(activeNotifs > 15) return;

    let ElementId = "Notification-" + ~~(Math.random() * 3e3);

    let Html = `
    <div class="box" id="${ElementId}" style="display: block; opacity: 0;">
        <span style="color: ${color};">
            ${text}
        </span>
        </div>
        `

    $(".notifications-holder").prepend(Html);

    Element = $(`#${ElementId}`);

    Element.show().animate({ opacity: 1 }, 750);

    activeNotifs++;

    setTimeout(() => {
        Element = $(`#${ElementId}`)

        Element.animate({ opacity: 0 }, 750, () => {
            $(`#${ElementId}`).remove();
            activeNotifs--;
        });
    }, 2e3)
}

const removeCookie = () => {
    Element = document.getElementById("onetrust-consent-sdk");

    if(Element) return Element.style.display = "none";

    setTimeout(removeCookie, 15);
};

removeCookie();

/* main classes */
class Player {
    constructor(data){
        this.id = data[0];
        this.sid = data[1];
        this.name = data[2];
        this.skinColor = data[9];
        this.x = data[3];
        this.y = data[4];
        this.x2 = data[3];
        this.y2 = data[4];
        this.x3 = 0;
        this.y3 = 0;
        this.x4 = 0;
        this.y4 = 0;
        this.d2 = 0;
        this.d1 = 0;
        this.scale = 35;

        this.reset = (death) => {
            this.x3 = 0;
            this.y3 = 0;
            this.x4 = 0;
            this.y4 = 0;
            this.d2 = 0;
            this.d1 = 0;

            //this.visible = true;
            this.res = {
                "wood": 100,
                "food": 100,
                "stone": 100,
                "points": 100
            };
            this.weaponIndex = 0;
            this.buildIndex = -1;
            this.alive = !death;
            this.reloads = [{count: Math.ceil(300 / 111), date: 0, max: Math.ceil(300 / 111), max2: 300, done: true, date: 0, id: 5, rarity: 0}, {date: Date.now(), count: Math.ceil(1500 / 111), max: Math.ceil(1500 / 111), max2: 1500, done: true, id: 15, rarity: 0}, {count: 23, date: 0, max: 23, done: true, max2: 2500}]
            this.damage = 0;
            this.isLeader = 0;
            this.itemCounts = {};
            this.tribe = null;
            //this.forcePos = false;
            this.weaponRarity = 0;
            this.hitTime = 0;
            this.gathering = 0;
            this.hitting = 0;
            this.locked = 0;
            this.items = [0, 3, 6, 10];
            this.nextPos = {x: 0, y: 0};
            this.weapons = [0];
            this.shameCount = 0;
            this.shameTimer = 0;
            if(death) {
                this.age = 1;
                this.health = 100;
            }
            this.skin = 0;
            this.tail = 0;
            this.dir = 0;
        }

        this.reset(true);
    }

    gather(hitBuild, weaponIndex) {
        if(player && player.sid === this.sid) console.log(this.skin, this.tail)

        const Weapon = weapons[weaponIndex];
        const damage = Weapon.dmg * variants[this.weaponRarity].val;

        let Reload = this.reloads[Number(weaponIndex > 8)];

        Reload.count = 0;
        Reload.date = Date.now();

        if(hitBuild) {
            const buildDamage = (damage * (Weapon.sDmg || 1) * (this.skin == 40 ? 3.3 : 1));

            for(let id = 0; id < buildings.length; id += 1) {
                const build = buildings[id];

                let distance = getDistance(this.x, this.y, build.x, build.y),
                    angle = getAngle(this, build);

                /* MooMoo.io's built in angle check(for precision) */
                angle = Math.abs(angle - this.dir) % (Math.PI * 2);
                angle = (angle > Math.PI ? ((Math.PI * 2) - angle) : angle)

                if(build.isItem && angle <= Math.PI / 2.6 && distance <= Weapon.range + build.getScale()) build.health -= buildDamage;
            }
        }
    }

    update() {
        this.alive = true;

        const delta = Date.now() - this.lastUpdate;
        this.lastUpdate = Date.now();

        if (this.shameTimer > 0) {
            this.shameTimer = Date.now() - this.shameAt;

            if (this.shameTimer <= 0) {
                this.shameTimer = 0;
                this.shameCount = 0;
            }
        }

        this.xVel = this.x2 - this.x;
        this.yVel = this.y2 - this.y;
        this.oldSpeed = this.speed;
        this.speed = getDistance(this.x2, this.y2, this.x, this.y)

        this.nextPos = {
            x: this.x + this.xVel,
            y: this.y + this.yVel
        }

        const Weapon = weapons[this.weaponIndex];
        let Reload = this.reloads[Number(this.weaponIndex > 8)]; /* Secondary / Primary */

        if(Reload.id != Weapon.id) {
            Reload.id = Weapon.id;
            Reload.max = Weapon.speed ? (Math.ceil(Weapon.speed / (1e3 / 9))) : 0;
            Reload.max2 = Weapon.speed;
            Reload.count = Reload.max;
            Reload.done = true;
            Reload.rarity = this.weaponRarity;
        }

        if(this.weaponRarity != Reload.rarity) Reload.rarity = this.weaponRarity;

        if(Reload.count < Reload.max && this.buildIndex == -1){
            Reload.count += 1;
            Reload.done = Reload.count == Reload.max;
        }

        this.reloads[Number(this.weaponIndex > 8)] = Reload;
        if(this.reloads[2].count < 23) {
            this.reloads[2].count++;
            if(this.reloads[2].count === 23) this.reloads[2].done = true;
        }

        this.getDamage();
    }

    getDamage(){
        this.damage = 0;

        let Primary = weapons[this.reloads[0].id];
        let Secondary = weapons[this.reloads[1].id];

        let Damage = {
            primary: 0,
            secondary: 0,
            turret: 0
        }

        let Distance = getDistance(this.nextPos.x, this.nextPos.y, player.nextPos.x, player.nextPos.y);
        let Angle = getAngle(this, player)

        Damage.primary = Primary.dmg && this.reloads[0].count + 1 >= this.reloads[0].max && Distance <= player.scale + this.scale + (Primary.range || 0) ? Primary.dmg : 0;

        if(this.reloads[1].count + 1 >= this.reloads[1].max) {
            if(!Secondary.projectile && Secondary.range && Secondary.scale) {
                Secondary = projectiles[Secondary.projectile];

                const Target = Predict(this.nextPos.x, this.nextPos.y, Angle, Secondary.range, Secondary.scale, Secondary, this);
                const Estimated = Math.ceil((Distance - Secondary.scale) / (Secondary.speed * (1e3 / 9)))

                if(Target && Target.sid === player.sid && Estimated <= 1) Damage.secondary = Secondary.dmg;
            } else {
                Damage.secondary = (Secondary.dmg || 0);
            }
        }

        if(this.reloads[2].count + 1 >= 23) {
            const object = projectiles[1];
            const Target = Predict(this.nextPos.x, this.nextPos.y, Angle, 700, object.scale, object, this);
            const Estimated = Math.ceil((Distance - object.scale) / (object.speed * (1e3 / 9)))

            if(Target && Target.sid === player.sid && Estimated <= 1) Damage.turret = 25;
        }

        this.damage = Damage;
    }

    heal(){
        if (this.hitTime) {
            const timeSinceHit = Date.now() - this.hitTime;

            if (timeSinceHit <= 120) {
                this.shameCount += 1;

                if (this.shameCount >= 8) {
                    this.shameTimer = 30e3;
                    this.shameAt = Date.now();
                    this.shameCount = 0;
                }
            } else {
                this.shameCount -= 2;
                if (this.shameCount <= 0) {
                    this.shameCount = 0;
                }
            }
            this.hitTime = 0;
        }
    }

    bundle(data){
        this.x2 = data.x;
        this.y2 = data.y;
        console.log(data)
    }
}

class Animal {
    constructor(sliced) {
        this.index = sliced[1];
        this.obj = ais[this.index];
        this.x = sliced[2];
        this.y = sliced[3];
        this.dir = sliced[4];
        this.health = sliced[5];
        this.dmg = this.obj ? this.obj.dmg : 0;
        this.scale = this.obj ? this.obj.scale : 0;
        this.alive = true;
    }
}

class Building {
    constructor(sid) {
        this.sid = sid;
    }

    init(x, y, dir, scale, type, data, id, ownerSid) {
        data = data || {};

        this.active = true;
        this.gridLocations = [];
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.scale = scale;
        this.type = type;
        this.data = data;
        this.ownerSid = ownerSid;
        this.id = id;
        this.name = data.name;
        this.isItem = Boolean(data.health);
        this.group = data.group;
        this.health = data.health;
        this.maxHealth = data.health;
        this.layer = 2;
        if (this.group != undefined) {
            this.layer = this.group.layer;
        } else if (this.type == 0) {
            this.layer = 3;
        } else if (this.type == 2) {
            this.layer = 0;
        } else if (this.type == 4) {
            this.layer = -1;
        }
        this.colDiv = data.colDiv||1;
        this.blocker = data.blocker;
        this.ignoreCollision = data.ignoreCollision;
        this.dontGather = data.dontGather;
        this.hideFromEnemy = data.hideFromEnemy;
        this.friction = data.friction;
        this.projDmg = data.projDmg;
        this.dmg = data.dmg;
        this.pDmg = data.pDmg;
        this.pps = data.pps;
        this.zIndex = data.zIndex||0;
        this.turnSpeed = data.turnSpeed;
        this.req = data.req;
        this.trap = data.trap;
        this.healCol = data.healCol;
        this.teleport = data.teleport;
        this.boostSpeed = data.boostSpeed;
        this.projectile = data.projectile;
        this.shootRange = data.shootRange;
        this.shootRate = data.shootRate;
        this.shootCount = this.shootRate;
        this.spawnPoint = data.spawnPoint;
    }

    getScale(x, z) {
        x = (x || 1);

        return this.scale * ((this.isItem || this.type == 2 || this.type == 3 || this.type == 4) ? 1 : (0.6 * x)) * (z ? 1 : this.colDiv);
    }
}

class Bullet { // x, y, dir, range, object.scale, object, Musketeer
    constructor(x, y, dir, estimated, object, owner, target) {
        this.x = x;
        this.y = y;
        this.dir = dir;
        this.object = object;
        this.owner = owner;
        this.target = target;
        this.estimated = estimated;
        this.time = timer;
        this.dmg = object.dmg;
        //console.log("Appeared", this.object.name, this.estimated);
    }

    update() {
        this.target = Predict(this.x, this.y, this.dir, this.object.range, this.object.scale, this.object, this.owner);
        if(!this.target || this.target != this.target) return this.remove();

        const distance = getDistance(this.x, this.y, this.target.x, this.target.y);
        this.estimated = Math.ceil((distance - this.object.scale) / (this.object.speed * (1e3 / 9))) - (timer - this.time);

        if(this.estimated <= 0) this.remove();
    }

    remove() {
        const index = Bullets.indexOf(this);
        //console.log("Removing", this.object.name);
        if(index >= 0) Bullets.splice(index, 1);
    }
}

class Bots {
    static getUrls() {
        const wsUrls = [
            "daily-aerial-caravan"
            // Complete recreation.
            /*"cookie-wistful-puma",
                        "prairie-wax-basket", "invented-spiffy-quill",
                        "plaid-nifty-evergreen", "prairie-wax-basket",
                        "eight-alpine-prune", "thirsty-exclusive-achillobator",
                        "real-spectacled-teacher", "separate-encouraging-garage",
                        "violet-cuboid-cicada", "ubiquitous-heady-marigold",*/
            /*"cookie-wistful-puma"*//*,
                            "tin-knotty-lifter",
                            "brazen-accidental-softball",
                            "cute-atom-kite",
                            "gaudy-good-freighter",
                            "mixolydian-cool-carpenter",
                            "aboard-dapper-guppy",
                            "magnetic-hallowed-foxglove"*//*,
                            "",
                            "",
                            "",
                            "",
                            "",
                            "",
                            ""*/
            /*,
                            "pale-hammerhead-fiber",
                            "indecisive-mire-bird",
                            "trapezoidal-lead-butternut",
                            "first-catkin-syringa",
                            "quickest-honeysuckle-steam",
                            "veiled-secret-kale",
                            "superficial-handsomely-salto",
                            "attractive-button-crow",
                            "eminent-open-session",
                            "green-plume-aspen",
                            "polarized-circular-quiet",
                            "sore-goofy-porcupine",
                            "lily-available-spur",
                            "comet-solar-organ",
                            "fifth-false-astronomy",
                            "odd-maroon-pen",
                            "unique-ancient-dahlia"*//*"bedecked-abrasive-slayer"*//*, "jazzy-candy-sodium",
                        "celestial-maize-grey",
                        "marvelous-mesquite-bank",
                        "polar-mellow-crane",
                        "fuzzy-polite-match",
                        "cypress-maddening-lemon",
                        "chatter-phrygian-hippopotamus",
                        "rambunctious-candy-canary",
                        "foggy-fixed-storm",
                        "notch-evening-bowler",
                        "rainbow-sulky-guava",
                        "imported-salt-gallimimus",
                        "aback-little-water",
                        "blush-flashy-composer",
                        "helpful-grove-process",
                        "silky-generated-rainbow"*/
            /*,
                        "aback-knotty-twill",
                        "cut-cactus-viscount",
                        "phantom-grey-ping",
                        "kindly-shade-fact",
                        "sordid-magnetic-month",
                        "talented-astonishing-bosworth",
                        "coconut-plain-rule",
                        "truthful-tangy-layer",
                        "sweet-kind-headphones",
                        "attractive-eager-meteor"*//*,
                        "proud-jumbled-september",
                        "elastic-jelly-koi",
                        "pricey-melted-brachiosaurus",
                        "legendary-flawless-postbox",
                        "maize-nonchalant-page",
                        "obvious-whispering-conkerberry",
                        "probable-cheerful-moustache",
                        "opalescent-confusion-perfume",
                        "abounding-subsequent-humor",
                        "flower-sharp-tennis",
                        "jelly-zippy-spinosaurus",
                        "creative-crocus-van",
                        "harvest-uttermost-cyclamen"*//*"tender-heliotrope-swallow", "melodious-translucent-cut", "scalloped-veil-alloy"
                        , "cultured-ionian-shad"*/
            /*"emerald-malachite-canvas",
                        "prairie-sharp-pear",
                        "humble-gem-bronze",
                        "five-mercurial-run",
                        "hip-acidic-concavenator",
                        "harmless-gold-form",
                        "quilted-hot-feta",
                        "frost-periwinkle-hawk",
                        "burly-important-tiger",
                        "gaudy-aerial-grease",
                        "canary-free-gold",
                        "ruddy-heavy-rook",
                        "nova-smoggy-walkover",
                        "cerulean-tropical-gastonia"*/];
        //https://StrangeGraciousMode.foovoo.repl.co
        for(let index in wsUrls) wsUrls[index] = `wss://${wsUrls[index]}.glitch.me/`;

        return wsUrls;
    }

    static send(amount = Bot.amount) {
        const wsUrls = this.getUrls();

        let botsSent = 0;

        for(let url of wsUrls) {
            const ws = new WebSocket(url);
            bots.push(ws);

            ws.binaryType = "arraybuffer";

            ws.addEventListener("open", () => {
                let amountEach = Math.min(4, amount);

                amount -= amountEach;

                while(amountEach > 0) {
                    amountEach -= 1;
                    botsSent += 1;

                    this.connectMsg(ws, botsSent);
                }

                let _this = this;

                const updateBot = () => {
                    if(ws.readyState === 3) return

                    _this.updateMsg(ws);

                    setTimeout(() => {
                        updateBot();
                    }, 1e3/9);
                }

                updateBot();
            });

            ws.addEventListener("message", (e) => {
                const Msg = JSON.parse(e.data);
                const botTemp = [];

                switch(Msg.type) {
                    case "update":
                        for(let bot of Msg.bots) {
                            if(bot && bot.readyState === 1) {
                                Object.assign(bot, { parent: ws });

                                let found = Bot.bots.find(user => user.sid === bot.sid);
                                found ? Object.assign(found, bot) : Bot.bots.push(bot);
                            }
                        }
                        break;
                }
            });

            ws.addEventListener("close", (e) => {
                Length = Bot.bots.length;

                for(let index = 0; index < Length; index += 1) {
                    let bot = Bot.bots[index];
                    if(bot && bot.parent && (bot.readyState !== 1 || bot.parent.readyState !== 1)) Bot.bots.splice(index, 1);
                }
                console.log("close", e.code);
            });

            ws.addEventListener("error", () => {});
        }
    }

    static async connectMsg(ws, botId){
        const innerData = Object.assign({}, Bot);;
        if(!innerData.name) innerData.name = randomName();

        let data = {
            type: "connect",
            url: await getUrl(),
            owner: player,
            bot: innerData
        }

        data = JSON.stringify(data);

        Notify(`Bot[${botId}] connected!`, "#8ecc51");
        ws.vanillaSend(data);
    }

    static async updateMsg(ws){
        botIds = [];

        for(let index = 0; index < Bot.bots.length; index += 1) {
            const bot = Bot.bots[index];

            if(bot.readyState === 1 && bot.parent.readyState === 1 && !botIds.includes(bot.sid) && bot.sid != null){
                botIds.push(bot.sid);
            }
        }

        Bot.hats = document.getElementById("botHatLoop").checked;
        Bot.spawn = document.getElementById("botSpawn").checked;
        Bot.pathFinder = document.getElementById("botPathFinder").checked;
        Bot.lag = document.getElementById("botLagger").checked;

        const innerData = Object.assign({}, Bot);
        if(!innerData.name) innerData.name = randomName();

        let data = {
            type: "update",
            bot: innerData,
            owner: player,
            botIds: botIds
        }

        data = JSON.stringify(data);

        ws.vanillaSend(data);
    }

    static remove() {
        Length = bots.length;

        while(Length > -1) {
            Length -= 1;

            let bot = bots[Length];

            if(bot && bot.readyState === 1) this.removeMsg(bot);
        }
    }

    static removeMsg(ws){
        let data = {
            type: "remove",
            amount: Bot.amount
        }

        data = JSON.stringify(data);

        ws.vanillaSend(data);
        ws.close();

        Bot.bots = [];
    }
}

class objectManager {
    constructor(){
        this.objects = buildings;
        this.grids = {};
        this.updateObjects = [];
        this.tmpS = mapScale / 10; // Map scale / column grid
        this.tmpArray = [];
    }

    // Set object grids:
    setObjectGrids(obj) {
        let objX = Math.round(Math.min(mapScale, Math.max(0, obj.x)));
        let objY = Math.round(Math.min(mapScale, Math.max(0, obj.y)));

        for (let x = 0; x < 10; x += 1) {
            this.tmpX = x * this.tmpS;
            for (let y = 0; y < 10; y += 1) {
                this.tmpY = y * this.tmpS;
                if (objX + obj.scale >= this.tmpX && objX - obj.scale <= this.tmpX + this.tmpS &&
                    objY + obj.scale >= this.tmpY && objY - obj.scale <= this.tmpY + this.tmpS) {
                    if (!this.grids[x + "_" + y]) this.grids[x + "_" + y] = [];

                    this.grids[x + "_" + y].push(obj);
                    obj.gridLocations.push(x + "_" + y);
                }
            }
        }
    }

    // Remove object from grid:
    removeObjGrid(obj) {
        let tmpIndx;

        for (let i = 0; i < obj.gridLocations.length; i += 1) {
            tmpIndx = this.grids[obj.gridLocations[i]].indexOf(obj);
            if (tmpIndx >= 0) this.grids[obj.gridLocations[i]].splice(tmpIndx, 1);
        }
    }

    // Disable obj:/
    disableObj(obj) {
        obj.active = false;
    }

    // Get grid array:
    getGridArrays(xPos, yPos, s) {
        this.tmpX = Math.floor(xPos / this.tmpS);
        this.tmpY = Math.floor(yPos / this.tmpS);
        this.tmpArray = [];

        try {
            if (this.grids[this.tmpX + "_" + this.tmpY]) this.tmpArray.push(this.grids[this.tmpX + "_" + this.tmpY]);
            if (xPos + s >= (this.tmpX + 1) * this.tmpS) { // RIGHT
                this.tmpGrid = this.grids[(this.tmpX + 1) + "_" + this.tmpY];
                if (this.tmpGrid) this.tmpArray.push(this.tmpGrid);
                if (this.tmpY && yPos - s <= this.tmpY * this.tmpS) { // TOP RIGHT
                    this.tmpGrid = this.grids[(this.tmpX + 1) + "_" + (this.tmpY - 1)];
                    if (this.tmpGrid) this.tmpArray.push(this.tmpGrid);
                } else if (yPos + s >= (this.tmpY + 1) * this.tmpS) { // BOTTOM RIGHT
                    this.tmpGrid = this.grids[(this.tmpX + 1) + "_" + (this.tmpY + 1)];
                    if (this.tmpGrid) this.tmpArray.push(this.tmpGrid);
                }
            } if (this.tmpX && xPos - s <= this.tmpX * this.tmpS) { // LEFT
                this.tmpGrid = this.grids[(this.tmpX - 1) + "_" + this.tmpY];
                if (this.tmpGrid) this.tmpArray.push(this.tmpGrid);
                if (this.tmpY && yPos - s <= this.tmpY * this.tmpS) { // TOP LEFT
                    this.tmpGrid = this.grids[(this.tmpX - 1) + "_" + (this.tmpY - 1)];
                    if (this.tmpGrid) this.tmpArray.push(this.tmpGrid);
                } else if (yPos + s >= (this.tmpY + 1) * this.tmpS) { // BOTTOM LEFT
                    this.tmpGrid = this.grids[(this.tmpX - 1) + "_" + (this.tmpY + 1)];
                    if (this.tmpGrid) this.tmpArray.push(this.tmpGrid);
                }
            } if (yPos + s >= (this.tmpY + 1) * this.tmpS) { // BOTTOM
                this.tmpGrid = this.grids[this.tmpX + "_" + (this.tmpY + 1)];
                if (this.tmpGrid) this.tmpArray.push(this.tmpGrid);
            } if (this.tmpY && yPos - s <= this.tmpY * this.tmpS) { // TOP
                this.tmpGrid = this.grids[this.tmpX + "_" + (this.tmpY - 1)];
                if (this.tmpGrid) this.tmpArray.push(this.tmpGrid);
            }
        } catch (e) {}
        return this.tmpArray;
    };

    // Add new:
    add(sid, x, y, dir, s, type, data, setSID, owner) {
        let tmpObj = new Building(sid);

        let Exist = buildings.findIndex(build => build.sid === sid);

        if(Exist > 0) {
            buildings[Exist] = tmpObj;
        } else buildings.push(tmpObj);

        if (setSID) tmpObj.sid = sid;

        tmpObj.init(x, y, dir, s, type, data, setSID, owner);

        this.setObjectGrids(tmpObj);
        if (tmpObj.doUpdate) this.updateObjects.push(tmpObj);
    }

    // Disable by sid:
    disableBySid(sid) {
        for(let index = 0; index < buildings.length; index += 1) {
            const object = buildings[index];

            if(object.sid === sid) {

                if (object.ownerSid === player.sid) {
                    const config = list[object.id];
                    const itemCount = document.getElementById(`itemCount_${object.id}`);
                    const limit = window.inSandbox ? Math.max(3 * config.group.limit, 99) : config.group.limit;

                    itemCount.innerText = `${player.itemCounts[config.group.id] - 1}/${limit}`
                }

                this.disableObj(object);
                break;
            }
        }
    }

    // Remove all from player:
    removeAllItems(sid) {
        for (let index = 0; index < buildings.length; index += 1) {
            if(buildings[index].active && buildings[index].ownerSid == sid) this.disableObj(buildings[index]);
        }
    }

}

const manager = new objectManager();

class Packet {
    static hold(id, weapon) {
        send("G", id, weapon);
    }

    static choose(id) {
        //  send("6", id);
    }

    static hit(angle = cursor(), type) {
        if(player.locked) angle = previousDir;

        if(!type || type === 1) send("d", true, angle);
        if(!type || type === 2) send("d", false, angle);
    }

    static gather() {
        send("K", 1);
    }

    static equip(id, id2) {
        let item, canEquip;

        if(player.skin != id) {
            item = hats.find(hat => hat.id === id);

            canEquip = Skins[id] || player.res.points >= item.price;

            if(!canEquip) id = 0;

            if(player.skin !== id) send("c", Number(!Skins[id]), id, false);
        }

        if(player.tail != id2) {
            item = accessories.find(accessory => accessory.id === id2);

            canEquip = Tails[id2] || player.res.points >= item.price;

            if(!canEquip) id2 = 0;

            if(player.tail !== id2) send("c", Number(!Tails[id2]), id2, true);
        }
    }

    static respond(sid, accept) {
        send("P", sid, accept);
    }

    static watch(angle = cursor()) {
        if(player.locked) return 0;
        const fix = () => {
            if(typeof angle !== "boolean") angle = Number(angle.toFixed(4));
        }

        fix();

        if(typeof angle === "boolean") {
            angle = cursor();
            fix();
        }

        if(previousDir === angle) return 0;
        previousDir = angle;

        send("D", angle);
    }

    static move(angle) {
        send("a", angle);
    }

    static chat(message) {
        send("6", message);
    }

    static build(id, angle = cursor(), repeat = 1, skip) {
        drawPlace = [];
        if(!player.items.includes(id)) return null;

        const item = list[id];

        let oldAngle = angle;
        if(typeof angle === "boolean") angle = cursor();

        if(oldAngle === true && item && !item.consume) {
            const obj = {
                id: id,
                angle: angle,
                date: Date.now(),
                free: canBuild(player.nextPos, id, angle, true)
            }

            if(!obj.free) {
                const maxOffset = Math.PI / 3; // 60*
                const minOffset = Math.PI / 45; // 8*

                let angleIn = [];
                for(let i = 0; i < maxOffset; i += minOffset){
                    let CheckIn = [angleIn[0] || canBuild(player.nextPos, id, angle - i, true), angleIn[1] || canBuild(player.nextPos, id, angle + i, true)];

                    if(CheckIn[0] && !angleIn[0]) {
                        obj.angle -= i;
                        angleIn[0] = true;
                        obj.free = true;
                        drawPlace.push(obj);

                        if(angleIn[1]) return
                        break
                    }
                    if(CheckIn[1] && !angleIn[1]) {
                        obj.angle += i;
                        angleIn[1] = true;
                        obj.free = true;
                        drawPlace.push(obj)

                        if(angleIn[0]) return
                        break
                    }
                }
            }

            obj.free && drawPlace.push(obj)
            return
        }

        if(skip || (item && !item.consume)) {
            const Continue = canBuild(player.nextPos, id, angle);

            if(!Continue) {
                const maxOffset = Math.PI / 6; // 30*
                const minOffset = Math.PI / 90; // 4*

                for(let i = 0; i < maxOffset; i += minOffset){
                    let CheckIn = [canBuild(player.nextPos, id, angle - i), canBuild(player.nextPos, id, angle + i)];
                    if(CheckIn[0]) {
                        return this.build(id, angle - i, 1, true);
                    } else if(CheckIn[1]) {
                        return this.build(id, angle + i, 1, true);
                    }
                }
                return false;
            }

        }

        while(repeat > 0) {
            repeat -= 1;

            this.hold(id);
            this.hit(angle);
        }

        lastBuild = [player.nextPos, id, angle, Date.now()];

        this.hold(player.weapons[auto.weapon], true);
    }
}

class Macro {
    constructor(food, spike, mill, trap, tele) {
        this.food = food;
        this.spike = spike;
        this.mill = mill;
        this.trap = trap;
        this.tele = tele;
    }

    update(visual = false) {
        // keyDown[Placer.food] && Packet.build(player.items[0], visual);
        keyDown[Placer.spike] && Packet.build(player.items[2], visual);
        keyDown[Placer.mill] && Packet.build(player.items[3], visual);
        keyDown[Placer.trap] && Packet.build(player.items[4], visual);
        keyDown[Placer.tele] && Packet.build(player.items[5], visual);
    }
}

const Placer = new Macro(81, 86, 78, 70, 72);
let lastBarArgs;


let stopFill = false;
document.baj = .7;
/* message data events */
const Events = [{
    A: "setInitData",
    serve: (data) => {
        tribes = data[0].teams;
    }
}, {
    B: "disconnect",
    serve: () => {
        Bots.remove();
    }
}, {
    C: "setupGame",
    serve: () => {
        mapDisplay = document.getElementById("mapDisplay");
        ctx2 = mapDisplay.getContext("2d");
        Canvas = document.getElementById("gameCanvas");
        screenControl = document.getElementById("touch-controls-fullscreen");
        ctx = Canvas.getContext("2d");

        //         const proto = CanvasRenderingContext2D.prototype;
        //         const makeCopy = ["strokeText", "fillText", "fill", "drawImage", "roundRect"];

        //         for(let copy of makeCopy) proto[`${copy}2`] = proto[copy];

        //         proto.strokeText = function(...args){
        //             const isName = this.fillStyle === "#ffffff" && this.textBaseline === "middle" && this.textAlign === "center"

        //             if(isName) {
        //                 const oldFontSize = Number(this.font.split("px")[0]);
        //                 const fontSize = oldFontSize * document.baj;

        //                 this.font = `${fontSize}px Hammersmith One`;

        //                 this.lineWidth = 1 + this.lineWidth * document.baj
        //             }

        //             this.strokeText2(...args);
        //         }

        //         /* control fill */
        //         proto.fill = function() {
        //             /*if(stopFill) {
        //                 stopFill = false;

        //                 return;
        //             } else*/ this.fill2();
        //         }

        //         /* transparent hats */
        //         proto.drawImage = function(...args) {

        //             const { src } = args[0];
        //             this.globalAlpha = src && src.includes("hat_") ? .6 : 1;

        //             this.drawImage2(...args);
        //         }

        //         /* remove healthbar */
        //         proto.roundRect = function(...args) {
        //             if(!this.fillStyle.includes("rgba")) stopFill = true;

        //             this.roundRect2(...args);
        //         }

        screenControl.addEventListener("mousedown", (event) => {
            const Button = event.button;

            Button === 0 && Packet.hit(cursor(), 1);

            buttonDown[event.button] = true;
        })

        screenControl.addEventListener("mouseup", (event) => {
            const Button = event.button;

            Button === 0 && Packet.hit(cursor(), 0);

            buttonDown[event.button] = false;
        })

        screenControl.addEventListener("mousemove", (event) => {
            mouse = event;
        })

        for(let index = 0; index < list.length; index += 1) {
            let Item = list[index];

            Item.img = document.getElementById(`actionBarItem${index + 16}`).style.backgroundImage.toString().match(/url\("(.+)?(?=")/)[1];
            Item.id = index;

            // let placeImg = imgPlace[index];
            imgPlace[index] = new Image(Item.scale, Item.scale);
            imgPlace[index].onload = function() {
                this.isLoaded = !0;

            }
            imgPlace[index].src = Item.img;
        }
    }
}, {
    D: "addPlayer",
    serve: (data) => {
        const isMe = data[1];
        data = data[0];

        let user = findPlayer(data[0]);

        if(!user) {
            user = new Player(data);

            players.push(user);
        } else Object.assign(players[data[0]], new Player(data))

        if(isMe) {
            if(user) {
                player = user;
            } else {
                player.sid = data[0];
            }
        }
    }
}, {
    E: "removePlayer",
    serve: (data) => {
        const length = players.length;

        for (let index = 0; index < length; index += 1) {
            if (players[index].id == data[0]) return players.splice(index, 1);
        }
    }
}, {
    a: "updatePlayers",
    serve: (data) => {
        data = data[0];

        const cyclePlayers = (type) => {
            const length = players.length;

            for(let index = 0; index < length; index += 1) {
                const user = players[index];
                user.forcePos = !user.visible;

                if(type === "reset") {
                    if(!user.visible) user.reset();
                } else {
                    user.visible = false;
                }
            }
        }

        cyclePlayers();

        const length = data.length;

        for (let index = 0; index < length / 13; index += 1) {
            const sliced = Slice(data, index, 13);

            const me = sliced[0] === player.sid;
            let user = me ? player : (findPlayer(sliced[0]) || {});

            const userData = { // (tmpObj.d2===undefined)?data[i + 3]:tmpObj.d2;
                sid: sliced[0],
                x4: (user.x3 || 0),
                y4: (user.y3 || 0),
                t1: !user.t2 ? Date.now() : user.t2,
                t2: Date.now(),
                d1: (user.d2 || 0),
                dt: 0,
                x: sliced[1], x2: (user.x || 0),
                y: sliced[2], y2: (user.y || 0),
                dir: sliced[3],
                weaponIndex: sliced[5],
                buildIndex: sliced[4],
                weaponRarity: sliced[6],
                tribe: sliced[7],
                isLeader: sliced[8],
                skin: sliced[9],
                tail: sliced[10],
                visible: true,
                forcePos: false
            };

            if(user) {
                if(userData.skin === 45 && user.skin !== 45 && user.shameTimer === 0) {
                    user.shameCount = 0;
                    user.shameTimer = 30e3;
                    user.shameAt = Date.now();
                }
                Object.assign(user, userData);

                user.update();
                if(me) Object.assign(player, user);
            }
        }

        cyclePlayers("reset");

        Tick();
    }
}, {
    G: "updateLeaderboard",
    serve: () => {}
}, {
    H: "loadGameObject",
    serve: (data) => {
        data = data[0];

        const length = data.length;

        for (let index = 0; index < length / 8; index += 1) {
            const sliced = Slice(data, index, 8);
            const ownerSid = sliced[7] >= 0 ? sliced[7] : null;

            if (ownerSid === player.sid) {
                const config = list[sliced[6]]
                const itemCount = document.getElementById(`itemCount_${sliced[6]}`)
                const limit = window.inSandbox ? Math.max(3 * config.group.limit, 99) : config.group.limit

                itemCount.innerText = `${player.itemCounts[config.group.id]}/${limit}`
            }

            //add(sid, x, y, dir, s, type, data, setSID, owner)
            manager.add(sliced[0], sliced[1], sliced[2], sliced[3], sliced[4], sliced[5], list[sliced[6]], sliced[6], ownerSid);
        }
    }
}, {
    I: "loadAI",
    serve: (data) => { // [20, 6, 7098, 12520, 4.61, 16775, 21]
        animals = [];
        if(!data.length) return

        data = data[0]; // [sid, index, x, y, dir, health]

        const length = data.length;

        for (let index = 0; index < length / 7; index += 1) {
            const sliced = Slice(data, index, 7);

            animals.push(new Animal(sliced));
        }

    }
}, {
    J: "animateAI",
    serve: () => {}
}, {
    K: "gatherAnimation",
    serve: (data) => {
        TickBase.push({function: addGather, data: data});
    }
}, {
    L: "wiggleGameObject",
    serve: () => {

    }
}, {
    M: "shootTurret",
    serve: (data) => {
        let turret = findBuild(data[0]),
            dir = data[1];

        if (turret) {
            const object = projectiles[1];
            const Target = Predict(turret.x, turret.y, dir, 700, object.scale, object, turret);

            turret.dir = dir;
            if(Target === player) {
                const estimated = Math.ceil((getDistance(turret.x, turret.y, Target.x, Target.y) - object.scale) / (object.speed * tickSpeed));

                Bullets.push(new Bullet(turret.x, turret.y, dir, estimated, object, turret));
            }
        }
    }
}, {
    N: "updatePlayerValue",
    serve: (data) => {
        let name = data[0],
            value = data[1];

        player.res[name] = value;
    }
}, {
    O: "updateHealth",
    serve: (data) => {
        const user = findPlayer(data[0]),
              value = data[1];

        if (user) {
            if(value > user.health){
                user.heal();
            } else {
                const leakDmg = (() => {
                    const skin = hats.find(hat => hat.id === user.skin);
                    const tail = accessories.find(accessory => accessory.id === user.tail);

                    return (skin && skin.healthRegen ? skin.healthRegen : 0) + (tail && tail.healthRegen ? tail.healthRegen : 0)
                })();

                if(leakDmg && (leakDmg + user.health) === value) leakTime = (timer - 1) % 9;

                user.hitTime = Date.now();
            }

            user.health = value;
        }
    }
}, {
    P: "killPlayer",
    serve: () => {
        const user = findPlayer(player.sid);

        user.reset(true);
        player.reset(true)

        auto.weapon = 0;
    }
}, {
    Q: "killObject",
    serve: (data) => {
        manager.disableBySid(data[0]);
    }
}, {
    R: "killObjects",
    serve: (data) => {
        manager.removeAllItems(data[0]);
    }
}, {
    S: "updateItemCounts",
    serve: (data) => {
        const [id, count] = data;

        player.itemCounts[id] = count;
    }
}, {
    T: "updateAge",
    serve: (data) => {
        if(data.length >= 3) player.age = data[2];
    }
}, {
    U: "updateUpgrades",
    serve: () => {}
}, {
    V: "updateItems",
    serve: (data, wpn) => {
        const weapon = data[1];
        data = data[0];

        if (data) {
            if (weapon) {
                player.weapons = data;
            } else {
                player.items = data;
            }
        }
    }
}, {
    X: "addProjectile",
    serve: (data) => {
        TickBase.push({function: addProjectile, data: data});
    }
}, {
    Y: "remProjectile",
    serve: () => {}
}, {
    Z: "serverShutdownNotice",
    serve: () => {}
}, {
    0: "addAlliance",
    serve: () => {}
}, {
    1: "deleteAlliance",
    serve: () => {}
}, {
    2: "allianceNotification",
    serve: (data) => {
        Requests.push({
            sid: data[0],
            name: data[1]
        });
    }
}, {
    3: "setPlayerTeam",
    serve: () => {}
}, {
    4: "setAlliancePlayers",
    serve: (data) => {
        tribe = data[0];
    }
}, {
    5: "updateStoreItems",
    serve: (data) => {//[type, id, index]
        const type = data[0],
              id = data[1],
              index = data[2];

        if (index) {
            if (!type) {
                Tails[id] = 1;
            } else {
                player.tail = id;
            }
        } else {
            if (!type) {
                Skins[id] = 1;
            } else {
                player.skin = id;
            }
        }
    }
}, {
    6: "receiveChat",
    serve: () => {}
}, {
    7: "updateMinimap",
    serve: (data) => {
        data = data[0];

        if(!data.length) return;

        tribeMap = [];

        const length = data.length;

        for (let index = 0; index < length; index += 2) {
            const sliced = data[index];

            const pos = {x: data[index], y: data[index + 1]};

            tribeMap.push(pos);
        }
    }
}, {
    8: "showText",
    serve: () => {}
}, {
    9: "pingMap", /* R map ping(wave) */
    serve: (data) => {
        const pos = {x: data[0], y: data[1]};
    }
}, {
    0: "pingSocketResponse",
    serve: pingRes
}];

for(let Event of keyEvents) {
    document.addEventListener(Event.name, (event) => {
        if(Event.doer && (BlockEl.includes(document.activeElement.id) || keyDown[event.keyCode])) return null;

        keyUpdate(event.keyCode, Event.doer, event);
    });
}

/* page beautifier */
const BeautifyPage = () => {
    $("#gameUI").append(Notifications);

    $("#consentBlock").css({display: "none"});
    $("moomooio_728x90_home").hide();

    $("div[style*='inline-block']").css('display', 'block');

    /* replace youtuber */
    //    document.getElementById("youtuberOf").innerHTML = `Developer:<div class="spanLink" id="featuredYoutube"><a target="_blank" class="ytLink" href="https://www.youtube.com/channel/UC3hmil0ayHhHB9C9ZSAYatA"><i class="material-icons" style="vertical-align: top;"></i> Wealthy</a></div>`;

    /* remove useless stuff */
    for(let Id of RemoveElements) document.getElementById(Id).remove();
    document.getElementsByClassName("menuCard")[2].remove();

    /* moofoll */
    localStorage.setItem("moofoll", true)
};

! function() {
    const observer = new MutationObserver((mutations) => {
        window.inSandbox = /sandbox\./.test(location.href)

        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (!/actionBarItem/.test(node.id)) continue

                const actionBar = document.getElementById("actionBar")
                const id = parseInt(/\d+/.exec(node.id)[0]) - 16

                if (id < 3) continue

                actionBar.style.display = "flex"
                actionBar.style.justifyContent = "center"
                actionBar.style.alignItens = "center"

                const limit = window.inSandbox ? Math.max(3 * list[id].group.limit, 99) : list[id].group.limit

                node.insertAdjacentHTML("beforeend", `<span class="item-count" id="itemCount_${id}" style="display: block; color: #fff; font-size: 14px;">0/${limit}</span>`)
            }
        }
    })

    observer.observe(document, {
        childList: true,
        subtree: true
    })
}()

let botMenu = false;
let featureMenu = false;

const toggleMenu = () => {
    let mainMenu = document.getElementById("mainMenu");

    mainMenu.style.display = mainMenu.style.display === "none" ? "block" : "none"
}

const ApplyCss = () => {
    const Css = document.createElement("style");
    Css.type = "text/css";
    Css.appendChild(document.createTextNode(`.newMenuCard, .newMenuCard2 {
        z-index: 999;
width: 100%;
 vertical-align: top;
 text-align: left;
 white-space: normal;
 word-wrap: break-word;
 margin: 5px;
 display: none;
 width: 300px;
 height: 397px;
 padding: 18px;
 background-color: #fff;
 -moz-box-shadow: 0px 7px #c4c4c4;
 -webkit-box-shadow: 0px 7px #c4c4c4;
 box-shadow: 0px 7px #c4c4c4;
 -webkit-border-radius: 4px;
 -moz-border-radius: 4px;
 border-radius: 4px;
 overflow-y: scroll;
 position: absolute;
}
.newMenuCard {
 transform: translateX(-31.3rem);
}
.newMenuCard2 {
 transform: translateX(31.3rem);
}

@media only screen and (max-width: 896px) {
.newMenuCard {
 transform: translateX(-29.7rem);
}
.newMenuCard2 {
 transform: translateX(29.7rem);
}
}

#botName {
 text-align: center;
 font-size: 21px;
 margin-bottom: 16px;
 padding: 6px;
 border: none;
 outline: none;
 box-sizing: border-box;
 color: #4A4A4A;
 background-color: #e5e3e3;
 width: 65%;
 -webkit-border-radius: 4px;
 -moz-border-radius: 4px;
 border-radius: 4px;

}
#botChat {
 text-align: center;
 font-size: 21px;
 margin-bottom: 16px;
 padding: 6px;
 border: none;
 outline: none;
 box-sizing: border-box;
 color: #4A4A4A;
 background-color: #e5e3e3;
 width: 86%;
 -webkit-border-radius: 4px;
 -moz-border-radius: 4px;
 border-radius: 4px;

}
#pathQuality {
 text-align: center;
 font-size: 21px;
 margin-bottom: 16px;
 padding: 6px;
 border: none;
 outline: none;
 box-sizing: border-box;
 color: #4A4A4A;
 background-color: #e5e3e3;
 width: 25%;
 -webkit-border-radius: 4px;
 -moz-border-radius: 4px;
 border-radius: 4px;

}
#pathSize {
 text-align: center;
 font-size: 21px;
 margin-bottom: 16px;
 padding: 6px;
 border: none;
 outline: none;
 box-sizing: border-box;
 color: #4A4A4A;
 background-color: #e5e3e3;
 width: 25%;
 -webkit-border-radius: 4px;
 -moz-border-radius: 4px;
 border-radius: 4px;

}
#botAmount {
 text-align: center;
 font-size: 21px;
 margin-bottom: 16px;
 padding: 6px;
 border: none;
 outline: none;
 box-sizing: border-box;
 color: #4A4A4A;
 background-color: #e5e3e3;
 width: 20%;
 -webkit-border-radius: 4px;
 -moz-border-radius: 4px;
 border-radius: 4px;

}
.sendButton {
text-align: center;
font-size: 23px;
padding: 6px;
box-sizing: border-box;
color: #fff;
background-color: #7ee559;
width: 100%;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;
cursor: pointer;

}
.Btn-left {
 width: 14px;
 height: 13px;
 border: 10px solid #333;
 border-left: 0;
 border-top: 0;
 transform: rotate(135deg);
     margin-left: 7px;
    margin-right: -7px;
}
.Btn-right {
 width: 14px;
 height: 13px;
 border: 10px solid #333;
 border-left: 0;
 border-top: 0;
 transform: rotate(315deg);
}
.btn-background {
background-color: #fff;
height: 70px;
width: 30px;
display: flex;
align-items: center;
 -moz-box-shadow: 0px 7px #c4c4c4;
 -webkit-box-shadow: 0px 7px #c4c4c4;
 box-shadow: 0px 7px #c4c4c4;
 -webkit-border-radius: 4px;
 -moz-border-radius: 4px;
 border-radius: 4px;
 box-sizing: border-box;
}

.Btn2-left {
 width: 14px;
 height: 13px;
 border: 10px solid #333;
 border-left: 0;
 border-top: 0;
 transform: rotate(135deg);
}
.Btn2-right {
 width: 14px;
 height: 13px;
 border: 10px solid #333;
 border-left: 0;
 border-top: 0;
 transform: rotate(315deg);
     margin-right: 7px;
    margin-left: -7px;
}
.btn2-background {
background-color: #fff;
height: 70px;
width: 30px;
display: flex;
align-items: center;
 -moz-box-shadow: 0px 7px #c4c4c4;
 -webkit-box-shadow: 0px 7px #c4c4c4;
 box-shadow: 0px 7px #c4c4c4;
 -webkit-border-radius: 4px;
 -moz-border-radius: 4px;
 border-radius: 4px;
padding-left: 6px;
box-sizing: border-box;
}

.advertise {
 width:128px;
 height:128px;

}
.selectObj {
cursor: pointer;
 width: 100px;
height: 100px;
background-color: #fcfcfc;
display: inline-block;
border-radius: 10px;
 box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), 0 2px 10px 0 rgba(0, 0, 0, 0.06);

}
#choiceWrap {
display: inline-flex;
justify-content: space-evenly;
align-items: center;

}
.selectObjAlert {
cursor: pointer;
    width: 15%;
    display: inline-flex;
    padding: 5px;
    background-color: #fcfcfc;
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), 0 2px 10px 0 rgba(0, 0, 0, 0.06);
    justify-content: center;
    align-items: center;
}
.jconfirm-content > div:first-child {
    display: flex;
    flex-wrap: wrap;
}
.weaponOption {
 display: inlint-block;
 width: calc(110px/1.3);
 height: calc(110px/1.3);
 border: 2px solid #ececec;
 border-radius: 15px;
 margin: 0px auto;
 cursor: pointer;
 box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), 0 2px 10px 0 rgba(0, 0, 0, 0.06);

}
.viewSelectSecondary {
width: 70%;
height: 70%;
 transform: rotate(270deg);
display: flex;
margin-left: auto;
 margin-right: auto;
 margin-top: 5%;

}
.viewSelectSecondary2 {
 width: 70%;
 height: 70%;
 transform: rotate(180deg);
 display: flex;
 margin-left: auto;
 margin-right: auto;
 margin-top: 15%;

}
.viewSelectSecondary3 {
 width: 70%;
 height: 90%;
 transform: rotate(180deg);
 display: flex;
 margin-left: auto;
 margin-right: auto;
 margin-top: 5%;

}
.viewSelectPrimary {
 width: 70%;
 height: 80%;
 transform: rotate(180deg);
 display: flex;
 margin-left: auto;
 margin-right: auto;
 margin-top: 10%;

}
.viewSelectSecondarySel {
width: 50%;
 transform: rotate(270deg);
display: flex;
margin-left: auto;
 margin-right: auto;
 margin-top: 15%;

}
.viewSelectSecondarySel2 {
 width: 50%;
 transform: rotate(180deg);
 display: flex;

}
.viewSelectSecondarySel3 {
 width: 50%;
 transform: rotate(180deg);
 display: flex;
 margin-left: auto;
 margin-right: auto;

}
.viewSelectPrimarySel {
 width: 50%;
 transform: rotate(180deg);
 display: flex;
 margin-left: auto;
 margin-right: auto;
 margin-top: 15%;

}
.viewSelectPrimarySel2 {
 width: 50%;
 transform: rotate(180deg);
 display: flex;
}
.secondaryAlert {
 margin-left: 30px !important;
 margin-top: 10px !important;

}
.primaryAlert {
 margin-left: 30px !important;
 margin-top: 10px !important;

}
.ChosenSecondary {
 border: 1px solid #7daaf2;

}
.ChosenPrimary {
 border: 1px solid #7daaf2;

}

#menuCardHolder {
    display: flex !important;
    justify-content: center;
    flex-direction: column;
}
`
                                           ));
    document.head.appendChild(Css);

    let JQueryConfirm = document.createElement("link");
    JQueryConfirm.rel = "stylesheet";
    JQueryConfirm.href = "https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.0/jquery-confirm.min.css"

    document.head.appendChild(JQueryConfirm);
};

const ApplyMain = () => {
    ApplyCss();

    /* Checkbox generator */
    const generateToggles = (Toggles) => {
        const Length = Toggles.length;

        let addHTML = "";

        for(let index = 0; index < Length; index += 1) {
            const Mode = Toggles[index];

            addHTML += `<div class="settingRadio"><input id="${Mode.id}" type="checkbox"> ${Mode.name}</div>`
        }

        return addHTML;
    };

    /* Bot modes */
    const BotToggles = [{
        id: "zombieMode",
        name: "Zombie"
    }, {
        id: "goldMode",
        name: "Gold Bot"
    }, {
        id: "guardMode",
        name: "Life Guard"
    }, {
        id: "cleanerMode",
        name: "Server Cleaner"
    }, {
        id: "adjustMode",
        name: "Adjustable"
    }];

    /* Map toggles */
    const MapToggles = [{
        id: "mapSize",
        name: "Size"
    }, {
        id: "mapBiomes",
        name: "Biomes"
    }, {
        id: "mapBots",
        name: "Bots"
    }, {
        id: "mapBuilds",
        name: "Buildings"
    }, {
        id: "mapAnimals",
        name: "Animals"
    }, {
        id: "mapEnemies",
        name: "Enemies"
    }];

    /* Bot toggles */
    const BotFeatureToggles = [{
        id: "botAutoAccept",
        name: "Auto Accept"
    }, {
        id: "botHatLoop",
        name: "Hat Loop"
    }, {
        id: "botLagger",
        name: "Bot Lagger"
    }, {
        id: "botSpawn",
        name: "Auto Spawn"
    }];

    /* Bot menu */
    let menuCardHolder = document.querySelector('#menuCardHolder > div');

    menuCardHolder.style.display = "flex"
    menuCardHolder.style.justifyContent = "center"
    menuCardHolder.style.alignItems = "baseline"

    menuCardHolder.insertAdjacentHTML('afterbegin', `<div class="btn-background"><div class="Btn-right"></div></div>`)
    menuCardHolder.insertAdjacentHTML('beforeend', `<div class="btn2-background"><div class="Btn2-left"></div></div>`)

    cardHTML = document.getElementById("menuCardHolder").innerHTML;
    currentMenu = document.getElementById("menuCardHolder");

    menuChange = document.createElement("div");
    menuChange.className = "newMenuCard";
    menuChange.id = "mainSettings";

    menuChange.innerHTML = `
<div class="menuHeader">Enter Basic Info</div>
<div class="menuText">Name & Amount & Message</div>

<input type="text" id="botName" placeholder="name" maxlength="15">
<input type="text" id="botAmount" placeholder=${Bot.amount} maxlength="2">
<input type="text" id="botChat" placeholder="message" maxlength="30">

<div id="sendBots" class="sendButton"><span>Connect</span></div>

<div class="menuHeader" style="margin-top:10px">Select Bot Color</div><div id="botSkinColorHolder"></div>

<div class="menuHeader" style="margin-top:10px">Pick Weapons</div>
<div id="choiceWrap"><div class="weaponOption" id="selectPrimary"> <img id="viewPrimary" class="viewSelectPrimary" src="http://moomoo.io/img/weapons/${weapons[Bot.primary].src}.png"/> </div></div></div>
<div id="choiceWrap"><div class="weaponOption" id="selectSecondary"> <img id="viewSecondary" class="${Bot.secondary == 10 ? "viewSelectSecondary2" : (Bot.secondary == 14 ? "viewSelectSecondary3" : "viewSelectSecondary")}" src="http://moomoo.io/img/weapons/${weapons[Bot.secondary].src}.png"/> </div></div></div>

<div class="menuText">
<div class="menuHeader" style="margin-top:10px">How To Send</div>
Enter bot name. Enter bot amount. Enter bot message. Select skin color. Select mode in settings. Click the "Connect" button.

<div class="menuHeader" style="margin-top:10px">Note</div>
If you don't edit bot settings your self, it will be set to default.

<div class="menuHeader" style="margin-top:10px">Settings</div> ${generateToggles(BotToggles)}
</div>
</div>`
    menuCardHolder.insertAdjacentHTML("afterbegin", menuChange.outerHTML);

    /* Feature menu */
    cardHTML = document.getElementById("menuCardHolder").innerHTML;

    menuChange = document.createElement("div");
    menuChange.className = "newMenuCard2";
    menuChange.id = "mainSettings2";

    menuChange.innerHTML = `
<div class="menuText">

<div class="menuHeader">Path Finder</div>
<div class="menuText">Quality & Matrix Size</div>

<input type="text" id="pathQuality" placeholder=${Bot.pathQuality} maxlength="2">
<input type="text" id="pathSize" placeholder=${Bot.pathSize} maxlength="3">

<div class="settingRadio"><input id="botPathFinder" type="checkbox"> Path Finder</div>

<div class="menuHeader" style="margin-top:10px">Bot Settings</div> ${generateToggles(BotFeatureToggles)}

<div class="menuHeader" style="margin-top:10px">Map Settings</div> ${generateToggles(MapToggles)}
</div>
</div>`
    menuCardHolder.insertAdjacentHTML("beforeend", menuChange.outerHTML);

    const desktopInstructions = document.getElementById("desktopInstructions")
    const mobileInstructions = document.getElementById("mobileInstructions")

    desktopInstructions.remove()
    mobileInstructions.remove()

    const menuHeaders = [...document.querySelectorAll(".menuHeader")]

    for (const menuHeader of menuHeaders) {
        const content = menuHeader?.textContent.toLowerCase()

        if (/^settings$/.test(content)) {
            menuHeader.style.marginTop = "10px"

            continue
        }

        if (!/^(controls|how\sto\splay)$/.test(content)) continue

        menuHeader.remove()
    }

    const menuTexts = [...document.querySelectorAll(".menuText")]

    for (const menuText of menuTexts) {
        const content = menuText?.textContent.toLowerCase()

        if (!/created\sby/.test(content)) continue

        menuText.remove()

        break
    }

    if(Bot.mode) {
        const mode = BotToggles.find(mode => mode.name === Bot.mode);
        if(mode) document.getElementById(mode.id).checked = true;
    }

    document.getElementsByClassName("btn-background")[0].addEventListener("click", () => {
        botMenu = !botMenu;

        document.getElementsByClassName("btn-background")[0].innerHTML = `<div class="Btn-${botMenu ? 'left' : 'right'}"></div>`

    document.getElementById("mainSettings").style.display = botMenu ? "block" : "none";
    });

    document.getElementsByClassName("btn2-background")[0].addEventListener("click", () => {
        featureMenu = !featureMenu;

        document.getElementsByClassName("btn2-background")[0].innerHTML = `<div class="Btn2-${featureMenu ? 'right' : 'left'}"></div>`

    document.getElementById("mainSettings2").style.display = featureMenu ? "block" : "none";
    });

    /* Add "remember settings" button */
    const addSaveButton = () => {
        const guideCard = document.getElementById("guideCard");
        const Html = `<div class="settingRadio"><input id="autoSave" type="checkbox"> Remember Settings</div><div class="menuText"> Created by <a href="https://www.youtube.com/channel/UC3hmil0ayHhHB9C9ZSAYatA" target="_blank" class="menuLink">Wealthy</a>`;

        if(!guideCard.innerHTML.includes("#c37373")) return setTimeout(addSaveButton, 50);

        document.getElementsByClassName("menuText")[4].remove();

        guideCard.insertAdjacentHTML('beforeend', Html);

        rememberSettings(true);

        selectSkinColor(userSkin);
    }

    addSaveButton();

    /* Chose bot weapon */
    const weaponConfirm = (type, notByMenu) => {
        if(!notByMenu) Bot[type ? "secondary" : "primary"] = Number(document.getElementsByClassName(type ? "ChosenSecondary" : "ChosenPrimary")[0].getAttribute("weaponId"));

        let Weapon = Bot[type ? "secondary" : "primary"];
        Bot.set[(weapons[Weapon].age || 2) - 2] = Weapon;

        switch(Weapon) {
            case 3:
                Bot.set[6] = 4;
                break;
            case 4:
                Bot.set[0] = 3;
                break;
            case 9:
                Bot.set[6] = 12;
                Bot.set[7] = 13;
                break;
            case 12:
                Bot.set[4] = 9;
                Bot.set[7] = 13;
                break;
            case 13:
                Bot.set[4] = 9;
                Bot.set[6] = 12;
                break;
            case 15:
                Bot.set[4] = 9;
                Bot.set[6] = 12;
                break;
        }

        Element = document.getElementById(type ? "viewSecondary" : "viewPrimary");

        Element.setAttribute("src", `http://moomoo.io/img/weapons/${weapons[Bot[type ? "secondary" : "primary"]].src}.png`)
        Element.setAttribute("class", type ? (Bot.secondary == 10 ? "viewSelectSecondary2" : (Bot.secondary == 14 ? "viewSelectSecondary3" : "viewSelectSecondary")) : "viewSelectPrimary")
    }

    for(let type = 0; type < 2; type += 1) {
        document.getElementById(type ? "selectSecondary" : "selectPrimary").addEventListener("click", () => {
            let weaponHtml = [];

            for (let index = 0; index < weapons.length; index++){
                const weapon = weapons[index];
                const Html = `<div weaponId=${weapon.id} class="selectObjAlert ${weapon.id == Bot[type ? "secondary" : "primary"] ? (type ? "ChosenSecondary" : "ChosenPrimary") : ""} ${type ? "secondaryAlert" : "primaryAlert"}"> <img class="${type ? (10 == weapon.id ? "viewSelectSecondarySel2" : (14 == weapon.id ? "viewSelectSecondarySel3" : "viewSelectSecondarySel")) : ([3, 4, 5, 6].includes(weapon.id) ? "viewSelectPrimarySel2" : "viewSelectPrimarySel")}" src="http://moomoo.io/img/weapons/${weapon.src}.png"/> </div>`;

                if(weapon.type == type) weaponHtml.push(Html);
            }

            $.alert({
                title: "",
                content: weaponHtml,
                useBootstrap: false,
                buttons: {
                    cancel: () => {},
                    confirm: () => {
                        weaponConfirm(type);
                    },
                }

            });

            $(document).on("click", `.${type ? "secondaryAlert" : "primaryAlert"}`, (e) => {
                $(`.${type ? "ChosenSecondary" : "ChosenPrimary"}`).removeClass(type ? "ChosenSecondary" : "ChosenPrimary");
                $(e.target.tagName == "DIV" ? e.target : $(e.target).parent()).addClass(type ? "ChosenSecondary" : "ChosenPrimary");
            });
        });
    }

    /* Check modes */
    const Length = BotToggles.length;

    const modeChange = (element) => {
        for(let index = 0; index < Length; index += 1) {
            if(element.checked) {
                for(let mode of BotToggles) {
                    element.id != mode.id && (document.getElementById(mode.id).checked = false);
                }

                Bot.mode = BotToggles.find(mode => mode.id === element.id).name;
            } else {
                element.checked = true;
            }
        }
    }

    for(let index = 0; index < Length; index += 1) {
        const Elmnt = document.getElementById(BotToggles[index].id);

        Elmnt.addEventListener("change", () => {
            modeChange(Elmnt);
        });
    }

    /* Skin colors update */
    const updateSkinColorPicker = () => {
        const skinsHolder = document.getElementById("botSkinColorHolder");
        const Listeners = [];
        const Length = skinColors.length;

        let addHTML = "";

        for (let index = 0; index < Length; index += 1) {
            const skinColor = skinColors[index];

            if (index == Bot.skin) {
                addHTML += `<div class='skinColorItem activeSkin' style='background-color:${skinColor}'></div>`;
            } else {
                addHTML += `<div id="skinCol${index}"class='skinColorItem' style='background-color:${skinColor}'></div>`;
                Listeners.push(`skinCol${index}`);
            }
        }

        skinsHolder.innerHTML = addHTML;

        for(let index in Listeners) {
            document.getElementById(Listeners[index]).addEventListener("click", () => setSkin(Number(Listeners[index].split("Col")[1])));
        }
    }

    const setSkin = (skinIndex) => {
        Bot.skin = skinIndex;

        updateSkinColorPicker();
    }

    updateSkinColorPicker();

    /* Name, amount, chat, quality, size */
    const nameInput = document.getElementById("botName");
    const amountInput = document.getElementById("botAmount");
    const chatInput = document.getElementById("botChat");
    const qualityInput = document.getElementById("pathQuality");
    const sizeInput = document.getElementById("pathSize");

    nameInput.addEventListener("input", (event) => {
        Bot.name = event.target.value;
    });

    chatInput.addEventListener("input", (event) => {
        chatChange = Date.now();

        setTimeout(() => {
            if(Date.now() - chatChange >= 1e3) Bot.chat = event.target.value;
        }, 1e3);
    });

    qualityInput.addEventListener("input", (event) => {
        Bot.pathQuality = Number(event.target.value);

        if(isNaN(Bot.pathQuality)) Bot.pathQuality = 2;
        Bot.pathQuality = Math.min(10, Bot.pathQuality);

        qualityInput.value = Bot.pathQuality;
    });

    sizeInput.addEventListener("input", (event) => {
        Bot.pathSize = Number(event.target.value);

        if(isNaN(Bot.pathSize)) Bot.pathSize = 1e3;
        Bot.pathSize = Math.min(2e3, Bot.pathSize);

        sizeInput.value = Bot.pathSize;
    });

    amountInput.addEventListener("input", (event) => {
        Bot.amount = Number(event.target.value);

        if(isNaN(Bot.amount)) Bot.amount = 1;
        Bot.amount = Math.min(50, Bot.amount);

        amountInput.value = Bot.amount;
    });

    /* Send, cancel button */
    const sendButton = document.getElementById("sendBots");

    sendButton.addEventListener("click", () => {
        Bot.sent = !Bot.sent;

        !Bot.sent && Bots.remove();
        Bot.sent && Bots.send();

        sendButton.innerHTML = `<span>${Bot.sent ? "Disconnect" : "Connect"}</span>`
        Reshade(true);
    });

    sendButton.addEventListener("mouseover", () => Reshade(true));
    sendButton.addEventListener("mouseout", () => Reshade());

    const Reshade = (mouseOver) => {
        if(mouseOver) {
            sendButton.style["background-color"] = Bot.sent ? "#cf3e3e" : "#6fc94e";
        } else {
            sendButton.style["background-color"] = Bot.sent ? "#cc5151" : "#7ee559";
        }
    }

    /* manage local storage */
    const rememberSettings = (FirstRun) => {
        const saveElement = document.getElementById("autoSave");

        let Base = window.localStorage.getItem("Settings");

        if(FirstRun && Base) {
            saveElement.checked = true;
        }

        if(saveElement.checked) {
            const data = [{
                id: "autoSave",
                checked: true
            }];

            for(let id of Checkers) {
                data.push({
                    id: id,
                    checked: document.getElementById(id).checked
                });
            }
            for(let id of Inputs) {
                const getValue = (tempId) => {
                    switch(tempId) {
                        case "skin":
                            return Bot.skin;
                            break;
                        case "primary":
                            return Bot.primary;
                            break;
                        case "secondary":
                            return Bot.secondary;
                            break;
                        case "set":
                            return Bot.set;
                            break;
                        case "userSkin":
                            return userSkin;
                            break;
                    }

                    return document.getElementById(id).value;
                }

                data.push({
                    id: id,
                    value: getValue(id)
                });
            }

            if(FirstRun) {
                Base = JSON.parse(Base);

                for(let Obj of Base) {
                    const Input = Obj.value !== undefined;
                    Element = document.getElementById(Obj.id);

                    if(!Element) {
                        if(Obj.id === "userSkin") {
                            userSkin = Obj.value;
                        } else {
                            Bot[Obj.id] = Obj.value;

                            if(Obj.id === "skin") updateSkinColorPicker();
                            if(["secondary", "primary"].includes(Obj.id)) weaponConfirm(Number(Obj.id === "secondary"), true);
                        }
                    } else {
                        Element[Input ? "value" : "checked"] = Obj[Input ? "value" : "checked"];

                        if(Input) {
                            const Value = Obj.value;

                            switch(Obj.id) {
                                case "pathQuality":
                                    Bot.pathQuality = Value;
                                    break;
                                case "pathSize":
                                    Bot.pathSize = Value;
                                    break;
                                case "botChat":
                                    Bot.chat = Value;
                                    break;
                                case "botAmount":
                                    Bot.amount = Value;
                                    break;
                                case "botName":
                                    Bot.name = Value;
                                    break;
                            }
                        }
                    }
                }
            } else {
                window.localStorage.setItem("Settings", JSON.stringify(data));
            }
        } else if(Base) {
            window.localStorage.clear("Settings")
        }

        setTimeout(rememberSettings, 50);
    }
    }

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
        setTimeout(callback, 1000 / 75);
    };
})();

window.addEventListener("DOMContentLoaded", async () => {
    BeautifyPage();
    ApplyMain();
    removeCookie();
    window.requestAnimFrame(frameUpdate);
    return
    const { config } = window;

    config.maxPlayers = 70;
    config.hitReturnRatio = 0.1
});
