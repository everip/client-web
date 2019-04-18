import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faChevronLeft,
    faChevronRight,
    faHeart,
    faInfo,
    faMapMarked,
    faUtensils,
    faCarSide,
    faHashtag,
    faHandPointRight,
    faCloudSunRain,
    faEquals,
} from '@fortawesome/free-solid-svg-icons';
import {

} from '@fortawesome/free-brands-svg-icons';

library.add(
    faChevronLeft,
    faChevronRight,
    faHeart,
    faInfo,
    faMapMarked,
    faUtensils,
    faCarSide,
    faHashtag,
    faHandPointRight,
    faCloudSunRain,
    faEquals,
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
