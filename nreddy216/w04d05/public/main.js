$(document).ready(function(){

  console.log("linked");

  // UI of list becomes sortable BUT does not change the order of the database
  $("#sortable").sortable();
  $("#sortable").disableSelection();


  $("#due-date").datepicker();

});
