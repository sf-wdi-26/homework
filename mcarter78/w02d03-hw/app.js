

  var posts = [];                                    // emtpy array to hold posts
  var $form = $("#postingForm");                     // selecting the form element
  var $post = $("#post");                            // selecting the form input
  var $postList = $("#post-list");                   // selecting the ul for the posts to be appended to

  var counter = 0;                                   // init a counter to keep track of number of posts (submit events)

  $form.submit(function(e){                          // listen for submit events
    e.preventDefault();                              // prevents default behaviors of the form element


    if($post.val()){
      var $newPost = $("<li></li>");                     // creates new list item and stores in $newPost
      $newPost.addClass("new-child");                // adds class of "new-child" to the newly created list element
      $newPost.html($post.val());                    // gives the new list element HTML equal to the value of the post
      console.log($newPost);
      posts.push($newPost);                          // adds the new post (list element) to the posts array
      //console.log(posts);

      counter++;                                     // increments the posts counter
    }

    for(var i = 0; i < posts.length; i++){         // loops through the posts array and
    $postList.append(posts[i]);                    // appends each list element to the ul
    addToStorage(posts[i]);
    }

    function addToStorage (post){
      for (var i = 0; i < posts.length; i++){
        localStorage.setItem(("post " + counter), $post.val()); // stores each post in localStorage
      }
    }

    $post.val(null);                                 // resets the form text to placeholder
  });
