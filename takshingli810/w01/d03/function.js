// Question 1
function maxOfTwoNumbers(a,b) {
	if (a>b) {
		return a;
	}
	 else if (b>a)	{
		return b;
	} 
	else {
		console.log("same number");
	}
}

// Question 2
function maxOfThree(a,b,c) {
	if (a > b && a >c) {
		return a;
	} else if (b > a && b > c) {
		return b;
	} else {
		return c;
	}
}

// Question 3

function isCharacterAVowel(letter) {
	if (letter === "a" || 
		letter === "e" ||
		letter === "i" ||
		letter === "o" ||
		letter === "u") {
		return true;
	} else {
		return false;
	}
}

// Question 4
var numbers = [1,2,3,4]
function sumArray(numbers) {
	var sum = 0;
	for(var i=0;i<numbers.length;i++) {
		sum += numbers[i];
	}
 	return sum;
}

// Question 4
var numbers = [1,2,3,4]
function multiplyArray(numbers) {
	var product = 0;
	for(var i=0;i<numbers.length;i++) {
		product *= numbers[i];
	}
	return product;

}


// Question 5
var numberOfArguments = function(){
  return argument.length;
}



// Question 6
var string = "Hello there, how are you?"
var reverseString = function (string){
  var reverse = " ";
  for(var i = string.length - 1; i >= 0; i--) {
  	reverse += string[i]; 
  }  	
  return reverse;
}


// Question 7
var words = ["hi","hello","hellosir","welcome"];
function findLongestWord(words) {
	var longest;
    for(var i = 0; i<words.length;i++){
  		if(words[i].length > longest) {
			longest = arr[i].length;  			
  	}
  	return longest;
  }
}


// Question 8
function filterLongWords (array,numbers) {
	newArray = [];
	for(var i=0; i <array.length;i++){
		if(array[i].length > num){
			newArray.push(array[i]);
		}
	} 
	return newArray; 
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}