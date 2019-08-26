import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Counter />
    </div>
  );
}

export default App;
