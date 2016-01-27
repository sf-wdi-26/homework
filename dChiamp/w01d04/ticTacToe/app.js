//guess i dont need this?!
// var a1 = document.getElementById('a1');

//player move
var playerXMove = "X";
var playerOMove = "O";

var winningPlayer; //set equal to player* in checkWinFn
var playerX = "player X";
var playerO = "player O";

var playerTurn = 0; // 0 for X, 1 for O
var totalNumberOfTurns = 0; //counts total num of turns, if == to 9 its a tie

//total player points
var playerXTotalPoints = 0; 
var playerOTotalPoints = 0;

// scoreboard
playerXTotalWins = 0;
playerOTotalWins = 0;

// assign each square a value
var squareValues = {
	a1: 1,
	a2: 2,
	a3: 4,
	b1: 8,
	b2: 16,
	b3: 32,
	c1: 64,
	c2: 128,
	c3: 256
}

/*

ATTEMPTS AT TRYING TO GET CELL ID
BY CLICKING ON IT

print only value of obj
for (var key in squareValues) {
  if (squareValues.hasOwnProperty(key)) {
    console.log(squareValues[key]);
  }
}

document.onclick = function getElIdFn (id) {
	var squareId = document.getElementById(id);
	console.log(squareId);
}
 
function getSquareValue (key) {
		console.log(squareValues[key]);
}


for (key in squareValues) {
	console.log(squareValues[key]);
}
*/


// window.

// event linter on click
// return document.getele by id 

// use this





// winnging combos
var winningValues = [7, 56, 73, 84, 146, 273, 292, 448];


// need to refactor so that i can have a function
// to get the table id on click and then add event listener to that
// Then iterate through the square values 

document.addEventListener("click", function(e) {
	// var cell = this.getElementById(e.target.id);
	var cellId = e.target.id;
	console.log(cellId);


	a1.addEventListener("click", function() {
		if (playerTurn === 0 ) {
			this.textContent = playerXMove;
			this.style.color = "red";
			playerTurn = 1;
			// need to find a way to get the val
			// for any square in squareValues obj:

			// playerXTotalPoints += squareValues.a1;

			playerXTotalPoints = squareValues.a1;
			console.log(playerXTotalPoints);
			console.log(squareValues.cellId);
			checkWin(playerXTotalPoints, playerX);

		} else if (playerTurn == 1) {
			this.textContent = playerOMove;
			playerTurn = 0;
			playerOTotalPoints += squareValues.a1;
			checkWin(playerOTotalPoints, playerO);
		}

		totalNumberOfTurns += 1;
		checkTotalTurns(totalNumberOfTurns);
	})
})


/*
a2.addEventListener("click", function() {
	if (playerTurn == 0 ) {
		this.textContent = playerXMove;
		this.style.color = "red";
		playerTurn = 1;
		playerXTotalPoints += squareValues.a2;
		checkWin(playerXTotalPoints, playerX);
	} else if (playerTurn == 1) {
		this.textContent = playerOMove;
		playerTurn = 0;
		playerOTotalPoints += squareValues.a2;
		checkWin(playerOTotalPoints, playerO);

	}
	totalNumberOfTurns += 1;
	checkTotalTurns(totalNumberOfTurns);
})


a3.addEventListener("click", function() {
	if (playerTurn == 0 ) {
		this.textContent = playerXMove;
		this.style.color = "red";
		playerTurn = 1;
		playerXTotalPoints += squareValues.a3;
		checkWin(playerXTotalPoints, playerX);

	} else if (playerTurn == 1) {
		this.textContent = playerOMove;
		playerTurn = 0;
		playerOTotalPoints += squareValues.a3;
		checkWin(playerOTotalPoints, playerO);
	}
	totalNumberOfTurns += 1;
	checkTotalTurns(totalNumberOfTurns);
})

b1.addEventListener("click", function() {
	if (playerTurn === 0 ) {
		this.textContent = playerXMove;
		this.style.color = "red";
		playerTurn = 1;
		playerXTotalPoints += squareValues.b1;
		checkWin(playerXTotalPoints, playerX);


	} else if (playerTurn == 1) {
		this.textContent = playerOMove;
		playerTurn = 0;
		playerOTotalPoints += squareValues.b1;
		checkWin(playerOTotalPoints, playerO);
	}

	totalNumberOfTurns += 1;
	checkTotalTurns(totalNumberOfTurns);
})

b2.addEventListener("click", function() {
	if (playerTurn == 0 ) {
		this.textContent = playerXMove;
		this.style.color = "red";
		playerTurn = 1;
		playerXTotalPoints += squareValues.b2;
		checkWin(playerXTotalPoints, playerX);
	} else if (playerTurn == 1) {
		this.textContent = playerOMove;
		playerTurn = 0;
		playerOTotalPoints += squareValues.b2;
		checkWin(playerOTotalPoints, playerO);

	}
	totalNumberOfTurns += 1;
	checkTotalTurns(totalNumberOfTurns);
})


b3.addEventListener("click", function() {
	if (playerTurn == 0 ) {
		this.textContent = playerXMove;
		this.style.color = "red";
		playerTurn = 1;
		playerXTotalPoints += squareValues.b3;
		checkWin(playerXTotalPoints, playerX);

	} else if (playerTurn == 1) {
		this.textContent = playerOMove;
		playerTurn = 0;
		playerOTotalPoints += squareValues.b3;
		checkWin(playerOTotalPoints, playerO);
	}
	totalNumberOfTurns += 1;
	checkTotalTurns(totalNumberOfTurns);
})

c1.addEventListener("click", function() {
	if (playerTurn === 0 ) {
		this.textContent = playerXMove;
		this.style.color = "red";
		playerTurn = 1;
		playerXTotalPoints += squareValues.c1;
		checkWin(playerXTotalPoints, playerX);


	} else if (playerTurn == 1) {
		this.textContent = playerOMove;
		playerTurn = 0;
		playerOTotalPoints += squareValues.c1;
		checkWin(playerOTotalPoints, playerO);
	}

	totalNumberOfTurns += 1;
	checkTotalTurns(totalNumberOfTurns);
})

c2.addEventListener("click", function() {
	if (playerTurn == 0 ) {
		this.textContent = playerXMove;
		this.style.color = "red";
		playerTurn = 1;
		playerXTotalPoints += squareValues.c2;
		checkWin(playerXTotalPoints, playerX);
	} else if (playerTurn == 1) {
		this.textContent = playerOMove;
		playerTurn = 0;
		playerOTotalPoints += squareValues.c2;
		checkWin(playerOTotalPoints, playerO);
	}
	totalNumberOfTurns += 1;
	checkTotalTurns(totalNumberOfTurns);
})


c3.addEventListener("click", function() {
	if (playerTurn == 0 ) {
		this.textContent = playerXMove;
		this.style.color = "red";
		playerTurn = 1;
		playerXTotalPoints += squareValues.c3;
		checkWin(playerXTotalPoints, playerX);

	} else if (playerTurn == 1) {
		this.textContent = playerOMove;
		playerTurn = 0;
		playerOTotalPoints += squareValues.c3;
		checkWin(playerOTotalPoints, playerO);
	}
	totalNumberOfTurns += 1;
	checkTotalTurns(totalNumberOfTurns);
})

*/

// helper functions

// check win by checking total value, and player
function checkWin (value, player) {
// should be able to iterate through winningValues array instead of:
	for (var i = 0; i < winningValues.length; i++) {
		if (value == winningValues[i]) {	
			winningPlayer = player;
			alert(winningPlayer + " wins!");
			totalWins(winningPlayer);
		} else if (value == 511) {
			alert("cat's game!")
		} 
		// else {
		// 	keep playing
		// }
	};
}

// if no player matches winning number
// and board is full, alert tie
function checkTotalTurns (num) {
	if (num == 9) {
		alert("cat's game!")
	};
}

// bonus

// scoreboard
// total wins function
var xScoreBoard = document.getElementById("x-total-wins");
var oScoreBoard = document.getElementById("o-total-wins");

function totalWins(winningPlayer) {
	if (winningPlayer == playerX) {
		playerXTotalWins += 1;
		xScoreBoard.textContent = "Player X Wins: " + playerXTotalWins;
	} else if (winningPlayer == playerO){
		playerOTotalWins += 1;
		oScoreBoard.textContent = "Player O Wins: " + playerOTotalWins;
	}
		// reset board
		totalNumberOfTurns = 0
		playerXTotalPoints = 0; 
		playerOTotalPoints = 0;
		playerTurn = 0;
		console.log(playerXTotalWins);
		console.log(playerXTotalPoints);
		console.log(totalNumberOfTurns);
}

// reset button

var resetButton = document.getElementById('reset');
resetButton.addEventListener("click", function reloadPage (){
	// window.location.reload();

	// bonus
	var cellArray = [a1,a2,a3,b1,b2,b3,c1,c2,c3];
	for (i=0; i<cellArray.length; i++) {
		cellArray[i].style.color = "grey";
		cellArray[i].textContent = "";
	}
})

