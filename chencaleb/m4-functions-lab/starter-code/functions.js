// Question 1
function maxOfTwoNumbers(a, b) {
	if (a > b) {
		return a;
	} else if (a < b) {
		return b;
	}

}

// Question 2
function maxOfThree(a, b, c) {
	if (a > b && a > c) {
		return a;
	}else if (b > a && b > c) {
		return b;
	}else {
		return c;
	}
}

// Question 3
function isCharacterAVowel(char) {
	var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	for (var i=0; i<vowels.length; i++) {
		if (char == vowels[i]) {
			return true;
		}
	}
	return false;
}

// Question 4
function sumArray(array) {
	var sum = 0;
	for (i=0; i<array.length; i++) {
		sum += array[i];
	}
	return sum;
}


// Question 4
function multiplyArray(array) {
	var product = 1;
	for (i=0; i<array.length; i++) {
		product *= array[i];
	}
	return product;
}


// Question 5
var numberOfArguments = function() {
	return arguments.length;
};



// Question 6
var reverseString = function (string){
	var backwards = '';
	for (var i=string.length-1; i>=0; i--) {
		backwards += string[i];
	}
	return backwards;
};


// Question 7
function findLongestWord (arrayOfWords) {
	var longest = 0;
	//var word = null;
	for (var i=0; i<arrayOfWords.length; i++) {
		if (longest < arrayOfWords[i].length) {
			longest = arrayOfWords[i].length;
			//word = arrayOfWords[i];
		}
	}
	//return word;
	return longest;
}


// Question 8
function filterLongWords (arrayOfWords, i) {
	var newArray = [];
	for (var j=0; j<arrayOfWords.length; j++) {
		if(arrayOfWords[j].length > i) {
			newArray.push(arrayOfWords[j]);
		}
	}
	return newArray;
}


// Bonus 1

String.prototype.reverseString = function() {
	var backwards = '';
	for (var i=this.length-1; i>=0; i--) {
		backwards += this[i];
	}
	return backwards;
};

// Bonus 2
function charactersOccurencesCount(charCount) {
	var characters = {};

}

