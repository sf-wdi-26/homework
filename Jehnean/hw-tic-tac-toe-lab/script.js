// Set Global Variables 
window.onload = start;
var boxes = document.getElementsByTagName("td");
var turnText = document.querySelector(".playerTurn");
var counter = 1;
var winCounter = 0;
var OMoves = [];
var XMoves = [];

// Array of arrays that make for winning
var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// Listening for move or reset
// QUESTION - how is this setting up for listening for these? Why it is needed? 
function start(){
  addXandOListener();
  addResetListener();
}

// Function to listen for clicks, and count down
function addXandOListener(){
	// For loop cointing down available spaces
	// QUESTION - Should I have come up with counting down more easily? How so?  
	for (var i = boxes.length - 1; i >= 0; i--) {
		// In the for loop, this is listening for "clicks" to add an X or O
		boxes[i].addEventListener("click", addXorO);
	}
}


// Function for event of X or O playing
function addXorO(event){
	console.log(event.target);
	// QUESTION - Does this check to make sure the cell is empty? 
	if (event.target.innerHTML.length == 0){
		// If even number 
		if (counter % 2 === 0) {
			// (and) O moves parseInt parses a string and returns an integer of the data-num location of the table
			OMoves.push(parseInt(event.target.getAttribute("data-num")));
			// Removes all of element's children, parses the content string and assigns the resulting nodes as children of the element.
			event.target.innerHTML = "O";
			// Adds a new attribute or changes the value of an existing attribute on the specified element to 'O'
			event.target.setAttribute("class","O");
			// Changes turnText to say it is now x player's turn
			turnText.innerHTML = "It is X's turn";
			// Adds one to counter
			counter++;
			// See if O player wins
			checkForWin(OMoves, "O");
		} else {
			// (and) X moves, return the data-num location of the table
			XMoves.push(parseInt(event.target.getAttribute("data-num")));
			// Assigns X as children of the element
			event.target.innerHTML = "X";
			// Adds a new attribute or changes the value of an existing attribute on the specified element to 'X'
			event.target.setAttribute("class","X");
			// Changes turnText to say it is now Y player's turn
			turnText.innerHTML = "It is O's turn";
			// Adds one to counter
			counter++; 
			// See if O player wins
			checkForWin(XMoves, "X");
		}

	// if the counter is greater than or equal to 10, the game is a draw!

	// If counter is greate than or equal to 10
	if (counter >= 10){
		//Display game oveer
		turnText.innerHTML = "Game Over!";
		// New var asking users to cofirm if they want to play again
		var conf = confirm("It's a draw, do you want to play again?");
			// if confirmed new function to reset board
			if(conf){
      			resetBoard();
    		}
  		}
 	}
}

// New function to reset board
function addResetListener(){
	// Creates new var for resetButton and asks HTML for "reset" ID
	var resetButton = document.getElementById("reset");
	// Listening for click to call resetBoard defined above
	// QUESTION - Scope: does resetBoard have access to the above? 
	resetButton.addEventListener("click", resetBoard);
}

// QUESTION - I am not sure of the logic that would lead me to come up with the double loop. 
function checkForWin(movesArray, name){
	// Loop over the array for winning combinations
	for (i = 0; i < winningCombinations.length; i++) {
		// reset the winCounter each time
		winCounter = 0;
		// loop over each individual array
		for (var j = 0; j < winningCombinations[i].length; j++) {
			// If the number in the winning array (?) is a number, add to the winCounter
			 if(movesArray.indexOf(winningCombinations[i][j]) !== -1){
				winCounter++; 
			}
			// If the win counter gets to three, the game is over.
			// QUESTION - It looks like three wins does not communicate X or Y
			if(winCounter === 3) {
				// Alert with who wins
				alert('Game over, ' + name + 'wins!'); 
				// Clear board
				resetBoard(); 
			}
		}
	}
}

// Clearing the board
// QUESTION - how can this be defined down here and called above? 
function resetBoard(){
	// For loop cointing down available spaces
	// QUESTION - Should I have come up with counting down more easily? How so?  
	for (var i = boxes.length - 1; i >= 0; i--) {
		// Removes all of element's children, parses the content string and assigns the resulting nodes as children of the element. 
		// QUESTION - so this sets boxes back to empty, right? 
		boxes[i].innerHTML=""; 
		boxes[i].setAttribute("class","clear"); 
	}
	// Redefine oMoves array to empty
	oMoves = []; 
	// Redefine xMoves array to empty
	xMoves = []; 
	// Redefine winCounter to 0 
	winCounter=0;
	// Redefine counter to 1 
	counter = 1;
	// Redefine text in turnText  
	turnText.innerHTML = "It is X's turn";
}
