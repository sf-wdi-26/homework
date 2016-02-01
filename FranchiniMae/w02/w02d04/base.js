var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;
var mapData;
// var mapTitles = [];
var titles;


$(document).ready(function(){

	var myLatLng = {lat: 37.78, lng: -122.44};

  	map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 8
  });

  	// var marker = new google.maps.Marker({
   //  position: myLatLng,
   //  map:map,
   //  title: "Hello World!",

// });
});  

//What is the structure of the data?
//json object
//How many earthquakes does it list?
//3
//How would you grab the first earthquake?
//mapData.feature[i].properties.title 


$.get(weekly_quakes_endpoint).done(function(data) {
	window.mapData = data;

//for loop to go through the data object
for (var i = 0; i < mapData.features.length; i++) {
	//accessing the title in json data
	var titles = mapData.features[i].properties.title;
	//add the titles to the page
	$('#info').append("<div>" + titles + "</div>");


	//grab both the latitude and longitude
	var lng = mapData.features[i].geometry.coordinates[0];
	var lat = mapData.features[i].geometry.coordinates[1];

	//add a marker by creating object for lat/long
	new google.maps.Marker({
		position: new google.maps.LatLng(lat, lng),
		map: map,
		title: titles,
	})
;


	}

});


//grab the data from USGS endpoint
//access the object 
// $.ajax({
// 	type: 'GET',
// 	url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',
// 	dataType: 'json',
// 	success: function() {
// 		console.log("hello");
// 	}
// });
//loop over it
//add each title to the page

