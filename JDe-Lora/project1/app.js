
// $(document).ready(function(){

// });


//generates random letter to display inside the text area box
// function letterrandomize(){

//     var text = "";
//     var possible = "abcdefghijklmnopqrstuvwxyz";

//     for( var i=0; i < 25; i++ )
//         text += possible.charAt(Math.random() * possible.length);

//     return text;
// }
//in the alphabe that shows what letter is representing in
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var currentLetter;
//what the recent letter in that was chosens

function takeTurn(event) {
	console.log("turn taken");
	var userInput = String.fromCharCode(event.which);
	//gives out the user input on what to see on the lettet that is being
	//being shown
	if (userInput === currentLetter) {


		//move by percentage, instead of px amount
		currentPosition = $('.spaceShip').css("left");
			// $('.spaceship').stop(('.finish'), 600);
			 if(parseInt(currentPosition) >= 1320){
			 	
			} else{
				var newPosition = (parseInt(currentPosition) + 50);
				$('.spaceShip').animate({ left: newPosition + "px"},"slow");
			}
		}
		// checkWinner();
		//if userInput is on the same letter that is presenting then
		//should move the spaceShip to the right
		generateRandomLetter(alphabet);
		//generates the next random in the alphabet
	
}



function generateRandomLetter(letters) {
  var max = letters.length - 1;
  var min = 0;
    //max and min are what is the first in the array and last in the array
  var index = Math.floor(Math.random() * (max - min + 1)) + min;
  //index is equal to make a random letter in the aplhabet
  currentLetter = letters[index];
  //whatever the currentLetter is coming from the letters in the index
	$("#letter-box").text(currentLetter);
	//from the div of the box to show the letter put that in the text
}

// function starGame(){
//   alert("The goal of the game is type what is in the box in the center the screen and have the spaceship reach the end of the screen, Have Fun!!");
// }
// setTimeout(starGame, 250)

// function checkWinner(){
// 	var Ship = $(".spaceship").
// 	var showfinish = $('#finish');
// 	if (Ship >= showfinish)
// 		return false;

// }

//1st method
//when ship gets to finish div, end game
//ship moves 5% per letter, takes x # of correct letters to get to end
//if x # of correct letter has happened, stop ship from moving, display win message

//2nd method
//when ship collides with finish div, end game


	// function startFinish(){
	// 	$("#ship").
	// }


$(function(){
	console.log("Linked");
	generateRandomLetter(alphabet);
	$(window).keypress(takeTurn);
		var x = 0;
		setInterval(function(){
			x-=1;
			$('body').css('background-position', x + 'px 0');
		}, 10);

});
//have these run when the windows is on after it is started

















































//the number 62 through 90 are the keycodes for the letters
//needing to put in this array to get it as a function 
//to show what is being worked at in the array
// var letterArray = [62-90];
	// $(".spaceShip").click(function(){
	// // 	//alert();
	// $(window).on(keypress)
	// // });

	// $("spaceShip").keydown(function(e){
	// 	if ((e.keyCode || e.which) == 37)
	// 		console.log("Hi!");

	// });

// 	// $(document).keydown(function (key) {
 //        switch (parseInt(key.which, 10)) {
 //        case 65: //a
 //            $('img').animate({
 //                left: "+=500"
 //            }, 'fast');
 //            break;
 //        case 83: //s
 //            $('img').animate({
 //                top: "+=25"
 //            }, 'fast');
 //            break;
 //        case 87: //w
 //            $('img').animate({
 //                top: "-=25"
 //            }, 'fast');
 //            break;
 //        case 68: //d
 //            $('img').animate({
 //                left: "+=25"
 //            }, 'fast');
 //            break;
 //        default:
 //            break;
 //        }
     // });