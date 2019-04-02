import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Home,

  Cities,
  City,

  Countries,
  Country,

  Analysis,

  Error
} from './pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cities' component={Cities} />
          <Route exact path='/cities/:index' component={City} />
          <Route exact path='/countries' component={Countries} />
          <Route exact path='/countries/:index' component={Country} />
          <Route exact path='/analysis' component={Analysis} />
          <Route path='/' component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;