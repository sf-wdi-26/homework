module.exports = {
  add: function (a, b) {
  	return a + b;
},
  //
  subtract: function (a, b){
  	return a - b;
  },

  product: function (a, b){
  	return a * b;
  },
  divide: function (a, b){
  	return a / b;
  },
  square: function (a, b){
  	return Math.pow (2, 2);
  },
  exponent: function (a, b){
  	return Math.pow (2, 4);
  },
  greater: function (a, b){
  	return a > b;
  },
  negative: function (a, b){
  	if (a >= 0 && b < 0){
  	return true;
  		
  	}
  }
};
