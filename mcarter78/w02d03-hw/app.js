$(document).ready(function(){
  
var posts = [];                                    // emtpy array to hold posts
var $form = $("#postingForm");                     // selecting the form element
var $postContainer = $("#posts-container");        // selecting the div that holds post list
var $post = $("#post");                            // selecting the form input
var $postList = $("#post-list");                   // selecting the ul for the posts to be appended to
var counter = 0;                                   // init a counter to keep track of number of posts (submit events)

$form.submit(function(e){                          // listen for submit events
  console.log("in function now");
  e.preventDefault();                              // prevents default behaviors of the form element
  var $newPost = $("<li></li>");                   // creates a list element
  console.log("$newPost");
  console.log($post.val());
  $newPost.addClass("new-child");                  // adds class of "new-child" to the newly created list element

  if($post.val()){
    console.log("checking for post value");
    $newPost.html($post.val());                    // gives the new list element HTML equal to the value of the post
    posts.push($newPost);                          // adds the new post (list element) to the posts array
    counter++;                                     // increments the posts counter
  }
  for(var i = 0; i < posts.length; i++){           // loops through the posts array and
    console.log("looping now");
    $postList.append(posts[i]);                    // appends each list element to the ul
  }

  $post.val(null);                                      // resets the form text to placeholder
});

});



//for each post, display in posts-container
