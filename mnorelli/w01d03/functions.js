// Question 1
function maxOfTwoNumbers(a,b) {
	if (a === b) {
		return b;
	} else if (a > b) {
		return a;
	} return b;
}
console.log("Q1: max of 9 and 3 is " + maxOfTwoNumbers(9,3));
// Question 2
function maxOfThree(a,b,c) {
	if (a > b && a > c) {return a;}
		else if (b > a && b > c) {return b;}
		else if (c > a && c > b) {return c;}
		else if (a === b) {return a;}
		else {return b;}
	}
console.log("Q2: max of 5, 9 and 3 is " + maxOfThree(5,9,3));
console.log("Q2: max of 5, 5 and 3 is " + maxOfThree(5,5,3));
console.log("Q2: max of 5, 9 and 10 is " + maxOfThree(5,9,10));
console.log("Q2: max of 5, 5 and 5 is " + maxOfThree(5,5,5));
console.log("Q2: max of 5, 2 and 2 is " + maxOfThree(5,2,2));


// Question 3
function isCharacterAVowel(a) {
	var vowels = ['a','e','i','o','u'];
	for (var x in vowels) {
		if (vowels[x] === a) {
			return true;
		}
		return false;
	}
}
console.log("Q3: 'a' is a vowel: "  + isCharacterAVowel('a'));
console.log("Q3: 'x' is a vowel: "  + isCharacterAVowel('x'));

// Question 4
function sumArray(array) {
	sum = 0
	for (var x in array) {
		sum = sum + array[x];
	}
	return sum;
}
console.log("Q4: The sum of 2,3,4, and 5 is "  + sumArray([2,3,4,5]));

// Question 4
function multiplyArray(array) {
	product = 1
	for (var x in array) {
		product = product * array[x];
	}
	return product;
}
console.log("Q4: The product of 2,3,4, and 5 is "  + multiplyArray([2,3,4,5]));


// Question 5
var numberOfArguments = function(){
  return arguments.length;
}
console.log("Q5: (1,2,3,4) is passing "  + numberOfArguments(1,2,3,4) + " arguments");

// Question 6
var reverseString = function(str) {
	ans = '';
	for (x=str.length-1;x>-1;x--) {
		ans = ans + str[x];
	}
	return ans;
};
console.log("Q6: Reversing 'jag testar' gives "  + reverseString("jag testar"));

// Question 7
function findLongestWord (arr) {
	hold = 0;
	for (x=0;x<arr.length;x++){
		if (arr[x].length > hold) {
			hold = arr[x].length;
		}
	}
  	return hold;
  }
console.log("Q7: The longest element in ['a','bbb','cc'] is "  
	+ findLongestWord(['a','bbb','cc']) + " characters long.");


// Question 8
function filterLongWords (arr,i) {
  	for (x=0;x<arr.length;x++){
		if (arr[x].length > i) {
			hold = arr[x].length;
		}
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

