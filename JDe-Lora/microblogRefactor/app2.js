

$(function() {
	console.log("Linked");
	var count = 0;
	//document.getElementsByTagName('button')[0].addEventListener("click", addInputToList);
	//$('button')

	$("form").submit(function(e)  {
	  e.preventDefault();
      //console.log('clicked');
	  // 1 - get the user input, add to array
	  var input = $('form').find('input').val();
	  $('ul').append("<li>" + input + "</li>");
	  localStorage.setItem('input' + count, input);
	  count++;
    });
	
});



