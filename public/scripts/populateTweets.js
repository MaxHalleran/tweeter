// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
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
};

$(document).ready(() => {

  const createTweetElement = function createTweetElement(tweetData) {

    //This is the testing field where we run tests. Yeah. It's fieldy
    console.log(tweetData);
    console.log(tweetData.user.name);

    var $tweet = $("<article>").addClass("tweet");

    //Alright, now lets append everything to the tweet!
    $tweet.append(`
      <header>
        <div>
          <img src='${tweetData.user.avatars.small}' alt='${tweetData.user.handle}\'s avatar'> <h3>${tweetData.user.name}</h3>
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

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
