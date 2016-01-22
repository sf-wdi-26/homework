// Question 1
function maxOfTwoNumbers(a, b) {
	if (a>b) {
		return a;
	}
	else  if(b>a){
		return b;
	}

}

// Question 2
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else if (c > b && c > a) {
        return c;
    }
}
maxOfThree(9,4,1);

// Question 3
function isCharacterAVowel(a) {
    if(a==="a" || a==="e" || a==="i" || a==="o" || a==="u")
    {
        return true;
    }
    else {
        return false;
    }

}

// Question 4
function sumArray(s) {
    var sum = 0;
    for(var i = 0; i < s.length; i++ ) {
        sum = sum + s[i];
    }
    return sum;
}


// Question 4
function multiplyArray(m) {
    var mol = 1;
    for(var i = 0; i < m.length; i++ ) {
        mol = mol * m[i];
    }
    return mol;
}


// Question 5
var numberOfArguments = function(){
  
}



// Question 6
var reverseString = function (){
  
};


// Question 7
function findLongestWord (arr) {
    var arrayWords = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > arrayWords) {
            arrayWords = arr[i].length;
        } 
    }
    return arrayWords;
  }


// Question 8
function filterLongWords (arr, n) {
    var arrayWords = [];
    for ( var i = 0; i < arr.length; i++){
        if (arr[i].length > n) {
            arrayWords.push(arr[i]);
        }
    }
  return arrayWords;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

