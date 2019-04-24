import axios from 'axios';

import { Replaces } from '../libs';

const GETS = (sight) => {
    return axios({
        method: `get`,
        url: `https://www.instagram.com/explore/tags/${Replaces.fromPlusToUnderLine(sight)}/?__a=1`,
    });
};

export {
    GETS,
}