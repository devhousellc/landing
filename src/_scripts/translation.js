window.$ = window.jQuery = require('jquery');
require('jquery-localize');

function translation() {
  $("[data-localize]").localize("app", {
    pathPrefix: "./lang",
    language: 'en-GB'
  });
}

module.exports = translation;
