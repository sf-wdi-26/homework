// Question 1
	function maxOfTwoNumbers(a, b) {
		if (a > b) {
			return a;
		}
		else {
			return b;
		}	
	}

	maxOfTwoNumbers( );

// Question 2
function maxOfThree( a, b, c) {
	if (a> b && a > c) {
			return a;
	}
	else if (b > a && b > c) {
			return b;
	}
	else {
			return c;
		}
}

	maxOfThree( );

// Question 3
function isCharacterAVowel(c) {
	var vowels = ["a", "e", "i", "o", "u"];
	if (vowels.indexOf(c) !== -1) {
		return true;
	}
	 else {
		return false;
	}
}
isCharacterAVowel( );

// Question 4
function sumArray(array) {
	
	var totalAmount = 0;

	for (var i = 0; i < array.length; i++) {
    	totalAmount += array[i];
	}

	return totalAmount; 
}

sumArray( );

// Question 4
function multiplyArray(array) {
	
	var prod = array[0];

	for (var i=1; i < array.length; i++) {
		prod *= array[i];
	} 
	return prod;
}

multiplyArray( );

// Question 5
var numberOfArguments = function() {
  	
  	return arguments.length;
};



// Question 6
var reverseString = function (string){
	
	return string.split("").reverse().join("");  
}; 

console.log(reverseString());



// Question 7
function findLongestWord (array) {
	
	currentlyLongest = 0;
	
	for (var i = 0; i < array.length; i ++) {
		
		if (array[i].length > longest) {
			
			currentlyLongest = array[i].length;
		} 
		return currentlyLongest;
	} 
}
  


// Question 8
function filterLongWords (array, a) {
  	
  	newArray = [ ];
  	
  	for (var i = 0; i < array.length; i++) {
    	
    	if(array[i].length > a) {

      	newArray.push(array[i]);
    }
  }
  return newArray;
}

  



// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

