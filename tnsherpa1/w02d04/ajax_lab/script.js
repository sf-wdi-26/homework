//----JQuery------
var map;
var $infoRowTarget;
var weeklyQuakesEndpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

 //alert("check"); 
function fetchQuakeData() {
  $.get(weeklyQuakesEndpoint, function(response){
    response.features.forEach(function(quake){
    var title = quake.properties.title;
    var hoursAgo = Math.round(( Date.now() - quake.properties.time ) / (1000*60*60));
    
    $infoRowTarget.append("<p>").append(title+"/"+hoursAgo+"hours ago");

    var lat = quake.geometry.coordinates[1];
    var lng = quake.geometry.coordinates[0];
    new google.maps.Marker({
      position: new google.maps.LatLng(lat,lng),
      map: map,
      title: title
    });
    });
  });
} 

function createMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.38, lng: -122.44},
    zoom: 2
  });
  }

function init(){
  $infoRowTarget = $("#info");
  createMap();
  fetchQuakeData();
}
