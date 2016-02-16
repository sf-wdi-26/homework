
function maxOfTwoNumbers(a,b) {
	if(a>b) {
		return largest = a;
	}
	else return largest = b;
}

// Question 2
function maxOfThree(x,y,z) {
	if(x>y && x>z) {
		return largest = x;
	}
	else if(y>x && y>z) {
		return largest = y;
	}
	else return largest = z;
}

// Question 3
function isCharacterAVowel(c) {
	var check = ['a','e','i','o','u'];
	while (check.indexOf(c) != -1) {
		return true;
	}
	else return false;
}

// Question 4
function sumArray(num) {
var sum = 0;
for(i=0; i<num.length; i++) {
	sum += num[i];
} 
return sum;
}


// Question 4
function multiplyArray(num) {
var prod = 1;
for(i=0; i<num.length; i++) {
	prod *= num[i];
} 
return prod;
}
}


// Question 5
var numberOfArguments = function(){
  return arguments.Length();
}



// Question 6
var reverseString = function (x){
  var revArray = [];
  for (var i=x.length-1; i >= 0; i--) {
  revArray.push(x[i]);
  }
  return revArray.join();
};
reverseString("google");

// Question 7
function findLongestWord (x) {
  longest = 0;
  for (var i=0; i<x.length; i++)
  {
  	if (x[0].length > longest) {
  	longest = x;
  	} 
  }
  return longest; 
}


// Question 8
function filterLongWords (arr,num) {
  newArr = [];
  for (var i=0; i<arr.length; i++) {
  	if(arr[i].length > num) {
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

