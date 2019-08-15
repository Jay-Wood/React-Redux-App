import React from 'react';
import './App.css';
import PlayerList from "./components/PlayerList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Find NBA Stats!</h1> 
      </header>
      <div >
        <PlayerList />
      </div>
    </div>
  );
}

export default App;
