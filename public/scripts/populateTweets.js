/* eslint no-undef: "error" */
/* eslint-env browser */
/* eslint-env jquery */

$(document).ready(function populateTweets() {
  const createTweetElement = function createTweetElement(tweetData) {
    const $tweet = $('<article>').addClass('tweet');

    $tweet.append(`
      <header>
        <div>
          <img src='${tweetData.user.avatars.small}' alt='${tweetData.user.handle}'s avatar'> <h3>${tweetData.user.name}</h3>
        </div>
        <div>
          <p>${tweetData.user.handle}</p>
        </div>
      </header>

      <div class="tweet-body solid">
        <p>${tweetData.content.text}</p>
      </div>

      <footer>
        <div>
          <p class="solid">${tweetData.created_at}</p>
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
      $('#tweets-container').append(newTweet);
    }
  }

  renderTweets('data');
});

modules.export = populateTweets;
