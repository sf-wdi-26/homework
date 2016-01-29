console.log("linked.");

window.onload = function() {

doNotSubmit();
};

//function to not submit page with event listener
function doNotSubmit() {
	var postBlog = document.getElementById("inputSubmit");
	postBlog.addEventListener("click", postSubmit );
	}

//function to submit post
function postSubmit(event) {

event.preventDefault();

// create and grab list item
var li = document.createElement("li");
// grab area where ul lives and assign it to variable 
var main = document.getElementById('main');
// grab input value and put it in list item

if (document.getElementById("blogInput").value.length !== 0) {
	li.innerHTML = document.getElementById("blogInput").value;
	main.appendChild(li); //append li items to page 
}

}

		// $('#formButton').click(function() {

		// 	event.preventDefault();

		// 	var input = $("#input").val();
		// 	//grab the input
		// 	//store input in local storage
		// 	localStorage.posts = input;
			

		// 	console.log(input);
		// });

//adding delete button
//find a way to insert button with text input
//grab that button and assign it a variable
//create a function that will delete that input list item
//look into removeChild