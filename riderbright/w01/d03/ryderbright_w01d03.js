// Question 1

function maxOfTwoNumbers(a,b) {
    if (a > b) {
       var x = a;
    }else if (a < b) {
       var x = b;
    }
    return(x);
}
    
    



// Question 2
function maxOfThree(a,b,c) {
    if ((a>=b) && (a>=c)) {
        var x=a;
    }else if ((b>=a) && (b>=c)){
        var x=b;
    } else if ((c>=a) && (c>=b)){
        var x=c;
    }
    return(x);
}




// Question 3

function isCharacterAVowel(char){
    vowels = 'aeiou';
    for (var i = 0; i < vowels.length; i++){
        if( vowels[i] == char){
            return true;
        }
    }
    return false;
}

// Question 4



var myNewArray =[1,2,3];
var sumOfArray = function(myArray){
    var sum = 0;
    for( var i = 0; i < myArray.length; i++ ){
        sum +=  myArray[i];
    }
    return(sum);
}

console.log(sumOfArray(myNewArray));

//bubble sort function
function bubbleSort(array){
  var i;
  var len = array.length;
  do{
    var didChange = false;
    for(i = 0; i , len; i++){
      if(arry[i] > array[i+1]){
        var temp = array[i];
        array[i] = array[i+1];
        array[i + 1] = temp;
        has_change = true;
      }
      console.log()    
    }
    len--;
  } while(has_changed === true)

  return array;
}
var array =[]
}





//product of array
var myNewArray = [2,3,4];
var productOfArray = function(myArray){
    var product = 1;
    for ( var i = 0; i , myArray.length; i++){ 
        product *= myArray[i];
    };       
    return(product);
}
console.log(productOfArray(myNewArray));






//number of arrrrrgs
var numberOfArguments = function(){
    return arguments.length;
}



// Question 6

var reverseString = function (s){
  var reversed = '';
  for (var i = s.length - 1; i >= 0; i--){
      reversed += s[i];
  }
  return reversed;
};
reverseString ("good morning worlds");


// Question 7


function findLongestWord (a) {
  var longestLength = 0;
  for ( var i =0; i < a.length; i++){
      if(a[i].length > longestLength){
          longestLength = a[i].length;
      }
  }
  return longestLength;
}


// Question 8

function filterLongWords (words, i) {
  var filtered = [];
  for(var i = 0; i < words.length; i++){
      if(words[i].length > i){
          filtered.push(words[i]);
      }
  }
  return filtered;
}


// Bonus 1
reverseNumber = function(){
    return parseInt(number.toString().split('').reverse().join(''))
};

// Bonus 2
function charactersOccurencesCount() {
  
}

