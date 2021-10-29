import { franc } from "franc"

const detectLanguage = (text) => franc(text)

const addHashtag = (tweet) => {
    let regex;
    let prefix;

    const language = detectLanguage(tweet);

    switch(language){
        case 'fra':
            regex = /#Tomate/i;
            prefix = " #Tomate";
            break;
        case 'ita':
            regex = /#Pomodoro/i;
            prefix = " #Pomodoro";
            break;
        case 'pol':
            regex = /#Pomidor/i;
            prefix = " #Pomidor";
            break;
        case 'nld':
            regex = /#Pomidor/i;
            prefix = " #Pomidor";
            break;
        default:
            regex = /#Tomato/i;
            prefix = " #Tomato";
    }

    if (!regex.test(tweet)) {
      if (tweet.length >= 280) {
        tweet = tweet.substr(0, 280);
      }
      tweet += prefix;
    } else {
        if (tweet.length >= 280) {
            const hashTagIndex = tweet.search(regex);
            tweet = tweet.substr(0, 280) + tweet.substr(hashTagIndex);
        }
    }
    return tweet;
  }

  export const processTweet = (tweet) => {
    return addHashtag(tweet);
  }
