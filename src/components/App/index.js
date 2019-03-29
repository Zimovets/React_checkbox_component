import React, { Component } from 'react';
import CheckBox from '../CheckBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CheckBox label="CheckBox1" isChecked handleCheckboxChange={() => console.log('test')}/>
        <CheckBox label="CheckBox2"  handleCheckboxChange={() => console.log('test')}/>
      </div>
    );
  }
}

export default App;
