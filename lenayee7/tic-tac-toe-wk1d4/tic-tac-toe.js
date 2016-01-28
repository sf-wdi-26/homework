
window.onload = start;
// var players = ["X", "O"];
// var boxes = document.getElementByTagName("td");
// var currentTurn = O;
// var winner;
// var turn;
// var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
// [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

alert('hi');

function start() {
	startGame();
	message();
}

function startGame() {
	var turn = "X";
	message(document.turn + " gets to start.");
}

//How do I change text from X's & O's turn & populate text "X" or "O"
function message(msg) {
	document.getElementByID("message").textContent = "It is O's turn";
}

function nextMove(square) {
	square.innerText = document.turn;
}

startGame();


//Let's play Tic Tac Toe

// How do I logically plan out tic tac toe?
// How do i know what to give an ID and class to?
// How do I determine what variables to create? global or local?
// How do I break game up into pieces - layout whole game then start coding?
// Which functions runs first; what functions to nest?


//show "message" if it is "X" or "O" turn
	//if it's X's turn create a "click" eventlistener on one of the 9 boxes
	//that sets value "X" in box.
	//

//

//




//Reset Button
	//game to start over



// function addXOListener() {
// 	for (var i = boxes.length - 1; i >=0; i--) {
// 		boxes[i].addEventListener(onclick,addXorO);
// 	}
// }

// function addXorO() {
// 	if ()

// }

// function resetGame() {
// 	if 

// document.getElementById("reset").addEventListener("click", function(){
//     alert("Game Over");

//    }
// });







