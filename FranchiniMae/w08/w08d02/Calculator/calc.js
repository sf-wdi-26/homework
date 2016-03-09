module.exports = {
	add: function (a, b){
		var sum = a + b;
		return sum;
	},

	subtract: function (a, b) {
		var difference = a - b;
		return difference;
	},

	multiply: function (a, b) {
		var product = a * b;
		return product;
	},

	divide: function (a, b) {
		var quotient = a / b;
		return quotient;
	},

	square: function (a) {
		var square = a * a;
		return square;
	},

	exponential: function (a, b) {
		var power = Math.pow(a, b);
		return power;
	},

	isGreatherThan: function (a, b) {
		var greater;
		if (a > b) {
			greater = a;
		} else {
			greater = b;
		}
		return greater;
	},

	isNegative: function (a) {
		if (a > 0) {
			return false;
		} else {
			return true; 
		}

	}
};
