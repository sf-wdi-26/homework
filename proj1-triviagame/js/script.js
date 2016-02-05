//AS A  USER

//Wait for first question
//Give an answer
//Press next button
//Repeat 5 times
//Get total score after 5 questions

//AS A PROGRAMMER

//Show questions one at a time using display: none or visibility
//Get answer
//Check for correctness
//Start running score
//Await Next button prompt 
//show questions until all 5 questions are used
// Show total after 5

/*$(document).ready(function(){

	submitAnswer();
});*/






function submitAnswer() {
	total = 5;
	score = 0;

//Get User Input
	var q1 = document.forms["quizbox"]["q1"].value;
	var q2 = document.forms["quizbox"]["q2"].value;
	var q3 = document.fomrs["quizbox"]["q3"].value;
	var q4 = document.forms["quizbox"]["q4"].value;
	var q5 = document.forms["quizbox"]["q5"].value;
	alert(q1);

//Validate Form
 for (i = 0; i <= total; i ++) {
 	if eval("q" + i == null) || eval ())
 }


// Answer Key

// Keep Score

//Show Results




