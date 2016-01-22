// Question 1
function maxOfTwoNumbers(x, y) {
	if ( x > y ) {
		return x; 
	} else if ( y > x ) {
		return y; 
	}
}

// Question 2
function maxOfThree(x, y, z) {
	if (x > y && x > z) {
		return x; 
	} else if ( y > x && y > z) {
		return y; 
	} else {
		return z; 
	}
}

// Question 3

function isCharacterAVowel(notAVowel) {
  var vowels = ['a','e','i','o','u'];
  if (vowels.indexOf(notAVowel) !== -1) {
    return true;
  } 
  return false;
}


// Question 4 - Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray(arrayOfNumbers) {
	var sum = 0; 
	for (var i = 0; i < arrayOfNumbers.length; i++) {
		sum += arrayOfNumbers[i]; 
	}
	return sum; 
}

function multiplyArray() {
	var mult = arrayOfNumbers[0]; 
	for (var i = 1; i < arrayOfNumbers.length; i++) {
		mult *= arrayOfNumbers[i]; 
	}
	return mult; 
}


// Question 5 - Write a function that return the number of arguments passed to the function when called.
var numberOfArguments = function(){
  return arguments.length; 
}; 

// Question 6 - Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
var reverseString = function (){
  return this.split('').reverse().join('');
};


// Question 7 - Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord (anArray) {
  longest = 0; 
	  for (var i = 0; i < anArray.length; i++) {
	  	if (anArray[i].length > longest) {
	  		longest = anArray[i].length; 
		}
	}
  	return longest;
}


// Question 8 - Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
function filterLongWords (anArray, yourNum) {
  newArray = []; 
  for (var i = 0; i < anArray.length; i++) {
   	if(anArray[i].length > yourNum) {
   		newArray.push(anArray[i]); 
   	}
   }
   return newArray;  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

