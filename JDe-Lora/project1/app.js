//generates random letter to display inside the text area box
// function letterrandomize(){

//     var text = "";
//     var possible = "abcdefghijklmnopqrstuvwxyz";

//     for( var i=0; i < 25; i++ )
//         text += possible.charAt(Math.random() * possible.length);

//     return text;
// }

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var currentLetter;

function takeTurn(event) {
	console.log("turn taken");
	var userInput = String.fromCharCode(event.which);
	if (userInput === currentLetter) {
		$('.spaceShip').animate({ left: '+=50px' },"slow");
		generateRandomLetter(alphabet);
	}
}

function generateRandomLetter(letters) {
  var max = letters.length - 1;
  var min = 0;
  var index = Math.floor(Math.random() * (max - min + 1)) + min;
  currentLetter = letters[index];
}

$(function(){
	console.log("Linked");
	generateRandomLetter(alphabet);
	$(window).keypress(takeTurn);
});

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