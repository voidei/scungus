import { Button } from 'semantic-ui-react';
import { storeScungusSession } from '../functions/StoreScungus';

const ClickScungus = () => {
  const [
    amount,
    setAmount,
  ] = storeScungusSession('scungus', 0);
  const pressButton = () => {
    console.log(`scungus + 1`)
    setAmount(amount + 1);
    console.log(`new scungus == ${amount}`)
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
