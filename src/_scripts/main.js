'use strict';

window.$ = window.jQuery = require('jquery');
var slider = require('./slider');
var menu = require('./menu');

$(function () {
  slider();
  menu.activate();
});
