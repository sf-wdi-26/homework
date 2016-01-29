var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;

var mapData;
//var mapTitles = [];

$(document).ready(function(){
	var myLatLng = {lat: 37.78, lng: -122.44};

  	map = new google.maps.Map(document.getElementById('map'), {
    	center: myLatLng,
    	zoom: 8
  	});
  	
 //  	var marker = new google.maps.Marker({
 //    position: myLatLng,
 //    map: map,
 //    title: 'Hello World!'
	// });
});

//data structure - json object
//lists 3 earthquakes
//to grab first earthquake - 
//to grab title - mapData.features[i].properties.title
//to grab coordinates - mapData.features[i].geometry.coordinates
//to grab time - key: 'time'
//hours ago = 'generated' - 'time'

//grab data from USGS var weekly_quakes_endpoint

$.get(weekly_quakes_endpoint).done(function(data) {
	window.mapData = data;

	for (var i = 0; i < mapData.features.length; i++) {
		var titles = mapData.features[i].properties.title;
		//mapTitles.push(titles);
		$("#info").append("<div>" + titles + "</div>");
		var lon = mapData.features[i].geometry.coordinates[0];
		var lat = mapData.features[i].geometry.coordinates[1];
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(lat, lon),
    		map: map,
    		title: titles
		});
	}
});
	



//loop over data to find keys to info values


//add title to page

