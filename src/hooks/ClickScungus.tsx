import { Button } from '@mui/material';
import { useState } from 'react';

const ClickScungus = () => {
  const [
    amount,
    setAmount,
  ] = useState(0);
  const pressButton = () => {
    setAmount(amount + 1);
  };

  return (
    <div>
      <div
        className='scungus-amount'
        style={{textAlign: 'center', paddingTop: '20%'}}>
            scungus = {amount}
        </div>

      <div style={{height: '10px'}}></div>
      <div className='button scungus border'>

      <Button
        variant='contained'
        color='secondary'
        size='large'
        type='submit'
        onClick={pressButton}
        aria-label='scungus:)'
        className='scungus button'>
        <img
          className='scungus image'
          aria-label='scungus:)'
          src='./scungus.gif'
          draggable='false' />
      </Button>
      </div>
    </div>
  );
};

export default ClickScungus;
