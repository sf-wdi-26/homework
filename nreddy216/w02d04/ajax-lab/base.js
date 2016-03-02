var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;

//get teh time difference from the earthquake occurrence to now, in hours
function getTimeDiff(first, second){
	return Math.round((second-first)/(60*60*1000));
}

//bonus - get only the place name (not the rest of the riff raff)
function parsePlace(original, fixed){
	//complicated
	//parses place to only get the location
	//all three places have the name of the location after "of" or nothing at all
	for(var s=0; s<original.length; s++){
		if (original[s]==='of'){
			var stop = s;

			for(var p=s+1; p<original.length; p++){
				fixed += " " + original[p];
			}
		}
	}
	//if there's no "of" then it just marks location as the place
	if(fixed===''){
		fixed = original.join(' ');
	}

	return fixed;
}

function colorPins(){
	map.data.setStyle(function(marker) {
	 return {icon:feature.getProperty('icon')};
	});
}
	


$(document).ready(function(){

	//map centered at San Francisco, zoomed out
   map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 1
  });



  $.ajax({
  type: 'GET',
  url: weekly_quakes_endpoint,
  success: function(data) {
	    //celebrate!
	    
	    


	    //make an array of the features 
	    //(even though it's already an array...didn't work the other way)
	    var featuresArray = data.features;

		for(var i=0; i < featuresArray.length; i++){

			//make a list item with the EQ title, append the list item to 'info'
			
			// var infoEl = document.createElement('li');
			$infoEl = $("<li></li>");

			//changes the 'place' to only the place name
			var place = (featuresArray[i].properties.place).split(' ');
			var location = '';
			location = parsePlace(place, location);

			//appends the place to the info
			$infoEl.html(location);
			$('#info').append($infoEl);

			//get the time of the earthquake
			//get the time difference in hours
			var earthquakeTime = featuresArray[i].properties.time;
			var timeDiff = document.createElement('p');
			//get the time NOW
	   		var now = Date.now();
			$(timeDiff).html("Time since earthquake: " + getTimeDiff(earthquakeTime, now) + " hours");

			$infoEl.append(timeDiff);
			
			//get the latitude and longitude
			var myLatLng = {lat: featuresArray[i].geometry.coordinates[1], lng: featuresArray[i].geometry.coordinates[0]};

			//put pins on map at the selected latitude and longitude
			var marker = new google.maps.Marker({
			    position: myLatLng,
			    map: map
			  });

			//colorPins();

				
		}

	
 		}
	});

});

