

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
     //var count;
	event.preventDefault();
    distance = $('#id').value; //trying to jquery getElementByID//not working//
     // distance = document.getElementById("comment").value;
     createElement();
     //localStorage.setItem('input' + count, input); count++;//console error, trying to define count//
     
	}