
$().ready(function(){
        $("#submit").click(function(){

            // var name =  $("#name").value;
            // var destination =  $("#destination".value);
            // var story =  $("#story").value;

            // $(".insertStory").innerHTML = "<p>" + name + "'s story on traveling to " + destination + ": " + story + "</p>";

            $(".insertStory").append("<h5>" + $("#name").val()+ "'s story on traveling to " + $("#destination").val() + ":  " + $("#story").val() + "</h5>");

            if(localStorage.buttonClick){
                localStorage.buttonClick = Number(localStorage.buttonClick)+1;
                $("#numSubmitted").html("<h6> We have a total of " + localStorage.buttonClick + " stories.");
            }else{
                localStorage.buttonClick = 1;
                 $("#numSubmitted").html("<h4> We have " + localStorage.buttonClick + " story :( Please write another.</h4>");
            }

            //empty the fields
            $("#name").val("");
            $("#destination").val("");
            $("#story").val("");


            //Empty the local storage.
        $("#reset").click(function(){
            localStorage.clear();
            $("#numSubmitted").html("");
        })

    });


    }) //DONT TOUCH THIS


    