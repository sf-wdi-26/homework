//MOVE TO SECOND PAGE when Start button is clicked

//Initialize functions:
$(document).ready(function(){
    google.maps.event.addDomListener(document.getElementById('next'), 'click', initialize);
});



function initialize() {

      var arrRandomTen = [];
      function generateRandomArray(){
        console.log("generateRandomArray called");
        while(arrRandomTen.length<40){
          var randomNumber = Math.ceil(Math.random()*40)
          var found = false;
          for(var i = 0; i<arrRandomTen.length; i++){
            if(arrRandomTen[i]==randomNumber){
              found=true; 
              break};
            }
            if(!found)arrRandomTen[arrRandomTen.length]=randomNumber;
          }
          
        return arrRandomTen;
      }
      generateRandomArray();
      var generalAssembly = new google.maps.LatLng(37.790841,-122.401280);

      var map = new google.maps.Map(document.getElementById('map'), {
        center: generalAssembly,
        zoom: 16,
        scrollwheel: false,
        
      });

      // Specify location, radius and place types for your Places API search.
      var request = {
        location: generalAssembly,
        radius: '300',
        types: ['restaurant']
      };

    //turn off labels from map
      var stylesArray = [
           {
             featureType: "administrative",
             elementType: "labels",
             stylers: [
               { visibility: "off" }
             ]
           },
           {
             featureType: "poi",
             elementType: "labels",
             stylers: [
               { visibility: "off" }
             ]
           }
         ];

      map.setOptions({styles: stylesArray});

      // Create the PlaceService and send the request.
      // Handle the callback with an anonymous function.
      
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {

          var place = results[arrRandomTen[0]];
          //skips places that has geometry attribute of undefined
          if(typeof(results[arrRandomTen[0]].geometry) === undefined){
            var place = results[arrRandomTen[1]];
          } 
          console.log(results);

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
          }
        // }
      });
}

//END OF FUNCTION INITIALIZE -------------------------------------

// Run the initialize function when the window has finished loading.
// google.maps.event.addDomListener(window, 'load', initialize);



//For places
//results[0].name = name of the restaurant
//var marker = new google.maps.Marker({
        //   map: map,
        //   position: place.geometry.location
        // });