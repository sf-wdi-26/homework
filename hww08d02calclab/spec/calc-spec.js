var calculator = require( "../calc" );

describe( "addition", function() {
  it( "should add 4 and 6", function() {
    var sum = calculator.add( 4, 6 );
    expect( sum ).toBe( 10 );
  });
  describe( "subtraction", function(){
    it("should subtract 4 from 6", function(){
      var difference = calculator.subtract(4,6);
      expect(difference).toBe(2);
    });
  });
  describe("multiplication", function(){
    it("should multiply 2 and 4", function(){
      var product = calculator.multiply(2,4);
      expect(product).toBe(8);
    });
  });

  describe("division", function(){
    it("should divide 100 by 10", function(){
      var quotient = calculator.divide(100,10);
      expect(quotient).toBe(10);
    });
  });

  describe("square", function(){
    it("should square 3", function(){
      var product = calculator.square(3);
      expect(product).toBe(9);
    });
  });
describe( "exponent", function() {
  it( "should raise 1 to the 4th power", function() {
    var product = calculator.exponential( 1, 4 );
    expect( product ).toBe( 1 );
  });
});

describe( "is greater than", function() {
  it( "should return the larger of two arguments", function() {
    var value = calculator.isGreaterThan( 12, 24 );
    expect( value ).toBeGreaterThan( 12 );
  });
});

describe( "is negative", function() {
  it( "should return true if the argument is negative", function() {
    var value = calculator.isNegative( -5 );
    expect( value ).not.toBe( false );
  });
});