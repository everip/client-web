import { Requests } from '../libs';

const SEARCH = (country, city) => {
    return Requests.Instance({
        url: Requests.Peristalsis.Weather,
        method: `GET`,
        params: {
            country,
            city
        }
    })
};

export {
    SEARCH,
}