import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import Clock from './components/Clock/Clock';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>React js App</h4>
      </header>
      <Counter />
      <Clock />
    </div>
  );
}

export default App;
