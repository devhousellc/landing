window.$ = window.jQuery = require('jquery');
var menu = require('./menu');

function slider() {
  var displayOffset = 500;

  var slides = $('.image-backstretch .image-slide');
  var slidePlacements = $('.slide-placement');

  init();

  $(document).on('scroll', function () {
    init();
  });

  function init() {
    var scrollTop = $(document).scrollTop();

    var current = $.map(slidePlacements, function (slide) {
      var slideOffset = $(slide).offset().top - displayOffset;

      if(slideOffset < scrollTop) {
        return slide;
      }
    });

    menu.scrollJob(scrollTop);

    current = current[current.length - 1];

    if (current && current.id) {
      slides.removeClass('active');
      $('[data-slide-link="' + current.id + '"]').addClass('active');
      menu.setActiveItem($(current).attr('active-menu-item'));
    }
  }
}

module.exports = slider;
