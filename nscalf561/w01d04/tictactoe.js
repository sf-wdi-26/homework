window.onload = initializer;

var playStatus = document.querySelector(".playStatus");
var turnFlag = 0;
var turnDecision = "";	
var winFlag = false;
//Grabs all of the boxes in a nodelist
var boxNodeList = document.querySelectorAll(".box");
//sets an array equal to the boxes from the nodelist
var boxArr = Array.from(document.querySelectorAll(".box"));


function initializer () {
	//initializes the event listener on all of the boxes
	for (var i = 0; i < boxNodeList.length; i++) {
		boxNodeList[i].addEventListener('click', boxFiller);
	}

	//setting up the reset button, it will alert when someone quits.  Then it will get the box class items (occupied by X's 
	//and O's), and clear them all, as well as reset all of the variables.
	document.querySelector(".resetButton").addEventListener('click', function(e) {
		alert("I see someone's a fucking quitter.");
		winFlag = false;
		playCount = 0;
		turnDecision = "";
		turnFlag = 0;
		document.body.style.backgroundImage = '';

		//this loops through the boxes and clears the contents of each of them
		for (var i=0; i < boxArr.length; i++){
			boxArr[i].textContent = " ";
		}
		initTurn();
	});
	initTurn();
}

//randomizes who starts, X or O with Math.random(), and then set the turnFlag, call occupyTurnMessage to print the initial
//turn message to the user
function initTurn () {
	if (Math.random() > 0.5) {
		turnDecision = "X";
		occupyTurnMessage();
		turnFlag = 0;
	} else {
		turnDecision = "O";
		occupyTurnMessage();
		turnFlag = 1;
	}
}

//called everytime a turn occurs and will decide what letter is played based off whose turnit is.  
//It will alternate with every play by incrementing the flag by 1.  Even numbers are X's turns, 
//odds are O's. This does not determine who goes first.
//This will return who's turn it is with a variable, turnDecision.
function whoseTurn () {
	if (turnFlag % 2 === 0) {
		turnDecision = "X";
	} else if (turnFlag % 2 === 1) {
		turnDecision = "O";
	}
	return turnDecision;
}

//will input an X or O into the boxes, based off the output of a function deciding who's turn it is
function occupyTurnMessage () {
	if (turnDecision == "X" && winFlag === false) {
		playStatus.textContent = "It is Player X's turn.";
	} else if (turnDecision == "O" && winFlag === false) {
		playStatus.textContent = "It is Player O's turn.";
	} else if (winFlag == "X") {
		document.body.style.backgroundImage = 'url(HowItWent.jpg)';
		playStatus.textContent = "Player X won.  Player O would appear to be a big old loser.";
	}  else if (winFlag == "O") {
		document.body.style.backgroundImage = 'url(HowItWent.jpg)';
		playStatus.textContent = "Player O won.  Player X would appear to be a big old loser.";
	} else if (winFlag == "no") {
		playStatus.textContent = "You're all awful at this.";
	} else {
		playInit();
		//test code
		playStatus.textContent = "Some shit happened.  It's no one's turn yet.  What're you still doing here?  The movie is over.  Go home.";
	}
}

function boxFiller (e) {
	if (e.target.textContent == " " && winFlag != "X" && winFlag != "O") {
		occupyTurnMessage();
		e.target.textContent = whoseTurn();
		turnFlag++;
		winDecider();
	}
}

function winDecider () {
	if (boxArr[0].textContent == "X" && boxArr[1].textContent == "X" && boxArr[2].textContent == "X") {
		winFlag = "X";
		alert("Player X has Won!");
		occupyTurnMessage();
	} else if (boxArr[3].textContent == "X" && boxArr[4].textContent == "X" && boxArr[5].textContent == "X") {
		winFlag = "X";
		alert("Player X has Won!");
		occupyTurnMessage();
	} else if (boxArr[6].textContent == "X" && boxArr[7].textContent == "X" && boxArr[8].textContent == "X") {
		winFlag = "X";
		alert("Player X has Won!");
		occupyTurnMessage();
	} else if (boxArr[0].textContent == "X" && boxArr[3].textContent == "X" && boxArr[6].textContent == "X") {
		winFlag = "X";
		alert("Player X has Won!");
		occupyTurnMessage();
	} else if (boxArr[1].textContent == "X" && boxArr[4].textContent == "X" && boxArr[7].textContent == "X") {
		winFlag = "X";
		alert("Player X has Won!");
		occupyTurnMessage();
	} else if (boxArr[2].textContent == "X" && boxArr[5].textContent == "X" && boxArr[8].textContent == "X") {
		winFlag = "X";
		alert("Player X has Won!");
		occupyTurnMessage();
	} else if (boxArr[0].textContent == "X" && boxArr[4].textContent == "X" && boxArr[8].textContent == "X") {
		winFlag = "X";
		alert("Player X has Won!");
		occupyTurnMessage();
	} else if (boxArr[2].textContent == "X" && boxArr[4].textContent == "X" && boxArr[6].textContent == "X") {
		winFlag = "X";
		alert("Player X has Won!");
		occupyTurnMessage();
	} else if (boxArr[0].textContent == "O" && boxArr[1].textContent == "O" && boxArr[2].textContent == "O") {
		winFlag = "O";
		alert("Player O has Won!");
		occupyTurnMessage();
	} else if (boxArr[3].textContent == "O" && boxArr[4].textContent == "O" && boxArr[5].textContent == "O") {
		winFlag = "O";
		alert("Player O has Won!");
		occupyTurnMessage();
	} else if (boxArr[6].textContent == "O" && boxArr[7].textContent == "O" && boxArr[8].textContent == "O") {
		winFlag = "O";
		alert("Player O has Won!");
		occupyTurnMessage();
	} else if (boxArr[0].textContent == "O" && boxArr[3].textContent == "O" && boxArr[6].textContent == "O") {
		winFlag = "O";
		alert("Player O has Won!");
		occupyTurnMessage();
	} else if (boxArr[1].textContent == "O" && boxArr[4].textContent == "O" && boxArr[7].textContent == "O") {
		winFlag = "O";
		alert("Player O has Won!");
		occupyTurnMessage();
	} else if (boxArr[2].textContent == "O" && boxArr[5].textContent == "O" && boxArr[8].textContent == "O") {
		winFlag = "O";
		alert("Player O has Won!");
		occupyTurnMessage();
	} else if (boxArr[0].textContent == "O" && boxArr[4].textContent == "O" && boxArr[8].textContent == "O") {
		winFlag = "O";
		alert("Player O has Won!");
		occupyTurnMessage();
	} else if (boxArr[2].textContent == "O" && boxArr[4].textContent == "O" && boxArr[6].textContent == "O") {
		winFlag = "O";
		alert("Player O has Won!");
		occupyTurnMessage();
	} else if (turnFlag > 9) {
		winFlag = "no";
		alert("You're complete garbage at this game.");
	}

}

























