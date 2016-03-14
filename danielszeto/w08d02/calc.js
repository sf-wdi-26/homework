calculator = {
  add: function(x,y){
  	return x + y;
  },

  subtract: function(x,y){
  	return x - y;
  },

  multiply: function(x,y){
  	return x * y;
  },

  divide: function(x,y){
  	return x/y;
  },

  square: function(x){
  	return Math.pow(x,x);
  },

  exponent: function(x,y){
  	return Math.pow(x,y);
  },

  isGreaterThan: function(x,y){
  	if (x > y) {
  		return x;
  	}
  	else { return y ;
  	}
  },

  isNegative: function(x){
  	if (x < 0){
  		return true;
  	} else if (x > 0){
  		return false;
  	} else {
  		return 0;
  	}
  }
};

module.exports = calculator; 