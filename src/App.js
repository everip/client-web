import React, { Component } from 'react';
import { Header, Footer } from './components';
import Pages from './pages';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Pages />
        <Footer />
      </>
    );
  }
}

export default App;