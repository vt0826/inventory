/* Flot plugin for drawing all elements of a plot on the canvas.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

Flot normally produces certain elements, like axis labels and the legend, using
HTML elements. This permits greater interactivity and customization, and often
looks better, due to cross-browser canvas text inconsistencies and limitations.

It can also be desirable to render the plot entirely in canvas, particularly
if the goal is to save it as an image, or if Flot is being used in a context
where the HTML DOM does not exist, as is the case within Node.js. This plugin
switches out Flot's standard drawing operations for canvas-only replacements.

Currently the plugin supports only axis labels, but it will eventually allow
every element of the plot to be rendered directly to canvas.

The plugin supports these options:

{
    canvas: boolean
}

The "canvas" option controls whether full canvas drawing is enabled, making it
possible to toggle on and off. This is useful when a plot uses HTML text in the
browser, but needs to redraw with canvas text when exporting as an image.

*/
!function(t){function e(e,r){var a=r.Canvas;null==i&&(n=a.prototype.getTextInfo,o=a.prototype.addText,i=a.prototype.render),a.prototype.render=function(){if(!e.getOptions().canvas)return i.call(this);var t=this.context,n=this._textCache;t.save(),t.textBaseline="middle";for(var o in n)if(s.call(n,o)){var r=n[o];for(var a in r)if(s.call(r,a)){var l=r[a],h=!0;for(var f in l)if(s.call(l,f)){var p=l[f],c=p.positions,v=p.lines;h&&(t.fillStyle=p.font.color,t.font=p.font.definition,h=!1);for(var d,g=0;d=c[g];g++)if(d.active)for(var u,y=0;u=d.lines[y];y++)t.fillText(v[y].text,u[0],u[1]);else c.splice(g--,1);0==c.length&&delete l[f]}}}t.restore()},a.prototype.getTextInfo=function(i,o,r,s,a){if(!e.getOptions().canvas)return n.call(this,i,o,r,s,a);var l,h,f,p;if(o=""+o,l="object"==typeof r?r.style+" "+r.variant+" "+r.weight+" "+r.size+"px "+r.family:r,h=this._textCache[i],null==h&&(h=this._textCache[i]={}),f=h[l],null==f&&(f=h[l]={}),p=f[o],null==p){var c=this.context;if("object"!=typeof r){var v=t("<div>&nbsp;</div>").css("position","absolute").addClass("string"==typeof r?r:null).appendTo(this.getTextLayer(i));r={lineHeight:v.height(),style:v.css("font-style"),variant:v.css("font-variant"),weight:v.css("font-weight"),family:v.css("font-family"),color:v.css("color")},r.size=v.css("line-height",1).height(),v.remove()}l=r.style+" "+r.variant+" "+r.weight+" "+r.size+"px "+r.family,p=f[o]={width:0,height:0,positions:[],lines:[],font:{definition:l,color:r.color}},c.save(),c.font=l;for(var d=(o+"").replace(/<br ?\/?>|\r\n|\r/g,"\n").split("\n"),g=0;g<d.length;++g){var u=d[g],y=c.measureText(u);p.width=Math.max(y.width,p.width),p.height+=r.lineHeight,p.lines.push({text:u,width:y.width,height:r.lineHeight})}c.restore()}return p},a.prototype.addText=function(t,i,n,r,s,a,l,h,f){if(!e.getOptions().canvas)return o.call(this,t,i,n,r,s,a,l,h,f);var p=this.getTextInfo(t,r,s,a,l),c=p.positions,v=p.lines;n+=p.height/v.length/2,n="middle"==f?Math.round(n-p.height/2):"bottom"==f?Math.round(n-p.height):Math.round(n),window.opera&&window.opera.version().split(".")[0]<12&&(n-=2);for(var d,g=0;d=c[g];g++)if(d.x==i&&d.y==n)return void(d.active=!0);d={active:!0,lines:[],x:i,y:n},c.push(d);for(var u,g=0;u=v[g];g++)"center"==h?d.lines.push([Math.round(i-u.width/2),n]):"right"==h?d.lines.push([Math.round(i-u.width),n]):d.lines.push([Math.round(i),n]),n+=u.height}}var i,n,o,r={canvas:!0},s=Object.prototype.hasOwnProperty;t.plot.plugins.push({init:e,options:r,name:"canvas",version:"1.0"})}(jQuery);