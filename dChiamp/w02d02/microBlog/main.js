
$(document).ready(function() {
    // console.log( "ready!" );

	var $form = $('#enter-post');
	var $formBtn = $('#form-submit-button');

	var $postsList = $("#posts-list")

	var $totalPostsNum = $("#posts-num");

	var postsArray = []
	var postsIdArray = []; 

	function createNewPost () {
		// get last index in array
		for (var i = 0; i < postsArray.length; i++) {
			var lastPostArrayIndex = postsArray.lastIndexOf(postsArray[i]);
		};
		// create numbered posts for bonus reasons and append
		var newPost = document.createElement("ul");
		newPost.innerHTML = (postsArray[lastPostArrayIndex]);
		newPost.id = "post-" + (lastPostArrayIndex + 1);
		postsIdArray.push(newPost.id);
		$postsList.append(newPost);
	}

	function addPostsToArray () {
		postsArray.push($form.val());
		// reset form
		$form.val("");
	}

	function countTotalPosts () {
		$totalPostsNum.text("Total Posts: " + (postsArray.length));
		// console.log(postsArray);
	}

	function addToLocalStorage () {
		for (var i = 0; i < postsArray.length; i++) {
				localStorage.setItem(postsIdArray[i], postsArray[i]);
		};
	}

	function removePost () {
		$("ul").click(function(){
			var postId = this.id;
			console.log(postId);
			this.remove();
		}) 
	}

	function addComment () {
		// click on list post setItem
		// append form to list el
	}

	// post function
	$formBtn.on("click", function (e) {
		e.preventDefault();
		if ($form.val()) {
			addPostsToArray();
			countTotalPosts();
			createNewPost();
			addToLocalStorage();
			// addComment();
		}
		removePost();
	});
});
	
/* BONUS FAIL

function addDeleteBtn () {
	var $post1 = $("#post1");
	var deleteBtn = document.createElement("ul");
	deleteBtn.id = "delete-btn";
	deleteBtn.innerHTML = "X";
	$post1.append(deleteBtn);
}

// create form
var newComment = document.createElement("form");
var newCommentInput = newComment.value;
var text = newCommentInput.value;
newComment.appendChild(text);
commentListNum.appendChild(newComment)
}

// sort alpha
var sortAlpaBtn = document.getElementById("sort-alpha");
function sortAlpha () {
	postsArray.sort();
	console.log(postsArray);
}

sortAlpaBtn.addEventListener("click", function(){
	sortAlpha();
})

function deleteBtn () { 
	var deleteBtn = document.createElement("ul");
	deleteBtn.id = "delete-btn";
	deleteBtn.innerHTML = "X";
	$("ul").append(deleteBtn);
}

*/
