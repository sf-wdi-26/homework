//Project 1 Javascript
//This will be a memory game where digits/numbers will pop up on the screen and 
//players would have to remember it to gain points.
//This game will be 15 rounds per player and random numbers will flash from 1-5 digits. 
//players would have 2-3 seconds to memorize the number shown. 
//players will submit answer after all the number is shown
//scripts will be used to create animations.  
var numberString = ""; //empty number box
var turns = 1;
var scores = 0;
var nextNum;


$(function(){
	console.log("ready")



	$("#startButton").click(function(){ 
		showNumber();
		// enterAnswer();
	});

	$("#enterForm").on("submit", function(e){
		e.preventDefault();
		var userAnswer = $(e.target).find("#userAnswer").val();
		compareAnswer(userAnswer);
		// clear form
		$("#userAnswer").val('');
	});
});

// function playGame(){
// 	console.log("playGame called");
// 	setTimeout(showNumber, 2000);
// }
//click start to start game.
function showNumber() {
	console.log("showNumber called");
	// create a timed loop that will present a series of numbers
		//present a number
		setTimeout(function(){
			$("#classLi").html(turns);
			nextNum = Math.floor(Math.random() * 10);
			numberString += nextNum;
			console.log("number string is", numberString)
			$("#numbers").html(numberString);
			if(numberString.length < turns){
				showNumber();
			 }  else {
			 		// $("#numbers").html("Enter guess");
			 // }
				setTimeout(function(){
					$("#numbers").html("Please enter the all the digit(s)");

				}, 400);
			} 

		}, 400);

		}	
	
	// var wait = function(){ console.log("waiting"); };
	// console.log(numbers);
	

//

//p1 selector .append(score)

// taking the answer in from user
// function enterAnswer(userAnswer){
// 	// e.preventDefault;
// 	console.log("userAnswer: " + userAnswer);
// 	compareAnswer(userAnswer, numberString);

// }



// write a function where input numbers will be compared with numbers string
// increment turns
function compareAnswer(userAnswer){
	console.log("compare answer called")
	turns += 1;
	if (userAnswer == numberString) {
		$("#rightWrongLi").append("<h1>Correct Answer</h1>");
		// $("#startButton").html("<button class='btn btn-secondary playAgain'>Play Again?</button>");
		scores += scores;
			setTimeout(function (){
				$("#rightWrongLi").html("");
			},500);
		}
		
	else if (userAnswer != numberString){
		$("#rightWrongLi").append("<h1>Wrong Answer</h1>");
		setTimeout(function (){
				$("#rightWrongLi").html("");
			},500);
	}
}



	// $("#classLi").d


