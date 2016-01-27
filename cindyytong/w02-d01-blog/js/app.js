window.onload = function(){
    function getId(id){
        return document.getElementById(id);
    }
   
    
    function submitPost(e){
        //do something to push post to bottom of page
    
        var getName = getId("name").value;
        var getHometown = getId("hometown").value;
        var getCity = getId("city").value; 
        var getStory = getId("story").value;
//
//       var posts = [];
//        posts.push(getStory);
//        getId("insertStory").innerHTML=posts

        var posts = [];
        posts.push(getStory);
        getId("insertStory").innerHTML=posts
    }
    
    //because we are resetting the value, we can't just set this equal to the variable because the varibale is not the node itself although it points to it; this will just reset the value of the variable
    function reset(e){
          getId("story").value = ""; 
    }
    
    getId("submit").addEventListener('click', submitPost);
    
    getId("submit").addEventListener('click', reset);
}

//Find out how to include username and city along with the story

