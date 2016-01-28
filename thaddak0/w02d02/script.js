console.log("linked");
window.onload = function() {
var inputArray = [];


var postform =  document.getElementById("postform");
var blogpost = document.getElementById("blogpost");

//get rid of reload default form setting


postform.addEventListener("submit", function(event) {
	
	event.preventDefault();	
	inputArray.push(blogpost.value);
	
	var newLi = document.createElement("li");
	newLi.innerHTML = blogpost.value;
	var ul = document.getElementById("bloglist");
	ul.insertBefore(newLi, ul.childNodes[0]);	
	postform.reset();

});


//create an array of strings for the input data

//get the text input from the form
//put it in the array
//move the array of posts to html ul 

//erase input info after click


};