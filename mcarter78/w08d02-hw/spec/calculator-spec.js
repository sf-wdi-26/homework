var calculator = require('../calculator');
var x = 2;
var y = 3;
var z = 6;
var a = -2;

describe('a calculator', function () {
  it('can add two numbers', function () {
    expect(calculator.add(x, y)).toBe(5);
  });
  it('can subtract two numbers', function () {
    expect(calculator.subtract(x, y)).toBe(-1);
  });
  it('can multiply two numbers', function () {
    expect(calculator.multiply(x, y)).toBe(6);
  });
  it('can divide two numbers', function () {
    expect(calculator.divide(z, y)).toBe(2);
  });
  it('can square a number', function () {
    expect(calculator.squared(x)).toBe(4);
  });
  it('can raise one number to the power of another', function () {
    expect(calculator.exponential(x, y)).toBe(8);
  });
  it('can tell which number is greater', function () {
    expect(calculator.isGreaterThan(x, y)).toBe(y);
  });
  it('can tell if a number is negative', function () {
    expect(calculator.isNegative(a)).toBeTruthy();
  });
});
