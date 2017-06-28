window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

function activate() {

  $('.navbar-nav a, .arrow-down').on('click', function (e) {
    e.preventDefault();
    expandToggle();

    var href = $(this).attr("href");
    var offsetTop = href === "#" ? 0 : $(href).offset().top;

    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 300);
  });
}

function setActiveItem(href) {
  var item = $('[href="#' + href + '"]');

  if (!!item && !!item.length) {
    $('.navbar-nav li').removeClass('active');
    item.parent().addClass('active');
  }
}

function setBackground(scrollTop) {
  var bg = $('.navbar-bg');

  if (!!scrollTop) {
    bg.addClass('show');
  } else {
    bg.removeClass('show');
  }
}

function expandToggle() {
  if ($('.navbar-collapse.collapse').hasClass('in')) {
    $('.navbar-toggle').click();
  }
}

module.exports = {
  activate: activate,
  setActiveItem: setActiveItem,
  setBackground: setBackground
};
