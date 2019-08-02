(function(){var u,c,t,e,o,n,r,s,i,v,a,l,w,p,h,f,d,b,k,g,m,y,S,q,L,x,P,T,R,j,E,O,M,A,N,_,F,C,U,W,X,D,H,I,z,G,B,J,K=[].slice,Q={}.hasOwnProperty,V=function(t,e){function n(){this.constructor=t}for(var r in e)Q.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},Y=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};for(m={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},R=function(){var t;return null!=(t="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?t:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,g=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(t){return setTimeout(t,50)},g=function(t){return clearTimeout(t)}),M=function(e){var n,r;return n=R(),(r=function(){var t;return 33<=(t=R()-n)?(n=R(),e(t,function(){return E(r)})):setTimeout(r,33-t)})()},O=function(t,e){var n,r,s;return s=t,r=e,n=3<=arguments.length?K.call(arguments,2):[],"function"==typeof s[r]?s[r].apply(s,n):s[r]},y=function(t){var e,n,r,s,o,i,a;for(n=t,i=0,a=(s=2<=arguments.length?K.call(arguments,1):[]).length;i<a;i++)if(r=s[i])for(e in r)Q.call(r,e)&&(o=r[e],null!=n[e]&&"object"==typeof n[e]&&null!=o&&"object"==typeof o?y(n[e],o):n[e]=o);return n},d=function(t){var e,n,r,s,o;for(n=e=0,s=0,o=t.length;s<o;s++)r=t[s],n+=Math.abs(r),e++;return n/e},q=function(t,e){var n,r,s;if(null==t&&(t="options"),null==e&&(e=!0),s=document.querySelector("[data-pace-"+t+"]")){if(n=s.getAttribute("data-pace-"+t),!e)return n;try{return JSON.parse(n)}catch(o){return r=o,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",r):void 0}}},r=function(){function t(){}return t.prototype.on=function(t,e,n,r){var s;return null==r&&(r=!1),null==this.bindings&&(this.bindings={}),null==(s=this.bindings)[t]&&(s[t]=[]),this.bindings[t].push({handler:e,ctx:n,once:r})},t.prototype.once=function(t,e,n){return this.on(t,e,n,!0)},t.prototype.off=function(t,e){var n,r,s;if(null!=(null!=(r=this.bindings)?r[t]:void 0)){if(null==e)return delete this.bindings[t];for(n=0,s=[];n<this.bindings[t].length;)this.bindings[t][n].handler===e?s.push(this.bindings[t].splice(n,1)):s.push(n++);return s}},t.prototype.trigger=function(t){var e,n,r,s,o,i,a,u,c;if(r=t,e=2<=arguments.length?K.call(arguments,1):[],null!=(a=this.bindings)?a[r]:void 0){for(o=0,c=[];o<this.bindings[r].length;)s=(u=this.bindings[r][o]).handler,n=u.ctx,i=u.once,s.apply(null!=n?n:this,e),i?c.push(this.bindings[r].splice(o,1)):c.push(o++);return c}},t}(),v=window.Pace||{},window.Pace=v,y(v,r.prototype),j=v.options=y({},m,window.paceOptions,q()),H=0,z=(B=["ajax","document","eventLag","elements"]).length;H<z;H++)F=B[H],!0===j[F]&&(j[F]=m[F]);i=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return V(e,t),e}(Error),c=function(){function t(){this.progress=0}return t.prototype.getElement=function(){var t;if(null==this.el){if(!(t=document.querySelector(j.target)))throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=t.firstChild?t.insertBefore(this.el,t.firstChild):t.appendChild(this.el)}return this.el},t.prototype.finish=function(){var t;return(t=this.getElement()).className=t.className.replace("pace-active",""),t.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},t.prototype.update=function(t){return this.progress=t,this.render()},t.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(t){i=t}return this.el=void 0},t.prototype.render=function(){var t,e,n,r,s,o,i;if(null==document.querySelector(j.target))return!1;for(t=this.getElement(),r="translate3d("+(this.progress-100)+"%, 0, 0)",s=0,o=(i=["webkitTransform","msTransform","transform"]).length;s<o;s++)e=i[s],t.children[0].style[e]=r;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(t.children[0].setAttribute("data-progress-text",(0|this.progress)+"%"),100<=this.progress?n="99":(n=this.progress<10?"0":"",n+=0|this.progress),t.children[0].setAttribute("data-progress",""+n)),this.lastRenderedProgress=this.progress},t.prototype.done=function(){return 100<=this.progress},t}(),s=function(){function t(){this.bindings={}}return t.prototype.trigger=function(t,e){var n,r,s,o,i;if(null!=this.bindings[t]){for(i=[],r=0,s=(o=this.bindings[t]).length;r<s;r++)n=o[r],i.push(n.call(this,e));return i}},t.prototype.on=function(t,e){var n;return null==(n=this.bindings)[t]&&(n[t]=[]),this.bindings[t].push(e)},t}(),D=window.XMLHttpRequest,X=window.XDomainRequest,W=window.WebSocket,S=function(t,e){var n,r;for(n in r=[],e.prototype)try{null==t[n]&&"function"!=typeof e[n]?"function"==typeof Object.defineProperty?r.push(Object.defineProperty(t,n,{get:function(){return e.prototype[n]},configurable:!0,enumerable:!0})):r.push(t[n]=e.prototype[n]):r.push(void 0)}catch(s){s}return r},P=[],v.ignore=function(t){var e,n,r;return n=t,e=2<=arguments.length?K.call(arguments,1):[],P.unshift("ignore"),r=n.apply(null,e),P.shift(),r},v.track=function(t){var e,n,r;return n=t,e=2<=arguments.length?K.call(arguments,1):[],P.unshift("track"),r=n.apply(null,e),P.shift(),r},_=function(t){var e;if(null==t&&(t="GET"),"track"===P[0])return"force";if(!P.length&&j.ajax){if("socket"===t&&j.ajax.trackWebSockets)return!0;if(e=t.toUpperCase(),0<=Y.call(j.ajax.trackMethods,e))return!0}return!1},a=function(){function e(){var n,o=this;e.__super__.constructor.apply(this,arguments),n=function(r){var s;return s=r.open,r.open=function(t,e,n){return _(t)&&o.trigger("request",{type:t,url:e,request:r}),s.apply(r,arguments)}},window.XMLHttpRequest=function(t){var e;return e=new D(t),n(e),e};try{S(window.XMLHttpRequest,D)}catch(t){}if(null!=X){window.XDomainRequest=function(){var t;return t=new X,n(t),t};try{S(window.XDomainRequest,X)}catch(t){}}if(null!=W&&j.ajax.trackWebSockets){window.WebSocket=function(t,e){var n;return n=null!=e?new W(t,e):new W(t),_("socket")&&o.trigger("request",{type:"socket",url:t,protocols:e,request:n}),n};try{S(window.WebSocket,W)}catch(t){}}}return V(e,s),e}(),I=null,N=function(t){var e,n,r,s;for(n=0,r=(s=j.ajax.ignoreURLs).length;n<r;n++)if("string"==typeof(e=s[n])){if(-1!==t.indexOf(e))return!0}else if(e.test(t))return!0;return!1},(L=function(){return null==I&&(I=new a),I})().on("request",function(t){var e,o,i,a,n;if(a=t.type,i=t.request,n=t.url,!N(n))return v.running||!1===j.restartOnRequestAfter&&"force"!==_(a)?void 0:(o=arguments,"boolean"==typeof(e=j.restartOnRequestAfter||0)&&(e=0),setTimeout(function(){var t,e,n,r,s;if("socket"===a?i.readyState<2:0<(n=i.readyState)&&n<4){for(v.restart(),s=[],t=0,e=(r=v.sources).length;t<e;t++){if((F=r[t])instanceof u){F.watch.apply(F,o);break}s.push(void 0)}return s}},e))}),u=function(){function t(){var t=this;this.elements=[],L().on("request",function(){return t.watch.apply(t,arguments)})}return t.prototype.watch=function(t){var e,n,r,s;if(r=t.type,e=t.request,s=t.url,!N(s))return n="socket"===r?new p(e):new h(e),this.elements.push(n)},t}(),h=function(){function t(e){var t,n,r,s,o,i=this;if(this.progress=0,null!=window.ProgressEvent)for(null,e.addEventListener("progress",function(t){return t.lengthComputable?i.progress=100*t.loaded/t.total:i.progress=i.progress+(100-i.progress)/2},!1),n=0,r=(o=["load","abort","timeout","error"]).length;n<r;n++)t=o[n],e.addEventListener(t,function(){return i.progress=100},!1);else s=e.onreadystatechange,e.onreadystatechange=function(){var t;return 0===(t=e.readyState)||4===t?i.progress=100:3===e.readyState&&(i.progress=50),"function"==typeof s?s.apply(null,arguments):void 0}}return t}(),p=function(){function t(t){var e,n,r,s,o=this;for(n=this.progress=0,r=(s=["error","open"]).length;n<r;n++)e=s[n],t.addEventListener(e,function(){return o.progress=100},!1)}return t}(),e=function(){function t(t){var e,n,r,s;for(null==t&&(t={}),this.elements=[],null==t.selectors&&(t.selectors=[]),n=0,r=(s=t.selectors).length;n<r;n++)e=s[n],this.elements.push(new o(e))}return t}(),o=function(){function t(t){this.selector=t,this.progress=0,this.check()}return t.prototype.check=function(){var t=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return t.check()},j.elements.checkInterval)},t.prototype.done=function(){return this.progress=100},t}(),t=function(){function t(){var t,e,n=this;this.progress=null!=(e=this.states[document.readyState])?e:100,t=document.onreadystatechange,document.onreadystatechange=function(){return null!=n.states[document.readyState]&&(n.progress=n.states[document.readyState]),"function"==typeof t?t.apply(null,arguments):void 0}}return t.prototype.states={loading:0,interactive:50,complete:100},t}(),n=function(){function t(){var e,n,r,s,o,i=this;this.progress=0,o=[],s=e=0,r=R(),n=setInterval(function(){var t;return t=R()-r-50,r=R(),o.push(t),o.length>j.eventLag.sampleCount&&o.shift(),e=d(o),++s>=j.eventLag.minSamples&&e<j.eventLag.lagThreshold?(i.progress=100,clearInterval(n)):i.progress=3/(e+3)*100},50)}return t}(),w=function(){function t(t){this.source=t,this.last=this.sinceLastUpdate=0,this.rate=j.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=O(this.source,"progress"))}return t.prototype.tick=function(t,e){var n;return null==e&&(e=O(this.source,"progress")),100<=e&&(this.done=!0),e===this.last?this.sinceLastUpdate+=t:(this.sinceLastUpdate&&(this.rate=(e-this.last)/this.sinceLastUpdate),this.catchup=(e-this.progress)/j.catchupTime,this.sinceLastUpdate=0,this.last=e),e>this.progress&&(this.progress+=this.catchup*t),n=1-Math.pow(this.progress/100,j.easeFactor),this.progress+=n*this.rate*t,this.progress=Math.min(this.lastProgress+j.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},t}(),k=f=U=b=A=C=null,v.running=!1,x=function(){if(j.restartOnPushState)return v.restart()},null!=window.history.pushState&&(G=window.history.pushState,window.history.pushState=function(){return x(),G.apply(window.history,arguments)}),null!=window.history.replaceState&&(J=window.history.replaceState,window.history.replaceState=function(){return x(),J.apply(window.history,arguments)}),l={ajax:u,elements:e,document:t,eventLag:n},(T=function(){var t,e,n,r,s,o,i,a;for(v.sources=C=[],e=0,r=(o=["ajax","elements","document","eventLag"]).length;e<r;e++)t=o[e],!1!==j[t]&&C.push(new l[t](j[t]));for(n=0,s=(a=null!=(i=j.extraSources)?i:[]).length;n<s;n++)F=a[n],C.push(new F(j));return v.bar=b=new c,A=[],U=new w})(),v.stop=function(){return v.trigger("stop"),v.running=!1,b.destroy(),k=!0,null!=f&&("function"==typeof g&&g(f),f=null),T()},v.restart=function(){return v.trigger("restart"),v.stop(),v.start()},v.go=function(){var y;return v.running=!0,b.render(),y=R(),k=!1,f=M(function(t,e){var n,r,s,o,i,a,u,c,l,p,h,f,d,g,m;for(100-b.progress,r=p=0,s=!0,a=h=0,d=C.length;h<d;a=++h)for(F=C[a],l=null!=A[a]?A[a]:A[a]=[],u=f=0,g=(i=null!=(m=F.elements)?m:[F]).length;f<g;u=++f)o=i[u],s&=(c=null!=l[u]?l[u]:l[u]=new w(o)).done,c.done||(r++,p+=c.tick(t));return n=p/r,b.update(U.tick(t,n)),b.done()||s||k?(b.update(100),v.trigger("done"),setTimeout(function(){return b.finish(),v.running=!1,v.trigger("hide")},Math.max(j.ghostTime,Math.max(j.minTime-(R()-y),0)))):e()})},v.start=function(t){y(j,t),v.running=!0;try{b.render()}catch(e){i=e}return document.querySelector(".pace")?(v.trigger("start"),v.go()):setTimeout(v.start,50)},"function"==typeof define&&define.amd?define(["pace"],function(){return v}):"object"==typeof exports?module.exports=v:j.startOnPageLoad&&v.start()}).call(this);