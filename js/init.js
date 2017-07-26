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