import React, { Component } from 'react';
import CheckBox from './components/CheckBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CheckBox label="Test" handleCheckboxChange={() => console.log('test')}/>
      </div>
    );
  }
}

export default App;
