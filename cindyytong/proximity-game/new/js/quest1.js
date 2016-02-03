//MOVE TO SECOND PAGE when Start button is clicked

//Initialize functions:



// $().ready(function(){
//         $("#submit").click(function(){console.log("hello")});
//       });

$(document).ready(function(){
    google.maps.event.addDomListener(document.getElementById('next'), 'click', initialize);

    $("#submit").click(function(){
      var userAnswer = $('#answer').val();
      console.log(userAnswer);
      });
});

//when we click the answer button we want to store the button click in local storage so that we can end the game once 10 questions have passed
//make this mark the next button as clicked
//store the answer and initialize the function to compare answers
// store users answer to compare at the end
//clear the form 


var solutionArray = [];
var userInputArray =[];

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
        zoom: 15,
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
  //????????????????skips places that has geometry attribute of undefined & fix error of getting object of undefined
          // if(typeof(place.geometry) === undefined){
          //   var place = results[arrRandomTen[1]];
          // } 

          //set the answer for the current place to the name
          var answer = place.name;
          //push the answer to the solution array
          solutionArray.push(answer);

      
          var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
          }
        // }
      });
}


//END OF FUNCTION INITIALIZE -------------------------------------



//For places
//results[0].name OR place.name= name of the restaurant
//var marker = new google.maps.Marker({
        //   map: map,
        //   position: place.geometry.location
        // });