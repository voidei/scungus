//import { LoadScungus, SaveScungus } from 'src/hooks/StoreScungus';
import LoadScungus from '../hooks/LoadScungus';
import ResetScungus from '../hooks/ResetScungus';
import ClickScungus from '../hooks/ScungusButton';
import './app.css';

const App = () => {
  return (
    <div className='root' style={{display: 'flex', width: '100%'}}>
      <div className='side left'>
      <div className='title-text heading'><h1>this is scungus:)</h1></div>
      <div className='text center top'>
        you can click on scungus:)
        <br />
        doing so will increase your scungus:)
        <br />
        try it~!
      </div>
      <div className='button scungus padding'>
        <ClickScungus />
      </div>
      </div>
      <div className='side right'>
        <br />
        <LoadScungus />
        <br />
        <ResetScungus />
      </div>
    </div>
  );
};

export default App;
