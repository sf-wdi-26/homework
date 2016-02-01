
var weekly_quakes_endpoint = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson';
var map;
var marker;
// var sf= { lat: 37.78, lng: -122.44};
$(document).ready(function(){

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.3, lng: -74.3},
    zoom: 8
  });
	$.ajax({
		type: 'GET',
		url: weekly_quakes_endpoint,
		success: function(data) {
			$('#info').append('<ul></ul>');
			// window.weekly_quakes_endpoint = data;
			data.features.forEach(function(element) {
				var newCoords = { lat: element.geometry.coordinates[1], lng: element.geometry.coordinates[0]};
				$('ul').append('<li>' + element.properties.title + '</li>');

			 marker = new google.maps.Marker({
			    position: newCoords, 
			    map: map,
			    title: 'titles'
  	  		  });
	  		});
			 map.addListener('center_changed', function() {
		      window.setTimeout(function() {
		       map.panTo(marker.getPosition());
		    }, 3000);
		  });
		     marker.addListener('click',function() {
		      map.setZoom(10);
		      map.setCenter(marker.getPosition(newCoords));
  		 });
	   }	
  	});
});



// Your short term goal is to render each title to the "info" section of the page (see the commented example in your HTML)
// Psuedo Code:

// What is the structure of the data?
	//In an Object with multiple properties??
// How many earthquakes does it list?
	//Three "titles"
// How would you grab the first earthquake?
 	//first child of parent tag
// How would you grab it's geological coordinates:
	//Use Object dot notation
// latitude?
// longitude? 
// When did it happen?
// How many hours ago is that?

//1. grab the data from the USGS endpoint.
		//Use AJAX to get function 
		//var weekly_quakes_endpoint = url

//2.  How would you grab it's title?
		//create a for loop
 		//grab using Object dot notation
		//append to info section of page
		//create a <ul> tag <li> for each title
  
// 	loop over it
	//used the forEach for array 

// add each title to the page

 -->











