// Functions for jQuery Lightbox

jQuery(document).ready(function ($) {

	'use strict';
    
  console.log( "cowabunga!" );

  // Light Gallery
  $(".lightbox-gallery").lightGallery({
    selector: '.image'
  });

  // Percentage Scroller
  $(window).scroll(function(e){
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var scrollPercent = (scrollTop) / (docHeight - winHeight);
    var percentScroller = Math.round(scrollPercent*100);
      $('#percentScroller>span').html(percentScroller);
      repositionLabel();
  });
  $('#percentScroller').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

});