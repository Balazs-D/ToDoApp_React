import React from 'react';
import '../styles/App.css';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO:</h1>
        <Todo />
      </header>
    </div>
  );
}

export default App;
