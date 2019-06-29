//core
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// test
import { history } from '../../services/DBService'
import { getGifsbyKeyWord } from '../../services/GiphyService';

//components
import Header from './Header'

// Styles
import { Main } from './styles';

class App extends Component {
  render() {
    return (
      <Router>
        <Main>
          <Header/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/history' component={History}/>
        </Main>
      </Router>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function History() {
  return <h2>History</h2>;
}

export default App;
