import React, { Component } from 'react';

import ErrorBoundary from '../errorBoudary/ErrorBoudary';
import ContentPage from '../contentPage/ContentPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ErrorBoundary><ContentPage/></ErrorBoundary>
      </div>
    );
  }
}

export default App;
