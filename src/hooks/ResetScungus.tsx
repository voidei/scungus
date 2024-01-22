import { Button } from '@mui/material';
import { storeScungusLocally } from '../functions/StoreScungus';

const ResetScungus = () => {
  const [setAmount] = storeScungusLocally('scungus', 0);
  const reset = () => setAmount(0);

  return (
    <div>
      <div>
        <Button
        variant='contained'
        color='secondary'
        type='submit'
        onClick={reset}
        aria-label='scungus:) reset'
        className='button reset'>
          Reset Game
        </Button>
      </div>
    </div>
  )
}

export default ResetScungus;
