function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

setInterval(() => {
  tweets = Array.from(document.getElementsByClassName('tweet-text'));
  tweets.forEach((tweet) => {
    blackWords.forEach((word) => {
      if (tweet.innerHTML.includes(word)) {
        index = getRandomInt(happyTweets.length);
        tweet.innerHTML = happyTweets[index];
      }
    })
  })
}, 5000)
