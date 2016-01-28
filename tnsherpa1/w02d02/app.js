//javascript functions	
window.onload = function() {
	
	document.getElementById("form1").addEventListener("submit",function(event){
		event.preventDefault();
		addToList();
	});

	function addToList() {
		var x = document.getElementById("getsInput").value;
		addList = document.createElement("li");
		addList.innerHTML = x + "&nbsp &nbsp &nbsp &nbsp";
		document.getElementById("tasks").appendChild(addList);
		addList.setAttribute("class", "newClass");
		closeButton = document.createElement("button");
		closeButton.innerHTML = "X";
		addList.appendChild(closeButton);
	};
}


