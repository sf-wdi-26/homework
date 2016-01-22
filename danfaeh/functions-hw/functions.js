// Question 1
function maxOfTwoNumbers(a,b) {
  if (a>b){
    return a;
  }else if (b>a) {
    return b;
  }
}

// Question 2
function maxOfThree(a,b,c) {
  if (a>b && a>c){
    return a;
  }else if (b>a && b>c) {
    return b;
  }else {
    return c;
  }
}

// Question 3
function isCharacterAVowel(c) {
  var array = [a,e,i,o,u];
  if (array.indexOf(c) !== -1){
    return true;
  } else {
    return false;
  }
}

// Question 4
function sumArray(array) {
  x = array.sumArray;
  return x;
}

// Question 4
function multiplyArray(array) {
  x = array.multiplyArray;
  return x;
}

// Question 5
var numberOfArguments = function(){
  return args.length;
};

// Question 6
var reverseString = function (string){
  temp=[];
    for (i=string.length-1;i>-1;i--){
        temp.push(string[i]);
    }
    console.log(temp.join(""));
};

reverseString("abcd");

// Question 7
function findLongestWord (words) {
  var i=0;
  var longest = 0;
    while (i < words.length) {
      if (words[i].length > longest) {
        longest = words[i];
      } 
      i+=1;
    }
  return longest.length;  
}

// Question 8
function filterLongWords (words,i) {
  var idx = 0;
  var array = [];
    while (idx < words.length) {
      if (words[idx].length > i){
        array.push(words[idx]);
      }
    idx += 1;  
    }
  return array;  
}


// Bonus 1
//

// Bonus 2
function charactersOccurencesCount(string) {
  
}

