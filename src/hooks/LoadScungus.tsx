import { Button } from '@mui/material';

const LoadScungus = () => {
  const load = () => {
    console.log(`loading scungus now`);
    window.localStorage.getItem('scungus')
  };

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
