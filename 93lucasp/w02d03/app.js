var distance;
var refNode;

window.onload = function() {
	console.log("loaded");
	$("#invia").on("click", catchelement);

function catchelement(){
	distance = $("#comment").val();
	$("ul").prepend("<li>" + distance + "</li>");
	if(localStorage.buttonClick){
				localStorage.buttonClick = Number(localStorage.buttonClick)+1;
				document.getElementById("result").innerHTML = "Your comment is the " + localStorage.buttonClick + ".";
			}else{
				localStorage.buttonClick = 1;
				document.getElementById("result").innerHTML = "Your comment is the " + localStorage.buttonClick + ".";
			}
	localStorage.setItem("distance" + localStorage.buttonClick, distance );  

}
$("a").click(function(){
			localStorage.clear();
		});

};
