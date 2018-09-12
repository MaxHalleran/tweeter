/* eslint no-undef: "error" */
/* eslint-env browser */
/* eslint-env jquery */

const numberCount = 140;

const numberTracker = function numberTracker(textLength) {
  return numberCount - textLength;
};

$(document).ready(() => {
  $('.new-tweet form textarea').on('keyup', function keyCount() {
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

  // the second keycounting function to catch pasting messages
  $('.new-tweet form textarea').on('blur', function keyCount() {
    const counter = $('.new-tweet form span.counter');
    counter.text(numberTracker(this.value.length));
    if (numberTracker(this.value.length) < 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', '');
    }
  });
});
