import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Header,
  Footer,
  SideBar
} from './components';
import {
  Home as HomePage,
  Country as CountryPage,
  City as CityPage,
  Sight as SightPage,
  Error as ErrorPage,
} from './pages';

import './assets/css/reset.css';
import './assets/css/index.css';
import './assets/css/icon.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: window.pageYOffset,
      way: 'up'
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event) => {
    if (!this.scroll) {
      this.scroll = setTimeout(() => {
        const scroll = window.pageYOffset;
        const path = window.location.pathname;
        if (path === '/')
          this.setState((prev) => ({
            scroll,
            way: prev.scroll > scroll ? 'up' : 'down'
          }));
        this.scroll = false;
      }, 500)
    }
  }

  render() {
    const { way } = this.state;

    return (
      <>
        <Header way={way} />
        <Router>
          <SideBar way={way} />
          <Scroll />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/:country' component={CountryPage} />
            <Route exact path='/:country/:city' component={CityPage} />
            <Route exact path='/:country/:city/:sight' component={SightPage} />
            <Route path='/' component={ErrorPage} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;



class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <></>;
  }
}

const Scroll = withRouter(ScrollToTop);