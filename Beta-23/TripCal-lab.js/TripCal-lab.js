window.onload = function() {

    //Function to getElementById

    function getId (id){
        //document.getElementById(id); 
    }

    // Runs basic calc
    function runBasicCalc (){ 
        // Setup variables 
        // Get the input from Number 1
        var num1 = document.getElementById('basic-num-1').value;  
        var num2 = document.getElementById('basic-num-2').value;  
        // Accept the Operation 
        var op = document.getElementById('basic-operation').value;
        var answer = 0;

        // Switch statement to check on operation 
        switch(op) {
            case '+': answer = Number(num1) + Number(num2); 
                break;
            case '-': answer = num1 - num2; 
                break;
            case '*': answer = num1 * num2; 
                break; 
            case '/': answer = num1 / num2; 
                break;
        }
        //Change the text in basic-answer-alert to display the results of the calc
        document.getElementById("basic-answer-alert").innerHTML = answer;
        // How can I iterate on this? Make it DRY
    }

    // 
    document.getElementById('basic-calc').addEventListener('click', function(){
        runBasicCalc(); 
    });


    // Trip Cost Calclulator 
    function runTripCalc (){

        //Setup variables 
        // Accept Distance (miles)
        var distance = document.getElementById('trip-distance').value; 
        // Accept MPG:
        var mpg = document.getElementById('trip-mpg').value; 
        // Accept Cost ($/gallon)
        var galCost = document.getElementById('trip-cost').value; 
        // Accept Speed (MPH)
        var speed = document.getElementById('trip-speed').value; 
        var answer = 0;

        // Check speed and do stuff
        if ( speed < 60 && speed > 1 ) {
            // if speed < 60 = distance / mpg * cost
            answer = (distance * galCost) / mpg; 
        } else if ( speed > 60) {
            // if speed > 60 = distance / (mpg - (speed - 60) * 2) * cost
            answer = (distance * galCost) / (mpg - (speed - 60) * 2); 
        } else 
            answer = "Oops, please enter positive numbers."; 
        // What if user enters a negative amount?

        //Change the text in basic-answer-alert to display the results of the calc
            document.getElementById("trip-answer-alert").innerHTML = "Your trip will cost $" + answer;
    }

    // User presses Calculate Button 
    document.getElementById('trip-calc').addEventListener('click', function(){
        runTripCalc(); 
    }); 
};