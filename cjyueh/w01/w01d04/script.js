console.log("Linked.");

/* CHECK TO SEE THAT "CLEAR BOARD" BUTTON CAN BE LOCATED & LISTENER WORKS: 

var clearBoard = document.getElementById("clear");
clearBoard.addEventListener("click", function() {
	alert("cleared!");
});  

CHECK TO SEE THAT "CELL"S CAN BE LOCATED & LISTENER WORKS:

var squares = document.getElementsByTagName("td");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        alert("clicked square!");
    });
}
*/

function resetListener() {
	var clearBoard = document.getElementById("clear");
	clearBoard.addEventListener("click", resetBoard());
} //listens for clicks on clear button

function resetBoard(event) {
	event.target.innerHTML = "";
} //clears board when clear button is clicked


function makeMarkListener() {
	var squares = document.getElementsByTagName("td");
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", markXorO());
	}
} //listens for clicks on any <td>

var playerTurn = 0; //tracks moves

function markXorO(event) {
	if (event.target.innerHTML = "") { //if <td> is blank
		if (playerTurn % 2 === 0) { //if playerTurn is even
			event.target.setAttribute("class", "O"); //add class to <td> called O
			event.target.innerHTML = "O"; //change <td>content to O
			event.target.style.color = "#f7be7d"; //change <td> background to this color
		} else { //else playerTurn is odd
			event.target.setAttribute("class", "X"); //add class to <td> called X
			event.target.innerHTML = "X"; //change <td> content to X
			event.target.style.color = "#cdb5f7"; //change <td> background to red
		}
		playerTurn++; //playerTurn progresses by 1 (add 1 to playerTurn)
	} else {
		alert("There is already a mark here, please choose different square.");
	}
}