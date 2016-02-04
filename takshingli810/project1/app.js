//Project 1 Javascript
//This will be a memory game where digits/numbers will pop up on the screen and 
//players would have to remember it to gain points.
//This game will be 15 rounds per player and random numbers will flash from 1-5 digits. 
//players would have 2-3 seconds to memorize the number shown. 
//players will submit answer after all the number is shown
//scripts will be used to create animations.  


$(function(){
	console.log("ready")
	var numbers = ""; //empty number box
	var turns = 5;
	var scores = 0;

	$("#startButton").click(function(){ 
		showNumber();
		enterAnswer();
		// compareAnswer();
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
				var nextNum = Math.floor(Math.random() * 10);
				numbers += nextNum;
				$("#numbers").html(nextNum);
				console.log(numbers);
				if(numbers.length < turns){
					showNumber();
				} // else {
				// 	$("#numbers").html("Enter guess");
				// }
			}, 500);
			compareAnswer();
			
		// var wait = function(){ console.log("waiting"); };
		// console.log(numbers);
	}

//

//p1 selector .append(score)


// taking the answer in from user
	function enterAnswer(e){
		$("#enterButton").on("submit", function(){ 
			e.preventDefault;
			var userAnswer = $("#userAnswer");
		});
	}


// write a function where input numbers will be compared with numbers string
// increment turns
	function compareAnswer(){
		if (userAnswer == nextNum) {
			$("#rightWrongLi").append("Correct Answer");
			turns++
			scores += scores; 
		}
		else if (userAnswer != nextNum);
			$("rightWrongLi").append("Wrong Answer")
			turns++
			return scores;
	}

});


