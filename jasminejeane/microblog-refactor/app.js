



//Sudo Code

//grab form and create a variable for it
//grab create button
//create a from the button to the form
//when clicked have form content append to ul
//may have to create element
//
//




// Your JS will hold an array of posts 

var theform = document.getElementById("newPost");
var submit = document.getElementById("submit");

// var list = document.createElement("li");

//function to append a new list item
// document.ul.appendChild(list);

localStorage.blogAdded = 0;
//that it appends to the HTML list.
function appendPosts(event){
event.preventDefault();
var info = document.getElementById("info").value;
var text = document.createTextNode(info);
var list = document.createElement("li");
list.appendChild(text);
document.getElementById("appendMe").appendChild(list);

reset();

}


submit.onclick = appendPosts;



function reset(){
	 document.getElementById("info").value = "";


}

//wrote this just to see if my event listener was working
function checker(){
	console.log("was clicked");

}












// //local Storage
// $().ready(function(){
// 		$("#submit").click(function(){
// 			if(!localStorage.dayIterator || localStorage.dayIterator >= 6){
// 				localStorage.dayIterator = 0;
// 				document.getElementById("result").innerHTML = "The first day of the week is " + daysOfTheWeek[localStorage.dayIterator] + ".";
// 			}else{
// 					localStorage.dayIterator = Number(localStorage.dayIterator)+1;
// 					document.getElementById("result").innerHTML = "The current selected day is " + daysOfTheWeek[localStorage.dayIterator] + ".";
// 			}
// 		});
// 		//Empty the local storage.
// 		$("a").click(function(){
// 			localStorage.clear();
// 			document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.dayIterator + " time(s).";
// 		})
// 	});

// localStorage.blogAdded = Number(localStorage.blogAdded)+1














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