// Question 1
function maxOfTwoNumbers(a,b) {
	if ( a >= b ) {
		return a;
	}
	else {
		return b;
}
}


// Question 2
function maxOfThree(a,b,c) {
	if (a >= b && a >= c)  {
		return a;
	}
	else if (a <= b && b >=c) {
		return b;
}
	else {
		return c;
	}
}


// Question 3
function isCharacterAVowel(x) {
	if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
		return true;
	}
	else {
		return false;
}
}


// Question 4
function sumArray(addition) {
  var sum = 0;
  for (var i = 0; i < addition.length; i++) {
    sum += addition[i];
  }
  return sum;
}


// Question 4
function multiplyArray(multi) {
var product = multi[0];
for (var i = 1; i < multi.length; i++) {
product *= multi[i];
}
return product;
}



// Question 5
var numberOfArguments = function(){
  return argx.length
}

// Question 6
var reverseString = function (str){
  var arr = str.split('');
  var revArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr.join('');
};



// Question 7
function findLongestWord (arr) {
  long = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > long) {
      long = arr[i].length;
    }
  }
  return long;
}


// Question 8
function filterLongWords (arr,num) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length > num){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

