// Question 1
function maxOfTwoNumbers(a,b) {
	if(a>b) {
    return a;
	}
else if (a<b) {
	return b;
}

}

// Question 2
function maxOfThree(a,b,c) {
if ( a > b && a > c) {
	return a; 
}
	else if (b > a && b > c) {
		return b;
	}
		else if (c > a && c > b) {
			return c;
		}
	}










// Question 3
function isAVowel(str) {
	switch (str) {
		case "a":
			return true;
			break;
		case "e":
			return true;
			break;
		case "i":
			return true;
			break;
		case "o":
			return true;
			break;
		case "u":
			return true;
			break;
		default:
			return false;
	}
}

// Question 4


function sum(array) {
	return array.reduce(function(a, b) {
		return a + b;
	}
}


// Question 4
function multiply(array) {
	return array.reduce(function(a, b) {
		return a * b;
	}
}


// Question 5
var numberOfArguments = function(){
	

  
}



// Question 6
var reverseString = function (string){
    var newStr = "";
    for(var i = string.length - 1; i >=0; i--){
        newStr+= string[i];
    }
	
	return newStr; 
  
};

reverseString("jag testar");


// Question 7
function findLongestWord(array) {
	var longestWord = array[0];
	for (var i = 1; i < array.length; i++) {
		if (longestWord.length < array[i].length) {
			longestWord = array[i];
		}
	}
	return longestWord.length;
}
findLongestWord(["Jack", "Johhny", "djlksaJDalsRkjdlaKSD"]);


// Question 8
var filterLongWords = function(array, num){
  var length = array.length;
  var longestWords = [];
  for (i = 0; i < length; i++) {
    if (array[i].length > num) {
      longestWords[longestWords.length] = array[i];
    }
  }
  return longestWords;
};

console.log(filterLongWords(["car","aeroplane","bicycle","house","rain"], 4));



// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

