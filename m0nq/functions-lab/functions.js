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
  array.forEach(function(x) {
    sum += x;
  });
  return sum;
}


// Question 4
// Array -> Number
// returns the product of numbers within a consumed array.
function multiplyArray(array) {
  var product = 1;
  array.forEach(function (x) {
    product *= x;
  })
  return product;
}


// Question 5
// Void -> Number
// return the number of arguments passed to the 'arguments' object
var numberOfArguments = function() {
  return arguments.length;
};



// Question 6
// String -> String
// consumes a phrase and returns it reversed in place.
var reverseString = function (phrase) {
  var reversed = "";
  for (var i = phrase.length - 1; i >= 0; i--) {
    reversed += phrase[i];
  }
  return reversed;  
};


// Question 7
// Array(Strings) -> Number
// consumes an array of strings and returns the longest string within the array
function findLongestWord (array) {
  var longest = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest) {
      longest = array[i].length;
    }
  }
  return longest;
}


// Question 8
// Array(String) Number -> Array(String)
// from the array of words consumed, returns an array of words greater than the number provided.
function filterLongWords (words, i) {
  var longerWords = [];
  for (var j = 0; j < words.length; j++) {
    if (words[j].length > i) {
      longerWords.push(words[j]);
    }
  }
  return longerWords;
}


// Bonus 1
// Attach reverseString to the String Object as a native function.
String.prototype.reverseString = function () {
  var reversed = "";
  for (var i = this.length - 1; i >= 0; i--) {
    reversed += this[i];
  }
  return reversed;  
};


// Bonus 2
// String -> Object
// return an object where the keys are the character of the consumed string,
// and the values are the counted occurences of each letter.
function charactersOccurencesCount(phrase) {
  var obj = {};
  var characters = phrase.split("");
  for (var i = 0; i < characters.length; i++) {
    if (!obj[characters[i]]) {
      obj[characters[i]] = 1;
    } else {
      obj[characters[i]]++;
    }
  }
  return obj;
}