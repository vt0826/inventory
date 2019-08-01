/*
	SuperBox v1.0.0 (modified by bootstraphunter.com)
	by Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/superbox
	
	Copyright 2013 Todd Motto
	Licensed under the MIT license
	http://www.opensource.org/licenses/mit-license.php

	SuperBox, the lightbox reimagined. Fully responsive HTML5 image galleries.
*/
!function(i){i.fn.SuperBox=function(s){var t=i('<div class="superbox-show"></div>'),e=i('<img src="" class="superbox-current-img"><div id="imgInfoBox" class="superbox-imageinfo inline-block"> <h1>Image Title</h1><span><p><em>http://imagelink.com/thisimage.jpg</em></p><p class="superbox-img-description">Image description</p><p><a href="javascript:void(0);" class="btn btn-primary btn-sm">Edit Image</a> <a href="javascript:void(0);" class="btn btn-danger btn-sm">Delete</a></p></span> </div>'),a=i('<div class="superbox-close txt-color-white"><i class="fa fa-times fa-lg"></i></div>');t.append(e).append(a);i(".superbox-imageinfo");return this.each(function(){i(".superbox-list").click(function(){$this=i(this);var s=$this.find(".superbox-img"),a=s.data("img"),o=s.attr("alt")||"No description",r=a,n=s.attr("title")||"No Title";e.attr("src",a),i(".superbox-list").removeClass("active"),$this.addClass("active"),e.find("em").text(r),e.find(">:first-child").text(n),e.find(".superbox-img-description").text(o),0==i(".superbox-current-img").css("opacity")&&i(".superbox-current-img").animate({opacity:1}),i(this).next().hasClass("superbox-show")?(t.is(":visible")&&i(".superbox-list").removeClass("active"),t.toggle()):(t.insertAfter(this).css("display","block"),$this.addClass("active")),i("html, body").animate({scrollTop:t.position().top-s.width()},"medium")}),i(".superbox").on("click",".superbox-close",function(){i(".superbox-list").removeClass("active"),i(".superbox-current-img").animate({opacity:0},200,function(){i(".superbox-show").slideUp()})})})}}(jQuery);