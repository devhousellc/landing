function firstSlideAnimation() {
  setTimeout(function () {
    $('.content-animation').addClass('start-animation');
  }, 500);

  setTimeout(function () {
    $('.button-animation').addClass('start-animation');
  }, 1000);
}

module.exports = firstSlideAnimation;
