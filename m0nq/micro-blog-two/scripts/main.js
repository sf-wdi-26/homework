$(function main() {

  // get submit button
  $('#button').click(function (eventObject) {
    
    // when the button is clicked
    // prevent the default event behavior
    eventObject.preventDefault();

    // store theinput from the text field
    var input = $('#text-box').val();

    check(input).fadeIn();
  });

  function check (input) {
    if (input) {
      
      $('#text-box').val('');

      $('#main-list').prepend('<li>' + input + '</li>');
    }
  }

  // localStorage
});