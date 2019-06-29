//core
import React, { Component } from 'react';

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
      <Main>
        <Header/>
        <div>Hello</div>
      </Main>
    );
  }
}

export default App;
