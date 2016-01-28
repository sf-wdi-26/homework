
window.onload = function (){
    //grabs element from the form after
    document.getElementsByTagName("form")[0].addEventListener("submit", forSubmit);
};

    //prevents from default linking externally
function forSubmit(e) {
    e.preventDefault();
    var words = document.getElementById("thoughts").value;
    

    //places "thoughts" into a list on site
    var $li = document.createElement("li");
    $li.innerHTML = words;
    console.log($li);
    document.getElementById('list-id').appendChild($li);
    reset(); 
    }

    //link bottom of page
  //   var newLink = $( '<br><br><a id="link" href="http://www.google.com">Visit Google<a>' );
  //   newLink.appendTo('body');
  //   $('#link').attr( "target", "_blank" );
  // });


   // reset text box
function reset(){
     document.getElementById("thoughts").value = "";

}