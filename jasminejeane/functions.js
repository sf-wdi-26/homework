// Question 1
function maxOfTwoNumbers(num1, num2) {
	if (num1 === num2){
		return "These numbers equal";
	}
	else if (num1 > num2){
		return num1;
	}
	else {
		return num2;
	}
	
}

// Question 2
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c) {
	if (a === b){
		if (b === c){
			return "All numbers equal";
		}
	}
	else if (a > b){
		if (a > c){
			return a;
		}	
	}
	else if (b > a){
		if (b > c){
			return b;
		}	
	}
	else{
		return c;
	}

}



//or ...

function maxOfThree(a, b, c) {
	if (a === b){
		if (b === c){
			return "All numbers equal";
		}
	}
	else if (a > b){
		if (a > c){
			return a;
		}	
	}
	else if (b > a){
		if (b > c){
			return b;
		}	
	}
	else if (c > a){
		if(c > b){
		    return c;
		}
	}

}


//but have problems bringing up c for both 

// Question 3
// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) 
//and returns true if it is a vowel, false otherwise.
function isCharacterAVowel(x) {

	if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u'){

		return true;
	}
	else {
		return false;
	}

}

// Question 4
//Define a function sumArray and a function multiplyArray that sums and multiplies 
//(respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) 
//should return 10, and multiplyArray([1,2,3,4]) should return 24.


var sum = 0;

function sumArray(array) {
	for( var i = 0; i < array.length; i++){
		sum += array[i];
	}
 return sum; 
}


// Question 4
var sum = 1;

function multiplyArray() {
	for( var i = 0; i < array.length; i++){
		sum *= array[i];
	}
 return sum; 

}


// Question 5
//Write a function that return the number of arguments passed to the function when called.

var numberOfArguments = function(number){

	return arguments.length;
  
}

//come back to this one



// Question 6
//Define a function reverseString that computes the reversal of a string. 
//For example, reverseString("jag testar") should return the string "ratset gaj".

var newString = '';
var reverseString = function (string){
	for(var i = string.length - 1; i >= 0; i--){
		newString += string[i]; 
}
return newString;

};


// Question 7
//Write a function findLongestWord that takes an array of words and 
//returns the length of the longest one.

function findLongestWord (words) {
	//iterate through the array
	//iterate through each letter in each word
	//record the number of letters in each word
	//record which one is the greatest
var lgth = 0;
var longest;

for(var i=0; i < words.length; i++){
    if(words[i].length > lgth){
        lgth = words[i].length;
        longest = words[i];
    }      
} 

return(longest);

  
}



// Question 8
//Write a function filterLongWords that takes an array of words and a number 
//i and returns the array of words that are longer than i characters long.

var newArray = []; 
function filterLongWords (words, i) {
	for (var x = 0; x < words.length; x++){
		if(words[x].length >= i){
      newArray.push(words[x]);
		}
	}
  return newArray;
}

//not quite

// Bonus 1
//Attach the function reverseString (from question 6) to the object String 
//so that it is possible to call: "General Assembly".reverseString()
//??????

var newString = '';
var reverseString = function (string){
	for(var i = string.length - 1; i >= 0; i--){
		newString += string[i]; 
}
return newString;

};



// Bonus 2
//Write a function that takes a string as argument and returns an object where:
//the keys are the characters that occur in the string
//the values are the number of occurences for each letter, regardless of the case

function charactersOccurencesCount() {
  
}

