var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"
var $info_row;
var map;

$(document).ready(function(){

  $info_row = $("#info");
  //render a map
  createMap();
  //grab the data
  fetchQuakeData();

});




function fetchQuakeData(){
  $.get(weekly_quakes_endpoint, function(response){
    response.features.forEach(function renderRowAndMarker(quake){
      // Add title of the quake

      var parseTitleArray = [];

      var title = quake.properties.title;
      parseTitleArray.push(title);
      // In UNIX time (miliseconds) find the difference between the time now and the time
      // when the quake happend. Then convert to hours
      var hours_ago = Math.round( ( Date.now() - quake.properties.time ) / (1000*60*60) );
      // Append the info to the page

      var parsedTitle = parseTitleArray[0].split(" ");
      var placeArray = []
      // Create the map markers
      var lat = quake.geometry.coordinates[1];
      var lng = quake.geometry.coordinates[0];

      
      $info_row.append( "<p>" + title + " / " + hours_ago + " hours ago</p>");

      for (var i = parsedTitle.length; i > (parsedTitle.length - 3); i--) {
        placeArray.push(parsedTitle[i]);
      };

      var properName = placeArray.reverse();
      var finalParsedTitleArray = []
      var finalParsedTitleString = finalParsedTitleArray.toString();

      for (var i = 0; i < 1; i++) {
        finalParsedTitleArray.push(properName);
      };

      console.log(parseTitleArray);
      console.log(parsedTitle);
      console.log(placeArray);
      console.log(finalParsedTitleString);

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