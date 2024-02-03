import { Button } from 'semantic-ui-react';

const ResetScungus = () => {
  const reset = () => {
    console.log(`resetting scungus:) progress`);
    localStorage.removeItem('scungus');
    sessionStorage.removeItem('scungus');
    location.reload();
  };

  return (
    <div>
      <div>
        <Button
        variant='contained'
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
