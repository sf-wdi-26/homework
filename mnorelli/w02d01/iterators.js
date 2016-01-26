//where our iterators live
var o_o = {
  each: function(collection, callback) {
    /*
    	**Iterate through the collection and call the callback with each item.**
   		
   		Expect:
   		```
   		var fillMe = [];
   		o_o.each(["words", "are", "here"], function(item) {
   		  fillMe.push(item);
   		});
   		fillMe //`fillMe` should now be full
   		=> ["words", "are", "here"]
    	```
    */
    for (var x=0;x<collection.length;x+=1) {
      callback(collection[x]);  //do the callback function on the elements of the collection, not on the collection array itself
    }
  },
  map: function(collection, callback){
    /*
    	Iterate through the collection, call the callback with each item,
    	push the output of that result into a new collection,
    	and return the new collection.

    	Expect:
    	```
			var plusOne = function(n){ return n + 1; };
			o_o.map([1,2,3], plusOne);
			=> [2,3,4]
    	```
    */
    var newCollection = [];
    for (var x=0;x<collection.length;x+=1) {
      newCollection.push(callback(collection[x])); 
      // putting return inside the function will break it after one loop
    }
    return newCollection; 
  },
  filter: function(collection, callback) {
    /*
    	Do the same as `map` but anticipate that the callback only returns
    	true or false. If the callback returns true, push it into a new collection;
    	otherwise, do not. Return the new collection.

    	Expect:
    	```
    	var noOdds = function(n) { return n % 2 === 0; };
    	o_o.filter([2,3,4,5,6,8,7], noOdds);
    	=> [2,4,6,8]
    	```
    */
    var newCollection = [];
    for (var x=0;x<collection.length;x+=1) {
      test = callback(collection[x]);
      if (callback(collection[x])) {
        newCollection.push(collection[x]); 
      }
    }
    return newCollection;
  }
};

var fillMe = [];
o_o.each(["words", "are", "here"], function(item) {
  fillMe.push(item);
  });

var plusOne = function(n){ return n + 1; };

var noOdds = function(n) { return n % 2 === 0; };

console.log(fillMe);
console.log(o_o.map([1,2,3], plusOne));
console.log(o_o.filter([2,3,4,5,6,8,7], noOdds));
