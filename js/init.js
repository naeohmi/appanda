//jQuery plugin for pushpin from Materialize 
$('.pushpin-demo-nav').each(function () {
  var $this = $(this);
  var $target = $('#' + $(this).attr('data-target'));
  $this.pushpin({
    top: $target.offset().top,
    bottom: $target.offset().top + $target.outerHeight() - $this.height()
  });
});

$(document).ready(function () {
  $('.target').pushpin({
    top: 0,
    bottom: 1000,
    offset: 0
  });
});

// //from: https://codepen.io/msg4matt/pen/rgobF
// $(document).ready(function($) {
//   // Init Flipping Text
// 		  setInterval(function(){
// 			  $('.flip-container').toggleClass('hover');
// 		  }, 4000);
// });