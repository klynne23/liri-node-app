# liri-node-app

# Working Program Video


# Program Guide
* the program will expect input from the command line in one of 4 ways
1. node liri.js spotify-this-song "song title"
2. node liri.js concert-this "artist name"
3. node liri.js movie-this "movie title"
4. node liri.js do-what-it-says


#spotify-this-song
* this command will send a request to the spotify api and display the:
    1. Aritist Name
    2. Song Name
    3. A 30 second preview of the song (if available)
    4. Album Name
* if no song is provided the data for "head above water" by avril lavigne will be displayed

#concert-this
* this command will send a request to the bands in town api and display the:
    1. Lineup
    2. Venue Name
    3. Venue Location
    4. Event Date
    5. Ticket Sale Date
* if no artist is provided the program will display data for "Ariana Grande"
* if the bands in town api returns no results the program will display "no upcoming events"

#movie-this
* this command will send a request to the OMDB api and display the:
    1. Title
    2. Release Year
    3. IMDB Rating
    4. Rotten Tomatoes Rating
    5. Country
    6. Language
    7. Plot
    8. Actors
* if no movie is provided the program will display data for the film "The Sandlot"



#do-what-it-says
* this command will read a file called random.txt and execute a command based on the text inside that file.