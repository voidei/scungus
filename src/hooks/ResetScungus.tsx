import { Button } from '@mui/material';

const ResetScungus = () => {
  const reset = () => {
    localStorage.removeItem('scungus');
    sessionStorage.removeItem('scungus');
  };

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
