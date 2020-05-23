setInterval(() => {
  tweets = Array.from(document.getElementsByClassName('tweet-text'));
  tweets.forEach((tweet) => {
    if (tweet.innerHTML.includes('地雷')) {
      tweet.innerHTML = 'あくあくんかわいい';
    }
  })
}, 5000)
