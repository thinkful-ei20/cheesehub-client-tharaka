import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheeseList from './components/cheese-list';
import AddCheese from './components/add-cheese';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CheeseList />
        <AddCheese />
      </div>
    );
  }
}

export default App;
