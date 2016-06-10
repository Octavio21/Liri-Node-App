var fs = require('fs');
var request = require('request');
var keys = require('./keys.js');
var twitter = require('twitter');
var spotify = require('spotify');
var omdb = require('omdb');

var twitterSearchParam = {
	screen_name: 'OctavioMata',
	count: 10,
}

switch(order) {
    case 'my-tweets':
        tweetsNpm();
    break;

    case 'spotify-this-song':
        spotifyNpm();
    break;

    case 'movie-this':
        moviesNpm();
    break;

    case 'do-what-it-says':
        doIt();
    break;
}