
var squares = document.getElementsByTagName("td");
var XMoves = [];
var OMoves = [];
var count = 1;
var isThree = 0;

var winConditions = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


startGame();
addReset();

function startGame() {
  for (var i = squares.length - 1; i >= 0; i--) {
    squares[i].addEventListener("click", addXorO);
  }
}

function addXorO(event){
  if (event.target.innerHTML.length === 0){
    if (count % 2 === 0) {
      OMoves.push(parseInt(event.target.getAttribute("cell")));
      event.target.innerHTML = "O";
      event.target.setAttribute("class","O");
      count++;
      checkForWin(OMoves, "O");
    }
    else {
      XMoves.push(parseInt(event.target.getAttribute("cell")));
      event.target.innerHTML = "X";
      event.target.setAttribute("class","X");
      count++;
      checkForWin(XMoves, "X");
    }
  if (count >= 10){
    var conf = confirm("It's a draw, do you want to play again?");
    if(conf){
      clearBoard();
    }
  }
 }
}

function checkForWin(movesArray, name){
  for (i = 0; i < winConditions.length; i++) {
    isThree = 0;
    for (var j = 0; j < winConditions[i].length; j++) {
      if(movesArray.indexOf(winConditions[i][j]) !== -1){
        isThree++;
      }
      if(isThree === 3){
        alert("Game over, " + name + " wins!");
        clearBoard();
      }
    }
  }
}

function addReset(){
  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", clearBoard);
}

function clearBoard(){
  for (var i = squares.length - 1; i >= 0; i--){
    squares[i].setAttribute("class","clear");
    squares[i].innerHTML = "";
  }
    createBoard();
}

function createBoard(){
  OMoves = [];
  XMoves = [];
  count = 1;
  isThree = 0;
}