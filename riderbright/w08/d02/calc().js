var CalcFunk = function (a, b, method, future) {

    this.a = a;
    this.b = b;
    this.method = method;
    this.future = future;

    if (a > b) {
        future = a;
        a = b;
        b = future;
    }
    if (method = "+") {
        soultion = a + b;
    }
    if (method = "-") {
        solution = b - a;
    }
    if (method = "*") {
        solution = a * b;
    }
    if (method = "%") {
        soultion = b % a;
    }
    if (method = "squared") {
        solution = b.square
    }
    if (method = "exponetial") {

    }
}



describe("calculator", function () {


    it("sum", function () {
        var calc = new CalcFunk(a, b, "+", future)
        expect(calc.method).toBe("+");
    });
    it("difference", function () {
        var calc = new CalcFunk(a, b, "-", future)
        expect(calc.method).toBe("-");
    });
    it("multiply", function () {
        var calc = new CalcFunk(a, b, "*", future)
        expect(calc.method).toBe("*");
    });
    it("divide", function () {
        var calc = new CalcFunk(a, b, "%", future)
        expect(calc.method).toBe("%");
    });
});