import axios from 'axios';
import {appConfig} from '../config';

const configAxios = axios.create({ baseURL: appConfig.baseUrl });

configAxios.interceptors.request.use(async (config) => {
    const token =  localStorage.getItem('auth');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config
})


export default configAxios;