import axios from 'axios';

import userActions from './userActions';
import showError from 'services/helpers';
const {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  calculateUserRequest,
  calculateUserSuccess,
  calculateUserError,
  publicUserCalculateRequest,
  publicUserCalculateSuccess,
  publicUserCalculateError,
} = userActions;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register =
  ({ email, name, password }) =>
  async dispatch => {
    const userInfo = { email, name, password };
    dispatch(registerRequest());
    try {
      const response = await axios.post('/users/registration', userInfo);
      token.set(response.data.user.token);
      dispatch(registerSuccess(response.data));
    } catch (error) {
      if (error.response.status === 409) {
        showError(error.response.data.message);
      }
      dispatch(registerError(error.message));
    }
  };

const logIn =
  ({ email, password }) =>
  async dispatch => {
    const userInfo = { email, password };
    dispatch(loginRequest());
    try {
      const { data } = await axios.post('/users/login', userInfo);
      token.set(data.user.token);
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
