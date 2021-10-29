# Tomato Tweet Machine

The core feature is a web-based UI that helps users stay on-message when crafting tweets about tomatoes. Users type in a text box, and when they hit the "tweetify" button, some processing happens and a jazzed-up tweet appears in a second text box. The user then typically copies the text into Twitter and gets amazing engagement numbers.

[Demo](tomato-tweet-machine.netlify.app)

## Requirements

- [x] It should not be possible to type in the output text box.
- [x] It should be possible to see an entire tweet in both text boxes without having to manually resize it.
- [x] The "tweetify" button should be removed. Instead, the output text should update as the user is typing.
- [x] There should be a randomised delay between input and output, so the system would appear to be "doing more" (client's words). The delay time should vary between 500 ms and 2500 ms.
- [x] When the user's input text is already on-message (no hashtag is added), its length should still be truncated to fit in a tweet. Make sure not to cut off the hashtag!
- [x] The Association is trying to expand its international reach; The tweetifier should accept #Tomate (French), #Pomodoro (Italian), #Tomaat (Dutch) and #Pomidor (Polish) as additional valid hashtags - and not add #Tomato after them.
- [x] 280-character, multilingual, and URL-containing tweets should be supported as they are on Twitter.com. (NOTE: The maximum length of a tweet changed in 2017, but the PO only got the budget to adapt their system recently.)
- [x] In addition to the aforementioned international hashtags being accepted, the client would also like us to detect the language of a tweet and add the most appropriate available hashtag.

## Tech Stack

- React
- Styled Components

Despite the codesandbox example provided being in pure JavaScript, I decided to build my solution using React. I wanted to showcase my skills but I also believe that we should be building reusable components as much as we can which allows us to:

- Keep designs consistent
- Speed up development because we don't need to re-invent the wheel
- Can build upon and create a design styleguide/component library that can be consumed across the whole application
- Easier to maintain and extend

Of course in the real-world, there are several factors that would needed to be thought of before going big bang with replatforming legacy code.

## Design

Seeing as the task involved tomatoes I tried to keep on theme by going with a pinky/red tone throughout the design. I used https://webaim.org/resources/contrastchecker/ to make sure that the colours I used were A11y friendly.

It is responsive and keyboard friendly as native HTML elements are being used.

## Multi-Lingual

I used a JavaScript library called Franc https://github.com/wooorm/franc to help with language detection so that I can add the respective hashtag. Its a very light library though I would have preferred to use Google Cloud Translate API which also has language detection.
