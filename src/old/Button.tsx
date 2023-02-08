/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable func-style, func-names, no-plusplus */
import * as material from '@mui/material';
import { c } from 'src/common';

let scungus = 0;

const pressButton = function () {
  // eslint-disable-next-line functional/no-expression-statements
  scungus++;
  c.log(scungus);
};

export function Button() {
  return (
    <div className='btn'>
      <material.Button onClick={pressButton} variant='outlined' color='success' size='medium'>
        scungus:)
      </material.Button>
      <br />
      <div className='text scungus'>scungus = {scungus.toString()}</div>
    </div>
  );
}
