window.onload = start;

var boxes = document.getElementsByTagName("td");
var xArray=[];
var oArray=[];
var array=[];
var winCounter = 0;
var xWins = 0;
var oWins = 0;

var winningCombos = [[1,2,3],[4,5,6],[7,8,9],
[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

function winnerCheck(array, name){
  for (var i = 0; i < winningCombos.length; i++) {
    winCounter = 0;
    for (var j = 0; j < winningCombos[i].length; j++) {
      if(array.indexOf(winningCombos[i][j]) !== -1){
        winCounter++;
      }
      if(winCounter === 3){
        alert("The " + name + "'s win. Go Gators!");
          if(name==="X"){
            xWins += 1;
          }else {
            oWins += 1;
          }
        resetBoard(xWins,oWins);
      }
    }  
  }  
  for (i=0;i<boxes.length;i++){
    if (boxes[i].textContent === "X" || boxes[i].textContent === "O"){
      if (i=== boxes.length-1){
        document.querySelector(".playerTurn").textContent="Cats Game! Try again.";
      }
    }
    else{
  break;
    }
  }  
}

function start() {
whoStarts();
addXoListener();
addResetListener();
}

function whoStarts(){
    if (Math.random() > 0.5) {
      document.querySelector(".playerTurn").textContent="It is X's turn";
      turn = 1;
    }else {
      document.querySelector(".playerTurn").textContent="It is O's turn";
      turn = 2;
    }
}

function addXoListener() {
  for (var i = boxes.length-1; i>=0; i--){
    boxes[i].addEventListener('click', addXos);
  }
}

function addXos(event) {
//the O's start here
  if (event.target.textContent==="") {
    if (turn % 2 === 0){
      event.target.textContent = "O";
      event.target.setAttribute('class','O');
      oArray.push(parseInt(event.target.getAttribute("id")));
      turn ++;
      document.querySelector(".playerTurn").textContent="It is X's turn";
      winnerCheck(oArray,"O");
    }
//the X's start here 
    else{
      event.target.textContent = "X";
      event.target.setAttribute('class','X');
      xArray.push(parseInt(event.target.getAttribute("id")));
      turn ++;
      document.querySelector(".playerTurn").textContent="It is O's turn";
      winnerCheck(xArray,"X");
    }
  }
}

function addResetListener() {
  var test = document.getElementById("reset");
  test.addEventListener('click', function() {
    resetBoard(xWins,oWins);
  });
}

function resetBoard(x,o) {
  for (i=0;i<boxes.length;i++){
    boxes[i].textContent= "";
    boxes[i].setAttribute('class','Z');
    oArray=[];
    xArray=[];
  }
  xWins=x;
  oWins=o;
  document.getElementById("xWin").textContent= "X's: "+xWins+ " Wins";
  document.getElementById("oWin").textContent= "O's: "+oWins+ " Wins";
  start();
}