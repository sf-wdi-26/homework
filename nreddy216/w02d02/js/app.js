$(document).ready(function(){
	console.log("Linked");

	var submitBtn = $("#submit-btn");


	submitBtn.click(function(event){
		event.preventDefault();
		storePosts();
	});

	var postArray = [];
	

	// var counter = 0;

	function countPosts(){
		var counter = postArray.length;

		

		return counter;
	}

	function clearForm(){
		$("#entry-form")[0].reset();
	}

	function deletePost(closeID){

		var closeBtn = $("#close-"+closeID);

		closeBtn.click(function(event){
			event.preventDefault();
			this.remove();
		});
	}

	function storePosts(){
		var entry = $("#entry-box").val();

		postArray.push(entry);

		console.log(entry);
		console.log(postArray);

		var counter = countPosts();
		$("#counter").textContent = counter;

		var ul = $(".posts");
		var li = document.createElement("li");

		//puts list item at the top rather than at the bottom
		$(ul).prepend(li);
		

		// var closeBtn = document.createElement("img");
		// // closeBtn = $("img");

		// // console.log(closeBtn);
		
		// closeBtn.attr({
		// 	src: "../images/cross.svg",
		// 	alt: "close button",
		// 	id: "close-"+counter,
		// 	class: "close"
		// });

		var length = postArray.length;

		li.innerHTML = postArray[length-1] + "<p></p>";
		

		// deletePost(closeBtn[id]);

		clearForm();
	}

	

});