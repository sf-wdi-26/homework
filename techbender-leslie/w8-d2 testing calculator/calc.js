module.exports = {
  add: function(num1, num2){
    return (num1 + num2);
  },
  //
  subtract: function (num1, num2) {
  	return (num1 - num2);
  },

 multiply: function(num1, num2) {
 		return (num1 * num2);
 },
 
 division: function(num1, num2) {
 	return (num1 / num2);
 },
  
 squared: function(num){
    return ( num * num );
  },

  exponent: function( base, power ){
    return Math.pow(base, power);
  },

  isGreater: function( num1, num2 ){
    if( num1 > num2 ){
      return num1;
    } else
      return num2;
  },

  isNegative: function( num ){
    if( num < 0 ){
      return true;
    } else if ( num > 0 ){
      return false;
    } else {
      return 0;
    }
  }
}
