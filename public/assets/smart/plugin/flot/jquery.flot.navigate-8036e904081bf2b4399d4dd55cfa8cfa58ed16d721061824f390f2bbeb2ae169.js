/* Flot plugin for adding the ability to pan and zoom the plot.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

The default behaviour is double click and scrollwheel up/down to zoom in, drag
to pan. The plugin defines plot.zoom({ center }), plot.zoomOut() and
plot.pan( offset ) so you easily can add custom controls. It also fires
"plotpan" and "plotzoom" events, useful for synchronizing plots.

The plugin supports these options:

	zoom: {
		interactive: false
		trigger: "dblclick" // or "click" for single click
		amount: 1.5         // 2 = 200% (zoom in), 0.5 = 50% (zoom out)
	}

	pan: {
		interactive: false
		cursor: "move"      // CSS mouse cursor value used when dragging, e.g. "pointer"
		frameRate: 20
	}

	xaxis, yaxis, x2axis, y2axis: {
		zoomRange: null  // or [ number, number ] (min range, max range) or false
		panRange: null   // or [ number, number ] (min, max) or false
	}

"interactive" enables the built-in drag/click behaviour. If you enable
interactive for pan, then you'll have a basic plot that supports moving
around; the same for zoom.

"amount" specifies the default amount to zoom in (so 1.5 = 150%) relative to
the current viewport.

"cursor" is a standard CSS mouse cursor string used for visual feedback to the
user when dragging.

"frameRate" specifies the maximum number of times per second the plot will
update itself while the user is panning around on it (set to null to disable
intermediate pans, the plot will then not update until the mouse button is
released).

"zoomRange" is the interval in which zooming can happen, e.g. with zoomRange:
[1, 100] the zoom will never scale the axis so that the difference between min
and max is smaller than 1 or larger than 100. You can set either end to null
to ignore, e.g. [1, null]. If you set zoomRange to false, zooming on that axis
will be disabled.

"panRange" confines the panning to stay within a range, e.g. with panRange:
[-10, 20] panning stops at -10 in one end and at 20 in the other. Either can
be null, e.g. [-10, null]. If you set panRange to false, panning on that axis
will be disabled.

Example API usage:

	plot = $.plot(...);

	// zoom default amount in on the pixel ( 10, 20 )
	plot.zoom({ center: { left: 10, top: 20 } });

	// zoom out again
	plot.zoomOut({ center: { left: 10, top: 20 } });

	// zoom 200% in on the pixel (10, 20)
	plot.zoom({ amount: 2, center: { left: 10, top: 20 } });

	// pan 100 pixels to the left and 20 down
	plot.pan({ left: -100, top: 20 })

Here, "center" specifies where the center of the zooming should happen. Note
that this is defined in pixel space, not the space of the data points (you can
use the p2c helpers on the axes in Flot to help you convert between these).

"amount" is the amount to zoom the viewport relative to the current range, so
1 is 100% (i.e. no change), 1.5 is 150% (zoom in), 0.7 is 70% (zoom out). You
can set the default in the options.

*/
/*
jquery.event.drag.js ~ v1.5 ~ Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
Licensed under the MIT License ~ http://threedubmedia.googlecode.com/files/MIT-LICENSE.txt
*/
!function(e){function t(a){var g,d=this,l=a.data||{};if(l.elem)d=a.dragTarget=l.elem,a.dragProxy=u.proxy||d,a.cursorOffsetX=l.pageX-l.left,a.cursorOffsetY=l.pageY-l.top,a.offsetX=a.pageX-a.cursorOffsetX,a.offsetY=a.pageY-a.cursorOffsetY;else if(u.dragging||l.which>0&&a.which!=l.which||e(a.target).is(l.not))return;switch(a.type){case"mousedown":return e.extend(l,e(d).offset(),{elem:d,target:a.target,pageX:a.pageX,pageY:a.pageY}),i.add(document,"mousemove mouseup",t,l),r(d,!1),u.dragging=null,!1;case!u.dragging&&"mousemove":if(o(a.pageX-l.pageX)+o(a.pageY-l.pageY)<l.distance)break;a.target=l.target,g=n(a,"dragstart",d),g!==!1&&(u.dragging=d,u.proxy=a.dragProxy=e(g||d)[0]);case"mousemove":if(u.dragging){if(g=n(a,"drag",d),s.drop&&(s.drop.allowed=g!==!1,s.drop.handler(a)),g!==!1)break;a.type="mouseup"}case"mouseup":i.remove(document,"mousemove mouseup",t),u.dragging&&(s.drop&&s.drop.handler(a),n(a,"dragend",d)),r(d,!0),u.dragging=u.proxy=l.elem=!1}return!0}function n(t,n,o){t.type=n;var a=e.event.dispatch.call(o,t);return a===!1?!1:a||t.result}function o(e){return Math.pow(e,2)}function a(){return u.dragging===!1}function r(e,t){e&&(e.unselectable=t?"off":"on",e.onselectstart=function(){return t},e.style&&(e.style.MozUserSelect=t?"":"none"))}e.fn.drag=function(e,t,n){return t&&this.bind("dragstart",e),n&&this.bind("dragend",n),e?this.bind("drag",t?t:e):this.trigger("drag")};var i=e.event,s=i.special,u=s.drag={not:":input",distance:0,which:1,dragging:!1,setup:function(n){n=e.extend({distance:u.distance,which:u.which,not:u.not},n||{}),n.distance=o(n.distance),i.add(this,"mousedown",t,n),this.attachEvent&&this.attachEvent("ondragstart",a)},teardown:function(){i.remove(this,"mousedown",t),this===u.dragging&&(u.dragging=u.proxy=!1),r(this,!0),this.detachEvent&&this.detachEvent("ondragstart",a)}};s.dragstart=s.dragend={setup:function(){},teardown:function(){}}}(jQuery),/* jquery.mousewheel.min.js
 * Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 *
 * Requires: 1.2.2+
 */
function(e){function t(t){var n=t||window.event,o=[].slice.call(arguments,1),a=0,r=0,i=0,t=e.event.fix(n);return t.type="mousewheel",n.wheelDelta&&(a=n.wheelDelta/120),n.detail&&(a=-n.detail/3),i=a,void 0!==n.axis&&n.axis===n.HORIZONTAL_AXIS&&(i=0,r=-1*a),void 0!==n.wheelDeltaY&&(i=n.wheelDeltaY/120),void 0!==n.wheelDeltaX&&(r=-1*n.wheelDeltaX/120),o.unshift(t,a,r,i),(e.event.dispatch||e.event.handle).apply(this,o)}var n=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var o=n.length;o;)e.event.fixHooks[n[--o]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery),function(e){function t(t){function n(e,n){var o=t.offset();o.left=e.pageX-o.left,o.top=e.pageY-o.top,n?t.zoomOut({center:o}):t.zoom({center:o})}function o(e,t){return e.preventDefault(),n(e,0>t),!1}function a(e){if(1!=e.which)return!1;var n=t.getPlaceholder().css("cursor");n&&(g=n),t.getPlaceholder().css("cursor",t.getOptions().pan.cursor),d=e.pageX,l=e.pageY}function r(e){var n=t.getOptions().pan.frameRate;!c&&n&&(c=setTimeout(function(){t.pan({left:d-e.pageX,top:l-e.pageY}),d=e.pageX,l=e.pageY,c=null},1/n*1e3))}function i(e){c&&(clearTimeout(c),c=null),t.getPlaceholder().css("cursor",g),t.pan({left:d-e.pageX,top:l-e.pageY})}function s(e,t){var s=e.getOptions();s.zoom.interactive&&(t[s.zoom.trigger](n),t.mousewheel(o)),s.pan.interactive&&(t.bind("dragstart",{distance:10},a),t.bind("drag",r),t.bind("dragend",i))}function u(e,t){t.unbind(e.getOptions().zoom.trigger,n),t.unbind("mousewheel",o),t.unbind("dragstart",a),t.unbind("drag",r),t.unbind("dragend",i),c&&clearTimeout(c)}var g="default",d=0,l=0,c=null;t.zoomOut=function(e){e||(e={}),e.amount||(e.amount=t.getOptions().zoom.amount),e.amount=1/e.amount,t.zoom(e)},t.zoom=function(n){n||(n={});var o=n.center,a=n.amount||t.getOptions().zoom.amount,r=t.width(),i=t.height();o||(o={left:r/2,top:i/2});var s=o.left/r,u=o.top/i,g={x:{min:o.left-s*r/a,max:o.left+(1-s)*r/a},y:{min:o.top-u*i/a,max:o.top+(1-u)*i/a}};e.each(t.getAxes(),function(e,t){var n=t.options,o=g[t.direction].min,r=g[t.direction].max,i=n.zoomRange,s=n.panRange;if(i!==!1){if(o=t.c2p(o),r=t.c2p(r),o>r){var u=o;o=r,r=u}s&&(null!=s[0]&&o<s[0]&&(o=s[0]),null!=s[1]&&r>s[1]&&(r=s[1]));var d=r-o;i&&(null!=i[0]&&d<i[0]&&a>1||null!=i[1]&&d>i[1]&&1>a)||(n.min=o,n.max=r)}}),t.setupGrid(),t.draw(),n.preventEvent||t.getPlaceholder().trigger("plotzoom",[t,n])},t.pan=function(n){var o={x:+n.left,y:+n.top};isNaN(o.x)&&(o.x=0),isNaN(o.y)&&(o.y=0),e.each(t.getAxes(),function(e,t){var n,a,r=t.options,i=o[t.direction];n=t.c2p(t.p2c(t.min)+i),a=t.c2p(t.p2c(t.max)+i);var s=r.panRange;s!==!1&&(s&&(null!=s[0]&&s[0]>n&&(i=s[0]-n,n+=i,a+=i),null!=s[1]&&s[1]<a&&(i=s[1]-a,n+=i,a+=i)),r.min=n,r.max=a)}),t.setupGrid(),t.draw(),n.preventEvent||t.getPlaceholder().trigger("plotpan",[t,n])},t.hooks.bindEvents.push(s),t.hooks.shutdown.push(u)}var n={xaxis:{zoomRange:null,panRange:null},zoom:{interactive:!1,trigger:"dblclick",amount:1.5},pan:{interactive:!1,cursor:"move",frameRate:20}};e.plot.plugins.push({init:t,options:n,name:"navigate",version:"1.3"})}(jQuery);