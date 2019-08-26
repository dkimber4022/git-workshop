import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Counters from './components/Counters';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Counters />
    </div>
  );
}

export default App;
