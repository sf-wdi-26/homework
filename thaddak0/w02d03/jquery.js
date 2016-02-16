$( document ).ready(function() {
	console.log('linked');
	var inputArray = [];
	/*var storageArray = [];
	storageArray.push(localStorage);
	console.log(storageArray);
	var newlist = ' ';
	for (var i = 0; i < storageArray.length; i ++) {
		newlist = '<li>' + storageArray[i] + '</li>';
	}
	$('ul').append(newList);*/
//upon the window loading i want to have an array that is full of the info in local storage
//iterate over that array and create list items when the window opens


	$('#button').on('click', function(event) {
		event.preventDefault();
		var blogpost = $('#blogpost').val();
		inputArray.push(blogpost);
		len = inputArray.length;
		var newli =' ';
		for (var i = 0; i < len; i ++) {
			
			newli = '<li>' + inputArray[i] + '</li>';
			localStorage[i]= $('#blogpost').val();
		// this is resetting all the key value pairs
		}
		$('ul').prepend(newli);
		$("#postform").trigger('reset');
		});

	$('#delete').on('click', function(event) {
		// event.preventDefault();
		// localStorage.reset();
	});

	$('.onscreen').on('click', function() {
		$('.onscreen').addClass('.offscreen');
		console.log('button');
		debugger;
		if ('.offscreen') {
			$('.offscreen').remove();		
		}

	});



//addclass to the list element that's x'd and then have that class removed from list
// <button class = "onscreen">X</button>
});

//using jQuery and local storage i want to figure out how to 
//store the input in my localstorage
//BUT the localstorage only replaces the input for that value 
//do i need new keys every time the button is selected
//add input value to a new list item
//put list item in the preexistint list
//the items stay in the storage when you leave session BUT does the list created 
//remain on the page