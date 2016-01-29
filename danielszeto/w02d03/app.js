console.log ("linked");

window.onload = function() {

	var answerList = $('#answer-list');
	var name;
	var count = 0;
	initListener();

	function initListener () {

		$('form').on('submit',function(event){
			event.preventDefault();
			//console.log('form submitted');
			name = $(this).find('input').val();
			//console.log(name);

									
		 $('ul').append('<li>' + name +'</li>');
		 var newItem = 'answer' + count;
		 localStorage.setItem(newItem, name);
     count++;

 		 // $('li').append('<button>'+'remove'+'</button>');
 		 // var button = $('button');
 		 // button.setItem("click",'deleteli').on('submit',removetheLi);


     	$('#new-form').val("");

     	// localStorage.clear();

		});

		 	// function removetheLi() {
 		 // 	$('deleteli').parent().attr('removeMe');
 		 // 	$('#removeMe').remove();
 		 // }

	
}

};

//localStorage.clear();