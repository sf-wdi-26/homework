window.onload = start;
var counter=0;
  
  function getId(id){
    return document.getElementById(id);
  }

  function start(){
    var post = getId("post");
      post.addEventListener("click", function(e){
        e.preventDefault();
        var comment = getId("comment").value;
        addNewComment(comment);
        getId("comment").value = "";
      });
  }

  function addNewComment(comment){
    var ul = getId("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(comment));
    ul.appendChild(li);
    counter ++;
    getId("counter").textContent="Currently: "+counter+" comments";
  }
  
    
