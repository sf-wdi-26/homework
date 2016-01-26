
//MAIN THING THAT EXECUTES
$ (document).ready(function(){
    console.log("Linked.");

    playGame();

    $(".reset").click(function(){
      reset();
    });

});



//global variables for players
var x = 'X';
var o = 'O';

//Object key/value for the TTT board
var Board = {
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
    f: null,
    g: null,
    h: null,
    i: null
};

//returns the value of each box
var cells = function(key){
  return Board[key];
};

//checks for row, column, and diagonal
var winnerIs = function(player) {
  return winsRow(player) || winsColumn(player) || winsDiagonal(player);
};

//MAIN FUNCTION that determines winner
var getWinner = function() {
  if (winnerIs(x)) {
    return x;
  }
  if (winnerIs(o)) {
    return o;
  }
  return null;
};


//is the basis for checking 3 cells
var allThree = function(player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
};

//checks for row
var winsRow = function(player) {
  return allThree(player, cells('a'), cells('b'), cells('c')) ||
         allThree(player, cells('d'), cells('e'), cells('f')) ||
         allThree(player, cells('g'), cells('h'), cells('i'));
};

//checks for column
var winsColumn = function(player) {
  return allThree(player, cells('a'), cells('d'), cells('g')) ||
         allThree(player, cells('b'), cells('e'), cells('h')) ||
         allThree(player, cells('c'), cells('f'), cells('i'));
};

//checks for diagonal
var winsDiagonal = function(player) {
  return allThree(player, cells('a'), cells('e'), cells('i')) ||
         allThree(player, cells('c'), cells('e'), cells('g'));
};



//random 
var whoseTurn = function(){

  //start
  var turn = Math.floor(Math.random()*100);

  if(turn%2===0){
    return x;
  }
  else{
    return o;
  }

};


var alternateTurn = function(turn){

  if (turn===x){
    turn = o;
  }
  else if(turn===o){
    turn = x;
  }

  return turn;

};


var turnCount = function(){
  var counter = 0;

  for(var key in Board){
    if(Board[key]!==null){
      counter+=1;
    }
  }
  return counter;
};

var clickBox = function(id, turn){
  
  //box id is the 'a', 'b', 'c',....etc.
  var boxID = $(id).attr("id");

  //changes the text in the box to the X or O text
  $(id).html(turn);
  
  //x or o is what will be inputted into the Board
  Board[boxID] = turn;
  //doesn't allow the value to change after it's been inputted
  $(id).unbind();
};



var playGame = function() {

  //randomly assign whose turn it is initially
  var turn = whoseTurn();


  //changes text at the top to say whose turn it is
  $("#player").html(turn);

  
  //everytime a box is clicked
  $("td").click(function(){
      //empties out the "don't make this a cat's game" text
      $("#catsgame").empty();

      //function for actions that take place immediately after a box click
      clickBox(this, turn);
    

      //If there is a winner, the game stops and the result is put up
      if(getWinner()===x || getWinner()===o){
        $(".result").html("<p>" + getWinner() + " wins! </p>");
        //disables clicking after there is a winner
        $("td").unbind();
      } //if all boxes have been clicked
      else if(turnCount()===9){
        $(".result").html("<p>It's a cat's game! Nobody wins.</p>");
        //no one can click
        $("td").unbind();
      }
      else{
        //alternates the players
        turn = alternateTurn(turn);

        //tells user whose turn it is after
        $("#player").html(turn);

      }
      
    });

};


var reset = function(){
  //empties all boxes of text
  $("td").empty();

  $(".result").html("<p>It's <span id='player'>someone</span>'s turn! <span id='catsgame'>Let's not make this a cat's game.</span></p>");

  //loops through Board object and resets the board
  for(var key in Board){
    Board[key] = null;
  }

  //just to be sure it clears the board
  console.log(Board);

  playGame();
};






