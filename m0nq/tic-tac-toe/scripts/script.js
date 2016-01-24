// create a game/global counter of clicks.
// when an element is clicked and the counter is odd is player one's turn (x's)
// when an element is clicked and the counter is even is player two's turn (o's)
// reset the counter when the 'reset' button is clicked, & when the game ends.

// a) marking an 'X' or 'O'
// 1) when a div is selected by a mouse click,
  // 1.1) capture the element selected by it's id.
  // 1.2) check to see if there is already an 'X' or 'O' on that element
    // 1.2.1) if true, return
  // 1.3) check the game counter
    // 1.3.1) if the counter is odd update the element with an 'X'
    // 1.3.2) otherwise update it with an 'O'
  // 1.4) check to see if there are three 'Xs' or 'Os' releative to element just clicked.
    // 1.4.1) if true, pop up an option box with text of the winning player and asking if they want to play again.
    // 1.4.2) option box buttons should say 'yes' and 'no'.

// b) check for three in a row or no more places to mark

// c) Game over option box

// d) reset page and counter