// Question 1
function maxOfTwoNumbers(num1, num2) {
  if ( parseInt(a) > parseInt(b)) {
    return a;
  } else if (parseInt(b) > parseInt(a)) {
      return b;
    } else {
      return "Please pass in two numbers.";
    }
}

// Question 2
function maxOfThree(num1, num2, num3 ) {
    if (a > b && a > c) { return a;}
    else if (b > c && b > c) {return b;}
    else if (c > b && c > a) {return c;}
    else {return "Please pass in three different values.";}
}

// Question 3
function isCharacterAVowel(vowel) {
    if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
      return true;
    } else { return false;}
}

// Question 4
function sumArray(array) {
  return array.reduce(function(prev, cur) {
    return prev + cur;
  }, 0);
}


// Question 4
function multiplyArray(array) {
  return array.reduce(function(prev, cur) {
    return prev * cur;
  });
}


// Question 5
var numberOfArguments = function(){
  return arguments.length;

}



// Question 6
var reverseString = function (string){
    var characters = string.split('');
    var reverseChars = characters.reverse();
    return reverseChars.join('');

};


// Question 7
function findLongestWord (array) {
    var stringLength = 0;

    for (var i = 0; i < array.length; i++) {
      if (array[i].length > stringLength) {
        stringLength = array[i].length;

      }
    }
    return stringLength;

}


// Question 8
function filterLongWords (array, index) {

    return array.filter(function(word) {
      return word.length > index;
    });

}


// Bonus 1
//??????
String.prototype.reverseString = function () {
    var characters = this.split('');
    var reverseChars = characters.reverse();
    return reverseChars.join('');
}


// Bonus 2
function charactersOccurencesCount(string) {
    var stringObject = {};
    var characters = string.toLowerCase().replace(/\s+/g, '').split('');

        characters.forEach(function(i) {
          stringObject[i] = ( stringObject[i] || 0 ) +1;
        });

    return stringObject;
}
