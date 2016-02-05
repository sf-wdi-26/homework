
/*$(document).ready(function() {*/

	
	function submitAnswers() {
	
		total = 5;
		score = 0;

	//Get User Input	
		var q1 = document.forms["quizbox"]["q1"].value;
		var q2 = document.forms["quizbox"]["q2"].value;
		var q3 = document.forms["quizbox"]["q3"].value;
		var q4 = document.forms["quizbox"]["q4"].value;
		var q5 = document.forms["quizbox"]["q5"].value;
		
	 ((q1 === null) || (q1 = " ")){
		alert("You missed question 1");
	}
};
	
	/*
	//Validate Form

	for(i = 1; i <= total; i++) {
			if ( (eval("q" + i) === null) || (eval("q" + i) = " ") ){
			alert("You missed question " + i);
			
		}
	}
}


	//Make answer key

	var answers = ["a", "d", "d", "b", "c"];

	//Check answers

	for(i = 1; i <= total; i++) {
		if (eval("q" + i) === answers[i - 1]) {
			score++;
		}
	}

	//Display results

	var results = documentGetElementById("results");
	results.innerHTML = "<h3>You scored" +score+ "out of" +total+"</h3>";
	alert("You scored " +score+ " out of " +total+ ". That is a start, keep on training!");

	return false;

}
}); */
