



//Sudo Code

//grab form and create a variable for it
//grab create button
//create a from the button to the form
//when clicked have form content append to ul
//may have to create element
//
//



$(document).ready(function(){
// Your JS will hold an array of posts 
var posts =[];
var theform = $("#newPost");
var submit = $("#submit");
var content = $("#blog");
var clearButton = $("#button");


//function to append a new list item
// document.ul.appendChild(list);


//that it appends to the HTML list.
function appendPosts(event){
event.preventDefault();
var info = content.value;
var text = $(info).html();
var list = $("<li>");
list.append(text);
$("#appendMe").append(list);


localStorage.getItem("input", info);

// reset();
// checker();
}


submit.click(appendPosts);



function reset(){
	 $("#blog").value = "";


}

//clears local storage


$('button').click(function(){

	checker();

});


// function localStore(){
// 	var info = content.value;

// 	localStorage.setItem("entry", info);
// }

//wrote this just to see if my event listener was working
function checker(){
	console.log("was clicked");
}

// submit.onclick = appendPosts;



});



















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