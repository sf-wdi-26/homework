//o_o is the object for which we are building methods.
var o_o = {
  //this function simulates .each functionality, iterating through the area,
  //then calling a function each time. Doesn't return anything at the end. 
  each: function(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  },
   //this function simulates .map functionality, iterating through the area, 
   //calling a function each time & saving each result to a new array. 
   //Returns the new array at end.
  map: function(collection, callback){
    var newCollection = [];
      for (var i = 0; i < collection.length; i++){
        newCollection.push(callback(collection[i]));
      }
      return newCollection;
  },
   //this function simulates .filter functionality, iterating through the area, 
   //calling a function ONLY IF true, then saving each result to a new array.
   //Returns the new array at end.
  filter: function(collection, callback) {
    var newCollection = [];
      for (var i = 0; i < collection.length; i++){
        if (callback(collection[i])) {
        newCollection.push(collection[i]);
        }    
      }
      return newCollection;

  }
};
