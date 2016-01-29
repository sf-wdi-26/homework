var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

var map;
//loop over each title 
$(document).ready(function(){

	// call the function to create the Map
	createMap();

	// fetch the data
	getEarthquakeData();

});


//fetch the data from the api: data returned is one object with another object of features which is holding three objects each with a properties object holding the title.  So grab data.features and for each object within features run a forEach function to grab the other key value pairs 
//Use a callback function of getEarthquakeInfo in the forEach function which will provide specific information for each earthquake 
	function getEarthquakeData(){ 
		$.get(weekly_quakes_endpoint, function(data){
			data.features.forEach(function insertData (earthquake){

				//define variables for the data points we need
				var title = earthquake.properties.title;
				
				var timeOfQuake = earthquake.properties.time;

				//can write Date.now() as $.now() also
				var hoursAgo = Math.round( ( Date.now() - timeOfQuake ) / (1000*60*60) ); 

				//insert the information to the page
				$("#info").append( "<p>" + title + ": Occurred " + hoursAgo + " hours ago</p>");

				//add a pin to each earthquake, first get lat and lng (see above)
				var lat = earthquake.geometry.coordinates[1];
				var lng = earthquake.geometry.coordinates[0];

				new google.maps.Marker({
	       	 	position: new google.maps.LatLng(lat,lng),
	        	map: map, 
	        	title: title
	      			});
	    		});
			})
		}

//information provided by google on how to make the map, lat and lng centers on SF
  function createMap() {
  	map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 2
  });
}