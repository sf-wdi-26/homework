
$(document).ready(function(){
	addEventListeners();
});

function addEventListeners(){
	
	addListenerToNextButton();
	addListenerToSubmitButton();

}


function addListenerToNextButton(){
	$("#next").click(function() {
		// debugger
		var current = $(".qn:visible");
		
		total = $(".qn").length;
		
		last = $(".qn:last");
		
		$(current).next().show();
		
		$(current).hide();
		
		$(current).next().is(last){
			$("#next").hide();
			$("#prettysubmit").show();
		}
});		
}

function addListenerToSubmitButton(){
	$("#prettysubmit").click(function(){
		console.log("hi anna the submit button was clicked");
	
	
		total = 5;
		score = 0;

	//Get User Input
		var q1 = document.forms["quizbox"]["q1"].value;
		var q2 = document.forms["quizbox"]["q2"].value;
		var q3 = document.forms["quizbox"]["q3"].value;
		var q4 = document.forms["quizbox"]["q4"].value;
		var q5 = document.forms["quizbox"]["q5"].value;
		

	//Validate Form

		for(i = 1; i <= total; i++) {
			if ( (eval("q" + i) === null) || (eval("q" + i) === "") ){
			alert("You missed question " + i);
			return false;
		}
	}

	//Make answer key

	var answers = ["a", "c", "d", "b", "c"];

	//Check answers

	for(i = 1; i <= total; i++) {
		if (eval("q" + i) === answers[ i - 1]) {
			score++;
		}
	}

	var results = documentGetElementById('results');
	results.innerHTML = "<h3>You scored" +score+ "out of" +total+"</h3>";
	alert("You scored " + score + " out of " + total);

	return false;


});

}



