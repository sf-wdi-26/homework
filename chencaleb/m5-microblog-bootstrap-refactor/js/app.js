window.onload = function() {

$("#postButton").on("click", function(event) {
event.preventDefault();


if(sessionStorage.clickCount){
	sessionStorage.clickCount = Number(sessionStorage.clickCount)+1;
}else{
	sessionStorage.clickCount = 1;
}

var oldPosts = $("#postList");
var newPost = $("<li></li>").attr("class", "text");
// var deleteText = document.createElement("button");

var inputText = $("#textBox").val();
newPost.html(inputText);
oldPosts.append(newPost);
$("#textBox").val("");
// deletePost.setAttribute("class", "removeButton");
// newPost.appendChild(deletePost);

// newPost.append(deleteText);
// deleteText.attr("class", "deleteButton");
// deleteText.addEventListener("click", removeLi);


});

deleteButton();

};


//creates delete button (does not work correctly)

function deleteButton () {
	posts = document.querySelectorAll("li");
	for(var i=0; i<posts.length; i++){
		var deletePost = document.createElement("button");
		deletePost.setAttribute("class", "removeButton");
		posts[i].appendChild(deletePost);
		deletePost.addEventListener("click", removeLi);
	}	
}

function removeLi () {
	var blogList = document.querySelectorAll("li");
	for(var i=0; i<blogList.length; i++){
		blogList[i].setAttribute("id", "toDelete");
		var deleted = document.querySelector("#toDelete");
		deleted.remove();
	}
}


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

