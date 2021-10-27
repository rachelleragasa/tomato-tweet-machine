function addHashtag(tweet) {
    const regex = /#Tomato/i;

    // case insensitive
    if (!regex.test(tweet)) {
      if (tweet.length >= 132) {
        tweet = tweet.substr(0, 132);
      }
      tweet += " #Tomato";
    } else {
        if (tweet.length >= 132) {
            const hashTagIndex = tweet.search(regex);
            tweet = tweet.substr(0, 132) + tweet.substr(hashTagIndex);
        }
    }
    return tweet;
  }

  export function processTweet(tweet) {
    return addHashtag(tweet);
  }
