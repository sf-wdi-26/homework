//where our iterators live

// The each method 
var o_o = {
  each: function(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
        callback(collection[i]);
    }
}
};
  var fillMe = [];
  o_o.each(["words", "are", "here"], function(item) {fillMe.push(item);});
  fillMe;
  


var o_o = { 
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
  

var o_o = {
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
      


