console.log("Linked.");
window.onload = function(){

setListener();

};
//pseudocode
//
// 
// set up variables for form and tags
// listen for submit, pass the result to a new child list element of the display


function setListener () {
  var tag = document.getElementById("tag");
  tag.addEventListener("click", addPost);
}

  function addPost(e) {
    console.log("working");
    var posts = document.getElementById("posts");
    var form = document.getElementById("form");
    e.preventDefault();
    var li = document.createElement("li");
    li.textContent=tagPost.value;
    posts.appendChild(li);
  }

