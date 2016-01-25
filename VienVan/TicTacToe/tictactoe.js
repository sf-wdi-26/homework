var painted;
var content;
var winningCombinations;
var turn = 0;
var board;
var c;
var cxt;
var squares = 0;
var y;
var x = 0;
var o = 0;
var winner = document.getElementById('winner');


window.onload = function() {
  painted = [];
  content = [];
  winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]
, [0, 4, 8], [2, 4, 6]];

  for (var i = 0; i <= 8; i++) {
    painted[i] = false;
    content[i] = '';
  }
}

function canvasClicked(canvasNumber) {
    theCanvas = 'canvas' + canvasNumber;
    c = document.getElementById(theCanvas);
    cxt = c.getContext('2d');
    cxt.lineWidth = 10;
    cxt.strokeStyle = 'gray';
    cxt.fillStyle = 'red';
    if(painted[canvasNumber-1] === false) {
      if (turn % 2 === 0) {
        cxt.beginPath();
        cxt.moveTo(20, 20);
        cxt.lineTo(80, 80);
        cxt.moveTo(80, 20);
        cxt.lineTo(20, 80);
        cxt.stroke();
        cxt.closePath();
        content[canvasNumber-1] = 'X';
      }
      else {
        cxt.beginPath();
        cxt.arc(50, 50, 35, 0, Math.PI*2, true);
        cxt.stroke();
        cxt.fill();
        cxt.fillText('GA', 50, 50 );
        cxt.closePath();
        content[canvasNumber-1] = 'O';
      }
      turn++;
      painted[canvasNumber-1] = true;
      squares++;
      checkForWinners(content[canvasNumber-1]);

      if(squares === 9) {
        winner.textContent = "GAME OVER";
        location.reload(true);
      }
      // else {
      // alert("Please click another square.");
    }
    }

    function checkForWinners(symbol) {
      for (var a = 0; a < winningCombinations.length; a++) {
        if(content[winningCombinations[a][0]] === symbol && content[winningCombinations[a][1]] === symbol && content[winningCombinations[a][2]] === symbol) {
          winner.textContent = symbol.toUpperCase() + " WINS!";
          if (winner.textContent === "X WINS!") {
            var counter = 0;

          } else if(winner.textContent === "O WINS") {

          }
          playAgain();
        }

        }
      }

    function playAgain() {
      y = confirm('Play Again?');
      if (y === true) {
        alert('Good Luck!');
        location.reload(true);
      }
      else {
        alert('Come Back Soon!');
      }
    }

  var reset = document.querySelector('#btn');

  reset.addEventListener("click", function(e) {
    location.reload(true);
  })
