$(function main() {

  // populate list items
  populate();

  // create delete buttons on all list items
  createDeleteButton($('li'));

  // listen for click on form button
  $('#button').click(createNewListItem);

  // listen for click on delete button and delete from local storage as well
  $('.delete-button').click(deleteElement);
});

// Number -> Void
// populates the ul element with string values stored in local storage
function populate () {

  var i = 0;
  var len = localStorage.length;
  while (i < len) {
    if (localStorage[i]) {
      var $li = $('<li>').html(localStorage[i]);
      $('#main-list').prepend($li);
    }
    i++;
  }
}

// jQuery -> Void
// creates a new list item and prepends it to the top of the ul list
function createNewListItem ($eventObject) {

  // when the button is clicked
  // prevent the default event behavior
  $eventObject.preventDefault();

  // store theinput from the text field
  var input = $('#text-box').val();

  // check if it's not an empty string
  check(input);
}


// String -> Void
// if the string is not empty, prepends it to the list and adds it to storage.
function check (input) {

  if (input) {
    $('#text-box').val('');
    $li = $('<li>');
    $('#main-list').prepend($li.html(input));
    // attach a delete button to it.
    createDeleteButton($li);

    // add list item element to local storage
    addToStorage(input);
  }
}

// jQuery -> Void
// creates a new button to append on the consumed $li
function createDeleteButton ($li) {

  // create a button with an 'X' in it.
  var $button = $('<button>').html("X");
  $button.attr({class: 'delete-button pull-right'});
  $li.append($button);
  $('.delete-button').click(deleteElement);
}

// String -> Void
// add the string value to local storage for future poem collaboration.
function addToStorage (input) {
  var i = 0;
  var len = localStorage.length;
  while (i < len) {
    if (!localStorage[i]) {
      localStorage.setItem(i, input);
      break;
    }
    i++;
  }
}

// jQuery -> Void
// removes the parent list item of the calling element/button and from storage
function deleteElement ($eventObject) {
  
  // find which position the calling element is to remove it from localStorage
  var i = 0;
  var len = localStorage.length;
  while (i < len) {
    if (localStorage[i]) {
      localStorage.removeItem(i);
      break;
    }
    i++;
  }

  // look at the calling parent and delete itself
  $(this).parent().remove();
}