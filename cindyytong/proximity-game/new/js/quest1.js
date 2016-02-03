//MOVE TO SECOND PAGE when Start button is clicked

//Initialize functions: generate random array of 10 numbers to call the bar locations from 
$(document).ready(function(){
    generateRandomArray();
});


//Randomly select a number from the array
//this function generates an array of numbers 1 to 10 in a random order 
function generateRandomArray(){
  var arrRandomTen = [];
  while(arrRandomTen.length<10){
    var randomNumber = Math.ceil(Math.random()*10)
    var found = false;
    for(var i = 0; i<arrRandomTen.length; i++){
      if(arrRandomTen[i]==randomNumber){
        found=true; 
        break};
      }
      if(!found)arrRandomTen[arrRandomTen.length]=randomNumber;
    }
    
  console.log(arrRandomTen);
}

//III. GRAB BAR DATA - Based on current location, do search for nearby bars, return those results as var barResults = {} which is an object with data; run function once start is clicked 

function initialize() {
  var pyrmont = new google.maps.LatLng(37.78,-122.44);

  var map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15,
    scrollwheel: false
  });

  // Specify location, radius and place types for your Places API search.
  var request = {
    location: pyrmont,
    radius: '500',
    types: ['bar']
  };

  // Create the PlaceService and send the request.
  // Handle the callback with an anonymous function.
  
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      var place = results[0];
      console.log("working");
      // for (var i = 0; i < results.length; i++) {
      //   var place = results[i];
      //   // If the request succeeds, draw the place location on
      //   // the map as a marker, and register an event to handle a
      //   // click on the marker.
      //   console.log(results[0].name);
      //    if(results[0].name ==="BAR CRUDO"){
      //     console.log("Correct")
      //   }
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
      // }
    }
  });
}

// Run the initialize function when the window has finished loading.
google.maps.event.addDomListener(window, 'load', initialize);




//For places
//results[0].name = name of the restaurant
//var marker = new google.maps.Marker({
        //   map: map,
        //   position: place.geometry.location
        // });