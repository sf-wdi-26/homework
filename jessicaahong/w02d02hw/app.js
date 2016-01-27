window.onload = function() {
var doNotSubmit = document.querySelector("#form");
doNotSubmit.addEventListener("submit", clickSubmit);
addButtonsToExamplePost();
ourTest();
};

function clickSubmit(event) {
//stop default submit stuff
	event.preventDefault();
	var blogList = document.querySelector("#postingList");
	var newPost = document.createElement("li");
	var button = document.createElement("button");
	newPost.setAttribute("class", "text");
	newPost.innerHTML = document.querySelector("#blurb").value;
	blogList.appendChild(newPost);
	document.querySelector("#blurb").value = "";
//add delete button for new blurbs and click to delete
	button.setAttribute("class", "buttonclass");
	button.innerHTML = "X";
	button.setAttribute("id", "toDelete");
	newPost.appendChild(button);
	button.addEventListener("click", ourTest);
}

function addButtonsToExamplePost(){
	posts = document.querySelectorAll("li");
	for (i = 0; i < posts.length; i ++) {
		var button = document.createElement("button");
		button.setAttribute("class", "buttonclass");
		button.innerHTML = "X";
		posts[i].appendChild(button);
	}
}


//yes, i put a click event listener in an iterator but i don't know 
//how else to make this work when i already have existing sample blog posts!
//it's still not working properly, either.
//it takes two clicks then deletes the first post in the list, then the rest
//disappear when you click any of the buttons.

function ourTest() {
	var blogList = document.querySelectorAll("li");
	var button = document.querySelectorAll("button");
	for (i = 0; i < blogList.length; i ++){
		blogList[i].setAttribute("id","toDelete");
		button[i].addEventListener("click", function(e) {
			var post = document.querySelector("#toDelete");
			post.parentNode.removeChild(post);
		});
	}
}

