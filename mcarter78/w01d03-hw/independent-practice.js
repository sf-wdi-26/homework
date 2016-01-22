//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
function findLengths (arr) {
    var lengths = [];
    for(var i = 0; i < arr.length; i++){
        lengths.push(arr[i].length);
    }
    return lengths;
  }


// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here
function transmogrifier(a, b, c){
  return Math.pow((a + b), c);
}


// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here
function wordReverse(words){
  wordsArray = words.split(' ');
  for(var i = 0; i < wordsArray.length; i++){
    var x = wordsArray[i].pop();
    wordsArray.unshift(x);
  }
}
