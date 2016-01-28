window.onload = function () {
	addOnclicks();
};

//This function will ad onclick events to the Post button
function addOnclicks () {
	document.getElementById("postButton").addEventListener("click", onPostClick);
}

//this makes post button work
function onPostClick (event) {
	//this removes the default behavior of the post button
	event.preventDefault();

	var li = document.createElement("li");
	var ul = document.getElementById("listOfSubmissions");
	var but = document.createElement("button");


	if (document.getElementById("textBox").value == "where's the joke?") {
		li.innerHTML = "<a href='https://www.youtube.com/results?search_query=ari+shaffir+this+is+not+happening'> THE JOKE </a>";
	} else {
		li.innerHTML = document.getElementById("textBox").value;
	}
	ul.appendChild(li);
	li.setAttribute("class", "listedPosts");
	
	li.appendChild(but);
	but.setAttribute("class", "deleteButton");
	but.addEventListener("click", removeLi);
}


function removeLi (event) {
	var x = document.getElementsByClassName("deleteButton");
	this.parentNode.id = "removeMe";
	document.getElementById("removeMe").remove();
}