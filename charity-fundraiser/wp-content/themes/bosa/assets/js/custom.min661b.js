!function(a){function b(){var b=a(".site-header-primary .main-header").outerHeight(),b=a(".site-header-two").outerHeight();a(".slicknav_nav").css("top",b)}function c(b){var c=b+" .header-navigation .menu-item-has-children > a";a(c).each(function(){var b=a(this).text();b+='<button class="fas fa-plus triangle"></button>',a(this).html(b)}),jQuery(document).on("click",c+" .triangle",function(b){b.preventDefault(),b.stopPropagation(),$parentLi=a(this).parent().parent("li"),$childLi=$parentLi.find("li"),$parentLi.hasClass("open")?($parentLi.removeClass("open"),$childLi.removeClass("open"),a(this).parent("a").next().slideUp(),a(this).parent("a").next().find("ul").slideUp()):($parentLi.addClass("open"),a(this).parent("a").next().slideDown())})}function d(){$notificationHight=a(".notification-bar").height(),$logo_selector=document.getElementById("headerLogo");var b=a(window).width();$logo_selector&&BOSA.fixed_nav&&BOSA.fixed_header_logo&&($mastheadHeight<a(window).scrollTop()?""==BOSA.separate_logo?""!==BOSA.the_custom_logo&&($logo_selector.src=BOSA.the_custom_logo):(a(".site-header .site-branding img").css("display","block"),(!BOSA.mobile_fixed_nav_off||b>=782)&&($logo_selector.src=BOSA.separate_logo)):""!==BOSA.header_two_logo&&(BOSA.is_front_page||BOSA.overlay_post||BOSA.overlay_page)&&BOSA.is_header_two?$logo_selector.src=BOSA.header_two_logo:""!==BOSA.the_custom_logo?$logo_selector.src=BOSA.the_custom_logo:""!==BOSA.separate_logo&&a(".site-header .site-branding img").css("display","none")),$mastheadHeight>a(window).scrollTop()||0==a(window).scrollTop()?BOSA.fixed_nav&&a("#masthead.site-header").hasClass("sticky-header")&&(a("#masthead.site-header").removeClass("sticky-header"),BOSA.is_admin_bar_showing&&b>=782&&a(".fixed-header").css("marginTop",0),BOSA.is_admin_bar_showing&&b<=781&&a(".fixed-header").css("marginTop",0)):BOSA.fixed_nav&&!a("#masthead.site-header").hasClass("sticky-header")&&((!BOSA.mobile_fixed_nav_off||b>=782)&&a("#masthead.site-header").addClass("sticky-header").fadeIn(),BOSA.is_admin_bar_showing&&b>=782&&a(".fixed-header").css("marginTop",32),BOSA.is_admin_bar_showing&&b<=781&&a(".fixed-header").css("marginTop",46),BOSA.is_admin_bar_showing&&b<=600&&a(".fixed-header").css("marginTop",0),BOSA.mobile_fixed_nav_off&&b<=781&&a(".fixed-header").css("marginTop",0))}function e(){var b=a(window).width();BOSA.is_header_two&&(BOSA.is_admin_bar_showing&&b>=782&&a(".overlay-header").css("top",32),BOSA.is_admin_bar_showing&&b<=781&&a(".overlay-header").css("top",46))}$mastheadHeight=a("#masthead.site-header").height(),$stickymastheadHeight=a("#masthead .overlay-header").height(),jQuery(document).ready(function(){b(),c("#offcanvas-menu"),e(),a(document).on("click",".offcanvas-menu-toggler, .close-offcanvas-menu button, .offcanvas-overlay",function(b){b.preventDefault(),a("body").toggleClass("offcanvas-slide-open"),setTimeout(function(){a(".close-offcanvas-menu button").focus()},40)}),a(".close-offcanvas-menu button").click(function(){setTimeout(function(){a(".offcanvas-menu-toggler").focus()},50)}),jQuery("body").append('<div class="offcanvas-overlay"></div>'),jQuery(".offcanvas-menu-wrap .offcanvas-menu-inner").on("focusout",function(){var b=jQuery(this);setTimeout(function(){b.find(":focus").length||(jQuery(".offcanvas-menu-toggler").trigger("click"),a(".offcanvas-menu-toggler").focus())},0)}),jQuery(document).on("click",".search-icon, .close-button",function(){a(".header-search").toggleClass("search-in"),a(".header-search input").focus()}),jQuery(".header-search form").on("focusout",function(){var b=jQuery(this);setTimeout(function(){b.find(":focus").length||(jQuery(".search-icon").trigger("click"),a(".search-icon").focus())},0)}),a(".header-image-slider").slick({dots:!0,arrows:!0,adaptiveHeight:!1,fade:BOSA.header_image_slider.fade,speed:parseInt(BOSA.header_image_slider.fadeControl),cssEase:"linear",autoplay:BOSA.header_image_slider.autoplay,autoplaySpeed:BOSA.header_image_slider.autoplaySpeed,infinite:!0,prevArrow:a(".header-slider-prev"),nextArrow:a(".header-slider-next"),rows:0,appendDots:a(".header-slider-dots")}),a(".header-image-slider").attr("dir","ltr"),a("#primary-menu").slicknav({duration:500,closedSymbol:'<i class="fa fa-plus"></i>',openedSymbol:'<i class="fa fa-minus"></i>',appendTo:".mobile-menu-container",allowParentLinks:!0,nestedParentLinks:!1,label:BOSA.responsive_header_menu_text,closeOnClick:!0}),jQuery(".slicknav_menu .slicknav_nav").on("focusout",function(){var a=jQuery(this);setTimeout(function(){a.find(":focus").length||jQuery(".slicknav_open").trigger("click")},0)}),a(".site-header").hasClass("header-two")&&a(".home .section-banner .banner-content").css("marginTop",$stickymastheadHeight),a(".main-slider").slick({dots:!0,arrows:!0,adaptiveHeight:!1,fade:BOSA.main_slider.fade,speed:parseInt(BOSA.main_slider.fadeControl),cssEase:"linear",autoplay:BOSA.main_slider.autoplay,autoplaySpeed:BOSA.main_slider.autoplaySpeed,infinite:!0,prevArrow:a(".main-slider-prev"),nextArrow:a(".main-slider-next"),rows:0,appendDots:a(".main-slider-dots")}),a(".main-slider").attr("dir","ltr"),a(".highlight-post-slider").slick({arrows:!0,dots:!0,slidesToShow:BOSA.home_highlight_posts.slidesToShow,slidesToScroll:1,adaptiveHeight:!1,autoplay:BOSA.home_highlight_posts.autoplay,autoplaySpeed:BOSA.home_highlight_posts.autoplaySpeed,infinite:!1,rows:0,prevArrow:a(".highlight-posts-prev"),nextArrow:a(".highlight-posts-next"),appendDots:a(".highlight-posts-dots"),responsive:[{breakpoint:1023,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),a(".highlight-post-slider").attr("dir","ltr"),BOSA.sticky_sidebar&&a(".content-area, .left-sidebar, .right-sidebar").theiaStickySidebar({additionalMarginTop:30}),jQuery(document).on("click","#back-to-top a",function(){return a("html, body").animate({scrollTop:0},800),!1})}),jQuery(window).on("resize",function(){b(),d(),e()}),jQuery(window).on("load",function(){a("#site-preloader").fadeOut(500),1==BOSA.enable_scroll_top&&a(window).scrollTop()>200?a("#back-to-top").fadeIn(200):a("#back-to-top").fadeOut(200),jQuery(".masonry-wrapper").length>0&&($grid=jQuery(".masonry-wrapper").masonry({itemSelector:".grid-post",isAnimated:!0})),infinite_count=0,a(document.body).on("post-load",function(){infinite_count+=1;var b="#infinite-view-"+infinite_count;a(b).hide(),a(a(b+" .grid-post")).each(function(){$items=a(this),$grid.append($items).masonry("appended",$items)}),setTimeout(function(){$grid.masonry("layout")},500)})}),jQuery(window).on("scroll",function(){d(),0==BOSA.disable_scroll_top&&a(window).scrollTop()>200?a("#back-to-top").fadeIn(200):a("#back-to-top").fadeOut(200)})}(jQuery);