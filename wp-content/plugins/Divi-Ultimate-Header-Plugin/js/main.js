!function(e){e(document).ready(function(){function n(){e(".free-search-container").hasClass("et_pb_is_animating")||(e(".free-du-plugin-header .et_pb_fullwidth_menu").removeClass("free-menu-hidden et_pb_no_animation").addClass("free-menu-visible"),e(".free-search-container").removeClass("free-search-visible et_pb_no_animation").addClass("free-search-hidden et_pb_is_animating"),setTimeout(function(){e(".free-du-plugin-header .et_pb_fullwidth_menu").addClass("et_pb_no_animation"),e(".free-search-container").addClass("et_pb_no_animation").removeClass("et_pb_is_animating")},450))}e(".free-search-icon-link").click(function(n){n.preventDefault();var i=e(".free-search-container");i.hasClass("et_pb_is_animating")||(e(".free-du-plugin-header .et_pb_fullwidth_menu").removeClass("free-menu-visible et_pb_no_animation").addClass("free-menu-hidden"),i.removeClass("free-search-hidden et_pb_no_animation").addClass("free-search-visible et_pb_is_animating"),setTimeout(function(){e(".free-du-plugin-header .et_pb_fullwidth_menu").addClass("et_pb_no_animation"),i.addClass("et_pb_no_animation").removeClass("et_pb_is_animating")},450),i.find("input").focus())}),e(".free-search-close").click(function(){n()}),e(document).mouseup(function(i){var a=e(".free-du-plugin-header .et_pb_fullwidth_menu");e(".free-du-plugin-header .et_pb_fullwidth_menu").hasClass("free-menu-hidden")&&(a.is(i.target)||0!==a.has(i.target).length||n())})}),window.et_pb_smooth_scroll=function(n,i,a,t){var s=e(window).width();e("body").hasClass("et_fixed_nav")&&s>980?$menu_offset=e("#top-header").outerHeight()+e("#main-header").outerHeight()-1+e("#free-sticky-wrapper").outerHeight():$menu_offset=-1,e("#wpadminbar").length&&s>600&&($menu_offset+=e("#wpadminbar").outerHeight()),$scroll_position=i?0:n.offset().top-$menu_offset,void 0===t&&(t="swing"),e("html, body").animate({scrollTop:$scroll_position},a,t)}}(jQuery);