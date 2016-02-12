// Question 1
function maxOfTwoNumbers(num1,num2) {
	if ( num1 > num2 ) {
		return num1;
	} else {
		return num2;
	}
}
maxOfTwoNumbers(4,9);

// Question 2
function maxOfThree(a,b,c) {
	if (a > b && a > c) {
		return a;
	} else if (b > a && b > c) {
		return b;
	} else {
		return c;
	}
}
	maxOfThree(22,65,65);

// Question 3

function isCharacterAVowel(x) {
var array = ["a","e","i","o","u"];
	for (var i = 0; i < array.length; i ++) {
			console.log(i);
		if (x === array[i]) {
			console.log("true");
			return true;
		} else {
			console.log("false";
		}

		return false;
	}
}

	isCharacterAVowel("e");

	// if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u" {
	// 	return true;
	// } else {
	// 	return false;
	// }	

// // Question 4
function sumArray(array) {

	var sum = 0;

	for (var i = 0; i < array.length; i ++) {
		 sum += array[i];
		}
		return sum;
}	
	sumArray([1,2,3,4]);


// Question 4
function multiplyArray(mult) {
	var multiply = mult[0];

	for (var i = 0; i < mult.length; i ++) {
		multiply *= mult[i];
	}
		return multiply;
}
	multiplyArray([1,2,3,4]);


// Question 5
var numberOfArguments = function(){
	return args.legth;
}
	numberOfArguments();



// // Question 6
// Define a function reverseString that computes the reversal of a string. 
// For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function(str) {
   var myArray = str.split('');
   var newArray = [];
   for (var i = str.length - 1; i >=0; i --) {
  }
  
}
	reverseString("hey you");

  var reverseString = function (str){
  var arr = str.split('');
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr.join('');
};


return this.split(' ').reverse().join(' ');

// // Question 7
function findLongestWord(words) {
  var longestWord = [];
  for (var i=0; i < words.length; i++) {
  		console.log(words[i].length);
  }
  		
}
	findLongestWord(["hi","tiger","bye"]);


// // Question 8
// function filterLongWords () {
  
// }


// // Bonus 1
// //??????


// // Bonus 2
// function charactersOccurencesCount() {
  
// }

