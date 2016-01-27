

var distance;
var refNode;

window.onload = function() {
    console.log("linked");
    document.getElementById("invia").addEventListener("click", catchelement);

};

function createElement () {
        var $li = document.createElement("li");
    $li.textContent = distance;
    var ul = document.getElementById("Post-ul");
    ul.appendChild($li); 
    document.getElementById("Post-list").insertBefore($li, refNode);
    refNode = $li;    
}

function catchelement(event){

	event.preventDefault();
     distance = document.getElementById("comment").value;
     createElement();
     
	}