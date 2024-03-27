# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository serves as the starter code for the Tweeter project. It is designed to help students practice their HTML, CSS, JS, jQuery, AJAX, Node, and Express skills.

## Description
Tweeter Clone is a simplified version of the popular social media platform Twitter. It allows users to post short messages (tweets) of up to 140 characters in length and view tweets posted by other users.

This project demonstrates the use of HTML, CSS, JavaScript (including jQuery), and AJAX for building a dynamic web application. It includes both client-side and server-side components to handle user interactions, tweet submission, and retrieval.

## Features
- Users can compose new tweets and submit them.
- Tweet validation ensures that tweets are within the character limit and not empty.
- Real-time character counter updates as the user types in the tweet composer.
- Display of tweets in reverse chronological order, with the newest tweets appearing at the top.
- Interactive features for liking and retweeting tweets.
- Responsive design for optimal viewing on various devices.

## Technologies Used
- HTML
- CSS
- SASS
- JavaScript
- jQuery
- AJAX
- Node.js (for server-side functionality)
- Express.js (for routing)

## Project Structure
- `index.html`: Main HTML file containing the structure of the web page.
- `styles/`: Directory containing CSS files for styling the application.
  - `main.css`: Contains the main styles for the application.
- `sass/`: Directory containing SCSS files for improved styling.
  - `variables.scss`: Contains variables for consistent styling across the application.
- `scripts/`: Directory containing JavaScript files for client-side functionality.
  - `client.js`: Contains client-side logic for handling tweet submission, rendering tweets, and interacting with the server.
  - `composer-char-counter.js`: Provides functionality for updating the character counter in the tweet composer.
  - `helpers.js`: Contains helper functions used throughout the application.
- `server.js` (or equivalent): Server-side JavaScript file responsible for handling HTTP requests, managing data, and serving static files.
- `package.json`: Configuration file for Node.js dependencies and project metadata.

## Setup Instructions
1. Clone the repository to your local machine.
2. Install Node.js if not already installed.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install project dependencies.
5. Start the server by running `node server.js`.
6. Open a web browser and navigate to `http://localhost:PORT` (replace `PORT` with the port number specified in your server configuration).

## Usage
- Access the application through a web browser.
- Compose new tweets using the tweet composer at the top of the page.
- View tweets posted by other users in the tweet feed.


## Acknowledgements
- Thanks to [FontAwesome](https://fontawesome.com/) for providing the icons used in the project.
- Thanks to [Timeago.js](https://timeago.org/) for providing the library used for displaying relative timestamps.

## Author
Jose Eduardo Payamps

