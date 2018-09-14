/* eslint no-undef: "error" */
/* eslint-env browser */
/* eslint-env jquery */

// This sets event listeners and handlers throughout the page
$(document).ready(() => {
  const myMoment = function myMoment(time) {
    let returnTime = (Date.now() - time) / 1000;
    const timeStamp = {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    }

    while (returnTime > 31104000) {
      timeStamp.year += 1;
      returnTime -= 31104000;
    }

    while (returnTime > 2592000) {
      timeStamp.month += 1;
      returnTime -= 2592000;
    }

    while (returnTime > 86400) {
      timeStamp.day += 1;
      returnTime -= 86400;
    }

    while (returnTime > 3600) {
      timeStamp.hour += 1;
      returnTime -= 3600;
    }

    while (returnTime > 60) {
      timeStamp.minute += 1;
      returnTime -= 60;
    }

    while (returnTime > 1) {
      timeStamp.second += 1;
      returnTime -= 1;
    }

    return timeStamp;
  }

  const timeStamper = function timeStamper(date) {
    const moment = myMoment(date);
    if (moment.year) {
      return `${ moment.year } year${ moment.year === 1 ? '' : 's' } ago`;
    } else if (moment.month) {
      return `${ moment.month } month${ moment.month === 1 ? '' : 's' } ago`;
    } else if (moment.day) {
      return `${ moment.day } day${ moment.day === 1 ? '' : 's' } ago`;
    } else if (moment.hour) {
      return `${ moment.hour } hour${ moment.hour === 1 ? '' : 's' } ago`;
    } else if (moment.minute) {
      return `${ moment.minute } minute${ moment.minute === 1 ? '' : 's' } ago`;
    } else {
      return 'a few seconds ago';
    }
  };

  const createTweetElement = function createTweetElement(tweetData) {
    const $tweet = $('<article>').addClass('tweet');

    // xss prevention function
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;',
    };

    function escapeHtml (string) {
      return String(string).replace(/[&<>"'`=\/]/g, function (s) {
        return entityMap[s];
      });
    }

    $tweet.append(`
      <header>
        <div>
          <img src='${tweetData.user.avatars.small}' alt='${escapeHtml(tweetData.user.handle)}'s avatar'> <h3>${escapeHtml(tweetData.user.name)}</h3>
        </div>
        <div>
          <p>${escapeHtml(tweetData.user.handle)}</p>
        </div>
      </header>

      <div class="tweet-body solid">
        <p>${escapeHtml(tweetData.content.text)}</p>
      </div>

      <footer>
        <div>
          <p class="solid">${timeStamper(tweetData.created_at)}</p>
        </div>
        <div class="icons">
          <img src="/images/glyphicons-13-heart.png" alt="heart">
          <img src="/images/glyphicons-81-retweet.png" alt="retweet">
          <img src="/images/glyphicons-267-flag.png" alt="flag">
        </div>
      </footer>
    `);

    return $tweet;
  };

  function renderTweets(tweets, num) {
    if (num !== undefined) {
      const newTweet = createTweetElement(tweets[tweets.length - 1]);
      $('#tweets-container').prepend(newTweet);
    } else {
      for (const tweetData of tweets) {
        const newTweet = createTweetElement(tweetData);
          $('#tweets-container').prepend(newTweet);
      }
    }
  }

  function loadTweets(num) {
    $.ajax('tweets', { method: 'GET' })
      .then((tweets) => {
        if (num === undefined) {
          renderTweets(tweets);
        } else {
          renderTweets(tweets, num);
        }
      });
  }

  loadTweets();

  const tweetSubmit = function tweetSubmit(event) {
    event.preventDefault();

    $('.error-container-p').text('');
    $('error-container').addClass('error-false');

    const $tweetData = $('textarea', this).serialize();
    const $tweetDataText = $('textarea', this).val();

    if ($tweetDataText.length < 1) {
      $('.error-container').removeClass('error-false');
      $('.error-container-p').append('Your tweet was too short');
      return;
    } if ($tweetDataText.length > 140) {
      $('.error-container-p').removeClass('error-false');
      $('.error-container-p').append('Your tweet was too long');
      return;
    }

    $.ajax('tweets', {
      method: 'POST',
      data: $tweetData,
    })
      .then(() => {
        $('textarea', this).val('');
        $('.counter').val(140);
        loadTweets(0);
      });
  };

  const $tweetForm = $('.new-tweet form');
  $tweetForm.on('submit', tweetSubmit);

  const toggleButton = function toggleButton(event) {
    $('.error-container').addClass('error-false');
    $('section.new-tweet').slideToggle('slow', function() {
    $('.new-tweet textarea').focus();
    });
  };

  const $composeButton = $('#compose');
  $composeButton.on('click', toggleButton);
});
