/* =========================================================
 * bootstrap-colorpicker.js 
 * http://www.eyecon.ro/bootstrap-colorpicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function(t){var e=function(t){this.value={h:1,s:1,b:1,a:1},this.setColor(t)};e.prototype={constructor:e,setColor:function(e){e=e.toLowerCase();var o=this;t.each(s.stringParsers,function(t,i){var r=i.re.exec(e),n=r&&i.parse(r),a=i.space||"rgba";return n?("hsla"===a?o.value=s.RGBtoHSB.apply(null,s.HSLtoRGB.apply(null,n)):o.value=s.RGBtoHSB.apply(null,n),!1):void 0})},setHue:function(t){this.value.h=1-t},setSaturation:function(t){this.value.s=t},setLightness:function(t){this.value.b=1-t},setAlpha:function(t){this.value.a=parseInt(100*(1-t),10)/100},toRGB:function(t,e,o,s){t||(t=this.value.h,e=this.value.s,o=this.value.b),t*=360;var i,r,n,a,l;return t=t%360/60,l=o*e,a=l*(1-Math.abs(t%2-1)),i=r=n=o-l,t=~~t,i+=[l,a,0,0,a,l][t],r+=[a,l,l,a,0,0][t],n+=[0,0,a,l,l,a][t],{r:Math.round(255*i),g:Math.round(255*r),b:Math.round(255*n),a:s||this.value.a}},toHex:function(t,e,o,s){var i=this.toRGB(t,e,o,s);return"#"+(1<<24|parseInt(i.r)<<16|parseInt(i.g)<<8|parseInt(i.b)).toString(16).substr(1)},toHSL:function(t,e,o,s){t||(t=this.value.h,e=this.value.s,o=this.value.b);var i=t,r=(2-e)*o,n=e*o;return n/=r>0&&1>=r?r:2-r,r/=2,n>1&&(n=1),{h:i,s:n,l:r,a:s||this.value.a}}};var o=function(e,o){this.element=t(e);var i=o.format||this.element.data("color-format")||"hex";this.format=s.translateFormats[i],this.isInput=this.element.is("input"),this.component=this.element.is(".color")?this.element.find(".add-on"):!1,this.picker=t(s.template).appendTo("body").on("mousedown",t.proxy(this.mousedown,this)),this.isInput?this.element.on({focus:t.proxy(this.show,this),keyup:t.proxy(this.update,this)}):this.component?this.component.on({click:t.proxy(this.show,this)}):this.element.on({click:t.proxy(this.show,this)}),("rgba"===i||"hsla"===i)&&(this.picker.addClass("alpha"),this.alpha=this.picker.find(".colorpicker-alpha")[0].style),this.component?(this.picker.find(".colorpicker-color").hide(),this.preview=this.element.find("i")[0].style):this.preview=this.picker.find("div:last")[0].style,this.base=this.picker.find("div:first")[0].style,this.update()};o.prototype={constructor:o,show:function(e){this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.place(),t(window).on("resize",t.proxy(this.place,this)),this.isInput||e&&(e.stopPropagation(),e.preventDefault()),t(document).on({mousedown:t.proxy(this.hide,this)}),this.element.trigger({type:"show",color:this.color})},update:function(){this.color=new e(this.isInput?this.element.prop("value"):this.element.data("color")),this.picker.find("i").eq(0).css({left:100*this.color.value.s,top:100-100*this.color.value.b}).end().eq(1).css("top",100*(1-this.color.value.h)).end().eq(2).css("top",100*(1-this.color.value.a)),this.previewColor()},setValue:function(t){this.color=new e(t),this.picker.find("i").eq(0).css({left:100*this.color.value.s,top:100-100*this.color.value.b}).end().eq(1).css("top",100*(1-this.color.value.h)).end().eq(2).css("top",100*(1-this.color.value.a)),this.previewColor(),this.element.trigger({type:"changeColor",color:this.color})},hide:function(){this.picker.hide(),t(window).off("resize",this.place),this.isInput?this.element.prop("value",this.format.call(this)):(t(document).off({mousedown:this.hide}),this.component&&this.element.find("input").prop("value",this.format.call(this)),this.element.data("color",this.format.call(this))),this.element.trigger({type:"hide",color:this.color})},place:function(){var t=this.component?this.component.offset():this.element.offset();this.picker.css({top:t.top+this.height,left:t.left})},previewColor:function(){try{this.preview.backgroundColor=this.format.call(this)}catch(t){this.preview.backgroundColor=this.color.toHex()}this.base.backgroundColor=this.color.toHex(this.color.value.h,1,1,1),this.alpha&&(this.alpha.backgroundColor=this.color.toHex())},pointer:null,slider:null,mousedown:function(e){e.stopPropagation(),e.preventDefault();var o=t(e.target),i=o.closest("div");if(!i.is(".colorpicker")){if(i.is(".colorpicker-saturation"))this.slider=t.extend({},s.sliders.saturation);else if(i.is(".colorpicker-hue"))this.slider=t.extend({},s.sliders.hue);else{if(!i.is(".colorpicker-alpha"))return!1;this.slider=t.extend({},s.sliders.alpha)}var r=i.offset();this.slider.knob=i.find("i")[0].style,this.slider.left=e.pageX-r.left,this.slider.top=e.pageY-r.top,this.pointer={left:e.pageX,top:e.pageY},t(document).on({mousemove:t.proxy(this.mousemove,this),mouseup:t.proxy(this.mouseup,this)}).trigger("mousemove")}return!1},mousemove:function(t){t.stopPropagation(),t.preventDefault();var e=Math.max(0,Math.min(this.slider.maxLeft,this.slider.left+((t.pageX||this.pointer.left)-this.pointer.left))),o=Math.max(0,Math.min(this.slider.maxTop,this.slider.top+((t.pageY||this.pointer.top)-this.pointer.top)));return this.slider.knob.left=e+"px",this.slider.knob.top=o+"px",this.slider.callLeft&&this.color[this.slider.callLeft].call(this.color,e/100),this.slider.callTop&&this.color[this.slider.callTop].call(this.color,o/100),this.previewColor(),this.element.trigger({type:"changeColor",color:this.color}),!1},mouseup:function(e){return e.stopPropagation(),e.preventDefault(),t(document).off({mousemove:this.mousemove,mouseup:this.mouseup}),!1}},t.fn.colorpicker=function(e,s){return this.each(function(){var i=t(this),r=i.data("colorpicker"),n="object"==typeof e&&e;r||i.data("colorpicker",r=new o(this,t.extend({},t.fn.colorpicker.defaults,n))),"string"==typeof e&&r[e](s)})},t.fn.colorpicker.defaults={},t.fn.colorpicker.Constructor=o;var s={translateFormats:{rgb:function(){var t=this.color.toRGB();return"rgb("+t.r+","+t.g+","+t.b+")"},rgba:function(){var t=this.color.toRGB();return"rgba("+t.r+","+t.g+","+t.b+","+t.a+")"},hsl:function(){var t=this.color.toHSL();return"hsl("+Math.round(360*t.h)+","+Math.round(100*t.s)+"%,"+Math.round(100*t.l)+"%)"},hsla:function(){var t=this.color.toHSL();return"hsla("+Math.round(360*t.h)+","+Math.round(100*t.s)+"%,"+Math.round(100*t.l)+"%,"+t.a+")"},hex:function(){return this.color.toHex()}},sliders:{saturation:{maxLeft:100,maxTop:100,callLeft:"setSaturation",callTop:"setLightness"},hue:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setHue"},alpha:{maxLeft:0,maxTop:100,callLeft:!1,callTop:"setAlpha"}},RGBtoHSB:function(t,e,o,s){t/=255,e/=255,o/=255;var i,r,n,a;return n=Math.max(t,e,o),a=n-Math.min(t,e,o),i=0===a?null:n==t?(e-o)/a:n==e?(o-t)/a+2:(t-e)/a+4,i=(i+360)%6*60/360,r=0===a?0:a/n,{h:i||1,s:r,b:n,a:s||1}},HueToRGB:function(t,e,o){return 0>o?o+=1:o>1&&(o-=1),1>6*o?t+(e-t)*o*6:1>2*o?e:2>3*o?t+(e-t)*(2/3-o)*6:t},HSLtoRGB:function(t,e,o,i){0>e&&(e=0);var r;r=.5>=o?o*(1+e):o+e-o*e;var n=2*o-r,a=t+1/3,l=t,h=t-1/3,c=Math.round(255*s.HueToRGB(n,r,a)),p=Math.round(255*s.HueToRGB(n,r,l)),u=Math.round(255*s.HueToRGB(n,r,h));return[c,p,u,i||1]},stringParsers:[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1]/360,t[2]/100,t[3]/100,t[4]]}}],template:'<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div></div>'}}(window.jQuery);