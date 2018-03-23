import axios from 'axios';

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    data => {
        const { status, msg } = data.data;
        if (status !== 200) console.log(msg);
        return data;
    },
    error => {
        console.log('error', error.message);
        return Promise.reject(error);
    }
);

const origin = 'https://localhost:3000';

const Query = (url, type = 'get', data = {}) => {
    if (type === 'get') return axios.get(url).then(response => response.data);
    if (type === 'post') return axios.post(url, data).then(response => response.data);
};

export default {
    login: (userName, password) => {
        return Query(`https://facebook.github.io/react-native/movies.json`);
    }
};
