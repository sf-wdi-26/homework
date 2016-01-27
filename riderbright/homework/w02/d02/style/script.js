


window.onload = function(){
	function preventDefault(e){
		e.preventDefault();
	}
	
	function postInfo(){
		var infoValue = document.getElementById("info").value;
		var blogPost = document.createElement("li");
			blogPost.innerHTML = infoValue;
			document.getElementById("blogPosts").appendChild(blogPost);




	}

	var formNotToSubmit = document.getElementById("form");

	formNotToSubmit.addEventListener("submit", function(e){
		e.preventDefault();

		postInfo();
		document.getElementById("info").value = ""
	});


};
  		