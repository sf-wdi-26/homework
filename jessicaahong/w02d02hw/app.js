window.onload = function() {
var doNotSubmit = document.querySelector("#form");
doNotSubmit.addEventListener("submit", function(event){
//stop default submit stuff
	event.preventDefault();
	var blogList = document.querySelector("#postingList");
	var newPost = document.createElement("li");
	newPost.setAttribute("class", "text");
//push content of 
	newPost.innerHTML = document.querySelector("#blurb").value;
	blogList.appendChild(newPost);
	document.querySelector("#blurb").value = "";
});

};



// function deleteButton(){
// posts = document.querySelectorAll("li");
// for (i = 0; i < posts.length; i ++) {
// 	var button = document.createElement("button");
// 	button.setAttribute("class", "buttonclass");
// 	posts[i].appendChild(button);

// 	button.addEventListener("click", test);
// }

// function test() {
// 	var blogList = document.querySelector("#postingList");
// 	for (i = 0; i < posts.length; i ++){
// 		blogList.removeChild();
// 	}
// }
// // button.addEventListener("click", function(event){
// // var blogList = document.querySelector("#postingList");
// // for (i = 0; i < posts.length; i ++){
// // 	blogList.removeChild(posts[i]);
// // }
// }
// deleteButton();

// };


// //create button
// //attach button to each li









