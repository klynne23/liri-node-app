//****************************************//
// DECLARE VARIABLES AND REQUIRE PACKAGES //
//****************************************//

require("dotenv").config();
var Spotify = require("node-spotify-api");
var axios = require("axios");
var inquirer = require("inquirer");
var moment = require("moment");
var keys = require("./keys.js");
var fs = require("fs");



// access to the spotify api
var spotify = new Spotify(keys.spotify);

// set variables
var userSelection;
var input;




//****************************************//
// FUNCTIONS FOR EACH POSSIBLE USER INPUT //
//****************************************//

var spotifySearch = (input) => {

    // if there is no user input, set input and perform search
    if (input === "" || input == undefined) {
        input = "Head Above Water"
    }

    // search the spotify api
    spotify.search({ type: 'track', query: input }, function (err, data) {

        // if an error occurs stop the search and display the error
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // if the returned response is underfined
        if (data.tracks.items[0] == undefined) {
            console.log('\n' + "╭************************╮")
            console.log("|     SPOTIFY SEARCH     |")
            console.log("╰************************╯" + '\n')
            console.log("No Results Found"+ '\n');

        }

        else {

            // set our response data equal to item
            var item = data.tracks.items[0]


            console.log('\n' + "╭************************╮")
            console.log("|     SPOTIFY SEARCH     |")
            console.log("╰************************╯" + '\n')


            // print the artist and song name
            console.log("Artist Name: " + item.artists[0].name);
            console.log("Song Name: " + item.name);


            // check if preview_url is "null", if so, display no available preview
            if (item.preview_url === null) {
                console.log('Song Preview: No Available Preview');
            }
            else {
                console.log("Song Preview: " + item.preview_url);
            }

            // print album name
            console.log("Album Name: " + item.album.name);
            console.log("--------------------------" + '\n')

        }
    }); // end spotify search

} // end spotifySearch function

var concertSearch = (input) => {

    // console.log(input);
    if (input == undefined || input == "") {
        input = "Ariana Grande";
    }

    var queryURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(function (response) {


        if (response.data.length == 0) {

            console.log('\n' + "╭************************╮")
            console.log("|   NO UPCOMING EVENTS   |")
            console.log("╰************************╯" + '\n')

        }
        else if (response.data == '{warn=Not found}\n'){
            console.log('\n' + "╭***************************╮")
            console.log("|   NO RESULTS FOR ARTIST   |")
            console.log("╰***************************╯" + '\n')
        }

        else {
            // declare the item variable as the response
            var item = response.data[0];
            // console.log(response);

            // declare the date variable
            var date = item.datetime;
            var ticketSale = item.on_sale_datetime;

            // split the date to split up the date and time
            var cutDate = date.split("T");
            var cutTicket = ticketSale.split("T");

            // slice off the time 
            date = cutDate.slice(0, 1);
            ticketSale = cutTicket.slice(0, 1);


            console.log('\n' + "╭************************╮")
            console.log("|     CONCERT SEARCH     |")
            console.log("╰************************╯" + '\n')

            console.log("Lineup: " + item.lineup);
            console.log("Venue Name: " + item.venue.name);
            console.log("Venue Location: " + item.venue.city + ", " + item.venue.region + " (" + item.venue.country + ")");

            // use moment to format the date
            console.log("Event Date: " + moment(date[0]).format('L'));
            console.log("Tickets on Sale: " + moment(ticketSale[0]).format('L'))
            console.log("----------------------------" + '\n');

        }

    }) // end .then

} // end concertSearch

var movieSearch = (input) => {

    if (input === undefined || input == "") {
        input = "The Sandlot"
    }

    // creating the axios query url
    var queryURL = "https://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

    // making the axios request
    axios.get(queryURL).then(function (response) {

        // create a variable for the response
        var item = response.data;
        
        if (item.Response == 'False') {

            console.log('\n' + "╭************************╮")
            console.log("|      MOVIE SEARCH      |")
            console.log("╰************************╯" + '\n')

            console.log(item.Error+ '\n');
        }
        else {

            console.log('\n' + "╭************************╮")
            console.log("|      MOVIE SEARCH      |")
            console.log("╰************************╯" + '\n')
            
            console.log("Title: " + item.Title);
            console.log("Release Year: " + item.Year);
            console.log("IMDB Rating: " + item.imdbRating);
            console.log("Rotten Tomatoes Rating: " + item.Ratings[0].Value);
            console.log("Country: " + item.Country);
            console.log("Language: " + item.Language);
            console.log("Plot: " + item.Plot);
            console.log("Actors: " + item.Actors);
            console.log("----------------------------" + '\n');
        }

    }) // end .then 

} // end movieSearch

var fileSearch = () => {

    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        var song = dataArr[1];

        console.log('\n' + "╭********************************╮")
        console.log("|     DO WHAT IT SAYS SEARCH     |")
        console.log("╰********************************╯")


        spotifySearch(song);

    }); // end readFile

} // end fileSearch


// prompt the user to select a search
inquirer.prompt([{

    type: "list",
    message: "Select a search",
    choices: ["spotify-this-song", "concert-this",  "movie-this", "do-what-it-says"],
    default: "spotify-this-song",
    name: "userPick"

}]).then(function(response){

    // set userSelection equal to the users pick
    userSelection = response.userPick;

    if (response.userPick == "do-what-it-says") {
        input = "";
        switchFunction(userSelection, input);
    }
    else {

        // ask the user for a search term
        inquirer.prompt([{

            type: "input",
            message: "What would you like to search for?",
            name: "userSearch"

        }]).then(function(response){

            input = response.userSearch;
            switchFunction(userSelection, input);

        }) // end .then
    }; // end else

}); // end iquirer prompt

var switchFunction = (userSelection, input) => {

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
            fileSearch();
            break;

}

} // end switch