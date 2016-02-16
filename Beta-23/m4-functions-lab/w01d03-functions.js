// Question 1
function maxOfTwoNumbers(a,b) {
	if (a>b){
		return a; 
	} else if (b>a) {
		return b;
	}

}

// Question 2
function maxOfThree(x,y,z) {
	if (x > y && x > z){
		return x;

	}
	else if (y > x && y > z) {
		return y;
	}else if (z > x && z > y){
		return z;
}
}

// Question 3
function isCharacterAVowel(a) {

if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u") {
 	return true;
 }
 else {
 	return false;
 		}
}

// Question 4
function sumArray(arr) {
 var sum = 0;
 for (var i = 0; i < arr.length; i++) {
 	sum += arr[i];
 }
 return sum;
}


// Question 4
function multiplyArray(arr) {
var product = arr [0];
 for (var i = 0; i < arr.length; i++) {
 	product *= arr[i];
 }
 return product;

}


// Question 5
var numberOfArguments = function(){
 return args.length 
}



// Question 6
var reverseString = function (){
  
};


// Question 7
function findLongestWord (arr) {
  longest = 0;
  for (var i = 0; i < arr.length; i++) {
  	if (arr[i].length > longest) {
	longest = arr[i].length;
	var	longest = 
	}
  }
  return [''];
}


// Question 8
function filterLongWords () {
 newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length > num){
      newArr.push(arr[i]);
    }
  }
  return newArr; 
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

