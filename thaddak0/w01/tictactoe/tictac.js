window.onload = clickEvent;

var squares = document.querySelectorAll(".square");

var totalMoves = 1;
var squareslength = squares.length;

var Omoves = [];
var Xmoves = [];

function clickEvent(player) {
	for (var i = 0; i < squareslength; i ++) {
		squares[i].addEventListener("click", addText);
	}
}

function addText(event) {
	if (totalMoves === 9) {
		var h2 = document.querySelector("h2");
		event.target.innerHTML = "X";
		h2.innerHTML = "TIE GAME!!";

	}
	else if (totalMoves % 2 === 0) {
		event.target.innerHTML = "O";
		totalMoves = totalMoves + 1;
		event.target.removeEventListener("click", addText, false);
		checkForWinner();

	} else {
		event.target.innerHTML = "X";
		totalMoves = totalMoves + 1;
		event.target.removeEventListener("click", addText, false);
		checkForWinner();
	}
}
function checkForWinner() { //need to figure out how to check to see if there are 3 in a row
	var a = document.getElementById("a");
	var atext = a.textContent;
	
	var b = document.getElementById("b");
	var btext = b.textContent;

	var c = document.getElementById("c");
	var ctext = c.textContent;
	
	var d = document.getElementById("d");
	var dtext = d.textContent;
	
	var e = document.getElementById("e");
	var etext = e.textContent;
	
	var f = document.getElementById("f");
	var ftext = f.textContent;
	
	var g = document.getElementById("g");
	var gtext = g.textContent;
	
	var h = document.getElementById("h");
	var htext = h.textContent;
	
	var i = document.getElementById("i");
	var itext = i.textContent;
	
	var winning = [[atext, btext, ctext], [dtext, etext, ftext], [gtext, htext, itext], [atext, dtext, gtext], [btext, etext, htext], [ctext, ftext, itext], [atext, etext, itext], [ctext, etext, gtext]]; 

	for (var j = 0; j < winning.length; j++) {
		if (["O", "O", "O"] === winning[j]) {
			window.alert("CONGRAULATIONS O, YOU WON!!");
		} else if (["X", "X", "X"] === winning[j]) {
			window.alert("CONGRAULATIONS X, YOU WON!!");
		}
	}
}



