console.log("Linked.");

function markXorO() {
	if (this.innerHTML != "") return; //checks if cell is empty
	this.innerHTML = selectTurn.value; //set text of selectTurn selector to option value
	if (selectTurn.value == "X") { //If selectTurn value is X,
		event.target.style.backgroundColor = "#f7be7d"; //set cell's background color to orange
		selectTurn.value = "O"; //and change selectTurn value to O.
	} else { //Otherwise (if selectTurn value is O),
		event.target.style.backgroundColor = "#cdb5f7"; //set cell's background color to purple
		selectTurn.value = "X"; //and change selectTurn value to X.
	}
	winningCombo(); //checks if there is a winning combination
}

cell1.onclick = markXorO; //when cell_ is clicked, run function markXorO
cell2.onclick = markXorO;
cell3.onclick = markXorO;
cell4.onclick = markXorO;
cell5.onclick = markXorO;
cell6.onclick = markXorO;
cell7.onclick = markXorO;
cell8.onclick = markXorO;
cell9.onclick = markXorO;

function resetGame() { //resets the game, can probably be simplified into a loop
	cell1.innerHTML = ""; //clears content of cell_
	cell2.innerHTML = "";
	cell3.innerHTML = "";
	cell4.innerHTML = "";
	cell5.innerHTML = "";
	cell6.innerHTML = "";
	cell7.innerHTML = "";
	cell8.innerHTML = "";
	cell9.innerHTML = "";
	cell1.style.backgroundColor = ""; //clears background color of cell_
	cell2.style.backgroundColor = "";
	cell3.style.backgroundColor = "";
	cell4.style.backgroundColor = "";
	cell5.style.backgroundColor = "";
	cell6.style.backgroundColor = "";
	cell7.style.backgroundColor = "";
	cell8.style.backgroundColor = "";
	cell9.style.backgroundColor = "";
}

clear.onclick = resetGame; //when clear board button is clicked, run function resetGame

function winningCombo() { //winning combos...to turn into array...
	checkCombo(cell1, cell2, cell3);
	checkCombo(cell4, cell5, cell6);
	checkCombo(cell7, cell8, cell9);
	checkCombo(cell1, cell4, cell7);
	checkCombo(cell2, cell5, cell8);
	checkCombo(cell3, cell6, cell9);
	checkCombo(cell1, cell5, cell9);
	checkCombo(cell3, cell5, cell7);
}
