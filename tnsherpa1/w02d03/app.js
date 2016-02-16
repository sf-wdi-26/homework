
//JQuery
var myListArray = [];
var $xBtn = document.createElement("button");
$xBtn.setAttribute("class", "closeBtn");
$xBtn.innerHTML = "X";

//Loads when ready
$(document).ready(function(){
// Prevents Default	
$("#form1").click(function(event){
	event.preventDefault();
});

//clear lists function
$("#clr").click(function(){
	$("li").remove();
});

//button builder
//var btnRight = document.createElement("button");
//btnRight.innerHTML = "X";

//Adds event listener to button-->post
//Adds individual lists with id
//resets form
$("#btn").click(function(){	
	var $lists = $("#getsInput").val();
	$("#tasks").prepend("<li>"+$lists+"<button class="+'closeBtn'+">X</button>"+"</li>");
	$("#form1").trigger("reset");
	$(".closeBtn").click(function(){
	$(this).parent().remove();
});	
	});









});




