var calculator = require( "../calc" );

//example test
describe( "calculator", function() {
  // add two numbers with .add
  it( "should add 2 and 2", function() {
    var sum = calculator.add( 2, 2 );
    expect( sum ).toBe( 4 );
  });

  // subtract two numbers with .subtract
  it( "should subtract 4 and 2", function() {
    var difference = calculator.subtract( 4, 2 );
    expect( difference ).toBe( 2 );
  });

  // multiply two numbers with .multiply
  it( "should multipy 2 and 3", function() {
    var product = calculator.multiply( 2, 3 );
    expect( product ).toBe( 6 );
  });

  // divide two numbers with .divide
  it( "should divide 8 by 4", function() {
    var quotient = calculator.divide( 8, 4 );
    expect( quotient ).toBe( 2 );
  });

  // square one number with .square
  it( "should square number 3", function() {
    var square = calculator.square( 3 );
    expect( square ).toBe( 9 );
  });

  // raise one number to the power of another with .exponential
  it( "should raise 2 to the power of 4", function() {
    var power = calculator.exponential( 2, 4 );
    expect( power ).toBe( 16 );
  });

  // find the larger of two numbers with .isGreaterThan
  it( "should find the larger of 4 and 2", function() {
    var greater = calculator.isGreaterThan( 4, 2 );
    expect( greater ).toBe( 4 );
  });

  // find the sign of a number with .isNegative (return a boolean)
  it( "should find the sign of -3", function() {
    var sign = calculator.isNegative( -3 );
    expect( sign ).toBeTruthy();
  });
});