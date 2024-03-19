/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// const $tweet = $(`<article class="tweet">Hello world</article>`);

$(document).ready(function () {

  /* -----------------------DATABASE-----------------------*/
  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd"
  //     },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]
/* -----------------------Tweet Checker Function-----------------------*/
  function isTweetValid(tweetText) {
    const textLength = tweetText.trim().length;
  
    if (textLength === 0) {
      alert("Please enter a tweet");
      return false;
    }
  
    if (textLength > 140) {
      alert("Only less than 140 characters allowed");
      return false;
    }
  
    return true;
  }


  /*-------------------Function to create each tweet article-------------------*/
  const createTweetElement = (tweet) => {
    const { user: { name, handle }, content: { text }, created_at } = tweet
    const timeAgoString = timeago.format(created_at);


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
          <div class="timeago">
            ${timeAgoString}
          </div>
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

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweet-section').prepend($tweet);
    }
  }


  /* ----------------Form's Post request---------------- */
  $('.new-tweet-form').on("submit", function ( event ) {
    //Prevent regular form submission from happening
    event.preventDefault();
    const inputText = $('#tweet-text');
    
    if (!isTweetValid(inputText.val())) {
      return;
    }

    let formData = $( this ).serialize();
    
    //POST request sending serialized text as data
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: formData,
      success: (response) => {
        console.log(response);
        loadTweets();
      }
    });
    //Clear input from text area after submit
    $('#tweet-text').val('');
  })
  
  /*-------------------Get request function-------------------*/
  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      success: (res) => {
        renderTweets(res)
      },
    });
  }
  loadTweets()



});



