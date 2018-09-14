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

v0.9.0 - Minute changes focused on polishing tweeter and reaching version 1

v0.8.0 - Tweeter now uses a database (MongoDB) to store tweets and preserve them while offline.

v0.1.1 - Tweeter compose button is ~functional. Tweets seem to be getting stuck 'in the pipe' and I will need to revisit the refetching of tweets.

v0.1.0 - Tweeter is functional, user is able to tweet, the tweet feed updates automatically on submission and input is parsed of html elements. There is a noticeable lag when submitting tweets that I believe is added on purpose by the built in submission delay function.

v0.0.2 - Initial styling is finished. Now adding a character counter to the post creator

v0.0.1 - Starting the project, first day of work

## Focus

-add date tracking functionality
-html error needs to disappear when compose button is pressed

## Dates

-So we are creating our own datestamping function that is going to take the current date, minus the date created at and then run the result through a function that will sort the time into time segments ie seconds, minutes, hours, days, months and years ago.
And anything under 5 minutes will be represented by ' a few moments ago'. Anything under a minute will be represented by 'a few seconds ago'.
