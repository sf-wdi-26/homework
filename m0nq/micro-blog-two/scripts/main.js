$(function main() {

  // get submit button
  $('#button').click(function (eventObject) {
    
    // when the button is clicked
    // prevent the default event behavior
    eventObject.preventDefault();

    // store theinput from the text field
    var input = $('#text-box').val();

    check(input);
  });

  function check (input) {
    if (input) {
      // reset the textfield
      $('#text-box').val('');

      // create a new li object
      // place the stored text field info into it's innerHTML
      // append first child to the new list item
      $('#main-list').prepend('<li>' + input + '</li>');
    }
  }
});