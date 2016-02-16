function main() {
  
  // create a game counter of clicks.
  var counter = 0;
  // an array of arrays with string id combinations of winning situations.
  var wins = [
    ["#leftTop", "#centerTop", "#rightTop"],
    ["#leftMiddle", "#centerMiddle", "#rightMiddle"],
    ["#leftBot", "#centerBot", "#rightBot"],
    ["#leftTop", "#leftMiddle", "#leftBot"],
    ["#centerTop", "#centerMiddle", "#centerBot"],
    ["#rightTop", "#rightMiddle", "#rightBot"],
    ["#leftTop", "#centerMiddle", "#rightBot"],
    ["#rightTop", "#centerMiddle", "#leftBot"]
  ];

  // html objects
  // Banner to indicate who's turn it is.
  var banner = document.querySelector("#turnBanner");
  banner.textContent = "It's X's turn!";
  // collection of the whole board
  var grid = document.querySelectorAll(".grid");
  // html button object.
  var button = document.querySelector("button");
  button.addEventListener("click", reset);

  // register event listeners on each of the inner divs.
  registrar(grid);

  // NodeList -> Void
  // registers listeners on each node within a NodeList
  function registrar(grid) {
    for (var i = 0, len = grid.length; i < len; i++) {
      grid.item(i).addEventListener("click", checkPoint);
    }
  }

  // Event -> Void
  // check the various conditions under which the game may be over before adding the players mark.
  function checkPoint(event) {

    clicked(event);

    // check to see if there is a matching set
    if (match(event.target)) {
      winner(event.target);
    // if counter reaches 9 without a winner, then it's a tie.
    } else if (counter === 9) {
      catsGame();
    }
  }

  // Element -> Boolean
  // Check each of the winnning situations to see if they all match the textContent of the consumed element
  function match(element) {
    // double loop through each to see if they have matching textConent.
    for (var i = 0, j = 0, len = wins.length; i < len; i++) {
      var text1 = document.querySelector(wins[i][j]).textContent;
      var text2 = document.querySelector(wins[i][j + 1]).textContent;
      var text3 = document.querySelector(wins[i][j + 2]).textContent;
      // if true, then last player clicked wins
      // i.e. if there is a match of three on any inner winning situations, call the winner function.
      
      if ((text1) && (text1 === text2 && text2 === text3)) {
        winner(element);
      }
    }
  }

  // Element -> Void
  // Displays the winner of the game, and optionally resets the game.
  function winner (element) {
    alert("Player " + element.textContent + " wins!");
    reset();
  }

  // Void -> Void
  // alerts players of a tie game, and calls a reset if another is confirmed.
  function catsGame() {
    alert("Cats Game!");
    reset();
  }

  // Node -> Void
  // checks the conditions of whether an 'X' or an 'O' should be displayed.
  function clicked(e) {
    // when an element is clicked and the counter is odd then it's player one's turn (X's)
    if (!(e.target.className === "bigX" || e.target.className === "bigO") && (counter % 2 === 0)) {
      clickedByX(e);
    // when an element is clicked and the counter is even then it's player two's turn (O's)
    } else if (!(e.target.className === "bigX" || e.target.className === "bigO")) {
      clickedByO(e);
    }
  }

  // HTMLNode -> Void
  // Consumes an HTML node and marks it with an 'X'
  function clickedByX(node) {
    var pTag = document.createElement("p");
    pTag.setAttribute("class", "bigX");
    pTag.textContent = "X";
    node.target.appendChild(pTag);
    banner.setAttribute("class", "oBanner");
    banner.textContent = "It's O's turn!";
    counter++;
  }

  // HTMLNode -> Void
  // Consumes an HTML node and marks it with an 'O'
  function clickedByO(node) {
    var pTag = document.createElement("p");
    pTag.setAttribute("class", "bigO");
    pTag.textContent = "O";
    node.target.appendChild(pTag);
    banner.setAttribute("class", "xBanner");
    banner.textContent = "It's X's turn!";
    counter++;
  }

  // reset the counter when the 'reset' button is clicked, & when the game ends.
  function reset() {
    var element;

    // set counter back to 0
    counter = 0;

    // set banner back to start text
    banner.textContent = "It's X's turn!";

    // double loop through each to see if they have matching textConent.
    for (var i = 0, len = wins.length; i < len; i++) {
      for (var j = 0, length = wins[i].length; j < length; j++) {
        element = document.querySelector(wins[i][j]);
        element.textContent = "";
      }
    }
  }
}

window.onload = main;