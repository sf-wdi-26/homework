var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;
var titles = [];

$(document).ready(function(){

  
  // });

  //grab the data from the USGS endpoint 
  //loop over it 
  //add each title to the page
    $.ajax({
    	method: 'GET',
    	url: weekly_quakes_endpoint,
    	success: function(data) {
    		//console.log(title.features[0].properties.place);
    		data.features.forEach(function(feature){
    			// console.log(feature.properties.place);

    			titles.push(feature.properties.title);
    			$("#info").append(feature.properties.title);
    		});
    		initMap();
    		console.log(titles);
    		// marker.setMap(map);
    		
    	},
    	error: function(jq,status,message) {
    			console.log('A JQuery error has occured. Status: ' + status + ' -Message: ' + message);
    		}

    });	
});

function initMap()	{
	map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 37.78, lng: -122.44},
	    zoom: 3

	});

	// var myLatLng = {lat:-74.3, lng: 39.3};
    var location = new google.maps.LatLng(-74.3, 39.3){
    	map: map,
		title: 'Southern New Jersey'
	});
	// console.log(marker);
	marker.setMap(map);

}

// feature.properties.place

