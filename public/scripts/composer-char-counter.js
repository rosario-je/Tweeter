$(document).ready(function () {
  // Select the textarea using its ID
  $('#tweet-text').on('input', function () {
    let maxLength = 140;
    let currentLength = $(this).val().length;
    let remaining = maxLength - currentLength;

    if (currentLength === 1) {
      console.log("TEST")
      $('#error-message').slideUp();
    }

    //Check the number of characters left
    $('.counter').text(remaining);
    if (remaining < 15) {
      //Add or remove a class to the counter class to allow conditional CSS Styling
      $('.counter').addClass('counter-red');
    } else {
      $('.counter').removeClass('counter-red');
    }
  });
});