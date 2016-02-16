var distance;
var refNode;

window.onload = function() {
	console.log("loaded");
	document.getElementById("invia").addEventListener("click", catchelement);

   

};




function createElement () {
	console.log("loading");
	var $li = document.createElement("li");
	$li.textContent = distance;
	document.getElementById('my-list').insertBefore($li, refNode);
	refNode = $li;	
}

function catchelement(){

	 distance = document.getElementById("comment").value;
	 createElement();
	 console.log(distance);
}
