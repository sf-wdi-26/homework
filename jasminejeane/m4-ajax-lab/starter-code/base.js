
//grabbing key value pairs http://stackoverflow.com/questions/1144705/best-way-to-store-a-key-value-array-in-javascript
// What is the structure of the data?
// How many earthquakes does it list? 3 
// How would you grab the first earthquake?



// How would you grab it's title?


// How would you grab it's geological coordinates:
// latitude?
// longitude?
// When did it happen?
// How many hours ago is that?



// what I got to work on my own

// var firstQuake = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20004vbk.geojson";
// $.get(firstQuake, function(response_data) {

// 	window.newData = response_data;
// 	for (var key in window.newData){
// 	if (window.newData.hasOwnProperty(key)) {
//     var val = window.newData[key];
//     console.log(val);
//     // console.log(val.Object);

//   // creating a global variable to inspect the new data is good
//   // just remember to make it local once your done inspecting!
//   // window.newData = response_data;
// }
// }
// });

// function locateKey(info){
// for (var key in window.newData){
// 	if (window.newData.hasOwnProperty(key)) {
//     var val = window.newData[key];
//     console.log(val);
//   }
// }
// }




//copied from solutions 

var $info_row_target;
var map;

$(document).ready(function(){

  $info_row_target = $("#info");
  //render a map
 
  //grab the data
  fetchQuakeData();

});
var firstQuake = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us20004vbk.geojson";

function fetchQuakeData(){
  $.get(firstQuake, function(response){
    response.type.features.forEach(function renderRowAndMarker(quake){
      // Add title of the quake
      var title = quake.properties.title;
      console.log(title);
  });

});
 }



var weekly_quakes_firstQuake = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

var map;

$(document).ready(function(){

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 11.6, lng: 43.16},
    zoom: 8
  });

});





//fail test to link

//   .done(function(response_data) {
//     // We're all good! (status code in the 200s).
//     console.log("data: ", response_data);
//   })
//   .fail(function() {
//     // Timeout or server error (status code in the 400s).
//     console.log("no data :(");
//   })
// ;