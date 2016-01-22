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
function maxOfThree() {
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
function sumArray(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i ++) {
		sum += array[i];
	}
	return sum;
}


// Question 4
function multiplyArray(array) {
	var multipliedArray = 1;
	for (var i = 0; i < array.length; i ++) {
		multipliedArray *= array[i];
	}
	return multipliedArray;
}


// Question 5
var numberOfArguments = function(){
	return arguments.length;
};



// Question 6
var reverseString = function(string){
  return string.split('').reverse().join('');
};


// Question 7
function findLongestWord(array) {
	var wordLength = [];
  	for (var i = 0; i < array.length; i ++) {
  		wordLength.push(array[i].length);
	}
	return Math.max.apply(Math, wordLength);
}


// Question 8
function filterLongWords (array,i) {
	var newArray = [];
  	for (var x = 0; x < array.length; x ++) {
		if (array[x].length > i) {
			newArray.push(array[x]);
		}
	}
	return newArray;
}

var example = ['jessica', 'nick', 'dan', 'caleb', 'jo', 'jojobanana'];
filterLongWords(example,4);


// Bonus 1
//??????

String.prototype.reverseString = function() {
  	return this.split('').reverse().join('');
};


// Bonus 2
  function charactersOccurencesCount(str) {
    var myObj = {};

    for (x=0; x<str.length; x++) {
        if (!(str[x] in myObj)) {
            myObj.str[x] = 1;
        } else {
            myObj.str[x] += 1;
        }
    }
    return myObj;
}

console.log(charactersOccurencesCount("words and words"));


???????????