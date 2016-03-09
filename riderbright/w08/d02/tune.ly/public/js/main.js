$( document ).ready(function() {
  $('#search-form').on('submit', function(event) {
    event.preventDefault();
    var currentQuery = $('.album-name').val();
    // console.log(currentQuery);
    $.ajax({
      type: 'GET',
      url:'/albums/search',
      data: {searchQuery: currentQuery}, // data sent to server
      dataType: 'json', // datatype expected back from server
      success: function(data, status, xhr) {
        console.log(data);
        
      }
    });
  });
});