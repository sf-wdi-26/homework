var Calculator = require( "../calc" );

// example test
describe( "calculator", function() {
  beforeEach(function(){
    calculator = new Calculator();
  });

  it( "should add 2 and 2", function() {
    var sum = calculator.add( 2, 2 );
    expect( sum ).toBe( 4 );
  });

  it( "should subtract 2 from 6", function() {
    var difference = calculator.subtract( 6, 2 );
    expect( difference ).toBe( 4 );
  });

  it( "should multiply 2 and 6", function() {
    var product = calculator.multiply( 6, 2 );
    expect( product ).toBe( 12 );
  });

  it( "should divide 9 and 3", function() {
    var quotient = calculator.divide( 9, 3 );
    expect( quotient ).toBe(3);
  });

  it("should square 3", function() {
    var square = calculator.square( 3 );
    expect ( square ).toBe(9);
  });

  it("should raise 4 to the power of 3", function() {
    var exponential = calculator.exponential(4, 3);
    expect (exponential).toBe(64);
  });

  it("should return larger number of 3 and 4", function() {
    var larger = calculator.isGreaterThan(4, 3);
    expect (larger).toBe(4);
  });

  it("should check if -6 is negative", function (){
    var negative = calculator.isNegative(-6);
    expect(negative).toBe(true);
  });

  it("should check if 4 is positive", function() {
    var positive = calculator.isNegative(4);
    expect(positive).toBe(false);
  })

});
