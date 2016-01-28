//Your JS will hold an array of posts that it appends to the HTML list.
//When your user clicks submit
//your JS should handle taking the content of the form
//putting it in that array, and updating the DOM.
console.log("we linked baby!");
window.onload = function (){

	//array that holds posts
	var posts = [];
	var ul = document.getElementById('ul');
	var newListItem = document.createElement('li');
	var form = document.getElementById('myForm');

	//add event listener to submit button
	//when submit button pressed, add content to posts array
	var submitButton = document.getElementById('submit');

	submitButton.addEventListener('click', function(e){
		e.preventDefault();
		//need value of form input
		var content = document.getElementById('typing').value;
		//push content into posts array
		posts.push(content);
		//update the dom with content from posts array
		//create element (li) on the page (from posts array)
		var listItem = document.createElement("LI"); 
		listItem.innerHTML = content;                
		ul.appendChild(listItem);

		//resets form
		myForm.reset();

	});

	//posts array appends li element to HTML

};
