$(document).ready(function(){
	console.log("Linked");

	var submitBtn = $("#submit-btn");


	submitBtn.click(function(event){
		event.preventDefault();
		storePosts();
	});

	var postArray = [];
	

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

			console.log(postArray);

			var counter = countPosts();
			$("#counter").text(counter);

			var length = postArray.length;

			li.innerHTML = "<p><span class='quotes'>&ldquo;" + captionEntry + "&rdquo; </span></p>";
			

			$(img).attr("src", photoEntry);
			$(img).attr("class", "img-responsive");

			$(ul).prepend(li);

			$(li).append(img);

			//li.innerHTML = "<p>" + postArray[length-1] + "</p>";
			


			clearForm();


		}

	}

	

});

	

		

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


