/*
This is an empty file with limited useability. It has no purpose except for possible future updates.
*/

// // functions that deal with fetch tweets and populating the page with them
//
// module.exports = {
//   const createTweetElement = function createTweetElement(tweetData) {
//     const $tweet = $('<article>').addClass('tweet');
//
//     // xss prevention function
//     const entityMap = {
//       '&': '&amp;',
//       '<': '&lt;',
//       '>': '&gt;',
//       '"': '&quot;',
//       "'": '&#39;',
//       '/': '&#x2F;',
//       '`': '&#x60;',
//       '=': '&#x3D;',
//     };
//
//     function escapeHtml (string) {
//       return String(string).replace(/[&<>"'`=\/]/g, function (s) {
//         return entityMap[s];
//       });
//     }
//
//     $tweet.append(`
//       <header>
//         <div>
//           <img src='${tweetData.user.avatars.small}' alt='${escapeHtml(tweetData.user.handle)}'s avatar'> <h3>${escapeHtml(tweetData.user.name)}</h3>
//         </div>
//         <div>
//           <p>${escapeHtml(tweetData.user.handle)}</p>
//         </div>
//       </header>
//
//       <div class="tweet-body solid">
//         <p>${escapeHtml(tweetData.content.text)}</p>
//       </div>
//
//       <footer>
//         <div>
//           <p class="solid">${escapeHtml(tweetData.created_at)}</p>
//         </div>
//         <div class="icons">
//           <img src="/images/glyphicons-13-heart.png" alt="heart">
//           <img src="/images/glyphicons-81-retweet.png" alt="retweet">
//           <img src="/images/glyphicons-267-flag.png" alt="flag">
//         </div>
//       </footer>
//     `);
//
//     return $tweet;
//   };
//
//   function renderTweets(tweets) {
//   // loops through tweets
//     // calls createTweetElement for each tweet
//     for (const tweetData of tweets) {
//       const newTweet = createTweetElement(tweetData);
//       // takes return value and appends it to the tweets container
//       $('#tweets-container').prepend(newTweet);
//     }
//   }
//
//   function loadTweets() {
//     $.ajax('tweets', { method: 'GET' })
//       .then((tweets) => {
//         renderTweets(tweets);
//       });
//   }
//
//   loadTweets();
//
//   const tweetBlur = function tweetBlur() {
//     console.log('blur');
//   }
//
//
//
//   const $tweetForm = $('.new-tweet form');
//   $tweetForm.on('submit', tweetSubmit);
//
//   const $tweetField = $('.new-tweet form textarea');
//   $tweetField.on('blur', tweetBlur);
// }
