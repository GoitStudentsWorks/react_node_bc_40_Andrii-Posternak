import axios from 'axios';

export const getCurrentUserApi = async () => {
  const response = await axios.get('/users/current');
  return response.data;
};
