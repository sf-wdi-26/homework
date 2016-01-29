
//JQuery
var counter = 0;
var myListArray = [];
$(document).ready(function(){
$("#form1").click(function(event){
	event.preventDefault();
});

/*$("#btn").click(function(){
		var $lists = $("#getsInput").val();
		$("#tasks").append("<li>"+$lists+"</li>");	
});*/

$("#clr").click(function(){
	$("#tasks").remove();
	
});
	
	$("#btn").click(function(){
		var $lists = $("#getsInput").val();
		$("#tasks").prepend('<li id="' + counter +'">'+ $lists+"</li>");
		counter ++;

	});

	for(var i=0; i<counter; i++) {
		var $lists = $("#getsInput").val();
		myListArray.push($lists);
	}







});


//update arrayLength 


