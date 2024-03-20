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