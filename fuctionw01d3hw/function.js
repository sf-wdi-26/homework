// Question 1
function maxOfTwoNumbers(x,y) {
	if(x > y);{

	return x;
}

 	else if (x < y) {
		return y;
	}
}

// Question 2
function maxOfThree(x,y,z) {
	if(x > y && x > z );
	return x;
}
	else (y > x && y > z) {
		return y;
	}
	else if ( z > x && z >y ){
		return z;
	}
};
// Question 3
function isCharacterAVowel(c) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	if (vowels.indexOf(c) !== -1){
		return true;
	}
		return false;
}

// Question 4
function sumArray(ar) {
	var sum = 0;
	for (var i = 0; i < ar.length; i++) {
		sum += ar[i];
	}
		return sum;
}


// Question 4
function multiplyArray(ar) {
	var multi = ar[0];
	for(var i = 1; i < ar.length; i++) {
		product *= ar[i];
	}
		return product;
}



// Question 5
var numberOfArguments = function(){
	return args.length
  
}



// Question 6
var reverseString = function (fat){
  var arr = fat.split('');
  var revArr = [];
  for(var i = arr.length -1; i >= 0; i--){
  		revArr.push(arr[i]);
  }
  	return revArr.join('');
};


// Question 7
function findLongestWord (rar) {
  longest = 0;
  for (var i = 0; i < rar.length; i++){
  	if (rar[i].length > longest) {
  		longest = rar[i].length;
  	}
  }
  return longest;
}


// Question 8
function filterLongWords (doo, bun) {
  newArr = [];
  for (var i = 0; i < doo.length; i++){
  	if (doo[i].length > bun) {
  		newArr.push(doo[i]);
  	}
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}