import React from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Hi, I'm react app</h1>
      <p>This is really working ..!</p>
      <Person name="Joe" age="23"/>
      <Person name="Katy" age="32"/>
      <Person name="Jin" age="12"/>
      <Person name="Nek" age="26"/>
    </div>
  );
}

export default App;
