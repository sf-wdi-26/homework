var calculator = require( "../calc" );

describe( "addition", function() {
  it( "should add 2 and 2", function() {
    var sum = calculator.add( 2, 2 );
    expect( sum ).toBe( 4 );
  });
});

describe( "subtraction", function(){
	it("should subtract a from b", function(){
		var diff = calculator.subtract(4,3);
		expect( diff ).toBe( 1);
	});
});

describe( "multiplication", function() {
	it( "should multipy a and b", function() {
		var prod = calculator.multiply(12,2);
		expect ( prod ).toBe( 24 );
	});
});

describe( "division", function(){
	it("should divide a by b", function() {
		var div = calculator.divide(6,2);
		expect ( div ).toBe( 3 );
	});
});

describe ( "square", function() {
	it("should multiply a with a", function() {
		var square = calculator.square( 4 );
		expect ( square ).toBe( 16 );
	});
});

describe ( "exponential", function() {
	it("should raise 2 to the 3rd power", function() {
		var prod = calculator.exponential( 2,3 );
		expect ( prod ).toBe ( 8 ); 
	});
});

describe ( "greater num", function() {
	it("should return the greater of 2 nums", function() {
		var greater = calculator.isgreaterThan ( 5,17 );
		expect ( greater ).toBe( 17 );
	});
});

describe ( "is negative", function() {
	it("should return true if the argument is negative", function(){
		var value = calculator.isNegative( -2 );
		expect( value ).not.toBe( false );
	});
});
