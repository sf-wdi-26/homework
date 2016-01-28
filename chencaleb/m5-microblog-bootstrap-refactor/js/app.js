window.onload = function() {

$("#postButton").on("click", function(event) {
event.preventDefault();


var oldPosts = $("#postList");
var newPost = $("<li></li>").attr("class", "text");

var inputText = $("#textBox").val();
newPost.html(inputText);
oldPosts.append(newPost);
$("#textBox").val("");

});


//CODE BELOW IS IN JAVASCRIPT

// var submitButton = document.getElementById("postButton");
// submitButton.addEventListener("click", function(event) {

// event.preventDefault();

// var oldPosts = document.getElementById("postList");
// var newPost = document.createElement("li");
// newPost.setAttribute("class", "text");

// newPost.innerHTML = document.getElementById("textBox").value;
// oldPosts.appendChild(newPost);
// document.getElementById("textBox").value = "";
// });

};