

var cells;
var curTurn;
var gameOver;

window.onload = function() {
    cells = document.getElementsByClassName("cell");
    curTurn = "X";
    gameOver = false;
};


function cellClicked(element) {
    
    if (!gameOver) {
       
        if (element.innerHTML == "&nbsp;") {
            element.innerHTML = curTurn;

            
            var winner = checkWin();
            if (winner) {
                gameOver = true;
                if (winner != "TIE") {
                    document.getElementById("gameWin").innerHTML = winner + " WINS!";
                } else {
                    document.getElementById("gameWin").innerHTML = "TIE GAME!";
                }
            }

            
            if (curTurn == "X") {
                curTurn = "O";
            } else {
                curTurn = "X";
            }
            
           
            document.getElementById("currentTurn").innerHTML = curTurn + "'s Turn";
        }
    }
}

