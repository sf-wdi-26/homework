
//when page loads, call function

localStorage.clear();

$().ready(function(){
        $("#submit").click(function(){

            var stringToAdd = $('<div></div').addClass('jumbotron').html("<h4>Name: " + $("#name").val() + "</h4><h4>Destination: " + $("#destination").val() + "</h4><p>" + $("#story").val() + "</p>");

            $(".insertStory").append(stringToAdd);

            // update locale storage with button clicks and name value
            if(localStorage.buttonClick){
                localStorage.buttonClick = Number(localStorage.buttonClick)+1;
                $("#numSubmitted").html("<h4>Total Number of Stories Submitted: " + localStorage.buttonClick +"</h4>");}
                else{
                localStorage.buttonClick = 1;
                 $("#numSubmitted").html("<h4>Total Number of Stories Submitted: 1</h4>");
            }

            // empty the fields
            $("#name").val("");
            $("#destination").val("");
            $("#story").val("");

        //Empty the local storage when reset button clicked.
        $("#reset").click(function(){
            localStorage.clear();
            $("#numSubmitted").html("");
            $(".insertStory").html("");

        })

    });


    }) 

//when user refreshes the page, empty local storage



    