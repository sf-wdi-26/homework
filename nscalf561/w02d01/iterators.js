//where our iterators live
var o_o = {
  each: function(collection, callback) {
    for (var x = 0, y = collection.length; x < y; x++) {
      callback(collection[x]);
    }
  return undefined;
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
  },
  map: function(collection, callback){
    var temp = [];
    for (var x = 0, y = collection.length; x < y; x++) {
      temp.push(callback(collection[x]));
    }
    return temp;


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
  },
  filter: function(collection, callback) {
    var temp = [];
    for (var x = 0, y = collection.length; x < y; x++) {
      if (callback(collection[x])) {
        temp.push(collection[x]);
      }
    }
    return temp;

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
  }
};
