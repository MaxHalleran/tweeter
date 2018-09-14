/* eslint no-undef: "error" */
/* eslint-env browser */
/* eslint-env jquery */

// This sets event listeners and handlers throughout the page
$(document).ready(() => {
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
          <p class="solid">${escapeHtml(tweetData.created_at)}</p>
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
      console.log(newTweet);
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
        console.log('hmmmm.... interesting');
        renderTweets(tweets, num);
      }
      });
  }

  loadTweets();

  const tweetSubmit = function tweetSubmit(event) {
    event.preventDefault();
    $('.error-container-p').text('');
    $('error-container').addClass('error-false');
    if ($('.error-container').hasClass('error-false')) {
    };
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
        // We need to add the tweet to the tweet field at real time. $tweetData didnt work so... we have to ajax request to get the information stored in the server and bring back the first element.
        loadTweets(0);
      });
  };

  const $tweetForm = $('.new-tweet form');
  $tweetForm.on('submit', tweetSubmit);

  const toggleButton = function toggleButton(event) {
    $('section.new-tweet').slideToggle('slow', function() {
    $('.new-tweet textarea').focus();
    });
  };

  const $composeButton = $('#compose');
  $composeButton.on('click', toggleButton);
});
