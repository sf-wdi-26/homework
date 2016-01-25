// make squares an array

var buttons = [button1, button2, button3, button4, button5, button6, button7, button8, button9];
var gameover = false;
    
  /* if there is a winning combo, change colors to show win 
    set gameover to true */

  function checkCombination (b1, b2, b3) {
    if (b1.innerHTML !== '' && b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML) {
    gameover = true;
    b1.style.backgroundColor = '#E8CDB2';
    b2.style.backgroundColor = '#E8CDB2';
    b3.style.backgroundColor = '#E8CDB2';
    }
  }
      

// function that checks winning combinations

  function checkWin() {
    checkCombination(button1, button2, button3);
    checkCombination(button4, button5, button6);
    checkCombination(button7, button8, button9);
    checkCombination(button1, button4, button7);
    checkCombination(button2, button5, button8);
    checkCombination(button3, button6, button9);
    checkCombination(button1, button5, button9);
    checkCombination(button3, button5, button7);
  }

// Player toggle from x and o 

  function pickSquare() {
    if (gameover || this.innerHTML !== '') return; 
     this.innerHTML = selectTurn.value;
    if (selectTurn.value == 'X') {
      selectTurn.value = 'O';
    } else {
      selectTurn.value = 'X';
    }
    checkWin();
  }

/* When the game is over, get the board to clear 
  gameover is false because it is resetting game over
  need to fix it so that it removes x's and o's */

  function resetGame() {
    // reset game by going through buttons
    for (var i=0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = ''; // change color back to original
      buttons[i].innerHTML = ''; // delete x's and o's
    }
    gameover = false;
  }
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = pickSquare;
  }
    reset.onclick = resetGame;