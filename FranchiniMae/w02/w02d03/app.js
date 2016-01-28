console.log("linked.");

$(function() {

clickSubmit();

});

//get form input
//when submit button is clicked, retrieve input
//get input and append it to page and store in localstorage
//reset

function clickSubmit () {
	var postBlog = $("#inputSubmit");
	postBlog.click(submitPost);
}

var postsArray = [];

function submitPost(event) {
	event.preventDefault();
	var newPost = $("#blogInput").val();
	postsArray.push(newPost);

	for (var i = 0; i < postsArray.length; i++) {
	var list = "<li>" + postsArray[i] + "</li>";
	localStorage.post = postsArray;
	}

	if (newPost.length !== 0 ) {

	$("#main").append(list);
	// localStorage.post = newPost;

}

	this.form.reset();

}

