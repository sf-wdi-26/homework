var body = document.body;
var gameboard = body.querySelector(".gameboard");
var cell = gameboard.querySelectorAll(".cell");
var whoGoes = body.querySelector("#whoGoes");
var player;
var gameOver;
var winConditions = [[0,1,2], [3,4,5], [6,7,8],
                       [0,3,6], [1,4,7], [2,5,8],
                       [0,4,8], [6,4,2]];

//functions that clear the board/reset clicks
window.addEventListener("load", setup, true);

function setup() {
  newGame();
  body.querySelector("#resetButton").addEventListener("click", newGame, true);
}

function newGame() {
  for (i = 0; i < cell.length; i ++) {
    cell[i].textContent = " ";
  }
  player = "X";
  gameOver = false;
  setText();
  setBoard();
}

function setBoard (){
  for (var i = 0; i < cell.length; i++){
    cell.textContent = "cell[i]";
  }
}

function setText() {
    whoGoes.textContent = "It's " + player + "'s turn!";
}

function setBox(box){
  if (gameOver) {
    return;
  }
  cell[box] = player;
  checkState();
  if (gameOver) {
    return;
  }
    changePlayer();
    setBoard();
    setText();
}

function changePlayer(){
  if (player == "O")
    player = "X";
  else
    player = "O";
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

function yoyo() {
  alert('working');
}

function onClick() {
  for (i = 0; i < cell.length; i ++) {
        cell.addEventListener("click", yoyo());
    // cell.addEventListener("click", setBox([i]));
  }
}

   function test(index,value) {
   if (cell[winConditions[index][0]] == cell[winConditions[index][1]] 
    && cell[winConditions[index][0]] == cell[winConditions[index][2]] 
    && cell[winConditions[index][0]] != " ") {
      gameOver = true;
      whoGoes.textContent = "Player " + player +  " wins!";
      setBox();
   }
  }

function checkState(){
  for (i = 0; i < winConditions; i ++){
    test();
  }
}



//function that changes header text




//functions that put x or o in boxes


// function markX () {

// }

// function markBox() {
//   //if number clicks is even
//   if (clicks % 2 === 0) {
//       for (i = 0; i < cell.length; i ++) {
//         cell[i].addEventListener("click", function(e) {
//        e.target.classList.add("marked");
//         e.target.textContent = "X";
//         clicks++;
//       });
//     } 
//   }else {
//     //if number clicks is odd
//       cell[i].addEventListener("click", function(e) {
//         e.target.classList.add("marked");
//         e.target.textContent = "O";
//         clicks++;
//       });
//     }
// }
// markBox();

//functions that keep track of clicks

// function addClick() {
//   for (i = 0; i < cell.length; i ++) {
//   clicks++;
//   }
// }

// function keepTrack () {
//   for (i = 0; i < cell.length; i ++) {
//     cell[i].addEventListener("click", addClick());
//   }
// }

// keepTrack();
//fundamentals stuff



//functions that insert pretty hover colors

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

onClick();
