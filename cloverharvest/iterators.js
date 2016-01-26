//where our iterators live

// The each method 

var o_o = {

  // Iterate through the collection with a for loop and and call the callback for each item
  each: function(collection, callback) {
    
    for (var i = 0; i < collection.length; i++) {
        callback(collection[i]);
    }
}
};
  var fillMe = [];
  o_o.each(["words", "are", "here"], function(item) {fillMe.push(item);});
  fillMe;
   //=> ["words", "are", " here"]

//The map method

var o_o = { 
    
    //Make an empty array and assign it to a variable called out put. 
    //Iterate through the collection with a for loop, call the callback with each item,
    //and then push the output of that result into a new collection,
    //and then return the new collection.

    map: function(collection, callback){

    var output = [];
    for (var i = 0; i < collection.length; i++) {
        output.push(callback(collection[i]));
    }
    return output;
}
};
  var plusOne = function(n){ return n + 1; };
  o_o.map([1,2,3], plusOne);
  //=> [2, 3, 4]
  
//The filter method

var o_o = {

    //Do the same as `map` but anticipate that the callback only returns
    //true or false. Inside the for loop make an if flow. 
    //If the callback returns true, push it into a new collection;
    //otherwise, do not. Return the new collection.

    filter: function(collection, callback) {
    var output = [];
    for (var i = 0; i <collection.length; i++) {
        if (callback(collection[i])) {
            output.push(collection[i]);
        }
    }
    return output;
}   
};
  var noOdds = function(n) { return n % 2 === 0; };
  o_o.filter([2,3,4,5,6,8,7], noOdds);
  // =>[2, 4, 6, 8]


