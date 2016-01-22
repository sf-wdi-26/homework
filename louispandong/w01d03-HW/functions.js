// Question 1
function maxOfTwoNumbers() {
	if (x > y) {
		return x;
	} else {
		return y;
	}

}

// Question 2
function maxOfThree(maxOfThreeArray) {
	return Math.max.apply(null, numArray);

}

// Question 3
function isCharacterAVowel(letter) {
	var vowels = ["a", "e", "i", "o", "u"];
	for(var i in vowels){
		if(letter === i){
			return true;
		} else {
			return false;
		}
	}

}

// Question 4
function sumArray(array) {
 	var sum=0;
 	for (var i=0; i <array.length; i++) {
 		sum += array[i];
 	} 
 	return sum;
}


// Question 4
function multiplyArray(array) {
	var product=0;
 	for (var i=0; i <array.length; i++) {
 		product *= array[i];
 	} 
 	return product;
}


// Question 5
var numberOfArguments = function(){
	return numberOfArguments.length;
  
};



// Question 6
var reverseString = function (str){
	return str.split('').reverse().join('');
};


// Question 7
function findLongestWord (str) {
	var array = str.split('');
	var longestWord = array[0].length;
	for(var i=0; i< array.length; i++) {
		if(array[i].length > longestWord) longestWord = array[i].length;
	}
	return longestWord;
  
};


// Question 8
function filterLongWords (arr, int) {
	var lenght = array.length;
	var longestWord = [];
	for (i = 0; i < length; i++) {
		if (array[i].length > int) {
			longestWord[longestWord.length] = array[i];
		}
	}
	return longestWord;
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

