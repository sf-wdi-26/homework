$(function() {

console.log('testing');
var userInput = [];// var userPost;
var count = 0;

$('#postButton').on('click', function(e) {
		e.preventDefault()
	var userPost = document.getElementById('userText').value;
	if (userPost == '' ) {
		alert('You cannot submit an empty box');
			
	} else {
	getInput(userPost);
	userInput.push(userPost);
	console.log(userInput);
	}

	$('#myForm')[0].reset();

});

function getInput(userPost) {
	var $newLi = document.createElement('li');
	$('ul').append('<li>' + userPost + '</li>');
	var clickCount = 'posts' + count;

	localStorage.setItem(clickCount,userPost);
	count++;
	
	// localStorage.clear();
}
});

