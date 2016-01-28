$(function main() {

  // get submit button
  $('button').on("click", function (event) {
    // when the button is clicked
    // prevent the default event behavior
    event.preventDefault();

    // store the input from the text field
    var input = document.getElementById('text-box').value;

    check(input);
  });

  function check (input) {
    if (input) {
      // reset the textfield
      document.getElementById('text-box').value = '';

      // create a new li object
      var newListItem = document.createElement('li');

      // place the stored text field info into it's innerHTML
      newListItem.innerHTML = input;

      // capture immediate child node of the ul
      var firstChild = document.getElementById('main-list').children[0];

      // append first child to the new list item
      var parentNode = document.getElementById('main-list');
      parentNode.insertBefore(newListItem, firstChild);
    }
  }
});