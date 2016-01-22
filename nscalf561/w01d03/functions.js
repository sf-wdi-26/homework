// Question 1
function maxOfTwoNumbers(a,b) {
	if (a < b) {
		return b;
	} else if(a > b) {
		return a;
	} else {
		return "they\'re the same value";
	}	
}

// Question 2
function maxOfThree(a, b, c) {
	if (a > b && a > c) {
		return a;
	} else if (b > a && b > c) {
		return b;
	} else if (c > a && c > b) {
		return c;
	} else {
		return "someone fucked up";
	}
}

// Question 3
function isCharacterAVowel(x) {
	var flag = false;
	var vowels = ['a', 'e','i','o','u'];
	for (i = 0; i < vowels.length; i++) {
		if (x === vowels[i]) {
			flag = true;
		}
	}
	return flag;
}

// Question 4
function sumArray(arr) {
 	var sum = 1;
 	for (i = 0; i < arr.length; i++) {
 		sum += arr[i];
 	}
 	return sum;
}

// Question 4
function multiplyArray(arr) {
	var prod = 1;
 	for (i = 0; i < arr.length; i++) {
 		prod *= arr[i];
 	}
 	return prod;
}

// Question 5
var numberOfArguments = function(){
	return arguments.length;
};

// Question 6
var reverseString = function (str){
	var rts = [];
	for (i=0; i<=str.length; i++) {
		rts[i] = str[str.length-i];
	}
	return rts.join('');
};

// Question 7
function findLongestWord (arr) {
	var lengthOfWord = 0;
	for (i = 0; i < arr.length; i++){
		if (arr[i].length > lengthOfWord) {
			lengthOfWord = arr[i].length;
		}
	}
	return lengthOfWord;
}

// Question 8
function filterLongWords (arr, i) {
	var filtered = arr.filter(function(a){
		if (a.length > i) {
			return a;
		}
	});
	return filtered;
}

// Bonus 1
String.prototype.reverseString = function (){
	var rts = [];
	for (i=0; i<=this.length; i++) {
		rts[i] = this[this.length-i];
	}
	return rts.join('');
};

//THIS DOES NOT WORK!
// Bonus 2
/*
function charactersOccurencesCount(str) {
	var myObj = {};


	for (x=0; x<str.length; x++) {
		if (str[x] in myObj) {
			console.log("true");
			myObj.str[x] += 1;
			console.log(myObj.str[x]);
		} else {
			console.log("false");
			myObj.str[x] = 1;
		}
	} 


	return myObj;
}

console.log(charactersOccurencesCount("words and words"));
*/
