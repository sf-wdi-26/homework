var headline = document.querySelector("h2");        // variable to change instruction text
var resetButton = document.querySelector("button"); // variable to use reset button
var gameboard = document.querySelector("#gameboard"); // variable to select gameboard
var allChildren = gameboard.childNodes;             // array containing all squares
var topRow = document.getElementsByClassName("top-row");    // creating arrays for each row/colun/diagonal
var centerRow = document.getElementsByClassName("center-row");
var bottomRow = document.getElementsByClassName("bottom-row");
var leftColumn = document.getElementsByClassName("left-column");
var centerColumn = document.getElementsByClassName("center-column");
var rightColumn = document.getElementsByClassName("right-column");
var downDiag = document.getElementsByClassName("down-diag");
var upDiag = document.getElementsByClassName("up-diag");
var counter = 0;                                    // variable to keep track of number of moves made

resetButton.addEventListener("click", function(e){  // listen for reset button click
      counter = 0;                                  // resets counter
      for(var i = 0; i < allChildren.length; i++){  // loops through all children of gameboard (squares)
        if(allChildren[i].firstChild){              // if square has child div ...
        allChildren[i].removeChild(allChildren[i].firstChild); // remove it
        headline.textContent = "Player One (X), choose a square";
        }
      }
});

headline.textContent = "Player One (X), choose a square";

gameboard.addEventListener("click", function(e){
  var move = document.createElement("div");         // create new div for player's move
  if(counter < 9){                                  // while gameboard has been clicked less than 9 times
    if(counter % 2 === 0){                          // if counter is even
      move.className = "x";                         // adds .x to new div
      move.textContent = "X";                       // writes "X" on gameboard
      e.target.appendChild(move);                   // add X player's move to gameboard
      counter++;                                    // increment counter
      checkForWinner();                             // function call to check for winner
      if(!checkForWinner){                          // if not winner, next player's turn
        headline.textContent = "Player Two (O), choose a square";
      }
    }
    else if(counter % 2 !== 0){                     // if counter is odd
      move.className = "o";                         // adds .o to new dive
      move.textContent = "O";                       // writes "O" to gameboard
      e.target.appendChild(move);                   // add O player's move to gameboard
      counter++;                                    // increment counter
      checkForWinner();                             // function call to check for winner
      if(!checkForWinner){                          // if not winner, next player's turn
        headline.textContent = "Player One (X), choose a square";
      }
    }
  }
  else {                                            // displays "Game Over" when counter reaches 9
  headline.textContent = "Game Over.  Click Reset to start again!";
  }
});

function checkForWinner (){                       // function to check win conditions
                                                  // ugliest function ever?? (Perhaps
                                                  // AND IT DOESN'T EVEN WORK!!

  if((topRow[0].firstChild.className == "x") && (topRow[1].firstChild.className == "x") && (topRow[2].firstChild.className == "x")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((topRow[0].firstChild.className == "o") && (topRow[1].firstChild.className == "o") && (topRow[2].firstChild.className == "o")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((centerRow[0].firstChild.className == "x") && (centerRow[1].firstChild.className == "x") && (centerRow[2].firstChild.className == "x")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((centerRow[0].firstChild.className == "o") && (centerRow[1].firstChild.className == "o") && (centerRow[2].firstChild.className == "o")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((bottomRow[0].firstChild.className == "x") && (bottomRow[1].firstChild.className == "x") && (bottomRow[2].firstChild.className == "x")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((bottomRow[0].firstChild.className == "o") && (bottomRow[1].firstChild.className == "o") && (bottomRow[2].firstChild.className == "o")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((leftColumn[0].firstChild.className == "x") && (leftColumn[1].firstChild.className == "x") && (leftColumn[2].firstChild.className == "x")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((leftColumn[0].firstChild.className == "o") && (leftColumn[1].firstChild.className == "o") && (leftColumn[2].firstChild.className == "o")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((centerColumn[0].firstChild.className == "x") && (centerColumn[1].firstChild.className == "x") && (centerColumn[2].firstChild.className == "x")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((centerColumn[0].firstChild.className == "o") && (centerColumn[1].firstChild.className == "o") && (centerColumn[2].firstChild.className == "o")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((rightColumn[0].firstChild.className == "x") && (rightColumn[1].firstChild.className == "x") && (rightColumn[2].firstChild.className == "x")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((rightColumn[0].firstChild.className == "o") && (rightColumn[1].firstChild.className == "o") && (rightColumn[2].firstChild.className == "o")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((downDiag[0].firstChild.className == "x") && (downDiag[1].firstChild.className == "x") && (downDiag[2].firstChild.className == "x")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((downDiag[0].firstChild.className == "o") && (downDiag[1].firstChild.className == "o") && (downDiag[2].firstChild.className == "o")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((upDiag[0].firstChild.className == "x") && (upDiag[1].firstChild.className == "x") && (upDiag[2].firstChild.className == "x")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else if((upDiag[0].firstChild.className == "o") && (upDiag[1].firstChild.className == "o") && (upDiag[2].firstChild.className == "o")){
    headline.textContent = "Winner!!  Click Reset to start again!";
    return true;
  }
  else {
    return false;
  }
}
