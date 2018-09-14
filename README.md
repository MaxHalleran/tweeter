# Tweeter Project v0.0.1

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above

## Devlog

v0.8.0 - Tweeter now uses a database (MongoDB) to store tweets and preserve them while offline.

v0.1.1 - Tweeter compose button is ~functional. Tweets seem to be getting stuck 'in the pipe' and I will need to revisit the refetching of tweets.

v0.1.0 - Tweeter is functional, user is able to tweet, the tweet feed updates automatically on submission and input is parsed of html elements. There is a noticeable lag when submitting tweets that I believe is added on purpose by the built in submission delay function.

v0.0.2 - Initial styling is finished. Now adding a character counter to the post creator

v0.0.1 - Starting the project, first day of work

## Focus

-close db at end of process
-add date tracking functionality
-when tweet is submitted, the entire tweet list is fetched and added


## Dates

-So the problem is that we cant require moment on the client side. Therefore we have to pass either the function that we need to where we need to parse the date or pass the date through the server before sending it.
