window.onload = function(){
    function getId(id){
        return document.getElementById(id);
    }
   
    
    function submitPost(e){
        //do something to push post to bottom of page
        console.log("working");
    
        var getName = getId("name").value;
        var getHometown = getId("hometown").value;
        var getCity = getId("city").value; 
        var getStory = getId("story").value;

        console.log(getName);
        console.log(getHometown);
        console.log(getCity);
        console.log(getStory);
        
        var posts = [];
        posts.push(getStory);
        getId("insertStory").innerHTML=posts
    }
    
    getId("submit").addEventListener('click', submitPost)
}

//Find out how to include username and city along with the story