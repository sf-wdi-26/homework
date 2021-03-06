function Calculator() {

}

Calculator.prototype = {
  add: function(x, y){
    return x + y;
  },
  subtract: function(x, y){
    return x - y;
  },
  multiply: function(x, y){
    return x * y;
  },
  divide: function(x, y){
    return x/y;
  },
  square: function(x){
    return Math.pow(x, 2);
  },
  exponential: function(x, y){
    return Math.pow(x, y);
  },
  isGreaterThan: function(x, y){
    if(x > y){
      return x;
    }
    else{
      return y;
    }
  },
  isNegative: function(x) {
    if (x < 0){
      return true;
    }
    else{
      return false;
    }
  }
}

module.exports = Calculator;
