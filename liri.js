require("dotenv").config();
var axios = require("axios");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var userSelection = process.argv[2];
var input = process.argv[3];


var spotifySearch = (input) => {

    spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        //   console.log(data); 

        var item = data.tracks.items[0]

        console.log("--------------------------")
        console.log(item.name);
        console.log(item.preview_url);
        // if item.preview_url == "null", display "no preview available "
        console.log(item.artists[0].name);
        console.log(item.album.name);

    }); // end spotify search


}    // end spotifySearch function

var concertSearch = (input) => {

    var queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(function(response){

        var array = response.data;

        array.forEach((item)=>{
            console.log("----------------------------");
            console.log(item.venue.name);
            console.log(item.venue.city + ", " + item.venue.country);
            console.log(item.datetime);
        })
        
    }) // end .then

} // end concertSearch

var movieSearch = (input) => {

    var queryURL = "https://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
    axios.get(queryURL).then(function(response){
        // console.log(response.data)
        var item = response.data;
        console.log("----------------------------");
        console.log(item.Title);
        console.log(item.Year);
        console.log(item.imdbRating);
        // imbd rating, rotten tomatoes rating, country, language, actors
        console.log(item.Plot);
    })

} // end movieSearch


switch (userSelection) {
    case "spotify-this-song":
        spotifySearch(input);
        break;
    case "concert-this":
        concertSearch(input);
        break;
    case "movie-this":
        movieSearch(input);
        break;
    case "do-what-it-says":
        // fileSearch(input);
        break;
}