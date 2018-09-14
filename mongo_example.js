'use strict';

// const MongoClient = require('mongodb').MongoClient;
// const MONGODB_URI = 'mongodb://localhost:27017/tweeter';
//
// MongoClient.connect(MONGODB_URI, (err, db) => {
//   if (err) {
//     console.log(`Failed to connect: ${MONGODB_URI}`);
//     throw err;
//   }
//
//   // we now have a connection to the 'test-tweets' de
//   console.log(`Connected to mongodb: ${MONGODB_URI}`);
//
//   // this is the 'entrypoint' for a database connected application
//
//   // the fabled 'gettweets' function
//   function getTweets(callback) {
//     db.collection('tweets').find().toArray(callback);
//   }
//
//   getTweets((err, tweets) => {
//     if (err) throw err;
//
//     console.log("Logging each tweet:");
//     for (let tweet of tweets) {
//       console.log(tweet);
//     }
//   })
//
//   // lets get all the tweets from the database and place them in an array
//   // db.collection('tweets').find().toArray((err, results) => {
//   //   console.log('results array: ', results);
//   // });
//
//   // the close has been moved up a function
//   db.close();
// })
//
//


var moment = require('moment');
moment().format();

console.log(moment(1461113796368));
