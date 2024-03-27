

/* -----------------------Tweet Checker Function-----------------------*/
function isTweetValid(tweetText) {
  const textLength = tweetText.trim().length;

  if (textLength === 0) {
    $('#error-message').text('Tweet cannot be empty.').slideDown();
    return false;
  }

  if (textLength > 140) {
    $('#error-message').text('Tweet exceeds maximum length of 140 characters.').slideDown();
    return false;
  }
  $('#error-message').slideUp();
  return true;
}

/* -----------------------Error Display Function-----------------------*/
function displayErrorMessage(message) {
  return $('#error-message').text(message).slideDown();
}