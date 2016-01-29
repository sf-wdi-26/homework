var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
var map;


// $(document).ready(function(){
// //get and push quake info to page
//   getQuakeData();
// // don't need to call on initMap because i coded that callback function into my HTML as google recommended
//   // initMap();
// });


//Alternative way of calling on load that Ilias reccomends (see HTML file too)
function init(){
//get and push quake info to page
  getQuakeData();
// don't need to call on initMap because i coded that callback function into my HTML as google recommended
  // initMap();
}


function getQuakeData(){
  $.get(weekly_quakes_endpoint, function(responseData){
    responseData.features.forEach(function getInfo(earthquake) {
    //get each title
    	var title = earthquake.properties.title;
    //get how many hours ago (see Ben's lab from morning) //convert to hrs
    	var hoursAgo = Math.round((Date.now() - earthquake.properties.time) / (1000*60*60));
    //add data to div with #info
    	$('#info').append( "<p>" + title + " - detected " + hoursAgo + " hours ago</p>");
  		
    //get locations for map markers
    	// var coordinates = earthquake.geometry.coordinates;
    	var latitude = earthquake.geometry.coordinates[1];
    	var longitude = earthquake.geometry.coordinates[0];
    //create object with new marker
    	var myLocation = {lat: latitude, lng: longitude};
    //feed object in to create marker
    //call on makeMarker
    	var marker = new google.maps.Marker({
    		position: myLocation,
    		map: map,
    		title: 'Earthquake!'
  		});
  	//create event listener so that when marker is clicked, alert pops up
  	  google.maps.event.addListener(marker, 'click', function() {
  	  	var time = Math.round(earthquake.properties.time);
    	alert("Earthquake! " + title + ", " + hoursAgo + " hours ago.");
	});
  	//could use initMap here but you only want one map, so define & call initMap
  	//outside of this function!
    	});
	});
 }


function initMap() {
	//set coordinates that I intend to center map around
	var myLocation = { lat: 35.6963, lng: -3.7018};
	//actually create map
  	map = new google.maps.Map(document.getElementById('map'), {
    center: myLocation,
    zoom: 1
  });
 }

