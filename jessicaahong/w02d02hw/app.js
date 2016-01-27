window.onload = function() {
// addButtonsToExamplePost();
var doNotSubmit = document.querySelector("#form");
doNotSubmit.addEventListener("submit", clickSubmit);
// ourTest();
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
// add delete button for new blurbs and click to delete
	button.setAttribute("class", "buttonclass");
	button.innerHTML = "X";
	newPost.appendChild(button);
//activate a click event on these new buttons that allows them to be deleted
	markToDelete();
}

//function that adds a click event to every button
 function markToDelete() {
 	var button = document.querySelectorAll("button");
 	for (var i = 0; i < button.length; i++) {
    	button[i].addEventListener('click', deleteIt, false);
 	}
 }

//function that deletes a button's post!
 function deleteIt() {
 		this.parentNode.setAttribute("id","toDelete");
 		var post = document.querySelector("#toDelete");
		post.parentNode.removeChild(post);
 }


