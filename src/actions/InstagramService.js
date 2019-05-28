import { Requests } from '../libs';

const SEARCH = ({ sight }) => {
    return Requests.Instance({
        url: Requests.Peristalsis.Instagram,
        method: `GET`,
        params: {
            sight
        }
    })
};

export {
    SEARCH,
}