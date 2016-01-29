var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"
// var googleMapsApiKey = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAOQ28GdGf5hfOUQ6Bi9XpAoSmPVX7gigQ&callback=initMap";
var map;
var earthquakeInfoDiv = $("#info");

	var eqLocArray = [];
	var eqLatArray = [];
	var eqLngArray = [];
	var eqMagArray = [];
	var eqTimeArray = [];

	var sfLat = {lat: 37.78, lng: -122.44};

	var aLat = eqLatArray[1];
	var aLng = eqLngArray[1];

$(document).ready(function(){
	var earthquakeInfoDiv = $("#info");

  	$.get(weekly_quakes_endpoint, function(response_data) {

		for (var i = 0; i < response_data.features.length; i++) {
			if (response_data.features[i].properties.type == "earthquake") {
			eqLocArray.push(response_data.features[i].properties.title)
			eqLatArray.push(response_data.features[i].geometry.coordinates[0]);
			eqLngArray.push(response_data.features[i].geometry.coordinates[1]);
			eqMagArray.push(response_data.features[i].properties.mag);
			eqTimeArray.push(response_data.features[i].properties.time);
			}
		};

		map = new google.maps.Map(document.getElementById('map'), {
		    center: sfLat,
		    zoom: 2
		});

		var sfMarker = new google.maps.Marker({
		    position: sfLat,
		    map: map
	  	});


	  	var sfMarker = new google.maps.Marker({
		    position: new google.maps.LatLng(-153.41, 59.65),
		    map: map
	  	});

		var moroccoMarker = new google.maps.Marker({
		    position: {lat: response_data.features[1].geometry.coordinates[0], lng: response_data.features[1].geometry.coordinates[1]},
		    map: map
	  	});

	  	var aLat = {lat: response_data.features[2].geometry.coordinates[0], lng: response_data.features[2].geometry.coordinates[1]}

		function doTheDomThing () {

		var locList = document.createElement("ul");
		var loc0 = document.createElement("li");
		var loc1 = document.createElement("li");

		locList.innerHTML = "Locations:"
		loc0.innerHTML = eqLocArray[0];
		loc1.innerHTML = eqLocArray[1];

		earthquakeInfoDiv.append(locList);
		$("ul").append(loc0);
		$("ul").append(loc1);
		}

		doTheDomThing();
	});

})

/*

// can you have the VAL of an object be a dom object?

var recentEarthquakes = {
	place: ["name1", "name2", "name3"],
	lat: ["lat1", "lat2", "lat3"],
	lng: ["lng1", "lng2", "lng3"]
}

var recentEqs {
place : eqLocArray,
	lat  : eqLatArray,
	long : eqLngArray,
	mag  : eqMagArray,
	time: eqTimeArray
}

for (var i = 0; i < eqLocArray.length; i++) {
// 	append eqArray elemets to all li itms
	$("li:nth-child(3)").innerHTML = eqLocArray[i];
};

*/