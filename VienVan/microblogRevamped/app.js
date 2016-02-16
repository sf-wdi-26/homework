console.log('linked');

var button = $('#postBtn');
var posts = [];
var postCounter = 0;
var ul = $('#blog-list');
var h2 = $('#postCounter');


function addPostToArray() {
      var blogPost = $('#blog').val();
      posts.push(blogPost);
}
function addToLocalStorage() {
    for (var i = 0; i < posts.length; i++) {

    }
}
function createList() {
    var text='';
    for (var i = 0; i < posts.length; i++) {
    text += "<li>" + posts[i] + "</li>";
    localStorage.setItem(i, posts[i]);
  }

  postCounter++;
  ul.html(text);
  h2.html(postCounter);
  if (postCounter === 6) {
    alert("Please refresh the page!");
  }
}

button.on('click', function(e) {
      e.preventDefault();
      addPostToArray();
      createList();
      addToLocalStorage();
})

$('#clearBtn').on('click', function() {

  localStorage.clear();
  window.location.reload();
})
