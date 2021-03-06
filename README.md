# Tweeter Project v1.0.0

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Screenshots

!['The Tweeter Application'](https://github.com/MaxHalleran/tweeter/blob/master/docs/better_definition.png?raw=true)

!['Tweeter main page'](https://github.com/MaxHalleran/tweeter/blob/master/docs/front_page.png?raw=true)

!['A tweet'](https://github.com/MaxHalleran/tweeter/blob/master/docs/single_tweet.png?raw=true)

!['The tweeting box'](https://github.com/MaxHalleran/tweeter/blob/master/docs/tweeting_form.png?raw=true)

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser 1.15 or above
- Mongodb 2.2

## Devlog

v1.0.0 - Tweeter now has full base functionality. Updates with increased capability are incoming.

v0.9.0 - Minute changes focused on polishing tweeter and reaching version 1

v0.8.0 - Tweeter now uses a database (MongoDB) to store tweets and preserve them while offline.

v0.1.1 - Tweeter compose button is ~functional. Tweets seem to be getting stuck 'in the pipe' and I will need to revisit the refetching of tweets.

v0.1.0 - Tweeter is functional, user is able to tweet, the tweet feed updates automatically on submission and input is parsed of html elements. There is a noticeable lag when submitting tweets that I believe is added on purpose by the built in submission delay function.

v0.0.2 - Initial styling is finished. Now adding a character counter to the post creator

v0.0.1 - Starting the project, first day of work

## Focus

likes - enable users to 'like tweets' and store the number of unique likes on a single tweet persistantly.
like data attribute - the like data attribute is needed to not have to update the web page from liking a tweet and to enable 'unliking'.
like id data attribute - the like button should have a unique id (the id from the database) held in a data attribute to query it from the database.
like events - the click event has to be bound to each like button after it's created, currently this is the biggest hurdle. Creating a listener that activates whenever a like button within the tweet container is clicked is a good way around this.
like db - likes should send a put request to the server which stores either a 'like' or a 'dislike' in the tweets database entry. These likes will be a collection of the ids of the users that liked them and a second request will remove their id from the list. Users cannot like their own tweets, their id will be stored as position 0 of the array that holds the liked users and cannot be removed. Total likes will be calculated from the length of the array. This feature will only be added when users are added.


names - names are pushed to the next line when they are too long
