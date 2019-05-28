import Axios from 'axios';

const Instance = Axios.create({
    baseURL: 'http://localhost:8000/'
});

const Peristalsis = 'peristalsis/';
// const Api = 'api/';

const Weather = Peristalsis + 'weather';
const Instagram = Peristalsis + 'instagram';
const Naver = Peristalsis + 'naver';

const Requests = {
    Instance,
    Peristalsis: {
        Weather,
        Instagram,
        Naver
    }
}

export default Requests;