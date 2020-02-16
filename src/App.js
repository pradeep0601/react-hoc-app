import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <h1>A basic app to understand HOC concepts!!</h1>
      <ClickCounter author="Pradeep"/>
      <HoverCounter/>
    </div>
  );
}

export default App;
