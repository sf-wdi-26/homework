var body = document.body;
var gameboard = body.querySelector(".gameboard");
var cell = gameboard.querySelectorAll(".cell");
var player;
var winner;
var oWins = 0;
var xWins = 0;

window.addEventListener("load", startGame, true);

function startGame() {
	newGame();
	player = "X";
	winner = null;
	setMessage(player + "'s turn to go!");
	body.querySelector("#resetButton").addEventListener("click", startGame, true);
}

function setMessage(msg) {
	var whoGoes = body.querySelector("#whoGoes");
	whoGoes.textContent = msg;
}

function setScoreboard(msg) {
	var scoreboard = body.querySelector("#scoreboard");
	scoreboard.textContent = msg;
}

function getScore () {
	if (winner == "O") {
		oWins += 1;
	} else if (winner == "X") {
		xWins += 1;
	}
	setScoreboard("The score is O: " + oWins + " to X: " + xWins);
}

function nextMove(square) {
	if (winner !== null) {
		setMessage("Stop clicking! " + winner + " already won! Get over it.");
	} else if (square.textContent === "") {
		square.textContent = player;
		switchPlayer();
	} else {
		setMessage("That square is already occupied! Choose another square.");
	}
}

function switchPlayer() {
	if (checkForWinner(player)) {
		winner = player;
		setMessage(player + " wins the grand prize!");
		getScore();
	} else if (player === "X") {
		player = "O";
		setMessage("Now it's " + player + "'s turn to go");
	} else {
		player = "X";
		setMessage("Now it's " + player + "'s turn to go");
	}
}

function checkForWinner(move) {
	var result = false;
	if (checkRow(1, 2, 3, move) || 
		checkRow(4, 5, 6, move) || 
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) || 
		checkRow(2, 5, 8, move) || 
		checkRow(3, 6, 9, move) || 
		checkRow(1, 5, 9, move) || 
		checkRow(3, 5, 7, move)) {

		result = true;
	}
	return result;
}

function checkRow(a, b, c, move) {
	var result = false;
	if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
		result = true;
	}
	return result;
}

function getBox(number) {
	return gameboard.querySelector("#cell" + number).textContent;
}

function newGame() {
  for (i = 0; i < cell.length; i ++) {
    cell[i].textContent = "";
  }
}

function hoverColor() {
  for (i = 0; i < cell.length; i ++) {
    cell[i].addEventListener("mouseenter", function(e) {
    e.target.classList.add("hoverColor");
    });
    cell[i].addEventListener("mouseleave", function(e) {
    e.target.classList.remove("hoverColor");
    });
  }
}
hoverColor();

var button = body.querySelector("#resetButton");

function buttonColor() {
  button.addEventListener("mouseenter", function(e) {
  e.target.style.color = "yellow";
  });
  button.addEventListener("mouseleave", function(e) {
  e.target.style.color = "white";
  });
}
buttonColor();