var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
var map;
var $infoSection;

$(document).ready(function(){
  $infoSection = $("#info");

  //create map
  createMap();
  getData();

});

function createMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 3
  });
}

function getData() {

	$.get(weekly_quakes_endpoint, function(x) {
		x.features.forEach(function renderTitleInfo(quake) {
		  //gets title
		  var title = quake.properties.title;
		  //changes time stamp conversion
		  var time = Math.floor((Date.now()-quake.properties.time)/(1000*60*60));
		  //append to page
		  $infoSection.append("<p>" + title + " / " + time + " hours ago</p>");
		  //create pins

		  	//longitude
		  var lng = quake.geometry.coordinates[0];
		  	//latitude
		  var lat = quake.geometry.coordinates[1];
		  //creates markers
		  new google.maps.Marker({
		  	position: new google.maps.LatLng(lat,lng),
		  	map: map,
		  	title: title
		  });
		});
	});
}