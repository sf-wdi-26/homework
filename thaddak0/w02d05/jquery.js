console.log('linked');

window.onload = function() {
var inputArray1 = [];
var inputArray2 = [];

$('#button1').on('click', function(event) {
		event.preventDefault();
		var blogpost1 = $('#blogpost1').val();
		inputArray1.push(blogpost1);
		len = inputArray1.length;
		var newli =' ';
		for (var i = 0; i < len; i ++) {
			newli = '<li>' + inputArray1[i] + '<button class = "btn-xs">X</button></li>';
			localStorage[i]= $('#blogpost1').val();
		// this is resetting all the key value pairs
		}
		$('#bloglist1').prepend(newli);
		$("#postform1").trigger('reset');
			
			$('.btn-xs').on('click', function(event) {
			event.preventDefault();
			$('.btn-xs').attr('id', 'offscreen');
			if ('#offscreen') {
			$('#offscreen').parent().remove();		
		}

	});
});
};





//addclass to the list element that's x'd and then have that class removed from list
// <button class = "onscreen">X</button>


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




//using jQuery and local storage i want to figure out how to 
//store the input in my localstorage
//BUT the localstorage only replaces the input for that value 
//do i need new keys every time the button is selected
//add input value to a new list item
//put list item in the preexistint list
//the items stay in the storage when you leave session BUT does the list created 
//remain on the page



	// $('.onscreen').on('click', function(event) {
	//	event.preventDefault();
		// $('.onscreen').addClass('offscreen');
		// if ('.offscreen') {
			// $('.offscreen').remove();		
		// }

	// });
