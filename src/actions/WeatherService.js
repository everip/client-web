import axios from 'axios';

import { secret } from '../config/OpenWeatherMap';

const SEARCH = ({ country, city }) => {
    return axios({
        method: `GET`,
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${secret}`,
    });
};

export {
    SEARCH,
}