$(document).ready(function(){
	console.log("Linked");

	var submitBtn = $("#submit-btn");


	submitBtn.click(function(event){
		event.preventDefault();
		storePosts();
	});

	var postArray = [];

	function storePosts(){
		var entry = $("#entry-box").val();

		postArray.push(entry);

		console.log(entry);
		console.log(postArray);


		var ul = $(".posts");
		var li = document.createElement("li");

		ul.append(li);

		li.innerHTML = postArray[postArray.length-1];
	}

});