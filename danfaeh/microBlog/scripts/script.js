window.onload = start;
var counter=0;

  function start(){
    restoreLS();
    listenerPost();
    deletepost();
    deleteAllPosts();
  }

  function restoreLS(){
    if (localStorage.length > 0){
      $('#counter').html('Currently '+localStorage.length+' comment(s)');
      for (var i=0; i<localStorage.length; i++){
        $('#list').prepend('<li id="'+localStorage[i]+'">'+localStorage[i]+'</li>');
      }
    }
    else{
      $('#counter').html('0 comments... Be the first!');
    }
  }

  function listenerPost(){
    $('#post').click(function(e){
      e.preventDefault();
        if ($('#comment').val() !== '') {
          var $node = $('#comment');
          var $comment = $('#comment').val();
            addNewComment($comment);
            $node.val('');
        }   
    });
  }

  function addNewComment(comment){
    addGracefully(comment);
    // $('#list').prepend('<li id="'+comment+'">'+comment+'</li>');
    counter ++;
    $("#counter").html("Currently: "+counter+" comment(s)");
    localStorage.setItem(counter-1,comment);
  }
  
  function deletepost(){
    $('#list').on('click', 'li', function(e){
      removeGracefully(this);
      counter --;
      $("#counter").html("Currently: "+counter+" comment(s)");
      var x = e.target;
      var y = e.target.id;
      // console.log($('li').index(x));
      // localStorage.removeItem($("li").index(e.target.id));
      localStorage.removeItem($('li').index(y));
    });
  }

  function deleteAllPosts(){
    $('#clear').click(function(e){
      localStorage.clear();
      $('li').remove();
      $('#counter').html('0 comments... Be the first!');
      counter=0;
    });
  }

  function removeGracefully(self) {
      $(self).fadeOut(1500, function() {
          $(self).remove();
      });
  }

  //fade in animations not working for some reason
  function addGracefully(comment) {
    // comment = "#"+comment;
    $(this).fadeIn(1000, function() {
      $('#list').prepend('<li id="'+comment+'">'+comment+'</li>');
    });
  }






