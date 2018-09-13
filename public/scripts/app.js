/* eslint no-undef: "error" */
/* eslint-env browser */
/* eslint-env jquery */

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

  function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    for (const tweetData of tweets) {
      const newTweet = createTweetElement(tweetData);
      // takes return value and appends it to the tweets container
      $('#tweets-container').prepend(newTweet);
    }
  }

  function loadTweets() {
    $.ajax('tweets', { method: 'GET' })
      .then((tweets) => {
        renderTweets(tweets);
      });
  }

  loadTweets();

  const tweetSubmit = function tweetSubmit(event) {
    event.preventDefault();
    const $tweetData = $('textarea', this).serialize();
    const $tweetDataText = $('textarea', this).val();

    if ($tweetDataText.length < 1) {
      alert('Sorry, your message is empty');
      return;
    } if ($tweetDataText.length > 140) {
      alert('your message is too long!');
      return;
    }

    $.ajax('tweets', {
      method: 'POST',
      data: $tweetData,
    })
      .then(() => {
        $('textarea', this).val('');
      });
    loadTweets();
  };
  const $tweetForm = $('.new-tweet form');
  $tweetForm.on('submit', tweetSubmit);

  const toggleButton = function toggleButton(event) {
    console.log('clicked');
    $('.new-tweet').toggleClass('toggle');
  };

  const $composeButton = $('#compose');
  $composeButton.on('click', toggleButton);
});
