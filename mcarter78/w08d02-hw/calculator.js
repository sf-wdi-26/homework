var calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    return num1 / num2;
  },
  squared: function(num) {
    return num * num;
  },
  exponential: function(num1, num2) {
    return Math.pow(num1, num2);
  },
  isGreaterThan: function(num1, num2) {
    if (num2 >= num1) {
      return num2;
    } else {
      return num1;
    }
  },
  isNegative: function (num) {
    if (num < 0) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = calculator;
