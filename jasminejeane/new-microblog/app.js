



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
// var posts =[];
var theForm = $("#newPost");
var submit = $("#submit");
var info = $("#blog");
var clear = $("#clear");

// theForm.addEventListener('submit', submitPost);

$(submit).click(submitPost);
$(clear).click(clearLocal);

retrieveStorage();

// var list = document.createElement("li");

//function to append a new list item
// document.ul.appendChild(list);


//that it appends to the HTML list.
function submitPost (event) {
  event.preventDefault();
  var info = document.getElementById("blog").value;
  addToList(info);
  // posts.push(info);
  var newItem = "info" + localStorage.length;
  localStorage.setItem(newItem, info);
  reset();
}

function retrieveStorage (){
  for (var key in localStorage) {
    addToList(localStorage.getItem(key));
  }
}

function addToList (item) {
  var text = document.createTextNode(item);
  var list = document.createElement("li");
  list.appendChild(text);
  document.getElementById("appendMe").appendChild(list);
  // $('#appendMe').append('<li>' + item + '</li>');
}



// function ifEmpty (){

// 	if ($("#blog") === null || undefined){

// 		alert("Please enter content");
// 	}
// }

function reset(){
  document.getElementById("blog").value = "";
}

function clearLocal(){

localStorage.clear();
}

//wrote this just to see if my event listener was working




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