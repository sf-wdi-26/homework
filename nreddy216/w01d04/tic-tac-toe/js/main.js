
//global variables for players
var x = 'X';
var o = 'O';


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



//Creates tic-tac-toe board
// var cellValue = function(key) {
//   switch(key) {
//     case 'a': return null;
//     case 'b': return null;
//     case 'c': return null;
//     case 'd': return null;
//     case 'e': return null;
//     case 'f': return null;
//     case 'g': return null;
//     case 'h': return null;
//     case 'i': return null;
//     default : return null;
//   }
// };

// var createBoard = function(){
//   var cells = {};

//   for(var i=97; i<=106; i++){
//     cells[String.fromCharCode(i)] = null;
//   }
//   return cells;
// };

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

var cells = function(key){
  // this.boxID = boxID;
  // this.turn = turn;

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

};


//front end
//X turn / O turn - randomize - whoseTurn()
//Tell user whose turn it is
//click a box 
//X or O appears (x, o alternate)

//backend
//board is created
//board stores data of x and o's

//keep checking for 3 in a row until it's found (maybe once 3 are clicked)
//
var playGame = function() {

  //randomly assign whose turn it is initially
  var turn = whoseTurn();
  


  //changes text at the top to say whose turn it is
  $("#player").html(turn);

  if(getWinner!=x && getWinner!=o){
    //everytime a box is clicked
    $("td").click(function(){
        $("#catsgame").empty();
      
        //box id is the 'a', 'b', 'c',....etc.
        var boxID = $(this).attr("id");

        //changes the text in the box to the X or O text
        $(this).html(turn);

        Board[boxID] = turn;

        if(getWinner()===x || getWinner()===o){
          $(".result").html(getWinner() + " wins!");
        }

        //alternates the players
        if(turn===o){
          turn = x;
        }
        else if(turn===x){
          turn = o;
        }

        //with each click, it changes the text at the top 
        //telling the player about her turn
        $("#player").html(turn);
      });

  }
  else{
    $(".result").html("<p>"+ getWinner() +" wins!!</p><br/>");
  }

};

var reset = function(){
  $("td").empty();

  //loops through Board object and resets the board
  for(var i=97; i<=106; i++){
    Board[String.fromCharCode(i)] = null;
  }

  console.log(Board);
};


$ (document).ready(function(){
  console.log("Linked.");


  playGame();

  $(".reset").click(function(){
    reset();
    clickCounter = 0;
    playGame();
  });

});





