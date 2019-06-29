//core
import React, { Component } from 'react';

// db
import { history } from '../../services/DBService'

// Styles
import { Main } from './styles';

class App extends Component {
  componentDidMount() {
    this.testDb();
  }
  
  testDb = () => {
    history.find({}, (err, data) => {
      console.log(data);
    })
  };
  
  render() {
    return (
      <Main>
        <div>Hello</div>
      </Main>
    );
  }
}

export default App;
