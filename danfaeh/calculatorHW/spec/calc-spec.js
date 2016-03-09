var calculator = require( "../calc" );

describe('A calculator', function(){

	it("should add two numbers", function(){
		var sum = calculator.add(2,2);
		expect(sum).toBe(4);
	});

	it("should subtract two numbers", function(){
		var diff = calculator.subtract(2,2);
		expect(diff).toBe(0);
	});

	it("should multiply two numbers", function(){
		var product = calculator.multiply(2,3);
		expect(product).toBe(6);
	});

	it("should divide two numbers", function(){
		var quotient = calculator.divide(2,2);
		expect(quotient).toBe(1);
	});

	it("should square a number", function(){
		var square = calculator.square(5);
		expect(square).toBe(25);
	});

	it("should raise a num to a power", function(){
		var exp = calculator.exponential(2,3);
		expect(exp).toBe(8);
	});

	it("should find the greater number", function(){
		var greaterNum = calculator.isGreaterThan(7,4);
		expect(greaterNum).toBe(7);
	});

	it("should find if the num is negative", function(){
		var isNegative = calculator.isNegative(-5);
		expect(isNegative).toBeTruthy();
	});



});
//example test
// describe( "addition", function() {
//   it( "should add 2 and 2", function() {
//     var sum = calculator.add( 2, 2 );
//     expect( sum ).toBe( 4 );
//   });
// });
