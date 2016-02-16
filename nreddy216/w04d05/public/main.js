$(document).ready(function(){

  console.log("linked");

  sortableList();

  datePicker();


});

function sortableList(){
  // UI of list becomes sortable BUT does not change the order of the database
  $("#sortable").sortable();
  $("#sortable").disableSelection();
}


function datePicker(){
  $("#due-date").datepicker({dateFormat: 'dd/mm/yy'});
}
