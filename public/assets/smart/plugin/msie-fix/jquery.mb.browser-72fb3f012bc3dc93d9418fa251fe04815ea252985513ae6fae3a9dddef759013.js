/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.browser.js
 *
 *  Copyright (c) 2001-2013. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 17/01/13 0.12
 *  *****************************************************************************
 */
!function(r){if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.msie=!1;var e=navigator.userAgent;jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var s,o,n;-1!=(o=e.indexOf("Opera"))?(jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=e.substring(o+6),-1!=(o=e.indexOf("Version"))&&(jQuery.browser.fullVersion=e.substring(o+8))):-1!=(o=e.indexOf("MSIE"))?(jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=e.substring(o+5)):-1!=(o=e.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=e.substring(o+7)):-1!=(o=e.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=e.substring(o+7),-1!=(o=e.indexOf("Version"))&&(jQuery.browser.fullVersion=e.substring(o+8))):-1!=(o=e.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=e.substring(o+8)):(s=e.lastIndexOf(" ")+1)<(o=e.lastIndexOf("/"))&&(jQuery.browser.name=e.substring(s,o),jQuery.browser.fullVersion=e.substring(o+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName)),-1!=(n=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,n)),-1!=(n=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,n)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}}(jQuery);