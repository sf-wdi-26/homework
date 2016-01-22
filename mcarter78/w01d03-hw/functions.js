// Question 1 x
function maxOfTwoNumbers(a, b) {
  if(a > b){
    return a;
  }
  else {
    return b;
  }
}

// Question 2 x
function maxOfThree(a, b, c) {
  if((a == b || a == c) && (a > b || a > c)){
    return a;
  }
  else if((b == c || b == a) && (b > c || b > a)){
    return b;
  }
  else if((c == b || c == a) && (c > b || c > a)){
    return c;
  }
  else if(a > b && a > c){
    return a;
  }
  else if(b > a && b > c){
    return b;
  }
  else if(c > a && c > b){
    return c;
  }
}

// Question 3 x
function isCharacterAVowel(char) {
  if(char.toUpperCase() == "A" || char.toUpperCase() == "E" || char.toUpperCase() == "I"
      || char.toUpperCase() == "O" || char.toUpperCase() == "U"){
    return true;
  }
  else if(char.toUpperCase() == "Y"){
    return "sometimes";
  }
  else {
    return false;
  }
}

// Question 4 x
function sumArray(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}


// Question 4 x
function multiplyArray(arr) {
  var product = 0;
  for(var i = 0; i < arr.length; i++){
    product *= arr[i];
  }
  return product;
}


// Question 5 x
var numberOfArguments = function(){
  return arguments.length;
}



// Question 6
vvar reverseString = function (str){
  var a = str.split('')
  a = a.reverse()
  a = a.join('');
  return a;
};


// Question 7
function findLongestWord (arr) {
    var lengths = [];
    for(var i = 0; i < arr.length; i++){
        lengths.push(arr[i].length);
    }
  var longest = 0;
  for(var j = 0; j < lengths.length; j++){
    if(lengths[j].length < longest){
      longest = arr[j];
    }
  }
  return longest;
}

// ^^ DOESN'T WORK ^^


// Question 8
function filterLongWords () {

}


// Bonus 1
//??????
String.reverseString = function (str){
  var a = str.split('')
  a = a.reverse()
  a = a.join('');
  return a;
};

// Bonus 2
function charactersOccurencesCount() {

}
