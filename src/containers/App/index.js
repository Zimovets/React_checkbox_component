//core
import React, { Component } from 'react';

// test
import { history } from '../../services/DBService'
import { getGifsbyKeyWord } from '../../services/GiphyService';

// Styles
import { Main } from './styles';

class App extends Component {
  componentDidMount() {
    getGifsbyKeyWord('dog').then(res => console.log(res.data.map(el => el.images.original.url)));
  }
  
  render() {
    return (
      <Main>
        <div>Hello</div>
      </Main>
    );
  }
}

export default App;
