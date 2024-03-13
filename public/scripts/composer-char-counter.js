$(document).ready(function() {
  // Select the textarea using its ID
  $('#tweet-text').on('input', function() { 
    let maxLength = 140;
    let currentLength = $(this).val().length;
    let remaining = maxLength - currentLength;

    $('.counter').text(remaining); 
  }); 
});