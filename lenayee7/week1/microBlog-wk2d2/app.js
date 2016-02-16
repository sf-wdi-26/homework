window.onload = function () {

console.log('linked');
//set global variables so it can be accessed in all functions
// var name = {

// };
var userInput = [];
var userPost;

//create a var for form block
//create a var for ul block
var $postButton = document.getElementById("postButton");
var $myForm = document.getElementById("myForm");
var $ul = document.getElementById("ulBox");
//add event listener "preventDefault" so default action will not occur
//set var userPost to get userText & value
//add userPost to userInput array.

$postButton.addEventListener("click", function(event) {
	event.preventDefault()
	userPost = document.getElementById("userText").value;
	if (userPost == "" ) {
		alert('You cannot submit an empty box');
			console.log(userPost)
		} else {
			getInput();
		}
	// userInput.push(userPost);
	console.log(userInput);
	$myForm.reset();
});

//create newLi using js
//append newLi to ul tag
//set li to equal what user inputs.
function getInput() {
	var $newLi = document.createElement("li");
	$ul.appendChild($newLi);
	$newLi.textContent = userPost;
	
}

};


//Thoughts
	//would want to 