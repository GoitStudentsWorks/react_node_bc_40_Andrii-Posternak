import axios from 'axios';

axios.defaults.baseURL = 'https://slim-mom-backend-tf5k.onrender.com/api';

export const getCurrentUserApi = async () => {
  const response = await axios.get('/users/current');
  return response.data;
};
