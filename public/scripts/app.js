/* eslint no-undef: "error" */
/* eslint-env browser */
/* eslint-env jquery */

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// fake tweet data until databases are properly implemented
const data = [
  {
    user: {
      name: 'Newton',
      avatars: {
        small: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
        regular: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
        large: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png',
      },
      handle: '@SirIsaac',
    },
    content: {
      text: 'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: 'Descartes',
      avatars: {
        small: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png',
        regular: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png',
        large: 'https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png',
      },
      handle: '@rd',
    },
    content: {
      text: 'Je pense , donc je suis',
    },
    created_at: 1461113959088,
  },
  {
    user: {
      name: 'Johann von Goethe',
      avatars: {
        small: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png',
        regular: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png',
        large: 'https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png',
      },
      handle: '@johann49',
    },
    content: {
      text: 'Es ist nichts schrecklicher als eine tätige Unwissenheit.',
    },
    created_at: 1461113796368,
  },
];


$(document).ready(() => {
  const createTweetElement = function createTweetElement(tweetData) {
    const $tweet = $('<article>').addClass('tweet');

    // Alright, now lets append everything to the tweet!
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

  renderTweets(data);
});
