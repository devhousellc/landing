window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

function activate() {

  $('.navbar-nav a').on('click', function (e) {
    e.preventDefault();

    var href = $(this).attr("href");
    var offsetTop = href === "#" ? 0 : $(href).offset().top;

    expandToggle();

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

function expandToggle() {
  $('.navbar-toggle').click();
}

module.exports = {activate: activate, setActiveItem: setActiveItem};
