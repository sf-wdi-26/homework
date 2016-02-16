console.log ("Linked.");
var squares;
var turn;
window.onload = docLoad;
var counter = 0; 

function docLoad (){

    squares = document.querySelectorAll("td");
    console.log('squares: ', squares);

	squareClickListeners();
	//resetClick();
	turn = whoStarts();
	addResetListener();

}


function whoStarts () {
	if (Math.random > 0.5) {
		document.querySelector(".playerSelection").textContent ="It is X's turn.";
		return 'X';
	}
	else { 
		document.querySelector(".playerSelection").textContent ="It is O's turn.";
	 	return 'O';
	}
}

function squareClickListeners () {
	for (i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", addXorO);
	}
} 

function addXorO (event) {
	console.log(this);
	if (this.textContent === "" && turn !== "gameOver")
		this.textContent = turn 

	this.setAttribute("class", turn);
	turn === "X" ? turn = "O" : turn = "X"

	checkForWin();
}

function checkForWin (){ 
	var winner;
	if (winner = getWinner()){
	gameOver(winner);
	}

	else if (++counter === 9) {
		gameOver('tie')
	}

	else displayTurn()
}



function gameOver(winner) {
	if (winner === 'tie')
	alert ("tie")

	else {alert ("winner is " + winner[0])}

		turn = "gameOver"


}


function getWinner() {
    if (winnerIs('X')) {
      return 'X' + winnerIs('X');
    }
    else if (winnerIs('O')) {
      return 'O' + winnerIs('O');
    }
    else
      return null;
  }


function winnerIs(player) {
    return allThree(player, squareValue('0'), squareValue('1'), squareValue('2')) ||
           allThree(player, squareValue('3'), squareValue('4'), squareValue('5')) ||
           allThree(player, squareValue('6'), squareValue('7'), squareValue('8')) ||
           allThree(player, squareValue('0'), squareValue('3'), squareValue('6')) ||
           allThree(player, squareValue('1'), squareValue('4'), squareValue('7')) ||
           allThree(player, squareValue('2'), squareValue('5'), squareValue('8')) ||
           allThree(player, squareValue('0'), squareValue('4'), squareValue('8')) ||
           allThree(player, squareValue('2'), squareValue('4'), squareValue('6'));

 }

function allThree(player, squareOne, squareTwo, squareThree) {
    if ((squareOne[0] === player) && (squareTwo[0] === player) && (squareThree[0] === player))
      return squareOne[1] + squareTwo[1] + squareThree[1];

}

function squareValue(key) {
    switch(key) {
      case '0': return squares[0].textContent + '0';
      case '1': return squares[1].textContent + '1';
      case '2': return squares[2].textContent + '2';
      case '3': return squares[3].textContent + '3';
      case '4': return squares[4].textContent + '4';
      case '5': return squares[5].textContent + '5';
      case '6': return squares[6].textContent + '6';
      case '7': return squares[7].textContent + '7';
      case '8': return squares[8].textContent + '8';
      default : console.log('Something went wrong');
    }
  }

 
  function addResetListener(){
  var resetButton = document.getElementById("clearboard");
  resetButton.addEventListener("click", resetBoard);
}

  function resetBoard(){
  for (var i = 0; i < squares.length ; i++) {
    squares[i].textContent="";
    squares[i].setAttribute("class","clear");
  }
  
 }




