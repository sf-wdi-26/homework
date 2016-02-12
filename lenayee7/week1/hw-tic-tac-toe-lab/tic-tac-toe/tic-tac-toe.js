
var players = ["X", "O"];
var boxes = document.getElementByTagName("td");
var currentTurn = O;
var winner;
var turn;
var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


x starts the game

function startGame() {
	addX0Listener();
	setMessage(document.getElementById("#message")
}

function addXOListener() {
	for (var i = boxes.length - 1; i >=0; i--) {
		boxes[i].addEventListener(onclick,addXorO);
	}
}

function addXorO() {
	if ()

}






function resetGame() {
	if 

document.getElementById("reset").addEventListener("click", function(){
    alert("Game Over");

   }
});







