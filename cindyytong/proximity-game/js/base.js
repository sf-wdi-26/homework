//When window loads, initialize homepage and functions that need to run 
$(document).ready(function(){
//when start button is clicked, call all of the functions to append new html elements to the window and to add event listeners on the submit and next buttons; once start is clicked, set timeout function to reload page 20 seconds after the 1st question and each consecutive question after 15 seconds 
      $("#start").click(function(){
          startFunctions();
          $("#submit").click(function(){
            submitFunctions();
            });
          setTimeout(function() { 
               document.getElementById("submit").click();
            }, 30000);
          $("#next").click(function(){
              nextFunctions();
              });
        });
});

//GLOBAL VARIABLES
//elements to be appended to the page after buttons are clicked on
var formString = "<label for='answer'>Name the restaurant depicted below in the map</label> <input type='answer' class='form-control' id='answer' placeholder='Restaurant Name'>";

var submitString = "<a href='#' class='action-button animate red' id = 'submit'>Submit</a>";
//submit button is removed after last question

var nextString = "<a href='#' class='action-button animate blue' id = 'next'>Next</a>";
//next button is removed after last question

var hintString = "<a href='#' class='action-button animate green' id = 'hint'>Hint</a>";
//hint string updates it's text every time it is clicked until we reach the last letter of the restaurant name; this is removed after the last question

var resetString = "<a href='#' class='action-button animate green' id = 'reset'>Play Again</a>";
//this resets the page

//variables used to keep track of the score, user's input for answers and the actual solutions (restaurant names pulled from Google Place search near General Assembly's coordinates)
var scoreRight = 0;
var count = 0;
var solution;
var solutionLower;
var solutionArray = [];
var userInput;
var userInputLower;
var userInputArray =[];
var indexNumberUsed = [];
var arrRandomTen = [];
var addressDisplayed;
//variables used to generate the hint display feature
var hintDisplayed = [];
var hintDisplayedLast;
var concatenateHintDisplayed;
var countHint = 0;
var solutionInLetters;

//callback functions and methods run when start button is clicked on 
function startFunctions(){
  generateRandomArray();
  $("#instructions").html("");
  $("#insertAddress").append(addressDisplayed);
  $("#insertForm").html(formString);
  $("#insertSubmit").html(submitString);
  $("#insertHint").html(hintString);
  $("#insertNext").html(nextString);
  $("#start").hide();  
  initialize(); 
  displayHintCount();  
}

//callback functions and methods run when submit button is clicked on 
function submitFunctions(){
  initialize();
  countHint=0;
  checkAnswer();
  $("#answer").val("");
    displayWinnings();
    resetHint();
  setTimeout(function() { 
     document.getElementById("submit").click();
      }, 20000);
}

//callback functions and methods run when next button is clicked on 
function nextFunctions(){
  initialize();
  countHint = 0;
  resetHint();
  displayWinnings();
  setTimeout(function() { 
    document.getElementById("submit").click();
    }, 20000);
}

//function used to reset the hint button and empty out it's text and return it back to "hint"
function resetHint(){
    document.getElementById("hint").textContent = "Hint";
    countHint=0;
}

//Function used to create an array of 10 numbers between 1 through 10 that are randomly sorted; this is used later to call the restaurants to be displayed 
function generateRandomArray(){
  while(arrRandomTen.length<10){
    var randomNumber = Math.ceil(Math.random()*10);
    var found = false;
    for(var i = 0; i<arrRandomTen.length; i++){
      if(arrRandomTen[i]==randomNumber){
        found=true; 
        break;
        }
      }
      if(!found)arrRandomTen[arrRandomTen.length]=randomNumber;
    }  
  return arrRandomTen;
}

//function checks if user's answer is correct by matching it against the place name returned by the google place search; it also updates the solution array and userinput array
function checkAnswer(userInput, solution){
    userInput = $('#answer').val();
    userInputLower = String(userInput).toLowerCase();
    if(solutionLower==userInputLower){
      scoreRight++;
    } else {
      console.log("You answered incorrectly");
    }
    solutionArray.push(solution);
    userInputArray.push(userInput);
}

//function creates the google map for two instances: 
//1. when the count <5 it makes a map with a pointer at the location of the restaurant that corresponds to the nearby place called with the index value of the random number from the random array at the count
//2. when the count = 5 (at the end of the game), it creates a map with all of the 5 restaurants displayed

function initialize() {
//when we have not completed the game yet:
  if(count < 5){
      //default location of where map displays is general assembly
      var generalAssembly = new google.maps.LatLng(37.790841,-122.401280);

      var map = new google.maps.Map(document.getElementById('map'), {
        center: generalAssembly,
        zoom: 16,
        zoomControl: true,
        scaleControl: true
      });

      // Specify location, radius and place types for your Places API search.
      var request = {
        location: generalAssembly,
        radius: '300',
        types: ['restaurant']
      };

    //turn off labels from map for addresses and business names
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

      // Send request to Google API for nearby restaurant, if we get the return status of ok, we take the object of objects Google returns with the 20 results of restaurants and pull one of the restaurants to be displayed on the map; we display the restaurant at the index of the random number generated 
    
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            var place = results[arrRandomTen[count]];
            //set the solution for the current place to the name of the restaurant
            solution = results[arrRandomTen[count]].name;
            // lowercase the solution to account for user inputting lowercase guesses
            solutionLower = String(solution).toLowerCase();
            //push the answer to the solution array
            solutionArray.push(solutionLower);
            //split restaurant name into individual letters to display the hint which shows one letter each time the hint button is clicked 
            solutionInLetters = solution.split("");
            //get the address of the restaurant to append it to the window as additional hint
            addressDisplayed = String(results[arrRandomTen[count]].vicinity);
            $("#insertAddress").html("The address of this restaurant is: " + addressDisplayed);

            //draw a marker on the location of the restaurant
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
              });

            //update the count which is used to determine the random number which is then used to select the restaurant to be displayed 
            count++;
            //remove the random number already used to ensure that we don't select the same place twice
            indexNumberUsed.push(arrRandomTen[count]);
            arrRandomTen.splice(count,1);
            }
      });
  }
}

// after five questions, end game and display map with all solutions
  function displayWinnings(){
    if(count === 5){
      console.log("End of game");
      $("#insertForm").html("");
      $("#insertHint").html("");
      $("#insertSubmit").html("");
      $("#insertNext").html("");
      $("#results").html("<p>You answered " + scoreRight + " correctly! Click on the markers to view the answers.</p>");
      $("#insertResetGame").html(resetString);
      $("#insertAddress").html('');
      resetGame();

      //generate map with all places
      var generalAssembly = new google.maps.LatLng(37.790841,-122.401280);
      var map = new google.maps.Map(document.getElementById('map'), {
          center: generalAssembly,
          zoom: 15,
          zoomControl: true,
          scaleControl: true
        });

      var request = {
          location: generalAssembly,
          radius: '300',
          types: ['restaurant']
        };
      var stylesArray = [
             {
               featureType: "poi",
               elementType: "labels",
               stylers: [
                 { visibility: "on" }
               ]
             }
           ];

        map.setOptions({styles: stylesArray});
    //add markers for the 5 solutions and allow user to click on each marker and view the restaurant name
      var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function(results, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            var y;
            var len = indexNumberUsed.length;
            var markers = [];
            for(y = 0; y<len; y++){
              var place = results[indexNumberUsed[y]];
              var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                name: place.name,
              });

              markers.push(marker);

              google.maps.event.addListener(markers[y], 'click', makeMarkerEvent(map, markers[y]));
            }
          }
        });
    }
}

//END OF FUNCTION INITIALIZE 

//generates the hint displayed when the hint button is clicked on; when we reach the end of the restaurant name; the button is refreshed with the original text of 'hint'
function displayHintCount(){
  $("#hint").click(function(){
      countHint++;
      hintDisplayed = [];
      hintDisplayedLast="";
      if (countHint<solutionInLetters.length){
        for(var i = 0; i<countHint; i++){
          hintDisplayed.push(solutionInLetters[i]);
        }
          document.getElementById("hint").textContent = "The name begins with " + hintDisplayed.join("");    
      } else{
        resetHint();
      }
  });
}

//Set the click event for the marker on the solutions page
function makeMarkerEvent(map, marker){
  return function(){
    $("#restaurantName").html("<p>" + marker.name + "</p>");
  };
}

//reload the page when play again is clicked
function resetGame(){
  $("#reset").click(function(){
    location.reload();
  });
}