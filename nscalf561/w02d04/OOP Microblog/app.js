//OOP form of microblog

//On load, create a new Blog, microBlog, and call addOnclicks 
//to initialize the submit button to create new Posts on click
$(function () {
	var microBlog = new Blog ();
	microBlog.addOnclicks();
});

//defines the Blog constructor
function Blog () {
}

//defines the Post contructor
function Post () {
}

//defines the prototype of the blog
Blog.prototype = {
	//addOnclicks is a function that will make the submit button run.  It will create a
	//new li of the contents of thetext box by making a new "Post" and then calling that
	//Post's 'createPost' method.
	addOnclicks: function addOnclicks() {
		//adds an onclick event to the submit button
		$("#postButton").on("click", function (e) {
			//sets a temporary variable to make a new post
			var tempPost = new Post();
			//calls tempPost's create Post function and passes it the event
			tempPost.createPost(e);
		});
	}
};

//defines the post prototype
Post.prototype = {

	//defines the create Post method, this will remove the default behavior of the submit
	//button, then create list items, checks the content of the post, and then appends
	//them to the unordered list
	createPost: function createPost (event) {
		//keeps the page from redirecting after sumission
		event.preventDefault();
		this.postChecker(event);
	},

	postChecker: function postChecker (event) {
		//defines our variables, ul grabs the list we're adding things to, then we create
		//the other items we're appending to the ul (and it's children)
		var ul = $("#listOfSubmissions"),
		li = document.createElement("li"),
		but = document.createElement("button"),
		span = document.createElement("span");
	
		//checks for a blank textbox and changes the placeholder if it occurs
		if ($("#textBox").val() === "") {

			$("#textBox").attr("placeholder", "You didn't do anything!");
		//adds a specific response to the phrase "where's the joke?"
		} else if ($("#textBox").val() == "where's the joke?") {

			//finds the joke and sets it equal to the text content
			$(li).html("<a href='https://www.youtube.com/results?search_query=ari+shaffir+this+is+not+happening'> THE JOKE </a>");
			//appends the text content to the ul in a list item
			$(ul).append($(li));
			//gives the list item the class listed post
			$(li).attr("class", "listedPosts");

			//this will empty the text after sumission
			$("#textBox").val("");

			//gives the above list item a button that will be used to delete them
			$(li).append($(but));
			//gives that button a class item, "deleteButton", and gives it an onclick event that calls removeLi
			$(but).attr("class", "deleteButton").on("click", this.removeLi);
			//makes the button sexy
			$(but).append(span).attr("class", "pull-right glyphicon glyphicon-remove");

		//if there is no error, then the text is posted
		} else {
			//sets the html to the text content
			$(li).html($("#textBox").val());
			//appends the text content to the ul in a list item
			$(ul).append(li);
			//gives the list item the class listed posts
			$(li).attr("class", "listedPosts");

			//empty text after submission
			$("#textBox").val("");
			
			//gives the above list item a button that will be used to delete them
			$(li).append(but);
			//gives that button a class item, "deleteButton", and gives it an onclick event that calls removeLi
			$(but).attr("class", "deleteButton").on("click", this.removeLi);
			//makes the button sexy
			$(but).append(span).attr("class", "pull-right glyphicon glyphicon-remove");
		}
	},

	//defines the removeLi method, this will remove the list item on click
	removeLi: function removeLi (event) {
		//takes the parent of "this" (refering to the list item), and gives it the removeMe id
		$(this).parent().attr("id", "removeMe");
		//removes the list item
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