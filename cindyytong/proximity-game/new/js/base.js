//SOURCES:
//Place Details: https://developers.google.com/places/web-service/details
//Places: https://developers.google.com/places/javascript/
//Customization of Maps: https://developers.google.com/maps/documentation/javascript/styling?hl=en#map_features



//PSEUDO CODE:
//I. Declare global variables and functions, load document, generate default layout with mape of SF
//II. GEOLOCATION - User clicks get location button and using geolocation, the coordinates on the map are updated to the users specific location 
//III. GRAB BAR DATA - Based on current location, do search for nearby bars, return those results as var barResults = {} which is an object with data
//IV. SELECT ONE BAR TO GENERATE QUESTIONS - on random, select one bar from the barResults object, grab the coordinates and generate google map showing pinned location of bar
//Disable labels for business name
//Disable zoom feature on map
//Grab bar name and save to variable barName which should be an array holding 10 bars  
//V. PLAYER ANSWERS QUESTION
// compare players typed answer in input box to bar name and write conditional function, if it is a match, increase score by one and also change to next question
//VI. TIMER
//Add 10 second timer for each question. Question will change under 2 circumstances, time runs out or an answer is submitted.
//Repeat for 10 questions - need to make sure bars are not repeated when randomly selected 
//VII. RESULTS 
//Generate score for player with number correct and number wrong, show map of places with name tags  
//VIII. ADDITONAL IF TIME PERMITS 
//Add pass button
//Include get a hint
//If player wins, they receive info on bar deals/ events
//Player can challenge other players 
//Player can save their results/ send it to themselves so they can visit the bars

//QUESTIONS:
//How to make geolocations work
//How to randomly select from array of bars and not repeat
// Best organizational method? Create new page for each questiona dn link to each other? 
//-------------------------------------------
//I. SETUP
//GLOBAL VARIABLES 
var bar_endpoints = []; 

var map;

var coordinates = {lat: 37.78, lng: -122.44}
//this variable will get updated with new values throughout based on user's location and bar locations

//FUNCTIONS
//when the document is ready create the map and fetch the earthquake data
$(document).ready(function(){

	// call the function to create the Map
	createMap();
	// getLocation();

	// fetch the data - bar endpoints

});

// Create map of based on coordinates passed through, set default map to show San Francisco 

function createMap() {
  	map = new google.maps.Map(document.getElementById('map'), {
    center: coordinates,
    zoom: 12
  });
}

//II. GET USER'S LOCATION 
//When user clicks on button "get location", the event handler is run and the callback function c is run which gets the lat and long coordinates and redefines the coordinates, createMap is then called again with the redefined coordinates 
//???????????????????????????????????????????????????????????????????????????????????????????????
// //FIGURE OUT HOW TO ALLOW GEOLOCATION EXCEPTION https://support.google.com/chrome/answer/3123708?p=settings_manage_exceptions&rd=1
// http://www.w3schools.com/html/html5_geolocation.asp

// x.onclick = function(
	// function getLocation() {
	//     if (navigator.geolocation) {
	//         navigator.geolocation.getCurrentPosition(showPosition);
			// c();
	//     } else {
	//         document.getElementById("get_location").innerHTML = "Geolocation is not supported by this browser.";
	//     }
	// }
	// function showPosition(position) {
	//    document.getElementById("get_location").innerHTML = "Latitude: " + position.coords.latitude + 
	//     "<br>Longitude: " + position.coords.longitude; 
	// }
// )};

//This callback function sets the new lat and long to the coordinates and calls the Map function again to update with the new coordinates
// function c(position){
//   var lat = position.coords.latitude;
//   var long = position.coords.longitude;
//   coordinates = {lat: lat, lng: long};
// 	createMap();
// 	}


