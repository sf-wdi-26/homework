var painted;
var content;
var winningCombinations;
var turn = 0;
var board;
var c;
var cxt;
var squares = 0;
var w;
var y;
var X = 0;
var O = 0;


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
    if(painted[canvasNumber-1] === false) {
      if (turn % 2 === 0) {
        cxt.beginPath();
        cxt.moveTo(10, 10);
        cxt.lineTo(90, 90);
        cxt.moveTo(90, 10);
        cxt.lineTo(10, 90);
        cxt.stroke();
        cxt.closePath();
        content[canvasNumber-1] = 'X';
      }
      else {
        cxt.beginPath();
        cxt.arc(50, 50, 45, 0, Math.PI*2, true);
        cxt.stroke();
        cxt.closePath();
        content[canvasNumber-1] = 'O';
      }
      turn++;
      painted[canvasNumber-1] = true;
      squares++;
      checkForWinners(content[canvasNumber-1]);

      if(squares === 9) {
        alert("GAME OVER");
        location.reload(true);
      }
      // else {
      // alert("Please click another square.");
    }
    }

    function checkForWinners(symbol) {
      for (var a = 0; a < winningCombinations.length; a++) {
        if(content[winningCombinations[a][0]] === symbol && content[winningCombinations[a][1]] === symbol && content[winningCombinations[a][2]] === symbol) {
          alert(symbol+ " WON!");
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
