import axios from 'axios';

import { Replaces } from '../libs';

const SEARCH = ({sight}) => {
    return axios({
        method: `GET`,
        url: `https://www.instagram.com/explore/tags/${Replaces.fromPlusToUnderLine(sight)}/?__a=1`,
    });
};

export {
    SEARCH,
}