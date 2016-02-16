

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
	  //append JQuery I have changed and redid this but the JQuery I have changed did not
	  //work sadly so the old way stays for now
	  $('ul').append("<li>" + input + "</li>");
	  localStorage.setItem('input' + count, input);
	  count++; 
	  
	  
	  //JQuery function does not work with the form when submiting
	  // $('.textBox')[0.reset();
    });

	    //put an addEventListener on to clear the default text in box
//     $("#textBox").on("click", function() {
//     if ($(this).val() == "Typetexthere")
//         $(this).val("");
// });
	  $("#textBox").focus( function() {
        if ( $(this).val()=="Typetexthere") {
            $(this).val('');
        } 
    });
   
    	    $("#textBox").blur( function() {
        if ( $(this).val()==="") {
            $(this).val('Typetexthere');
        } 
    });
		//added new functions but sadly I did change them but nothing was completed
		//in adding these into my microblog
    	   //  $('button').click(function(){
        // $('input[type="text"]').val('');
// // });
	// function clearSubmit(){

	// 	var clear = document.querySelector('#clear');
	// 	var textarea = document.querySelector('#output');

	// 	input.addEventListener('click', function () {
	// 		textarea.value = '';
	// 	}, false);
	// }
});
   
    


	




