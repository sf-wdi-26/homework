var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;
var eachQuakeInfo;
var response_data;

$(document).ready(function(){

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 11.6, lng: 43.16},
    zoom: 4
  });

  $.get(weekly_quakes_endpoint, function(response_data) {
  // creating a global variable to inspect the new data is good
  // just remember to make it local once your done inspecting!
  window.newData = response_data;
  });

var list = response_data.features;


  for (var i = 0; i < list.length; i++) {

  	var longitude = list[i].geometry.coordinates[0];
  	var latitude = list[i].geometry.coordinates[1];
  	var magnitude = list[i].properties.mag;
  	var title = list[i].properties.place;
 
  	var timeNow = Date.now();
  	var timeThen = list[i].properties["time"];
  	var timeDiff = (timeNow - timeThen)/1000/60/60/24;

  	eachQuakeInfo = magnitude + "  " + place + "  " + timeDiff;
	
  }
	$("#put-here").append(eachQuakeInfo);
});




