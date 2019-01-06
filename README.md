# liri-node-app

# Working Program Video
* https://www.youtube.com/watch?v=oDOfquvrj0I

# Program Guide

**the program will ask the user to select one of 4 searches**
* spotify-this-song 
* concert-this 
* movie-this
* do-what-it-says


**do-what-it-says**: this command will read a file called random.txt and execute a command based on the text inside that file.
* the random.txt file contains text holding a search and data
* once the random.txt file is read, the spotify-this-song function will be called and passed the data captured from random.txt


**spotify-this-song**: once selected the user will be prompted to enter in a search term. this command will then send a request to the spotify api and display the:
* Artist Name
* Song Name
* A 30 second preview of the song (if available)
* Album Name

-- if no song is provided the data for "head above water" by avril lavigne will be displayed

**concert-this**: once selected the user will be prompted to enter in a search term. this command will then send a request to the bands in town api and display the first 5 results:
* Lineup
* Venue Name
* Venue Location
* Event Date
* Ticket Sale Date

-- if no artist is provided the program will display data for "Ariana Grande"

-- if the bands in town api returns no results the program will display "no upcoming events"

**movie-this**: once selected the user will be prompted to enter in a search term. this command will then send a request to the OMDB api and display the:
* Title
* Release Year
* IMDB Rating
* Rotten Tomatoes Rating
* Country
* Language
* Plot
* Actors

-- if no movie is provided the program will display data for the film "The Sandlot"



