//core
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Switch>
            <Route  exact path='/' component={HomePage}/>
            <Route  exact path='/history' component={HistoryPage}/>
          </Switch>
        </Main>
      </Router>
    );
  }
}

export default App;
