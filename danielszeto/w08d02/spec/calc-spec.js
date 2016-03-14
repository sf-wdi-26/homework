var calculator = require( "../calc" );

describe( "addition", function() {
	var x = 2;
	var y = 2;
  it( "should add 2 and 2", function() {
    var sum = calculator.add( x, y );
    expect( sum ).toBe( 4 );
  });

});

describe( "subtraction", function() {
	var x = 4;
	var y = 2;
  it( "should subtract 4 and 2", function() {
    var subtraction = calculator.subtract( x, y );
    expect( subtraction ).toBe( 2 );
  });
  
});

describe( "multiply", function() {
	var x = 2;
	var y = 2;
  it( "should multiply 2 and 2", function() {
    var multiply = calculator.multiply( x, y );
    expect( multiply ).toBe( 4 );
  });
  
});

describe( "divide", function() {
	var x = 4;
	var y = 2;
  it( "should divide 4 and 2", function() {
    var divide = calculator.divide( x, y );
    expect( divide ).toBe( 2 );
  });
  
});

describe( "square", function() {
	var x = 2;
  it( "should square 2", function() {
    var square = calculator.square(x);
    expect( square ).toBe( 4 );
  });
  
});

describe( "exponential", function() {
	var x = 2;
	var y = 4;
  it( "should raise 2 by 4", function() {
    var exponent = calculator.exponent(x,y);
    expect( exponent ).toBe( 16 );
  });
  
});

describe( "isGreaterThan", function() {
	var x = 2;
	var y = 4;
  it( "should find the greater number", function() {
    var isGreaterThan = calculator.isGreaterThan(x,y);
    expect( isGreaterThan ).toBe( 4 );
  });
  
});

describe( "isNegative", function() {
	var x = -2;
  it( "should find if negative", function() {
    var isNegative = calculator.isNegative(x);
    expect( isNegative ).toBe( true );
  });
  
});