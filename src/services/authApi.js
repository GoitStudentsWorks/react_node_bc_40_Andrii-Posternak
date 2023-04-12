import axios from 'axios';

axios.defaults.baseURL = 'https://slim-mom-backend-tf5k.onrender.com/api';

export const registerUserApi = async newUser => {
  const response = await axios.post('/auth/register', newUser);
  return response.data;
};

export const loginUserApi = async userData => {
  const response = await axios.post('/auth/login', userData);
  return response.data;
};

export const logoutUserApi = async () => {
  await axios.get('/auth/logout');
};
