var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;

$(document).ready(function(){

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.78, lng: -122.44},
    zoom: 3

  
  });

	var sfMarker = new google.maps.Marker({
    	position: {lat: 37.78, lng: -122.44},
    	map: map

  });

$.get(weekly_quakes_endpoint, function(response_data) {
 //need to get the JSON data from the earthquake.gov api 
 //then need to be able to drill into that data to get the title 
 //out of the properties out of the feature array out of 
 //the new data that is collected

 //then need to iterate over the features array to get all of the titles
 //div with id #info need to create list items with the titles 

		var newData = response_data;
		len = newData.features.length;
		titleArray = [];
		for (var i = 0; i < len; i ++) {
			
			titledata = newData.features[i].properties.title;
			$('#info').append('<li>' + titledata + '</li>');
			
			var longitude = newData.features[i].geometry.coordinates[0];
			
			var latitude = newData.features[i].geometry.coordinates[1];
			
			var marker = new google.maps.Marker({
    			position: {
    			lat: latitude, 
    			lng: longitude },
    			map: map
			
			});
		}
});

});
			
		