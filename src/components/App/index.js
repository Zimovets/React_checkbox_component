import React, { Component } from 'react';
import CheckBox from '../CheckBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CheckBox value="CheckBox1" checked onChange={() => console.log('test')}/>
        <CheckBox value="CheckBox2"  onChange={() => console.log('test')}/>
      </div>
    );
  }
}

export default App;
