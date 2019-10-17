import React from 'react';
import './App.css';
import Game from './components/Game.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1>TOTAL RECALL</h1>
            <p class="lead">Test your memory! Click all the Arnies, but don't click any more than once!</p>
          </div>
        </div>
      </header>
      <div>
        <Game></Game>
      </div>
    </div>
  );
}

export default App;
