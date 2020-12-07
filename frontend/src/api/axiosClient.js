import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/json',
    }
})

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
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

    const {config, data, status} = error.response;

    const URLS = ['/auth/signup', '/auth/signin'];

    if(URLS.includes(config.url) && status === 400) {
        const {error} = data;

        console.log(error.message);

        throw new Error(error.message);
    } 

    return Promise.reject(error);
});

export default axiosClient;