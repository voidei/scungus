import * as material from '@mui/material';
import { useState } from 'react';

import Scungus from '../components/Scungus';

const Button = () => {
  const [
    amount,
    setAmount,
  ] = useState(0);
  const pressButton = () => {
    setAmount(amount + 1);
  };

  return (
    <div>
      <p>scungus = {amount}</p>
      <br />
      <material.Button
        variant='contained'
        color='secondary'
        size='large'
        type='submit'
        onClick={pressButton}
        aria-label='scungus:)'>
        <Scungus />
      </material.Button>
    </div>
  );
};

export default Button;
