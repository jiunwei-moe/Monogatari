

import { storage as _storage } from "../../engine/js/options.js";
var storage = _storage;

// Define the messages used in the game.
export var messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='http://monogatari.hyuchia.com/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='http://monogatari.hyuchia.com/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
export var notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
export var particles = {

};

// Define the music used in the game.
export var music = {

};

// Define the voice files used in the game.
export var voice = {

};

// Define the sounds used in the game.
export var sound = {

};

// Define the videos used in the game.
export var videos = {

};

// Define the images used in the game.
export var images = {

};

// Define the backgrounds for each scene.
export var scenes = {

};

// Define the Characters
export var characters = {
	"h": {
		"Name": "Hikaru",
		"Color": "#5bcaff"
	}
};

export var script = {
	// The game starts here.
	"Start": [
		"notify Welcome",
		{
			"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = input;
				},
				"Warning": "You must enter a name!"
			}
		},

		"h Hi {{player.Name}} Welcome to Monogatari!",

		{
			"Choice": {
				"Dialog": "h Have you already read some documentation?",
				"Yes": {
					"Text": "Yes",
					"Do": "jump Yes"
				},
				"No": {
					"Text": "No",
					"Do": "jump No"
				}
			}
		}
	],

	"Yes": [

		"h That's awesome!",
		"h Then you are ready to go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	],

	"No": [

		"h You can do it now.",

		"display message Help",

		"h Go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	]
};
