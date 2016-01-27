//javascript functions	
window.onload = function() {
	

	document.getElementById("form1").addEventListener("submit",function(e){
	e.preventDefault();
	});

	document.getElementById("btn").addEventListener("click",function(){
		length += 1;
	})

	arrayList = [];	
	arrayList.push(document.getElementById("getsInput").value);



};



