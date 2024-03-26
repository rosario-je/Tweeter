/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  /*-------------------Function to create each tweet article-------------------*/
  //Step 3 - Transform each tweet provided in renderTweets into an article.
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

    $tweet.find('.tweet-text').text(text);
    return $tweet;
  }
/*-------------------Tweet Render Function-------------------*/
//Step 2 - Take data from loadTweets function and display each tweet
  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweet-section').prepend($tweet);
    }
  }

  /* ----------------Form's Post request---------------- */
  $('.new-tweet-form').on("submit", function (event) {
    //Prevent regular form submission from happening
    event.preventDefault();
    const inputText = $('#tweet-text');
    
    if (!isTweetValid(inputText.val())) {
      return;
    }

    
    let formData = $(this).serialize();

    //POST request sending serialized text as data
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: formData,
      success: (response) => {
        console.log(response);
        loadTweets()
        //Clear input from text area after submit
        $('#tweet-text').val('');
      }
    });

  })

  /*-------------------Get request function-------------------*/
  //Step 1 - Fetch the data from /tweets
  const loadTweets = () => {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      success: (res) => {
        //Prevent duplicate render of tweets
        $('.tweet-section').empty();
        renderTweets(res)
      },
    });
  }
  loadTweets()

});



