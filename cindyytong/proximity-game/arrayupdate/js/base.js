
//elements to be added to the page after start button is clicked on

var formString = "<label for='answer'>Name the restaurant depicted below in the map</label> <input type='answer' class='form-control' id='answer' placeholder='Restaurant Name'>";

var submitString = "<button type='button' id = 'submit' class='btn btn-success'>Submit</button>";

var skipString = "<button type='button' id = 'skip' class='btn btn-success'>Skip</button>";

//Initialize functions:

$(document).ready(function(){

//when start button is clicked, layout for first question is presented (map is generated and form for submission)
//insertForm, insertSubmit, insertSkip
      $("#start").click(function(){
        //create random array of 10
          generateRandomArray();
        //remove instructions
        // document.getElementById("instructions").innerHTML ="";
          // $("#instructions").html("");
      //   //add form for question submission and buttons skip and submit
      //       $("#insertForm").html(formString);
      //       $("#insertSubmit").html(submitString);
      //       $("#insertSkip").html(skipString);
      //       $("#start").hide();  
        
        //initialize the creation of the map/start the first question
        // initialize();   
        
        //when submit clicked, start next question and check answer, clear out text in form 
        // $("#submit").click(function(){
        //     initialize();
        //     checkAnswer();
        //     $("#answer").val("");
        // });

        // $("#skip").click(function(){
        //     // initialize();
        //     $("#answer").val("");
        // });

      });

  });


// Array of data points for restaurants near General Assembly

// var dataPoints = [
//   { name: "Tadich Grill",
//     lat: "37.793620",
//     lng: "-122.399471",
//     address: "240 California Street, San Francisco",
//   },

//   { name: "Cafe Claude",
//     lat: "37.790332",
//     lng: "-122.404517",
//     address: "7 Claude Lane, San Francisco",
//   },

//    { name: "Roy's",
//     lat: "37.788265",
//     lng: "-122.399109",
//     address: "575 Mission Street, San Francisco",
//   },

//   { name: "Per Diem",
//     lat: "37.790003",
//     lng: "-122.401267",
//     address: "43 Sutter Street, San Francisco",
//   },

//   { name: "Yank Sing",
//     lat: "37.789717",
//     lng: "-122.399426",
//     address: "49 Stevenson Street, San Francisco",
//   },
  
//    { name: "Michael Mina",
//     lat: "37.793461",
//     lng: "-122.399642",
//     address: "252 California Street, San Francisco",
//   },

//   { name: "Salt House",
//     lat: "37.788796",
//     lng: "-122.398456",
//     address: "545 Mission Street, San Francisco", 
//   },

//   { name: "The Plant Cafe Organic",
//     lat: "37.792829",
//     lng: "-122.397881",
//     address: "101 California Street, San Francisco",
//   },
  
//    { name: "B44",
//     lat: "37.791323",
//     lng: "-122.403648",
//     address: "44 Belden Place, San Francisco",
//   },

//   { name: "Barbacco",
//     lat: "37.793682",
//     lng: "-122.399179",
//     address: "220 California Street, San Francisco",
//   },

//   { name: "Plouf",
//     lat: "37.791323",
//     lng: "122.403648",
//     address: "40 Belden Place, San Francisco",
//   },
  
//    { name: "Mixt Greens",
//     lat: "37.791580",
//     lng: "-122.400611",
//     address: "120 Sansome Street, San Francisco",
//   },

//   { name: "Cafe Bastille California French Restaurant and Bistro",
//     lat: "37.791163",
//     lng: "-122.403606",
//     address: "22 Belden Place, San Francisco", 
//   },

//   { name: "Cafe Tiramisu",
//     lat: "37.791213",
//     lng: "-122.403641",
//     address: "28 Belden Place, San Francisco",
//   },
  
//    { name: "Sauce: Belden Place",
//     lat: "37.791483",
//     lng: "-122.403680",
//     address: "56 Belden Place, San Francisco"
//   },

//   { name: "Bob's Steak & Chop House",
//     lat: "37.793120",
//     lng: "-122.403178",
//     address: "500 California Street, San Francisco",
//   },

//   { name: "Credo",
//     lat: "37.792145",
//     lng: "-122.402041",
//     address: "360 Pine Street, San Francisco",
//   },
  
//    { name: "Gitane",
//     lat: "37.790337",
//     lng: "-122.404277",
//     address: "6 Claude Lane, San Francisco",
//   },

//   { name: "Sam's Grill & Seafood Restaurant",
//     lat: "37.791029",
//     lng: "-122.403584",
//     address: "374 Bush Street, San Francisco",
//   },

//   { name: "Max's Market Cafe and Catering Restaurant",
//     lat: "37.792062",
//     lng: "-122.403697",
//     address: "555 California Street, San Francisco"
//   }
// ];

//global variables used to keep track of store
var scoreRight = 0;
var count = 0;
var solution;
var solutionLower;
var solutionArray = [];
var userInput;
var userInputLower;
var userInputArray =[];


//function creates 10 random numbers between 1 to 30 and returns them in array of numbers 
var arrRandom = [];
    function generateRandomArray(){
      console.log("generateRandomArray called");
      while(arrRandom.length<20){
        var randomNumber = Math.ceil(Math.random()*19);
        var found = false;
        for(var i = 0; i<arrRandom.length; i++){
          if(arrRandom[i]==randomNumber){
            found=true; 
            break;}
          }
          if(!found)arrRandom[arrRandom.length]=randomNumber;
        }
      return arrRandom;
    }

//function checks if user's answer is correct (matches against what google provides); it also updates the solution array and userinput array

function checkAnswer(userInput, solution){
    userInput = $('#answer').val();
    userInputLower = String(userInput).toLowerCase();
    solutionLower = String(solution).toLowerCase();
    if(solutionLower==userInputLower){
      scoreRight++;
      console.log("You answered correctly " +scoreRight);
    } else {
      console.log("You answered incorrectly");
    }
    solutionArray.push(solution);
    userInputArray.push(userInput);
}

//function creates google map with one location identified based on random number generated by randomten
function initialize() {
    //get lat and lng for each datapoint but select the datapoints in random order using arrRandom
    var i = arrRandom[count];
    var lat = dataPoints[i].lat;
    var lng = dataPoints[i].lng;

      //update location of where map displays to center on datapoint
      var locationCenter = new google.maps.LatLng(lat,lng);

      var map = new google.maps.Map(document.getElementById('map'), {
        center: locationCenter,
        zoom: 15,
        scrollwheel: false,
      });

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

      //add marker for restaurant
      new google.maps.Marker({
            position: new google.maps.LatLng(lat,lng),
            map: map, 
            title: title
            });
      
      //set the solution for the current place to the name of the date point
          solution = dataPoints[i].name;
          console.log(solution);
          //push the answer to the solution array
          solutionArray.push(solution);
        
          //update the count and use this value for place index
          count++;
          console.log(count);
          arrRandom.splice(count,1);
          console.log(arrRandom);

    }
//END OF FUNCTION INITIALIZE -------------------------------------
