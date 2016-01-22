// Question 1
function maxOfTwoNumbers(number1,number2) {
	if (number1 > number2) {
		return number1;
	}
	else {return number2};
	}


// Question 2
function maxOfThree(number1,number2,number3) {
	if (number1 > number2 && number1 > number3) {
		return number1;
	}
	else if (number2 > number1 && number2 > number3) {
		return number2;
	}
	else {return number3}
			}

// Question 3
function isCharacterAVowel(character) { 
	array = ["a","e","i","o","u"];
	for (var i = 0; i < array.length; i++) {
		if (character == array[i]) {
			return true;
		}
		else {return false;}
	}
}

// Question 4
function sumArray(x) {
	var sum = 0;
	for (i = 0; i < x.length; i++) {
		sum += x[i];
	}

	return sum;
 
}


// Question 4
function multiplyArray(d) {
	var sum = 1;
	for (i = 0; i < d.length; i++) {
		sum *= d[i];
	}

	return sum;

}


// Question 5
var numberOfArguments = function(){
	return arguments.length;
  }



// Question 6
var reverseString = function (string){
//	return string.split('').reverse().join('');
//};

reverse = '';

	for (var i = string.length - 1; i >= 0;  i--) {
	return reverse += string(i);
	}
}


// Question 7
function findLongestWord (x) {
	var sum = 0;

	for (var i = 0; i < x.length; i++) {
		if (x[i].length > sum) {
			sum = x[i].length;
		}
	}

	return sum;
}
  



// Question 8
function filterLongWords (word, i) {

	var array = [];

	for (var d = 0; d < word.length; d++ ) {
		if (word[d].length > i) {
			array.push(word[d]);
		}
	}

	return array;
}




// Bonus 1
//??????

String.prototype.reverseString = function (){

reverse = '';

	for (var i = this.length - 1; i >= 0;  i--) {
		reverse += this[i];
	}
	return reverse;
}






// Bonus 2
function charactersOccurencesCount() {
  
}

