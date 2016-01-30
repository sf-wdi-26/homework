//OOP form of microblog

$(function () {
	var microBlog = new BlogPost ();
	microBlog.addOnclicks();
});

function BlogPost (str) {
	this.content = str;
}

BlogPost.prototype = {

	addOnclicks: function addOnclicks() {
		$("#postButton").on("click", this.createPost);
	},
	
	createPost: function createPost (event) {
		event.preventDefault();

		var li = document.createElement("li");
		var ul = $("#listOfSubmissions");
		var but = document.createElement("button");
		var span = document.createElement("span");
	
		//checks for a blank textbox and changes the placeholder if it occurs
		if ($("#textBox").val() === "") {

			$("#textBox").attr("placeholder", "You didn't do anything!");
			$("#textBox").attr("data-dismiss", "alert");

		} else if ($("#textBox").val() == "where's the joke?") {

			$(li).html("<a href='https://www.youtube.com/results?search_query=ari+shaffir+this+is+not+happening'> THE JOKE </a>");
			$(ul).append($(li));
			$(li).attr("class", "listedPosts");

			//this will empty the text after sumission
			$("#textBox").val("");

			$(li).append($(but));
			$(but).attr("class", "deleteButton").on("click", this.removeLi);
			$(but).append(span).attr("class", "pull-right glyphicon glyphicon-remove");

		} else {

			$(li).html($("#textBox").val());
			$(ul).append(li);
			$(li).attr("class", "listedPosts");

			//empty text after submission
			$("#textBox").val("");
			
			$(li).append(but);
			$(but).attr("class", "deleteButton").on("click", this.removeLi);
			$(but).append(span).attr("class", "pull-right glyphicon glyphicon-remove");

		}
	},

	removeLi: function removeLi (event) {
		$(this).parent().attr("id", "removeMe");
		$("#removeMe").remove();
	}
};
























// $(function () {
// 	addOnclicks();
// });

// //This function will ad onclick events to the Post button
// function addOnclicks () {
// 	$("#postButton").on("click", onPostClick);
// }

// //this makes post button work
// function onPostClick (event) {
// 	//this removes the default behavior of the post button
// 	event.preventDefault();

// 	var li = document.createElement("li");
// 	var ul = $("#listOfSubmissions");
// 	var but = document.createElement("button");
// 	var span = document.createElement("span");

// 	if ($("#textBox").val() === "") {
// 		$("#textBox").attr("placeholder", "You didn't do anything!");
// 	} else if ($("#textBox").val() == "where's the joke?") {
// 		$(li).html("<a href='https://www.youtube.com/results?search_query=ari+shaffir+this+is+not+happening'> THE JOKE </a>");
// 		$(ul).append($(li));
// 		$(li).attr("class", "listedPosts");

// 		//this will empty the text after sumission
// 		$("#textBox").val("");

// 		$(li).append($(but));
// 		$(but).attr("class", "deleteButton").on("click", removeLi);
// 		$(but).append(span).attr("class", "pull-right glyphicon glyphicon-remove");
// 	} else {
// 		$(li).html($("#textBox").val());
// 		$(ul).append(li);
// 		$(li).attr("class", "listedPosts");

// 		//empty text after submission
// 		$("#textBox").val("");
		
// 		$(li).append(but);
// 		$(but).attr("class", "deleteButton").on("click", removeLi);
// 		$(but).append(span).attr("class", "pull-right glyphicon glyphicon-remove");

// 	}
// }

// function removeLi (event) {
// 	$(this).parent().attr("id", "removeMe");
// 	$("#removeMe").remove();
// }