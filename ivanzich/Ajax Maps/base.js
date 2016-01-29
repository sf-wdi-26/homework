// globals
var weekEarthquakes = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";
var $info_row_target;
var map;

$(document).ready(function(){

  $info_row_target =   $("#info");
  //render a map
  
  createMap();
  //grab the data
  

  getQuake();

});

function getQuake(){
  $.get(weekEarthquakes, function(response){
    response.features.forEach(function renderRowAndMarker(quake){
      

      // Add title of the quake
      
var title = quake.properties.title;
      



      // In UNIX time (miliseconds) find the difference between the time now and the time
      // when the quake happend. Then convert to hours
      
      // Append the info to the page
      

      $info_row_target.append( "<p>" + title + "</p>");

      // Create the map markers
      var lat = quake.geometry.coordinates[1];
      var lng = quake.geometry.coordinates[0];
      new google.maps.Marker({
        position: new google.maps.LatLng(lat,lng),
        map: map,
        title: title
      });
    });
  })
}

// render a map
     function createMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 37.78, lng: -122.44},
    zoom: 1
  });
}

