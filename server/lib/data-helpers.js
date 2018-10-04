'use strict';

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection('tweets').insertOne(newTweet);
      callback(null, true);
    },

    getTweets: function(callback) {
      const sortNewestFirst = (a, b) => a.created_at - b.created_at;
      db.collection('tweets').find().toArray(callback);
    },

    // update tweets function, mainly used for changing the value of 'likes' that a tweet has.
    // The function is defined, now we need to take the update value (which is going to be a boolean value) and apply that to increment or decrement the likes value.
    // updateTweets: function(id, update, callback) {
    //   if (db.collection('tweets').findOne(id))
    //   db.colleq('tweets').updateOne('id': id, likes: ());
    // }
  };
};
