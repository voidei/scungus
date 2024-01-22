import { Button } from '@mui/material';
import { storeScungusLocally } from '../functions/StoreScungus';

const LoadScungus = () => {
  const [
    amount,
    setAmount
  ] = storeScungusLocally('scungus', 0);
  const load = () => setAmount(amount);

  return (
    <div>
      <div>
        <Button
        variant='contained'
        color='secondary'
        type='submit'
        onClick={load}
        aria-label='scungus:) load'
        className='button load'>
          Load Game
        </Button>
      </div>
    </div>
  )
};

export default LoadScungus;
