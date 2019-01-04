# liri-node-app

# Working Program Video
* coming soon

# Program Guide

**the program will expect input from the command line in one of 4 ways**
* node liri.js spotify-this-song "song title"
* node liri.js concert-this "artist name"
* node liri.js movie-this "movie title"
* node liri.js do-what-it-says


**spotify-this-song**: this command will send a request to the spotify api and display the:
* Aritist Name
* Song Name
* A 30 second preview of the song (if available)
* Album Name

-- if no song is provided the data for "head above water" by avril lavigne will be displayed

**concert-this**: this command will send a request to the bands in town api and display the:
* Lineup
* Venue Name
* Venue Location
* Event Date
* Ticket Sale Date

-- if no artist is provided the program will display data for "Ariana Grande"
-- if the bands in town api returns no results the program will display "no upcoming events"

**movie-this**: this command will send a request to the OMDB api and display the:
* Title
* Release Year
* IMDB Rating
* Rotten Tomatoes Rating
* Country
* Language
* Plot
* Actors

-- if no movie is provided the program will display data for the film "The Sandlot"



**do-what-it-says**: this command will read a file called random.txt and execute a command based on the text inside that file.