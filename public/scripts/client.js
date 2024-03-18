/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// const $tweet = $(`<article class="tweet">Hello world</article>`);

$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
  /*-------------------Function to create each tweet article-------------------*/
  
  const createTweetElement = (tweet) => {
    const {user: { name, handle }, content:{ text }, created_at } = tweet
  
    let $tweet = $(`
      <article class="tweet">
          <header>
            <span>
              <i class="fa-solid fa-user"></i>
              <h3>${name}</h3>
            </span>
            <h3>${handle}</h3>
          </header>
          <section class="tweet-text">${text}</section>
          <footer>
            <span>${created_at}</span>
            <div class="icons">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </footer>
        </article>
    `)
    return $tweet;
  }
  
  const renderTweets = (tweets) =>{
    for (const tweet of tweets){
      const $tweet = createTweetElement(tweet);
      $('.tweet-section').prepend($tweet); 
    }
  }
  renderTweets(data);
});

/* -----------------------DATABASE-----------------------*/

