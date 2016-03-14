var calculator = {
	add: function(x,y){
		var sum = x + y;
		return sum;
	},
	subtract: function(x,y){
		var difference = x - y;
		return difference;
	},
	multiply: function(x,y){
		var product = x * y;
		return product;
	},
	divide: function(x,y){
		var quotient = x / y;
		return quotient;
	},
	square: function(x){
		var square = Math.pow(x,2);
		return square;
	},
	exponential: function(x,y){
		var exp = Math.pow(x,y);
		return exp;
	},
	isGreaterThan: function(x,y){
		if (x>y){
			return x;
		}else{
			return y;
		}
	},	
	isNegative: function(x){
		if (x<0){
			return true;
		}else{
			return false;
		}		
	}
};


module.exports = calculator;
