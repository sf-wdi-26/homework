console.log("Linked");

window.onload = function () {

	document.getElementsByTagName('button')[0].addEventListener("click", addInputToList);

};

function addInputToList (e) {
	e.preventDefault();
    console.log('clicked');
	// 1 - get the user input, add to array
	var userInput = document.getElementsByTagName('input')[0].value;

	// 2 - create the list item
   var $li = document.createElement('li');
   $li.textContent = userInput;
	// 3 - .appencChild in to Unorder list
	var $ul = document.getElementsByTagName('ul')[0];
	$ul.appendChild($li);



}