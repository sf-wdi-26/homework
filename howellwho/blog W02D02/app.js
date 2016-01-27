
    
    // var notSubmitForm = document.getElementByID("notSubmitForm");
    // notSubmitForm.addEventListener("notSubmitForm", function (event) {
    //     event.preventDefault();
    //     console.log(event.target);
    // });

window.onload = function (){

    document.getElementsByTagName("form")[0].addEventListener("submit", forSubmit);
};

function forSubmit(e) {
    e.preventDefault();
    var words = document.getElementById("thoughts").value;
    

    // 2 -v
    var $li = document.createElement("li");
    $li.innerHTML = words;
    console.log($li);
    document.getElementById('list-id').appendChild($li);
// }

    // 3 - 
        
        
    }
   
    // document.getElementById("shared-throughs").innerHTML = answer;




