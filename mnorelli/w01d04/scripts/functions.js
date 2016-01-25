console.log("Linked.");


/*
Setup
 ✓ setup array to hold starting values
  | a | b | c |
  | d | e | f |
  | g | h | i |

start game
 - click "x" or "o" to begin
 - flash ready, set, go

play
 - click
 - place letter
  - change screen and update array
    - check for win
    - change letter
    - alternate
 - on win, celebrate, turn off event listeners
 - hold for reset button
 - loop to start

 reset
  - on reset at any time, restart the game
*/
cells = {};
spaces = ['a','b','c','d','e','f','g','h','i'];
markColor='red';

clearBoard();
setUpBoardClicks();
setUpResetButton();


function report(status) {
  var a=document.getElementsByClassName("message");
  a[0].textContent=status;
}


function setUpResetButton() {
  var b = document.getElementById('reset');
  b.addEventListener("click", clearBoard, false);
}

function clearBoard() {
  for (var x=spaces.length-1;x>=0;x-=1) {
    a=document.getElementById(spaces[x]);
    a.innerHTML='';
    a.style.pointerEvents = 'auto';
  }
  setUpBoard();
}

function setUpBoard() {
  for (var x=spaces.length-1;x>=0;x-=1) {cells[spaces[x]]=null;}
  report("Ready to play?  Click a space. 'X' starts the game!");
  player='x';
  markColor='red';
}


/***** put a click listener on each square ***********/
function setUpBoardClicks() {
  var ids = [];
  for (var x=spaces.length-1;x>=0;x-=1) {
      ids.unshift(document.getElementById(spaces[x]));
  }

  function makeClickHandler(i) {
      "use strict";
      return function () {
          mark(player,spaces[i]);
      };
  }

  for (var y=spaces.length-1;y>=0;y-=1) {
      ids[y].addEventListener("click", makeClickHandler(y));
  }
}


function alternatePlayer() {
  if (player==='x') {
    player='o';
    markColor='darkcyan';
  }
  else {
    player='x';
    markColor='red'
  }
}

function mark(player,space) {
  cells[space]=player;
  a=document.getElementById(space);
  a.innerHTML=player;
  a.style.color=markColor;
  a.style.pointerEvents = 'none';
  alternatePlayer();
  if (getWinner()!==null) {endGame();}
}

function endGame() {
    for (var x=spaces.length-1;x>=0;x-=1) {
      a=document.getElementById(spaces[x]);
      a.style.pointerEvents = 'none';
    }
    report("Player "+getWinner().toUpperCase()+" WINS!!");
}
/***** scoring logic ***********/
var getWinner = function() {
  if (winnerIs('x')) {
    return 'x';
  }
  if (winnerIs('o')) {
    return 'o';
  }
  return null;
};

var winnerIs = function(player) {
  return winsRow(player) || winsColumn(player) || winsDiagonal(player);
};

var winsRow = function(player) {
  return allThree(player, cells.a, cells.b, cells.c) ||
         allThree(player, cells.d, cells.e, cells.f) ||
         allThree(player, cells.g, cells.h, cells.i);
};

var winsColumn = function(player) {
  return allThree(player, cells.a, cells.d, cells.g) ||
         allThree(player, cells.b, cells.e, cells.h) ||
         allThree(player, cells.c, cells.f, cells.i);
};

var winsDiagonal = function(player) {
  return allThree(player, cells.a, cells.e, cells.i) ||
         allThree(player, cells.c, cells.e, cells.g);
};

var allThree = function(player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
};