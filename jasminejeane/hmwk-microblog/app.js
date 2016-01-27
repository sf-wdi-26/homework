



//Sudo Code

//grab form and create a variable for it
//grab create button
//create a from the button to the form
//when clicked have form content append to ul
//may have to create element
//
//




// Your JS will hold an array of posts 
var posts =[];
var theform = document.getElementById("newPost");
var submit = document.getElementById("submit");

// var list = document.createElement("li");

//function to append a new list item
// document.ul.appendChild(list);


//that it appends to the HTML list.
function appendPosts(){

var list = document.createElement("li");
var text = document.createTextNode("hello");
list.appendChild(text);
document.getElementById("appendMe").appendChild(list);
stopDefAction();

//remember to add preventDefault
}


//wrote this just to see if my event listener was working
function checker(){
	console.log("was clicked");

}


//prevent Default Function
function stopDefAction(evt) {
    evt.preventDefault();
}

document.getElementById("submit").addEventListener("submit", function(){
	stopDefAction();
	appendPosts();
	console.log("working");

});


// element.onclick = checker;

//When your user clicks submit,
// your JS should handle taking the content of the form 
 //and putting it in that array, and updating the DOM.






//problems
//having trouble with event listener









	// body...

//windows closing tag