import axios from 'axios';
import {store} from '../index';

const instance = axios.create({
    baseURL: 'http://localhost:2404',
    headers: {'Content-Type': 'application/json'}
  });


  instance.interceptors.request.use(config => {
    const state = store.getState();
    if(state.auth.token){
      config.headers.authorization = `Bearer ${state.auth.token}` ;
    }
    
    return config;
  },
  (error)=> {
    return Promise.reject (error);
  });

  export default instance;