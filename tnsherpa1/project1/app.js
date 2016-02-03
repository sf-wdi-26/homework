//loads when DOM is ready


$(document).ready(function(){
//jQuery event listener that shows and hides images
$("#startMe").click(function() {
$("#p1").show();
setTimeout(function() { $("#p1").hide(); }, 1000);
});
//function randomMargin, takeas a parameter
function randomMargin(targetBox) {
	//checks no of calls
  console.log("random margin called");
	var top = Math.floor(Math.random()*10);
	var left = Math.floor(Math.random()*800);
	//assigns targetBox as id
	var targetElement = $("#box" + targetBox);
	//adds css margin-top to to targetBox id
	targetElement.css("margin-top",top+"px");
	//adds css margin-left to targetBox id
	targetElement.css("margin-left",left+"px");
}

//declares variable numberOfBoxes
var numberOfBoxes = 1;

function insertBox(){
	var box = $("<div>").attr("class", "emptyBox").attr("id", "box" + numberOfBoxes);
	$(".container").append(box);
	randomMargin(numberOfBoxes);
	numberOfBoxes += 1;
}

insertBox();
insertBox();
insertBox();
insertBox();












})

