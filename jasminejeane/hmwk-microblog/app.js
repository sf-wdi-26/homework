



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
var info = document.getElementById("blog");

// var list = document.createElement("li");

//function to append a new list item
// document.ul.appendChild(list);


//that it appends to the HTML list.
function appendPosts(event){
event.preventDefault();
var info = document.getElementById("blog").value;
var text = document.createTextNode(info);
var list = document.createElement("li");
list.appendChild(text);
document.getElementById("appendMe").appendChild(list);
reset();

}


submit.onclick = appendPosts;



function reset(){
	 document.getElementById("blog").value = "";


}

//wrote this just to see if my event listener was working
function checker(){
	console.log("was clicked");

}

submit.onclick = appendPosts;






















//prevent Default Function
// function stopDefAction(evt) {
//     evt.preventDefault();
// }

//was having alot of trouble with code below 

// document.getElementById("submit").addEventListener("submit", function(){
// 	stopDefAction();
// 	appendPosts();
// 	console.log("working");

// });



//When your user clicks submit,
// your JS should handle taking the content of the form 
 //and putting it in that array, and updating the DOM.



//remember to add preventDefault



//problems
//having trouble with event listener
//had to change button from submit to button type. 
//Going to try with submit later add adding on prevent default 









	// body...

//windows closing tag