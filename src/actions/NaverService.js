import { Requests } from '../libs';

const SEARCH = (value) => {
    return Requests.Instance({
        url: Requests.Peristalsis.Naver,
        method: `GET`,
        params: {
            value
        }
    })
};

export {
    SEARCH,
}