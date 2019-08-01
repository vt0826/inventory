!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){return e?i(e):void 0}function i(e){for(var i in t.prototype)e[i]=t.prototype[i];return e}var n={exports:{}};/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
return n.exports=t,t.prototype.on=t.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks[e]=this._callbacks[e]||[]).push(t),this},t.prototype.once=function(e,t){function i(){n.off(e,i),t.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},i.fn=t,this.on(e,i),this},t.prototype.off=t.prototype.removeListener=t.prototype.removeAllListeners=t.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var i=this._callbacks[e];if(!i)return this;if(1==arguments.length)return delete this._callbacks[e],this;for(var n,r=0;r<i.length;r++)if(n=i[r],n===t||n.fn===t){i.splice(r,1);break}return this},t.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),i=this._callbacks[e];if(i){i=i.slice(0);for(var n=0,r=i.length;r>n;++n)i[n].apply(this,t)}return this},t.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks[e]||[]},t.prototype.hasListeners=function(e){return!!this.listeners(e).length},function(){var i,r,s,o,l,a,u,p,d={}.hasOwnProperty,c=function(e,t){function i(){this.constructor=e}for(var n in t)d.call(t,n)&&(e[n]=t[n]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},h=[].slice;r="undefined"!=typeof t&&null!==t?t:require("emitter"),u=function(){},i=function(e){function t(e,n){var r,s,o;if(this.element=e,this.version=t.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(t.instances.push(this),this.element.dropzone=this,r=null!=(o=t.optionsForElement(this.element))?o:{},this.options=i({},this.defaultOptions,r,null!=n?n:{}),this.options.forceFallback||!t.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(s=this.getExistingFallback())&&s.parentNode&&s.parentNode.removeChild(s),this.options.previewsContainer!==!1&&(this.options.previewsContainer?this.previewsContainer=t.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(this.options.clickable===!0?this.clickableElements=[this.element]:this.clickableElements=t.getElements(this.options.clickable,"clickable")),this.init()}var i;return c(t,e),t.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached"],t.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:100,thumbnailHeight:100,maxFiles:null,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(e,t){return t()},init:function(){return u},forceFallback:!1,fallback:function(){var e,i,n,r,s,o;for(this.element.className=""+this.element.className+" dz-browser-not-supported",o=this.element.getElementsByTagName("div"),r=0,s=o.length;s>r;r++)e=o[r],/(^| )dz-message($| )/.test(e.className)&&(i=e,e.className="dz-message");return i||(i=t.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(i)),n=i.getElementsByTagName("span")[0],n&&(n.textContent=this.options.dictFallbackMessage),this.element.appendChild(this.getFallbackForm())},resize:function(e){var t,i,n;return t={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},i=e.width/e.height,t.optWidth=this.options.thumbnailWidth,t.optHeight=this.options.thumbnailHeight,null==t.optWidth&&null==t.optHeight?(t.optWidth=t.srcWidth,t.optHeight=t.srcHeight):null==t.optWidth?t.optWidth=i*t.optHeight:null==t.optHeight&&(t.optHeight=1/i*t.optWidth),n=t.optWidth/t.optHeight,e.height<t.optHeight||e.width<t.optWidth?(t.trgHeight=t.srcHeight,t.trgWidth=t.srcWidth):i>n?(t.srcHeight=e.height,t.srcWidth=t.srcHeight*n):(t.srcWidth=e.width,t.srcHeight=t.srcWidth/n),t.srcX=(e.width-t.srcWidth)/2,t.srcY=(e.height-t.srcHeight)/2,t},drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:u,dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:u,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var i,n,r,s,o,l,a,u,p,d,c,h,m;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(e.previewElement=t.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement),d=e.previewElement.querySelectorAll("[data-dz-name]"),s=0,a=d.length;a>s;s++)i=d[s],i.textContent=e.name;for(c=e.previewElement.querySelectorAll("[data-dz-size]"),o=0,u=c.length;u>o;o++)i=c[o],i.innerHTML=this.filesize(e.size);for(this.options.addRemoveLinks&&(e._removeLink=t.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink)),n=function(i){return function(n){return n.preventDefault(),n.stopPropagation(),e.status===t.UPLOADING?t.confirm(i.options.dictCancelUploadConfirmation,function(){return i.removeFile(e)}):i.options.dictRemoveFileConfirmation?t.confirm(i.options.dictRemoveFileConfirmation,function(){return i.removeFile(e)}):i.removeFile(e)}}(this),h=e.previewElement.querySelectorAll("[data-dz-remove]"),m=[],l=0,p=h.length;p>l;l++)r=h[l],m.push(r.addEventListener("click",n));return m}},removedfile:function(e){var t;return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var i,n,r,s,o;if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),e.previewElement.classList.add("dz-image-preview"),s=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),o=[],n=0,r=s.length;r>n;n++)i=s[n],i.alt=e.name,o.push(i.src=t);return o}},error:function(e,t){var i,n,r,s,o;if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),s=e.previewElement.querySelectorAll("[data-dz-errormessage]"),o=[],n=0,r=s.length;r>n;n++)i=s[n],o.push(i.textContent=t);return o}},errormultiple:u,processing:function(e){return e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink)?e._removeLink.textContent=this.options.dictCancelUpload:void 0},processingmultiple:u,uploadprogress:function(e,t,i){var n,r,s,o,l;if(e.previewElement){for(o=e.previewElement.querySelectorAll("[data-dz-uploadprogress]"),l=[],r=0,s=o.length;s>r;r++)n=o[r],l.push(n.style.width=""+t+"%");return l}},totaluploadprogress:u,sending:u,sendingmultiple:u,success:function(e){return e.previewElement?e.previewElement.classList.add("dz-success"):void 0},successmultiple:u,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:u,complete:function(e){return e._removeLink?e._removeLink.textContent=this.options.dictRemoveFile:void 0},completemultiple:u,maxfilesexceeded:u,maxfilesreached:u,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-details">\n    <div class="dz-filename"><span data-dz-name></span></div>\n    <div class="dz-size" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-success-mark"><span>\u2714</span></div>\n  <div class="dz-error-mark"><span>\u2718</span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n</div>'},i=function(){var e,t,i,n,r,s,o;for(n=arguments[0],i=2<=arguments.length?h.call(arguments,1):[],s=0,o=i.length;o>s;s++){t=i[s];for(e in t)r=t[e],n[e]=r}return n},t.prototype.getAcceptedFiles=function(){var e,t,i,n,r;for(n=this.files,r=[],t=0,i=n.length;i>t;t++)e=n[t],e.accepted&&r.push(e);return r},t.prototype.getRejectedFiles=function(){var e,t,i,n,r;for(n=this.files,r=[],t=0,i=n.length;i>t;t++)e=n[t],e.accepted||r.push(e);return r},t.prototype.getFilesWithStatus=function(e){var t,i,n,r,s;for(r=this.files,s=[],i=0,n=r.length;n>i;i++)t=r[i],t.status===e&&s.push(t);return s},t.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(t.QUEUED)},t.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(t.UPLOADING)},t.prototype.getActiveFiles=function(){var e,i,n,r,s;for(r=this.files,s=[],i=0,n=r.length;n>i;i++)e=r[i],(e.status===t.UPLOADING||e.status===t.QUEUED)&&s.push(e);return s},t.prototype.init=function(){var e,i,n,r,s,o,l;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(t.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(n=function(e){return function(){return e.hiddenFileInput&&document.body.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null==e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!=e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",document.body.appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var t,i,r,s;if(i=e.hiddenFileInput.files,i.length)for(r=0,s=i.length;s>r;r++)t=i[r],e.addFile(t);return n()})}}(this))(),this.URL=null!=(o=window.URL)?o:window.webkitURL,l=this.events,r=0,s=l.length;s>r;r++)e=l[r],this.on(e,this.options[e]);return this.on("uploadprogress",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("canceled",function(e){return function(t){return e.emit("complete",t)}}(this)),this.on("complete",function(e){return function(t){return 0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length?setTimeout(function(){return e.emit("queuecomplete")},0):void 0}}(this)),i=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(e){return function(t){return e.emit("dragstart",t)}}(this),dragenter:function(e){return function(t){return i(t),e.emit("dragenter",t)}}(this),dragover:function(e){return function(t){var n;try{n=t.dataTransfer.effectAllowed}catch(r){}return t.dataTransfer.dropEffect="move"===n||"linkMove"===n?"move":"copy",i(t),e.emit("dragover",t)}}(this),dragleave:function(e){return function(t){return e.emit("dragleave",t)}}(this),drop:function(e){return function(t){return i(t),e.drop(t)}}(this),dragend:function(e){return function(t){return e.emit("dragend",t)}}(this)}}],this.clickableElements.forEach(function(e){return function(i){return e.listeners.push({element:i,events:{click:function(n){return i!==e.element||n.target===e.element||t.elementInside(n.target,e.element.querySelector(".dz-message"))?e.hiddenFileInput.click():void 0}}})}}(this)),this.enable(),this.options.init.call(this)},t.prototype.destroy=function(){var e;return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,t.instances.splice(t.instances.indexOf(this),1)},t.prototype.updateTotalUploadProgress=function(){var e,t,i,n,r,s,o,l;if(n=0,i=0,e=this.getActiveFiles(),e.length){for(l=this.getActiveFiles(),s=0,o=l.length;o>s;s++)t=l[s],n+=t.upload.bytesSent,i+=t.upload.total;r=100*n/i}else r=100;return this.emit("totaluploadprogress",r,i,n)},t.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):""+this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},t.prototype.getFallbackForm=function(){var e,i,n,r;return(e=this.getExistingFallback())?e:(n='<div class="dz-fallback">',this.options.dictFallbackText&&(n+="<p>"+this.options.dictFallbackText+"</p>"),n+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',i=t.createElement(n),"FORM"!==this.element.tagName?(r=t.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),r.appendChild(i)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=r?r:i)},t.prototype.getExistingFallback=function(){var e,t,i,n,r,s;for(t=function(e){var t,i,n;for(i=0,n=e.length;n>i;i++)if(t=e[i],/(^| )fallback($| )/.test(t.className))return t},s=["div","form"],n=0,r=s.length;r>n;n++)if(i=s[n],e=t(this.element.getElementsByTagName(i)))return e},t.prototype.setupEventListeners=function(){var e,t,i,n,r,s,o;for(s=this.listeners,o=[],n=0,r=s.length;r>n;n++)e=s[n],o.push(function(){var n,r;n=e.events,r=[];for(t in n)i=n[t],r.push(e.element.addEventListener(t,i,!1));return r}());return o},t.prototype.removeEventListeners=function(){var e,t,i,n,r,s,o;for(s=this.listeners,o=[],n=0,r=s.length;r>n;n++)e=s[n],o.push(function(){var n,r;n=e.events,r=[];for(t in n)i=n[t],r.push(e.element.removeEventListener(t,i,!1));return r}());return o},t.prototype.disable=function(){var e,t,i,n,r;for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),n=this.files,r=[],t=0,i=n.length;i>t;t++)e=n[t],r.push(this.cancelUpload(e));return r},t.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},t.prototype.filesize=function(e){var t;return e>=109951162777.6?(e/=109951162777.6,t="TiB"):e>=107374182.4?(e/=107374182.4,t="GiB"):e>=104857.6?(e/=104857.6,t="MiB"):e>=102.4?(e/=102.4,t="KiB"):(e=10*e,t="b"),"<strong>"+Math.round(e)/10+"</strong> "+t},t.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},t.prototype.drop=function(e){var t,i;e.dataTransfer&&(this.emit("drop",e),t=e.dataTransfer.files,t.length&&(i=e.dataTransfer.items,i&&i.length&&null!=i[0].webkitGetAsEntry?this._addFilesFromItems(i):this.handleFiles(t)))},t.prototype.paste=function(e){var t,i;if(null!=(null!=e&&null!=(i=e.clipboardData)?i.items:void 0))return this.emit("paste",e),t=e.clipboardData.items,t.length?this._addFilesFromItems(t):void 0},t.prototype.handleFiles=function(e){var t,i,n,r;for(r=[],i=0,n=e.length;n>i;i++)t=e[i],r.push(this.addFile(t));return r},t.prototype._addFilesFromItems=function(e){var t,i,n,r,s;for(s=[],n=0,r=e.length;r>n;n++)i=e[n],null!=i.webkitGetAsEntry&&(t=i.webkitGetAsEntry())?t.isFile?s.push(this.addFile(i.getAsFile())):t.isDirectory?s.push(this._addFilesFromDirectory(t,t.name)):s.push(void 0):null!=i.getAsFile&&(null==i.kind||"file"===i.kind)?s.push(this.addFile(i.getAsFile())):s.push(void 0);return s},t.prototype._addFilesFromDirectory=function(e,t){var i,n;return i=e.createReader(),n=function(e){return function(i){var n,r,s;for(r=0,s=i.length;s>r;r++)n=i[r],n.isFile?n.file(function(i){return e.options.ignoreHiddenFiles&&"."===i.name.substring(0,1)?void 0:(i.fullPath=""+t+"/"+i.name,e.addFile(i))}):n.isDirectory&&e._addFilesFromDirectory(n,""+t+"/"+n.name)}}(this),i.readEntries(n,function(e){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(e):void 0})},t.prototype.accept=function(e,i){return e.size>1024*this.options.maxFilesize*1024?i(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):t.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(i(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,i):i(this.options.dictInvalidFileType)},t.prototype.addFile=function(e){return e.upload={progress:0,total:e.size,bytesSent:0},this.files.push(e),e.status=t.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(t){return function(i){return i?(e.accepted=!1,t._errorProcessing([e],i)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()}}(this))},t.prototype.enqueueFiles=function(e){var t,i,n;for(i=0,n=e.length;n>i;i++)t=e[i],this.enqueueFile(t);return null},t.prototype.enqueueFile=function(e){if(e.status!==t.ADDED||e.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");return e.status=t.QUEUED,this.options.autoProcessQueue?setTimeout(function(e){return function(){return e.processQueue()}}(this),0):void 0},t.prototype._thumbnailQueue=[],t.prototype._processingThumbnail=!1,t.prototype._enqueueThumbnail=function(e){return this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024?(this._thumbnailQueue.push(e),setTimeout(function(e){return function(){return e._processThumbnailQueue()}}(this),0)):void 0},t.prototype._processThumbnailQueue=function(){return this._processingThumbnail||0===this._thumbnailQueue.length?void 0:(this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(e){return function(){return e._processingThumbnail=!1,e._processThumbnailQueue()}}(this)))},t.prototype.removeFile=function(e){return e.status===t.UPLOADING&&this.cancelUpload(e),this.files=p(this.files,e),this.emit("removedfile",e),0===this.files.length?this.emit("reset"):void 0},t.prototype.removeAllFiles=function(e){var i,n,r,s;for(null==e&&(e=!1),s=this.files.slice(),n=0,r=s.length;r>n;n++)i=s[n],(i.status!==t.UPLOADING||e)&&this.removeFile(i);return null},t.prototype.createThumbnail=function(e,t){var i;return i=new FileReader,i.onload=function(n){return function(){var r;return r=document.createElement("img"),r.onload=function(){var i,s,o,l,u,p,d,c;return e.width=r.width,e.height=r.height,o=n.options.resize.call(n,e),null==o.trgWidth&&(o.trgWidth=o.optWidth),null==o.trgHeight&&(o.trgHeight=o.optHeight),i=document.createElement("canvas"),s=i.getContext("2d"),i.width=o.trgWidth,i.height=o.trgHeight,a(s,r,null!=(u=o.srcX)?u:0,null!=(p=o.srcY)?p:0,o.srcWidth,o.srcHeight,null!=(d=o.trgX)?d:0,null!=(c=o.trgY)?c:0,o.trgWidth,o.trgHeight),l=i.toDataURL("image/png"),n.emit("thumbnail",e,l),null!=t?t():void 0},r.src=i.result}}(this),i.readAsDataURL(e)},t.prototype.processQueue=function(){var e,t,i,n;if(t=this.options.parallelUploads,i=this.getUploadingFiles().length,e=i,!(i>=t)&&(n=this.getQueuedFiles(),n.length>0)){if(this.options.uploadMultiple)return this.processFiles(n.slice(0,t-i));for(;t>e;){if(!n.length)return;this.processFile(n.shift()),e++}}},t.prototype.processFile=function(e){return this.processFiles([e])},t.prototype.processFiles=function(e){var i,n,r;for(n=0,r=e.length;r>n;n++)i=e[n],i.processing=!0,i.status=t.UPLOADING,this.emit("processing",i);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},t.prototype._getFilesWithXhr=function(e){var t,i;return i=function(){var i,n,r,s;for(r=this.files,s=[],i=0,n=r.length;n>i;i++)t=r[i],t.xhr===e&&s.push(t);return s}.call(this)},t.prototype.cancelUpload=function(e){var i,n,r,s,o,l,a;if(e.status===t.UPLOADING){for(n=this._getFilesWithXhr(e.xhr),r=0,o=n.length;o>r;r++)i=n[r],i.status=t.CANCELED;for(e.xhr.abort(),s=0,l=n.length;l>s;s++)i=n[s],this.emit("canceled",i);this.options.uploadMultiple&&this.emit("canceledmultiple",n)}else((a=e.status)===t.ADDED||a===t.QUEUED)&&(e.status=t.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));return this.options.autoProcessQueue?this.processQueue():void 0},t.prototype.uploadFile=function(e){return this.uploadFiles([e])},t.prototype.uploadFiles=function(e){var n,r,s,o,l,a,u,p,d,c,h,m,f,g,v,y,F,E,b,w,z,L,k,C,A,T,x,_,D,N,S,U;for(F=new XMLHttpRequest,E=0,L=e.length;L>E;E++)n=e[E],n.xhr=F;F.open(this.options.method,this.options.url,!0),F.withCredentials=!!this.options.withCredentials,g=null,s=function(t){return function(){var i,r,s;for(s=[],i=0,r=e.length;r>i;i++)n=e[i],s.push(t._errorProcessing(e,g||t.options.dictResponseError.replace("{{statusCode}}",F.status),F));return s}}(this),v=function(t){return function(i){var r,s,o,l,a,u,p,d,c;if(null!=i)for(s=100*i.loaded/i.total,o=0,u=e.length;u>o;o++)n=e[o],n.upload={progress:s,total:i.total,bytesSent:i.loaded};else{for(r=!0,s=100,l=0,p=e.length;p>l;l++)n=e[l],(100!==n.upload.progress||n.upload.bytesSent!==n.upload.total)&&(r=!1),n.upload.progress=s,n.upload.bytesSent=n.upload.total;if(r)return}for(c=[],a=0,d=e.length;d>a;a++)n=e[a],c.push(t.emit("uploadprogress",n,s,n.upload.bytesSent));return c}}(this),F.onload=function(i){return function(n){var r;if(e[0].status!==t.CANCELED&&4===F.readyState){if(g=F.responseText,F.getResponseHeader("content-type")&&~F.getResponseHeader("content-type").indexOf("application/json"))try{g=JSON.parse(g)}catch(o){n=o,g="Invalid JSON response from server."}return v(),200<=(r=F.status)&&300>r?i._finished(e,g,n):s()}}}(this),F.onerror=function(i){return function(){return e[0].status!==t.CANCELED?s():void 0}}(this),f=null!=(x=F.upload)?x:F,f.onprogress=v,a={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&i(a,this.options.headers);for(o in a)l=a[o],F.setRequestHeader(o,l);if(r=new FormData,this.options.params){_=this.options.params;for(h in _)y=_[h],r.append(h,y)}for(b=0,k=e.length;k>b;b++)n=e[b],this.emit("sending",n,F,r);if(this.options.uploadMultiple&&this.emit("sendingmultiple",e,F,r),"FORM"===this.element.tagName)for(D=this.element.querySelectorAll("input, textarea, select, button"),w=0,C=D.length;C>w;w++)if(p=D[w],d=p.getAttribute("name"),c=p.getAttribute("type"),"SELECT"===p.tagName&&p.hasAttribute("multiple"))for(N=p.options,z=0,A=N.length;A>z;z++)m=N[z],m.selected&&r.append(d,m.value);else(!c||"checkbox"!==(S=c.toLowerCase())&&"radio"!==S||p.checked)&&r.append(d,p.value);for(u=T=0,U=e.length-1;U>=0?U>=T:T>=U;u=U>=0?++T:--T)r.append(this._getParamName(u),e[u],e[u].name);return F.send(r)},t.prototype._finished=function(e,i,n){var r,s,o;for(s=0,o=e.length;o>s;s++)r=e[s],r.status=t.SUCCESS,this.emit("success",r,i,n),this.emit("complete",r);return this.options.uploadMultiple&&(this.emit("successmultiple",e,i,n),this.emit("completemultiple",e)),this.options.autoProcessQueue?this.processQueue():void 0},t.prototype._errorProcessing=function(e,i,n){var r,s,o;for(s=0,o=e.length;o>s;s++)r=e[s],r.status=t.ERROR,this.emit("error",r,i,n),this.emit("complete",r);return this.options.uploadMultiple&&(this.emit("errormultiple",e,i,n),this.emit("completemultiple",e)),this.options.autoProcessQueue?this.processQueue():void 0},t}(r),i.version="3.10.2",i.options={},i.optionsForElement=function(e){return e.getAttribute("id")?i.options[s(e.getAttribute("id"))]:void 0},i.instances=[],i.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},i.autoDiscover=!0,i.discover=function(){var e,t,n,r,s,o;for(document.querySelectorAll?n=document.querySelectorAll(".dropzone"):(n=[],e=function(e){var t,i,r,s;for(s=[],i=0,r=e.length;r>i;i++)t=e[i],/(^| )dropzone($| )/.test(t.className)?s.push(n.push(t)):s.push(void 0);return s},e(document.getElementsByTagName("div")),e(document.getElementsByTagName("form"))),o=[],r=0,s=n.length;s>r;r++)t=n[r],i.optionsForElement(t)!==!1?o.push(new i(t)):o.push(void 0);return o},i.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],i.isBrowserSupported=function(){var e,t,n,r,s;if(e=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(s=i.blacklistedBrowsers,n=0,r=s.length;r>n;n++)t=s[n],t.test(navigator.userAgent)&&(e=!1);else e=!1;else e=!1;return e},p=function(e,t){var i,n,r,s;for(s=[],n=0,r=e.length;r>n;n++)i=e[n],i!==t&&s.push(i);return s},s=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},i.createElement=function(e){var t;return t=document.createElement("div"),t.innerHTML=e,t.childNodes[0]},i.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},i.getElement=function(e,t){var i;if("string"==typeof e?i=document.querySelector(e):null!=e.nodeType&&(i=e),null==i)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return i},i.getElements=function(e,t){var i,n,r,s,o,l,a,u;if(e instanceof Array){r=[];try{for(s=0,l=e.length;l>s;s++)n=e[s],r.push(this.getElement(n,t))}catch(p){i=p,r=null}}else if("string"==typeof e)for(r=[],u=document.querySelectorAll(e),o=0,a=u.length;a>o;o++)n=u[o],r.push(n);else null!=e.nodeType&&(r=[e]);if(null==r||!r.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return r},i.confirm=function(e,t,i){return window.confirm(e)?t():null!=i?i():void 0},i.isValidFile=function(e,t){var i,n,r,s,o;if(!t)return!0;for(t=t.split(","),n=e.type,i=n.replace(/\/.*$/,""),s=0,o=t.length;o>s;s++)if(r=t[s],r=r.trim(),"."===r.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(r.toLowerCase(),e.name.length-r.length))return!0}else if(/\/\*$/.test(r)){if(i===r.replace(/\/.*$/,""))return!0}else if(n===r)return!0;return!1},"undefined"!=typeof e&&null!==e&&(e.fn.dropzone=function(e){return this.each(function(){return new i(this,e)})}),"undefined"!=typeof n&&null!==n?n.exports=i:window.Dropzone=i,i.ADDED="added",i.QUEUED="queued",i.ACCEPTED=i.QUEUED,i.UPLOADING="uploading",i.PROCESSING=i.UPLOADING,i.CANCELED="canceled",i.ERROR="error",i.SUCCESS="success",l=function(e){var t,i,n,r,s,o,l,a,u,p;for(l=e.naturalWidth,o=e.naturalHeight,i=document.createElement("canvas"),i.width=1,i.height=o,n=i.getContext("2d"),n.drawImage(e,0,0),r=n.getImageData(0,0,1,o).data,p=0,s=o,a=o;a>p;)t=r[4*(a-1)+3],0===t?s=a:p=a,a=s+p>>1;return u=a/o,0===u?1:u},a=function(e,t,i,n,r,s,o,a,u,p){var d;return d=l(t),e.drawImage(t,i,n,r,s,o,a,u,p/d)},o=function(e,t){var i,n,r,s,o,l,a,u,p;if(r=!1,p=!0,n=e.document,u=n.documentElement,i=n.addEventListener?"addEventListener":"attachEvent",a=n.addEventListener?"removeEventListener":"detachEvent",l=n.addEventListener?"":"on",s=function(i){return"readystatechange"!==i.type||"complete"===n.readyState?(("load"===i.type?e:n)[a](l+i.type,s,!1),!r&&(r=!0)?t.call(e,i.type||i):void 0):void 0},o=function(){var e;try{u.doScroll("left")}catch(t){return e=t,void setTimeout(o,50)}return s("poll")},"complete"!==n.readyState){if(n.createEventObject&&u.doScroll){try{p=!e.frameElement}catch(d){}p&&o()}return n[i](l+"DOMContentLoaded",s,!1),n[i](l+"readystatechange",s,!1),e[i](l+"load",s,!1)}},i._autoDiscoverFunction=function(){return i.autoDiscover?i.discover():void 0},o(window,i._autoDiscoverFunction)}.call(this),n.exports});