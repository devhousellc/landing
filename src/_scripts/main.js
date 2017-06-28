'use strict';

window.$ = window.jQuery = require('jquery');
var slider = require('./slider');
var menu = require('./menu');
var firstSlideAnimation = require('./animation');
var translation = require('./translation');

$(function () {
  translation();
  firstSlideAnimation();
  slider();
  menu.activate();
});
