import Decimal from "break_infinity.js";
export function testOne() {
    var x = new Decimal(123.4567);
    var y = new Decimal("123456.7e-3");
    var z = new Decimal(x);
    var equals = x.equals(y) && y.equals(z) && x.equals(z);
    console.log(equals);
}
export function testTwo() {
    var x = new Decimal(123.4567);
    var y = new Decimal("123456.7e-3");
    var z = new Decimal(x);
    var short = x.divideBy(y).plus(z).times(9).floor();
    var long = x.times("1.23456780123456789e+9").plus(9876.5432321).divideBy("4444562598.111772").ceil();
    console.log(short);
    console.log(long);
}
