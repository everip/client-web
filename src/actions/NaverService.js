import axios from 'axios';

import { Replaces } from '../libs';

import { id, secret } from '../config/Naver';

const SEARCH = (value) => {
    return axios({
        method: `GET`,
        url: `https://openapi.naver.com/v1/search/blog.json?query=${Replaces.fromPlusToSpace(value)}`,
        headers: {
            'X-Naver-Client-Id': id,
            'X-Naver-Client-Secret': secret
        }
    });
};

export {
    SEARCH,
}