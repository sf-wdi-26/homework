$( document ).ready(function() {
    console.log( "ready!" );



//1. Your HTML page should have a list in it that will display the posts. 
//It can be empty, with JS adding posts, or have some dummy posts in it to start.
//2.Your JS will hold an array of posts that it appends to the HTML list.
//3.When your user clicks submit, your JS should handle taking the content of the 
//form and putting it in that array, and updating the DOM.
// create ul li inside div container
// take array from input
// push onto array list
// apprendChild into li for post



//variable
var userArray = [];	
var $myForm = $("#myForm");

$('#clear').on('click', reset);

$myForm.on("submit", function(e) {
	e.preventDefault(); //Prevent Refreshing
	console.log('clicked'); //log 
	if(localStorage.clickCount){
				localStorage.clickCount = Number(localStorage.clickCount)+1;
				$("#result").html("You have clicked the button " + localStorage.clickCount + " time(s).");
			}else{
				localStorage.clickCount = 1;
				$("#result").html("You have clicked the button " + localStorage.clickCount + " time(s).");
			}
	getInput();
	$('#typing').val(' ');
} );

function getInput(){
	var $uL = $("#uL");
	var $userInput = $('#typing').val();
	userArray.push($userInput);
	console.log(userArray);
	$('uL').append("<li>"+$userInput+"</li>");// put li into ul
	} 
		


function reset() {
	localStorage.clear();
}


});

