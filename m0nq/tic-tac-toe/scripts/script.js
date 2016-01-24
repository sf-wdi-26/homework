var main = function main() {
  
  // create a game counter of clicks.
  var counter = 0;

  var grid = document.querySelectorAll(".grid");
  // register event listeners on each of the inner divs.
  registrar(grid);

  // NodeList -> Void
  // registers the 
  function registrar(grid) {
    for (var i = 0, len = grid.length; i < len; i++) {
      grid.item(i).addEventListener("click", function(e) {
        // when an element is clicked and the counter is odd then it's player one's turn (X's)
        if (!(e.target.className === "bigX" || e.target.className === "bigO") && (counter % 2 === 0)) {
          clickedByX(e);
        // when an element is clicked and the counter is even then it's player two's turn (O's)
        } else if (!(e.target.className === "bigX" || e.target.className === "bigO")) {
          clickedByO(e);
        }
      });
    }
  }

  // HTMLNode -> Void
  // Consumes an HTML node and marks it with an 'X'
  function clickedByX(node) {
    var pTag = document.createElement("p");
    pTag.setAttribute("class", "bigX");
    pTag.textContent = "X";
    node.target.appendChild(pTag);
    counter++;
  }

  // HTMLNode -> Void
  // Consumes an HTML node and marks it with an 'O'
  function clickedByO(node) {
    var pTag = document.createElement("p");
    pTag.setAttribute("class", "bigO");
    pTag.textContent = "O";
    node.target.appendChild(pTag);
    counter++;
  }

  // reset the counter when the 'reset' button is clicked, & when the game ends.

      // 1.2.1) if true, do nothing
    // 1.3) check the game counter
      // 1.3.1) if the counter is odd update the element with an 'X'
      // 1.3.2) otherwise update it with an 'O'
    // 1.4) check to see if there are three 'Xs' or 'Os' relative to element just clicked, or if there are no more spaces left to click.
      // 1.4.1) if true, pop up an option box with text of the winning player and asking if they want to play again.
      // 1.4.2) option box buttons should say 'yes' and 'no'.

  // b) check for three in a row or no more places to mark

  // c) Game over option box

  // d) reset page and counter
};

window.onload = main;