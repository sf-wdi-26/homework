module.exports = {
  add: function(a,b){
  	return ( a + b );
  },
  subtract: function( a,b ) {
  	return ( a - b );
  },
  multiply: function ( a,b ) {
  	return ( a * b );
  },
  divide: function ( a,b ) {
  	return ( a/b );
  },
  square : function( a ) {
  	return ( a*a );
  },
  // a is base, b is power
  exponential: function( a,b ) {
  	return Math.pow( a,b );
  },
  isgreaterThan: function( a,b ) {
  	if ( a>b ) {
  		return a;
  	} else {
  		return b;
  	}
  },
  isNegative: function(a) {
  	if ( a<0 ){
  		return true;
  	} else if ( a>0 ) {
  		return false;
  	} else {
  		return 0;
  	}
  }
};
