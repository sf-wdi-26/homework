var endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
var map;
var array =  [];

$(document).ready(function(){
	console.log("loaded");

 renDerMap();



  });

function renDerMap(){

 var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 11.6, lng: 43.16},
    zoom: 3
   });

 renDerQuake();
	
}

function renDerQuake(){

	$.get(endpoint, function(data){
		array = data.features;
		//when this function get's called it returns the quake title by getting the data and it's asigning the array of ojects//
		console.log(array);
		array.forEach(function(x){
		console.log("quake title =", x.properties.title);
		
		//this var assigns lat and long within coordinate array//
		var lat = x.geometry.coordinates[1];
		console.log("coords latitude=", lat);

		var lon = x.geometry.coordinates[0];
		console.log("coords longitude=", lon);

		//used jquery to append info id with title on page//
		$("#info").append("<li>"+ x.properties.title+ "</li>");

	});
	});
}


// How many earthquakes does it list?
// How would you grab the first earthquake?//////
// How would you grab it's title?
// How would you grab it's geological coordinates:
// latitude?
// longitude?
// When did it happen?
// How many hours ago is that?