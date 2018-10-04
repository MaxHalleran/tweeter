'use strict';

const express = require('express');

const tweetsRoutes = express.Router();
const userHelper = require('../lib/util/user-helper');

module.exports = function (DataHelpers) {
  tweetsRoutes.get('/', (req, res) => {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

  tweetsRoutes.post('/', (req, res) => {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body' });
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text,
      },
      created_at: Date.now(),
    };

    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  tweetsRoutes.put('/', (req, res) => {
    // this is the 'liking' Route
    console.log('liked!');
    console.log('Yeah, we know it doesn\'t mean much if no one can see it');
  });

  return tweetsRoutes;
};
