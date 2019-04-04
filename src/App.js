import React, { Component } from 'react';
import { Header, Footer, SideBar } from './components';
import Pages from './pages';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <SideBar />
        <Pages />
        <Footer />
      </>
    );
  }
}

export default App;