$(function () {
    //grabs element from the form after
    $('#form-id').on("submit", forSubmit);

    //Empty the local storage.
    $("a").click(function(){
      localStorage.clear();
      document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.buttonClick + " time(s).";
    })

    $('#clear').on("click", reset)
 
});

    //prevents from default linking externally
function forSubmit(e) {
    e.preventDefault();
    var words = $("#thoughts").val();
    // var words = $(this).find('input').val()
    if(localStorage.buttonClick){
        localStorage.buttonClick = Number(localStorage.buttonClick)+1;
        $("#result").html("You have clicked the button " + localStorage.buttonClick + " time(s).");
      }else{
        localStorage.buttonClick = 1;
        $("#result").html("You have clicked the button " + localStorage.buttonClick + " time(s).");
      }
    //places "thoughts" into a list on site
    $("#list-id").append("<li>" + words + "</li>");
    $(this).find('textarea').val('');
    // equivalent to:
    // this.reset()
}

function reset () {
  localStorage.clear();
}


