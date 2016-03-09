var calculator = require( "../calc" );


describe( "addition", function() {
  it( "should add 2 and 2", function() {
    var sum = calculator.add( 2, 2 );
    expect( sum ).toBe( 4 );
  });
});
  describe( "subtract", function() {
  it( "should subtract 2 from 10", function() {
    var diff = calculator.subtract( 10, 2 );
    expect( diff ).toBe( 8 );
  });
});
  describe( "product", function() {
  it( "should multiplication 10 and 10", function() {
    var product = calculator.product( 10, 10 );
    expect( product ).toBe( 100 );
  });
});
  describe( "divide", function() {
  it( "should divide 20 and 2", function() {
    var divide = calculator.divide( 20, 2 );
    expect( divide ).toBe( 10 );
  });
});
  describe( "square", function() {
  it( "should square 2", function() {
    var square = calculator.square( 2, 2 );
    expect( square ).toBe( 4 );
  });
});

describe( "exponent", function() {
  it( "should show exponent to the 4 power", function() {
    var exponent = calculator.exponent( 2, 4 );
    expect( exponent ).toBe( 16 );
  });
});
describe( "isGreaterThan", function() {
  it( "should show the bigger number", function() {
    var greater = calculator.greater( 6, 4 );
    expect( greater ).toBe( true );
  });
});
describe( "isNegative", function() {
  it( "should show the negative number", function() {
    var negative = calculator.negative( 5, -8 );
    expect( negative ).toBe( true );
  });
});