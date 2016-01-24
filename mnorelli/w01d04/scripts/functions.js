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
setUpBoard();

//setUpResetButton();

// function setUpResetButton() {
//   var b = document.getElementById('reset');
//   b.addEventListener("click", clearBoard(), false);
// }

function clearBoard() {
  var sq = document.getElementsByClassName("square");
  for (var x in sq) {sq[x].innerHTML = '';}
}

function setUpBoard() {
  for (var x=spaces.length-1;x>=0;x-=1) {cells[spaces[x]]=null;}
}

function mark(player,space) {
  cells[space]=player;
  a=document.getElementById(space);
  a.innerHTML=player;
}

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