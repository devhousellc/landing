'use strict';

window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

$(function () {
  var displayOffset = 300;
  var slide2 = $('.slide2');
  var slide2Top = slide2.offset().top - displayOffset;

  $(document).on('scroll', function () {
    if ($(document).scrollTop() > slide2Top) {
      $('.image-backstretch > div').removeClass('active');
      $('.image-slide-2').addClass('active');
    } else {
      $('.image-backstretch > div').removeClass('active');
      $('.image-slide-1').addClass('active');
    }
  });
});
