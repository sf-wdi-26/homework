$(document).ready(function() {
var doNotSubmit = $("#form");
doNotSubmit.on("submit", clickSubmit);
markToDelete();
localStorage();
});

function clickSubmit(event) {
	event.preventDefault();
	var blogList = $("#postingList");
	var button = $('<button>');
	var blurbContent = $('#blurb').val();
//append blog characters to ul and add button to end of each li
	var test = blogList.append('<li>' + blurbContent + '<button class="btn btn-primary">X</button></li>');
//style the new text
	test.addClass('text');
//reset the blurb input field to empty
	$('#blurb').val('');
//activate a click event on these new buttons that allows them to be deleted
	markToDelete();
}

function markToDelete() {
	$('button').each(function(){
		$(this).on('click', deleteIt);
	});
}

//previous javascript function:
// function markToDelete() {
 // 	var button = document.querySelectorAll("button");
 // 	for (var i = 0; i < button.length; i++) {
 //    	button[i].addEventListener('click', deleteIt, false);
 // 	}
 // }


// javascript function that deletes a button's post!
 function deleteIt() {
 		this.parentNode.setAttribute("id","toDelete");
 		var post = document.querySelector("#toDelete");
		post.parentNode.removeChild(post);
 }


//still working on a jquery function that deletes the post
// function deleteIt() {
// 	//assign the parent element of every clicked button (this) an id of toDelete
// 	//delete every element with id toDelete
// var	parentTag = this;
// console.log(parentTag);
// // 	parentTag.attr('id', 'toDelete');
// // this.parent().attr('id', 'toDelete');
// 	// var post = $('#toDelete');
// 	// button.parent().remove(post);
// }



function localStorage(){

//click function on post button, stores click number of submit button clicks
//but why isn't this showing up in my inspector???
	$("#submitButton").click(function(){
		if (localStorage.buttonClick) {
			localStorage.buttonClick = Number(localStorage.buttonClick)+1;
			var displayedNumber = localStorage.buttonClick + 3;
			$('#musingCounter').html('there are ' + displayedNumber + ' posted musings');
		} else {
			localStorage.buttonClick = 1;
			$('#musingCounter').html('there are 4 posted musings');
		}

//...but you can delete posts too, so i want to create a click function
//on the delete buttons that counts the number of deletions made 
//AND reduces the number in the "musings counter"

	// $('button').click(function(){
	// 	if(localStorage.deleteClicks){
	// 		localStorage.deleteClicks = Number(localStorage.deleteClicks)+1;
	// 		var newerDisplayedNumber = localStorage.buttonClick + 2
	// 		$('#musingCounter').html('there are currently ' + localStorage.buttonClick + ' musings');
	// 	}else{
	// 		localStorage.deleteClicks = 1;
	// 		var displayedNumber = localStorage.buttonClick - 1;
	// 		$('#musingCounter').html('there are currently ' + newDisplayedNumber + ' musings');
	// 	}
	// });


//copied from Ben's storage module:
	// Empty the local storage.
	// $("a").click(function(){
	// 	localStorage.clear();
	// 	document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.buttonClick + " time(s).";
	// });

});
}


