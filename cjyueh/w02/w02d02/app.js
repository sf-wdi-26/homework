console.log("linked.");

window.onload = function() {

	doNotSubmit();
};

function doNotSubmit() {
	var postBlog = document.getElementById("submit-button");
	postBlog.addEventListener("click", postSubmit);
}

function postSubmit(event) {
	event.preventDefault();
	var li = document.createElement("li");
	var main = document.getElementById("main");
	li.innerHTML = document.getElementById("blog-input").value;
	main.appendChild(li);
}

/* function noRefresh() {
	var postBlog = document.getElementById("post-form");
	postBlog.addEventListener("submit", function(event) {
		event.preventDefault();
	});
	//sendPost();
}

function sendPost(appendPosts) {
	var blogInput = document.getElementById("blog-input").value;
	var main = document.getElementById("main");

	if (input) {
		appendPosts(main, input);
		console.log("hi");
	} else {
		alert("Please say something.");
	}
//var list = document.createElement("list");

	//var newPosts = [];

newPosts.push(blogInput);

	for (var i=0, len = newPosts.length; i < len; i++) {
		appendPosts(main, newPosts[i]);
	}
}

function appendPosts(main, newPosts) {
	var main = document.getElementById("main");
	var newLi = main.createElement("li");
	newLi.innerHTML = newPosts;
	document.appendChild(newLi);
}




//grab form input = blogInput
//put input into array .push
//update DOM with list .append

//When your user clicks submit
//, your JS should handle taking the content of the form and putting it in that array, and updating the DOM.


};*/