import React, { Component } from 'react';
import CheckBox from '../CheckBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CheckBox value="CheckBox1" defaultChecked={true} onChange={() => console.log('test')}/>
        <CheckBox value="CheckBox2"  defaultChecked={false} onChange={() => console.log('test')}/>
      </div>
    );
  }
}

export default App;
