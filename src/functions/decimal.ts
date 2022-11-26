import Decimal from 'break_infinity.js';

export function testOne() {
	const x = new Decimal(123.4567);
	const y = new Decimal('123456.7e-3');
	const z = new Decimal(x);
	const equals = x.equals(y) && y.equals(z) && x.equals(z);

	console.log(equals);
}

export function testTwo() {
	const x = new Decimal(123.4567);
	const y = new Decimal('123456.7e-3');
	const z = new Decimal(x);
	const short = x.divideBy(y).plus(z).times(9).floor();
	const long = x
		.times('1.23456780123456789e+9')
		.plus(9876.5432321)
		.divideBy('4444562598.111772')
		.ceil();

	console.log(short);
	console.log(long);
}
