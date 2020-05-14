setInterval(() => {
  tweets = Array.from(document.getElementsByClassName('tweet-text'))
  console.log(tweets)
  tweets.forEach((tweet) => {
    console.log('あくあくんかわいい')
    if (tweet.innerHTML.includes('地雷')) {
      console.log('あくあくんかわいい')
      tweet.innerHTML = 'あくあくんかわいい'
    }
  })
}, 5000)
