//core
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// test
import { history } from '../../services/DBService'
import { getGifsbyKeyWord } from '../../services/GiphyService';

//components
import Header from './Header'
import HomePage from '../HomePage';
import HistoryPage from '../HistoryPage';

// Styles
import { Main } from './styles';

class App extends Component {
  render() {
    return (
      <Router>
        <Main>
          <Header/>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/history' component={HistoryPage}/>
        </Main>
      </Router>
    );
  }
}

export default App;
