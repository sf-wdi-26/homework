// Question 1
function maxOfTwoNumbers(a,b) {
	if(a>b){
		return a;
	} else if (b>a){
		return b;
	} else { return a + " and " + b + " are the same value";}
}

console.log(maxOfTwoNumbers(1,2));

// // Question 2
function maxOfThree(a,b,c) {
	if((a>=b) && (a>=c)){
		return a;
	} else if ((b>=a) && (b>=c)){
		return b;
	} else if ((c>=a) && (c>=b)){
		return c;
	} else { return a + ' , ' + b + ' and ' + c + ' are the same value.'  }
}
console.log(maxOfThree(1,2,3));

// // Question 3
//Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
//vowel = a, e, i, o, u, y (sometimes)
//take character and check it against vowels; make uppercase to lowercase 

function isCharacterAVowel(char) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var lowerChar = char.toLowerCase();
	if(lowerChar === 'y'){
		return "sometimes";
	} else if (vowels.indexOf(lowerChar) >= 0){
			return true;
	} else {return false;}
}

console.log(isCharacterAVowel("A"));


// // Question 4
// function sumArrab() {
 
// }


function sumArrab(numbers){
	var sum = 0;
	for(var i=0; i<numbers.length; i++){
		sum += numbers[i];
	}
	return sum;
}

console.log(sumArrab([1,2,3,4]));

// // Question 4
function multiplyArrab(numbers) {
	var total = numbers[0]; 
	for(var i =0; i< numbers.length; i++){
		total *= numbers[i];
	}
	return total;
}

console.log(multiplyArrab([1,2,3,4]));

// // Question 5
  // if not undefined, increase count by 1 to see how many times an argument is passed through 

var numberOfArguments = function(args){ 
	return args.length; 
}
console.log(numberOfArguments([1,2,3]));

//ALTERNATE SOLUTION
var numberOfArguments= function(args){
	count =0; 
	for(var i=0; i<args.length; i++){
		count++;
	}
	return count
}
console.log(numberOfArguments([1,2,3]));

// // Question 6
//string needs to be broken down to substring with split method then from the last element to the first pushed into a new array which then needs to be joined as a single string with join method

var reverseString = function (phrase){
	var revPhrase = [];
	var arr = phrase.split('')
	for(var i =arr.length-1; i>=0; i--){
		revPhrase.push(arr[i]);
	}
	return revPhrase.join('');
}
console.log(reverseString("Taco Cat"));

// // Question 7
//Test array properties:
// var words = ['refrigerator', 'candy', 'car'];
// console.log(words[0].length)

//this code returns the length of the longest word 
function findLongestLength(words) {
	var longest = 0;
	for (var i =0; i < words.length; i++){
		if(words[i].length>longest){
			longest = words[i].length;
		}
	}
	return longest;
}

var words = ['refrigerator', 'candy', 'car'];
console.log(findLongestLength(words));

// this code returns the word with the longest length
function findLongestWord (words) {
	var longest = words[0];
	for(var i =0; i<words.length; i++){
		if(words[i].length>longest.length){
			longest=words[i];
		}
	}
	return longest;
}

var words = ['refrigerator', 'candy', 'car'];
console.log(findLongestWord(words));


// // Question 8
//Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
function filterLongWords (arr, i) {
	var longerWords =[];
	for(var x=0; x<arr.length; x++){
		if(arr[x].length>i){
			longerWords.push(arr[x]);
		}
	}
	return longerWords;
}
console.log(filterLongWords(['Cindy', 'Cathy', 'Thomas', 'Crystal'], 5));


// // Bonus 1
// Attach the function reverseString (from question 6) to the object String so that it is possible to call: "General Assembly".reverseString()

	String.prototype.reverse = function(){ 
	  return this.split('').reverse().join('');
	};
	console.log("General Assembly".reverseString());

	// // Bonus 2
// 	//Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurences for each letter, regardless of the case
	function charactersOccurencesCount(stringToCount) {
	  var characters = {};
	  // replacing all Capitals by Lowercase letters and removing spaces
	  var stringToCount = stringToCount.toLowerCase().replace(/\s/g, '');
	  stringToCount.split("").forEach(function(l){
	    characters[l] = (isNaN(characters[l]) ? 1 : characters[l] + 1);
	  });
	  return characters;
	}

