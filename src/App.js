import React, { Component } from 'react';
import { Header, Footer, SideBar } from './components';
import Pages from './pages';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: window.pageYOffset,
      way: 'up'
    };
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event) => {
    const scroll = window.pageYOffset;
    this.setState((prev) => ({
      scroll,
      way: prev.scroll > scroll ? 'up' : 'down'
    }))
  }

  render() {
    const { way } = this.state;

    return (
      <>
        <Header way={way} />
        <SideBar way={way} />
        <Pages />
        <Footer />
      </>
    );
  }
}

export default App;