

window.onload = function(){
console.log("Linked");
//1. Your HTML page should have a list in it that will display the posts. 
//It can be empty, with JS adding posts, or have some dummy posts in it to start.
//2.Your JS will hold an array of posts that it appends to the HTML list.
//3.When your user clicks submit, your JS should handle taking the content of the 
//form and putting it in that array, and updating the DOM.
// create ul li inside div container
// take array from input
// push onto array list
// apprendChild into li for post

//Prevent Refreshing
document.getElementById("typing").addEventListener("submit", getInput);

//variable
var userInput = [];
//var posts = [];

function getInput(event) {
event.preventDefault(); 
userInput = document.getElementById("input");
console.log('clicked');
console.log(userInput);

var newAnswer = document.createElement('li');
newAnswer.innerHTML = name.value;

unordered.appendChild(newAnswer);
this.reset();



}
};

/**
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
    // if (userPost !== false ) {
        // console.log(userPost)
        getInput();b
    // } else {
    //     alert('You cannot submit an empty box');
    // }
    userInput.push(userPost);
    console.log(userInput);
    // getInput();
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

};```

[*/