require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// console.log(spotify);


spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  
  console.log(data); 
  });
  


// const spotifyUrl = "https://api.spotify.com/v1/search?q=roadhouse%20blues"

// axios.get(spotifyUrl).then(function(response){
//     console.log(response);
// });