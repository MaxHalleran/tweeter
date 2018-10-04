/* eslint no-undef: "error" */
/* eslint-env browser */
/* eslint-env jquery */

const numberCount = 140;

const numberTracker = function numberTracker(textLength) {
  return numberCount - textLength;
};

$(document).ready(() => {
  $('.new-tweet form textarea').on('keyup blur', function keyCount() {
    // finding the counter on the main page
    const counter = $('.new-tweet form span.counter');

    // the first keytracker for keypresses
    counter.text(numberTracker(this.value.length));
    if (numberTracker(this.value.length) < 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', '');
    }
  });
});
