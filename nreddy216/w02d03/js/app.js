$(document).ready(function(){
	console.log("Linked");

	var submitBtn = $("#submit-btn");


	submitBtn.click(function(event){
		event.preventDefault();
		storePosts();
	});

	var postArray = [];
	
	//COUNTER
	function countPosts(){
		var counter = postArray.length;
		return counter;
	}

	//clears form after entered
	function clearForm(){
		$("#entry-form")[0].reset();
	}

	//TODO: Find way to delete meme after ?
	function deletePost(closeID){

		var closeBtn = $("#close-"+closeID);

		closeBtn.click(function(event){
			event.preventDefault();
			this.remove();
		});
	}

	//Main function
	function storePosts(){
		var photoEntry = $("#photo-entry-box").val();
		var captionEntry = $("#caption-entry-box").val();

		var ul = $(".posts");
		var li = document.createElement("li");
		var img = document.createElement("img");

		if(photoEntry.length!==0){

			//puts list item at the top rather than at the bottom
			postArray.push({photo: photoEntry, caption: captionEntry});
			localStorage.photo = photoEntry;
			localStorage.caption = captionEntry;

			//TODO: add later
			//$("#counter").text(countPosts());

			li.innerHTML = "<p><span class='quotes carousel-caption'>&ldquo;" + captionEntry + "&rdquo; </span></p>";
			
			//set input URL to the src and make sure that the img is responsive
			$(img).attr("src", photoEntry);
			$(img).attr("class", "img-responsive sloth-img");

			//prepend allows image to be the top image
			$(ul).prepend(li);
			$(li).append(img);

			//resets the form each time
			clearForm();


		}

	}

	

});

	

		
			//PART OF CLOSE BUTTON : NOT WORKING
			// var closeBtn = document.createElement("img");
			// // closeBtn = $("img");

			// // console.log(closeBtn);
			
			// closeBtn.attr({
			// 	src: "../images/cross.svg",
			// 	alt: "close button",
			// 	id: "close-"+counter,
			// 	class: "close"
			// });


			// deletePost(closeBtn[id]);


