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
  render() {
    return (
      <>
        <Header />
        <Router>
          <SideBar />
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