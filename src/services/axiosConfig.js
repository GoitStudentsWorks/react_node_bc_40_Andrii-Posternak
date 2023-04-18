import axios from 'axios';
import history from 'history/browser';
import { store } from 'redux/store';
import { resetToken } from 'redux/auth/authSlice';
import { routes } from 'utils/routes';

axios.defaults.baseURL = 'https://slim-mom-backend-tf5k.onrender.com/api';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      store.dispatch(resetToken());
      unsetToken();
      const path = history.location.path;
      history.go(`${path}${routes.login}`);
    }
    return Promise.reject(error);
  }
);
