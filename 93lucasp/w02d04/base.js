var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
var title;
var map;
var time;

$(document).ready(function(){

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.3, lng: -74.3},
    zoom: 2 
   });
  /* map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 12
  });
 
 /*var marker = new google.maps.Marker({
    position: {lat: 37.78, lng: -122.44},
    map: map,
    
  });*/


$.get(weekly_quakes_endpoint, function(response_data) {
  
  newData = response_data;
  
  var earth = newData.features;

  for (var i = 0; i < earth.length; i++) {
  	title = newData.features[i].properties.title;
  	time = newData.features[i].properties.time;
  	$("#info").append("<h1>" +title+ "</h1>");
  	var d = new Date();
  
  var n = Math.round( ( Date.now() - newData.features[i].properties.time ) / (1000*60*60) );
   $("#info").append("<h2>"+"It was was " +n+ " hours ago"+ "</h2><hr> ");
  

  	var lng1 = newData.features[i].geometry.coordinates[0];
  	var lat1= newData.features[i].geometry.coordinates[1];
  	console.log(lat1);
  	console.log(lng1);
  	marker = new google.maps.Marker({
    position: {lat: lat1 , lng: lng1 },
    map: map,
    
    
  });


  }

});
});

