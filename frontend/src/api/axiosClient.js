import axios from 'axios';
import StorageKeys from '../constants/storage-keys';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/json',
    }
})

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    let token = localStorage.getItem(StorageKeys.TOKEN);
    if(token) {
        config.headers.token = `Bearer ${token}`;
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {

    return response.data;
}, function (error) {
    console.log('ERROR res', error.response);

    const {
        config,
        data,
        status
    } = error.response;

    const URLS = ['/auth/signup', '/auth/signin'];

    if (URLS.includes(config.url) && status === 400) {
        const {
            error
        } = data;



        throw new Error(error.message);
    }

    return Promise.reject(error);
});

export default axiosClient;