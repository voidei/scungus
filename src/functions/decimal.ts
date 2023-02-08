/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable sonarjs/no-identical-functions, sonarjs/no-duplicate-string */
/* eslint-disable id-length */
import Decimal from 'break_infinity.js';
import { c } from 'src/common';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function testOne() {
  const x = new Decimal(123.4567);
  const y = new Decimal('123456.7e-3');
  const z = new Decimal(x);
  const equals = x.equals(y) && y.equals(z) && x.equals(z);

  c.log(equals);
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function testTwo() {
  const x = new Decimal(123.4567);
  const y = new Decimal('123456.7e-3');
  const z = new Decimal(x);
  const short = x.divideBy(y).plus(z).times(9).floor();
  const long = x.times('1.23456780123456789e+9').plus(9876.5432321).divideBy('4444562598.111772').ceil();

  c.log(short);
  c.log(long);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const testOneConst = () => {
  const x = new Decimal(123.4567);
  const y = new Decimal('123456.7e-3');
  const z = new Decimal(x);
  const equals = x.equals(y) && y.equals(z) && x.equals(z);

  c.log(equals);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const testTwoConst = () => {
  const x = new Decimal(123.4567);
  const y = new Decimal('123456.7e-3');
  const z = new Decimal(x);
  const short = x.divideBy(y).plus(z).times(9).floor();
  const long = x.times('1.23456780123456789e+9').plus(9876.5432321).divideBy('4444562598.111772').ceil();

  c.log(short);
  c.log(long);
};
