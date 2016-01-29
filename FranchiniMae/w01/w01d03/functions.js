
// Question 1
function maxOfTwoNumbers(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
}

console.log(maxOfTwoNumbers(3, 2));

// Question 2
function maxOfThree(a, b, c) {
	if (a > b && a > c) {
		return a;
	} else if (b > a && b > c) {
		return b;
	} else {
		return c;
	}
}

console.log(maxOfThree(1, 2, 3));



// Question 3
function isCharacterAVowel(x) {
	if ( x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
		return true;
	} else {
		return false;
	}
}

console.log(isCharacterAVowel('y'));

// Question 4
function sumArray(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	return sum; 
}
console.log(sumArray([1, 2, 3, 4]));


// Question 4
function multiplyArray(array) {
	var value = array[0];
	for (var i = 0; i < array.length; i++) {
		value = value * array[i];
	}
	return value;
}
console.log(multiplyArray([1, 2, 3, 4]));

// Question 5
var numberOfArguments = function(){
	return arguments.length;
};

console.log(numberOfArguments(1, 2, 3));



// Question 6
var reverseString = function (n){
	n = n + '';
	return n.split('').reverse().join('');
};

console.log(reverseString('john smith'));


// Question 7
function findLongestWord (array) {
	var word = 0;
	for (var i = 0; i < array.length; i ++) {
	if (array[i].length > word) {
		word = array[i].length;
	}
}
return word;
}

console.log(findLongestWord(['hi', 'hello', 'yes']));


// Question 8
function filterLongWords (array, i) {
	var newArray = [];
	for (var j = 0; j < array.length; j ++) {
	if (array[j].length > i) {
		newArray.push(array[j]);
	}
}
return newArray;
}

console.log(filterLongWords(['hello', 'never', 'possible'], 7));

