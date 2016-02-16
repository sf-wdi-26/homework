console.log("linked.");

//USE THIS ONE :D 

$(function() {

	clickSubmit();

});

//get form input
//var newInput = $('#blog-input').val();
//create/add input to list
//var list = $("log").append("<li>" + newInput + "</li>");
//when submit button is clicked, page is not refreshed and
//into local storage
//form is reset

function clickSubmit() {
	var postBlog = $('#submit-button');
	postBlog.click(createList);
}

var postArray = [];

function createList(event) {
	event.preventDefault();
	var newInput = $('#blog-input').val();
	
	postArray.push(newInput);
	console.log(postArray);

	//$('#submit-button').click(function() {
	//	localStorage.posts = newInput;
		//console.log(newInput);

	for (var i = 0; i < postArray.length; i++) {
		var list = "<li>" + postArray[i] + "</li>";
		localStorage.post = postArray[i];
	}

	$("#log").append(list);

}


/*window.onload = function() {

	doNotSubmit();
};

function doNotSubmit() {
	var postBlog = document.getElementById("submit-button");
	postBlog.addEventListener("click", postSubmit);
	document.getElementById("blog-input").reset();
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