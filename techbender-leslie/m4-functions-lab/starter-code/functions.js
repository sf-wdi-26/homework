// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// 5. Write a function that return the number of arguments passed to the function when called.
// 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
// 
// Bonus
// 1) Attach the function reverseString (from question 6) to the object String so that it is possible to call: "General Assembly".reverseString().
// 2) Write a function that takes a string as argument and returns an object where:
// - the keys are the characters that occur in the string
// - the values are the number of occurences for each letter, regardless of the case
// 
//  For example, calling the function with the string "General Assembly" will return:

// {
//   a: 2,
//   b: 1,
//   e: 3,
//   g: 1,
//   l: 2,
//   m: 1,
//   n: 1,
//   r: 1,
//   s: 2,
//   y: 1
// }


// Question 1
function maxOfTwoNumbers(num1, num2) {
   if (num1 > num2) {
     return num1;
}  else { 
     return num2;
}}

maxOfTwoNumbers(15, 99);


// Question 2
function maxOfThree(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1;
 }  else if (num2 > num3 && num2 > num1) {
 	return num2;
 }  else {
 	return num3;
 }}
 
 maxOfThree(15, 62, 45);


// Question 3
function isCharacterAVowel(c) {
	if (c == "a" || c == "e" || c == 
		"i" || c == "o" || c == "u") {
		return true;
	}
	else {
		return false;
	}
}

isCharacterAVowel("u");


// Question 4
var numberArray = [2,84,101,32,55,412,7,123];
var totalArray = 0;
function sumArray(numbers) {
 for (var i = 0; i < numberArray.length; i++) {
 	totalArray += numberArray[i];
 }
 return totalArray;
}

sumArray(numberArray);


// Question 4
var numberArray = [1,2,3,4];
var totalArray = 1;
function multipleArray(numbers) {
 for (var i = 0; i < numberArray.length; i++) {
 	totalArray *= numberArray[i];
 }
 return totalArray;
}

multipleArray(numberArray);


// Question 5
var numberOfArguments = function(){
  // I have no idea how to do this one
};


// Question 6
var reverseString = function(content){
	return content.split('').reverse().join('');
};

reverseString("My name is Leslie Gomez, but you can call me Mojo");
reverseString("jag testar");


// Question 7
var longest = [];
var list = ['pickle', 'understandable', 'macbook', 'tea', 'epic'];

function findLongestWord(word) {
 for (var i = 0; i < word.length; i++) {
 	longest.push(word[i].length);
 }
    longest.sort(function(a,b){return b-a});
    return "The longest word is " + longest[0] + " characters.";
}

findLongestWord(list);



// Question 8
var list = ['haiku', 'hola', 'orange juice', 'rain', 'turtles', 'bot', 'aloe vera', 'irreconcilable', 'thoughts', 'trainwreck', 'be', 'sleep'];
var newlist = [];

function filterLongWords(words, mini) {
  for (var i = 0; i < words.length; i++) {
  	if (words[i].length > mini) {
  		newlist.push(words[i]);
  	} 
  }	return newlist;
}

filterLongWords(list, 4);


// Bonus 1
//1) Attach the function reverseString (from question 6) to the object String so that it is possible to call: "General Assembly".reverseString().
 // ugggh, need to work on this one

// Bonus 2
function charactersOccurencesCount() {
  //still working on it
}

// Bonus 3 - I added this one from the Independent Study exercise earlier today

function transmogrifier(a,b,c) {
	return Math.pow((a * b), c);
}

transmogrifier(5,16,9);
transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);


