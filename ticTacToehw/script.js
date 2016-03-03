
window.onload = start;
var boxes = document.getElementsByTagName("td");
var turnText;
var counter = 1;
var winCounter = 0;
var OMoves = [];
var XMoves = [];

var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


function start() {
  addXandOListener();
  addResetListener();
  turnText = document.querySelector(".playerTurn");
  
}

	function addXandOListener(){
		for (var i = boxes.length - 1; i >= 0; i--){
			boxes[i].addEventListener("click", addXorO);
		}
	}

	function addXorO(event){
		if (event.target.innerHTML.length === 0){
			if (counter % 2 === 0) {
				OMoves.push(parseInt(event.target.getAttribute("id")));
				event.target.innerHTML = "O";
				event.target.setAttribute("class", "O");
				turnText.innerHTML = "It is X's turn";
				counter ++;
				checkForWin(OMoves, "O");
			}
			else {
				XMoves.push(parseInt(event.target.getAttribute("id")));
				event.target.innerHTML = "X";
				event.target.setAttribute("class", "X");
				turnText.innerHTML = "It is O's turn";
				counter ++;
				checkForWin(XMoves, "X");
			}
			if (counter >= 10) {
				turnText.innerHTML = "Game's spots are full!";
				var conf = confirm("It is a tie, do you want to clear the board?");
				if (conf) {
					resetBoard();
				}
			}
		}

	}

function addResetListener(){
  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", resetBoard);
}

function checkForWin(movesArray, name){
 
  for (i = 0; i < winningCombinations.length; i++) {
    
    winCounter = 0;
    
    for (var h = 0; h < winningCombinations[i].length; h++) {
      // if the number in winning combo array is === a number in moves array, add to winCounter
      if(movesArray.indexOf(winningCombinations[i][h]) !== -1){
        winCounter++;
      }
      // if winCounter === 3 that means all 3 moves are winning combos and game is over!
      if(winCounter === 3){
        alert("Game over, " + name + " wins!");
        resetBoard();
      }
    }
  }
}


function resetBoard(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].innerHTML="";
    boxes[i].setAttribute("class","clear");
  }
  OMoves = [];
  XMoves = [];
  winCounter=0;
  counter = 1;
  turnText.innerHTML = "It is X's turn";
}

