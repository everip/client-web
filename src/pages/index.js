import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './home';
import { Cities, City, Countries, Country } from './recommend';
import { Analysis } from './analysis';
import { Error } from './error';

import '../assets/css/index.css';
import '../assets/css/reset.css';

export default class Pages extends Component {
    render() {
        return (
            <article>
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
            </article>
        );
    }
}