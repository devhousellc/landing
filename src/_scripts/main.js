'use strict';

window.$ = window.jQuery = require('jquery');
var slider = require('./slider');
var menu = require('./menu');
var firstSlideAnimation = require('./animation');

$(function () {
  firstSlideAnimation();
  slider();
  menu.activate();
});
