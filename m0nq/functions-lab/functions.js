// Question 1

// Number Number -> Number
// Consumes 2 numbers and returns the larger of them
function maxOfTwoNumbers(n, m) {
  return n > m ? n : m;
}

// Question 2

// Number Number Number -> Number
// returns the larger of three numbers consumed.
function maxOfThree(x, y, z) {
  var w = x > y ? x : y;
  return w > z ? w : z;
}

// Question 3
// String[1] -> Boolean
// returns true if the character is a vowel.
function isCharacterAVowel(char) {
  if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
    return true;
  }
  return false;
}

// Question 4
// Array -> Number
// returns the sum of the numbers within a given array.
function sumArray(array) {
  var sum = 0;
  for (var i = 0 ; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


// Question 4
// Array -> Number
// returns the product of numbers within a consumed array.
function multiplyArray(array) {
  var product = 1;
  for (var i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
}


// Question 5
var numberOfArguments = function(){
  
}



// Question 6
var reverseString = function (){
  
};


// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

