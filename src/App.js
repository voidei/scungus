import chucky from './chucky.svg';
import './App.css';
import * as React from 'react';

function App() {
  return (
    <div className="App">
      <header className="scungus-header">
        <img src={chucky} className="chucky" alt="chucky" />
        <p>
          this is chucky.
        </p>
        <p>
          chucky is spinning.
        </p>
        <p>
          scungus will return soon, I promise.
        </p>
        <a
          className="gh-link"
          href="https://github.com/voidei"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
