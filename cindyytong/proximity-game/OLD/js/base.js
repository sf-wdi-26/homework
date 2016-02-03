//test page linked
console.log("working");


//SOURCES:
//Place Details: https://developers.google.com/places/web-service/details
//Places: https://developers.google.com/places/supported_types
//Customization of Maps: https://developers.google.com/maps/documentation/javascript/styling?hl=en#map_features

//PSEUDO CODE
//I. Geolocation
// User clicks get location and using geolocation, a map is generated of where they are and the coordinates are saved 
// from users current location, pull type: bar; can additionally add other places such as restaurants  
//generate map showing 

// present map with pin on the location 
//turn off labels for business name

//Once you have a place_id or a reference from a Place Search, you can request more details about a particular establishment or point of interest by initiating a Place Details request
//generate map 
//pull establishment results and have user


//I. GET USER'S LOCATION 
//Test to see if browser allows geolocation
if(!!navigator.geolocation) {
    console.log("support")
} else {
    console.log("no support")
}




//When user clicks on button "get location", the event handler is run and the callback function c is run which gets the lat and long coordinates and redefines the src for the map to show the user's current location; zoom set to 60


// function c(pos){
//   var lat = pos.coords.latitude;
//   var long = pos.coords.longitude;
//   var coords = lat + ", " + long;

//   console.log(coords);
//       // document.getElementById('google_map').setAttribute('src', 'https://maps.googleapis.com/maps/api/geocode/output?' + coords + '&z=60&output=embed');
//   }

//   c();


// document.getElementById('get_location').onclick = function(){
//   //navigator.geolocation returns object which can locate user's position
//     navigator.geolocation.getCurrentPosition(c);
//     return false;
// }



// //render a map
// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     //we want these coordinates to change based on user's location
//     zoom: 6
//   });
//   var infoWindow = new google.maps.InfoWindow({map: map});

// //Get geolocation of user upon click of button "Get Location"
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };

//       infoWindow.setPosition(pos);
//       infoWindow.setContent('Location found.');
//       map.setCenter(pos);
//     }, function() {
//       handleLocationError(true, infoWindow, map.getCenter());
//     });

//     } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
//   }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//                         'Error: The Geolocation service failed.' :
//                         'Error: Your browser doesn\'t support geolocation.');
// }


// //Initializes all of the functions
// function init() {
//   //render a map
//   initMap();
//   handleLocationError();
// }