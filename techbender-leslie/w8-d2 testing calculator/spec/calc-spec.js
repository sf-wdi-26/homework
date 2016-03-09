var calculator = require( "../calc" );

//example test
describe( "addition", function() {
  it( "should add 2 and 2", function() {
    var sum = calculator.add(2,2);
    expect( sum ).toBe(4);
  });
});

describe( "subtraction", function() {
	it( "should subtract 3 from 7", function() {
		var difference = calculator.subtract(7,3);
		expect(difference).toBe(4);
	});
});

describe( "multiplication", function() {
	it("should multiply 40 and 52", function() {
		var product = calculator.multiply(40,52);
		expect(product).toBe(2080);
	});
});

describe( "division", function() {
	if("should divide 20 by 5", function() {
		var quotient = calculator.divide(20,5);
		expect(product).toBe(4);
	});
});

describe( "squared", function() {
  it( "should square 9", function() {
    var product = calculator.squared( 9 );
    expect( product ).toBe( 81 );
  });
});

describe( "exponent", function() {
  it( "should raise 3 to 2rd power", function() {
    var product = calculator.exponent( 3, 2 );
    expect( product ).toBe( 9 );
  });
});

describe( "is greater than", function() {
  it( "should return the larger number", function() {
    var winner = calculator.isGreaterThan( 6, 14 );
    expect( winner ).toBeGreaterThan( 6 );
  });
});

describe( "is negative", function() {
  it( "should return true if the argument is negative", function() {
    var value = calculator.isNegative( -2 );
    expect( value ).not.toBe( false );
  });
});
