# Tweeter Project

Tweeter is a simple, single-page Twitter clone that utilises HTML, CSS, JS, jQuery and AJAX (front-end) as well as Node, Express and MongoDB (back-end).

 Currently it allows users to type out a message, or "tweet", between 1 and 140 characters and "post" it to the same page. Each tweet is added in a descending order, where the most recent tweet appears at the top of the page,with a time stamp in the bottom left corner to indicate how long ago the tweet was created. 

!["Main Features Screenshot"](https://github.com/Mochirii/tweeter/blob/master/docs/Tweeter_main.jpg?raw=true)



## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Node 5.10.x or above
- body-parser 
- chance
- express
- md5
- moment
- mongodb

## Features
 
 1. A fixed navigation bar containing a compose button. This button shows/hides the Compose Tweet box
 2. Compose Tweet box for writing new tweets. Once the submit button has been pressed, the page refreshes automatically and loads the new tweet.
 3. Centred column containing all of the tweets that have already been posted. 
 4. Tweets have an opacity of 0.5 and appear fully opaque when hovered over individually. "Flag", "Re-tweet" and "Like" buttons appear in the lower right corner upon hover as well.
 5. Character Counter in the lower right corner indicates how many characters a user has remaining. Once the characted limit has been reached, the counter colour will change from black to red. 
 6. Error message alerts indicate if you have tried to post an empty tweet or are trying to post a tweet longer than 140 characters long, and will not allow the tweet to be posted.

## Future Changes

1. Login/Registration feature.
2. Full functionality when it comes to the "Like" button.
3. Implementation of SASS