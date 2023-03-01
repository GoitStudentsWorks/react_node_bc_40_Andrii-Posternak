import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const registerUserApi = async newUser => {
  const response = await axios.post('/users/signup', newUser);
  return response.data;
};

export const loginUserApi = async userData => {
  const response = await axios.post('/users/login', userData);
  return response.data;
};

export const logoutUserApi = async () => {
  await axios.post('/users/logout');
};

export const getCurrentUserApi = async () => {
  const response = await axios.get('/users/current');
  return response.data;
};
