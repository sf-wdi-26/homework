// Question 1
function maxOfTwoNumbers(x, y) {
	if (x > y) {
		return x;
	} else if (y > x) {
		return y;
	}
}

// Question 2
function maxOfThree(x, y, z) {
	if ((x > y) && (x > z)) {
		return x;
	} else if ((y > x) && (y > z)) {
		return y;
	} else {
		return z;
	}
}

// Question 3
function isCharacterAVowel(letter) {
	var vowels = ('a' || 'e' || 'i' || 'o' || 'u');
	return vowels == letter;
}

// Question 4
function sumArray(newArray) {
 	var sum = 0;
 	for (var i = 0; i < newArray.length; i++) {
 		sum = newArray[i] + sum;
 	}
 	return sum;
}

// Question 4
function multiplyArray(newArray) {
	var product = 1;
	for (var i = 0; i < newArray.length; i++) {
 		product = newArray[i] * product;
 	}
 	return product;
}

// Question 5
var numberOfArguments = function(){
  	return arguments.length;
};



// Question 6
var reverseString = function(string){
	var newString = [];
	for (var i = 0; i <= string.length; i++) {
		newString.push(string[string.length - i]);
	}
	return newString.join("");
};


// Question 7
function findLongestWord(wordsArray) {
	var lengthOfWord = 0;
	var longestWord;
  	for (var i = 0; i < wordsArray.length; i ++) {
  		if (lengthOfWord < wordsArray[i].length) {
  			lengthOfWord = wordsArray[i].length;
  			longestWord = wordsArray[i];
  		} 
  }
  return longestWord;
}


// Question 8
function filterLongWords (wordsArray, i) {
	for (var j = 0; j < wordsArray.length; j++) {
		if (wordsArray[j].length < i) {
			wordsArray.splice(j, wordsArray.length);
		}
	}
  return wordsArray;
}



// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

