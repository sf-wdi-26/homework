var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
//use JSON reader to view in web in more readable format
var map;

function createMap() {
	//add the map zoomed in on SF 
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.78, lng: -122.44},
    zoom: 1
	});

 }

//get api info about earthquakes
function fetchQuakeData() {
$.get(weekly_quakes_endpoint, function addMapDetail(response_data) {
	//FIXME: temporarily attached data to the window, make the scope global so you can mine data
	//window.newData = response_data;
		var newData = response_data;
		len = newData.features.length;
		titleArray = [];
		for (var i = 0; i < len; i ++) {
			
			titledata = newData.features[i].properties.title;
			$('#info').append('<p>' + titledata + '</p>');

			var hoursAgo = Math.round(
				( Date.now() - newData.features[i].properties.time)/ (1000*60*60));
			//get the time in hours since the last quake happened

			$('#info').append('<p>' + hoursAgo + ' hours ago</p>');
			//append hourly info to the page
			
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
}
//in the script tags at bottom of the html page
//use to initiate the functions on the page
function init() {
	createMap();
	fetchQuakeData();

}


 //need to get the JSON data from the earthquake.gov api 
 //then need to be able to drill into that data to get the title 
 //out of the properties out of the feature array out of 
 //the new data that is collected

 //then need to iterate over the features array to get all of the titles
 //div with id #info need to create list items with the titles 

//using the today's date and the time of the earthquake, calculate how long it's been since the last quake

			
		