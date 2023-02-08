import { c } from 'src/common';

// eslint-disable-next-line func-style, prefer-arrow/prefer-arrow-functions, func-names
export const pressButton = function () {
  let amount = 0;
  // eslint-disable-next-line functional/no-expression-statements, no-plusplus
  amount++;
  c.log(amount);

  return amount;
};
