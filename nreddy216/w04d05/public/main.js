$(document).ready(function(){

  console.log("linked");

  sortableList();

  $("#due-date").click(function(){
    console.log("HELLO");
    datePicker();
  });



});

function sortableList(){
  // UI of list becomes sortable BUT does not change the order of the database
  $("#sortable").sortable();
  $("#sortable").disableSelection();
}


function datePicker(){
  // $("#due-date").datepicker({dateFormat: 'dd/mm/yy'});
}
