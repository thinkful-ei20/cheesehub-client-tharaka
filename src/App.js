import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheeseList from './components/cheese-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CheeseList />
      </div>
    );
  }
}

export default App;
