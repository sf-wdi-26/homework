// Question 1
function maxOfTwoNumbers(x, y) {
	if (x > y) {
		return x;
	} else {
		return y;
	}

}

console.log(maxOfTwoNumbers(2,6));

// Question 2
function maxOfThree(x, y, z) {

	var greatest= x;

	if ((y>greatest) && (y>z)){
		greatest = y;
	}
	else if(z>greatest){
		greatest = z;
	}

	return greatest;

}

console.log(maxOfThree(2,6,7));

// Question 3
function isCharacterAVowel(letter) {

	var someVowels = ('a' || 'e' || 'i' || 'o' || 'u');

	return letter === someVowels;
}

console.log(isCharacterAVowel('a'));

// Question 4
function sumArray(numbers) {
 	
 	var sum = 0;
	numbers.forEach(function(el)
		{
			sum+=el;
		});

	return sum;
}

console.log(sumArray([1,2,3,4]));

// Question 4
function multiplyArray(numbers) {
 	var product = 1;
	numbers.forEach(function(el)
		{
			product*=el;
		});

	return product;
}

console.log(multiplyArray([1,2,3,4]));


// Question 5
var numberOfArguments = function(){
  
  	return arguments.length;

};

console.log(numberOfArguments);

// Question 6
var reverseString = function (words){
  	
  	var reversed = "";

  	for(var i=words.length-1; i >= 0; i++){
  		reversedString += words[i];
  	}

  	return reversed;
};

console.log("ratset gaj");


// Question 7
function findLongestWord (words) {
  	
  	words = words.split(' ');
  	var longest = words[0];

  	for(var i=0; i<words.length; i++){

  		if (words[i].length > longest.length){
  			longest = words[i];
  		}

  	}

  	return longest;
}

console.log(findLongestWord("somebody has a longer word supercalifragilistic"));

// Question 8
function filterLongWords (words, i) {
  	
	var wordsLongerThanI = [];

	for(var n=0; n<words.length; n++){
		if (words[n].length>i){
			wordsLongerThanI.push(words[n]);
		}
	}

	return wordsLongerThanI;
}

console.log(filterLongWords(["somebody","is", "eating", "pizza"], 3));

// Bonus 1
//?????? Figure this out.

String.prototype.reverse = function(){ 
  return this.split('').reverse().join('');
};

"General Assembly".reverseString();


// Bonus 2
function charactersOccurencesCount(letters) {

	var lettersObject = {};
	letters = ((letters.toLowerCase()).replace(/\s/g, '')).split('');

	letters.forEach(function(el){lettersObject[el] = 0;});
  
  	for(var i=0; i<letters.length; i++){

  		lettersObject[letters[i]] += 1;
  	}

  	return lettersObject;
}

console.log(charactersOccurencesCount("General Assembly"));






