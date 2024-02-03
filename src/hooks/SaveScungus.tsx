import { Button } from 'semantic-ui-react';
import { storeScungusLocally } from '../functions/StoreScungus';

const SaveScungus = () => {
  const [
    amount,
    setAmount
  ] = storeScungusLocally('scungus', 0);
  const save = () => {
    console.log(`saving scungus value of ${amount} to local storage`)
    setAmount(amount)
  };

  return (
    <div>
      <div>
        <Button
        variant='contained'
        type='submit'
        onClick={save}
        aria-label='scungus:) save'
        className='button save'>
          Save Game
        </Button>
      </div>
    </div>
  )
}

export default SaveScungus;
