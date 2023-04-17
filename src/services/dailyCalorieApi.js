import axios from 'axios';

// axios.defaults.baseURL = 'https://slim-mom-backend-tf5k.onrender.com/api';

export const getCalorieAuthApi = async calcParams => {
  const response = await axios.post('/calories/auth', calcParams);
  return response.data;
};

export const getCalorieApi = async calcParams => {
  const response = await axios.post('/calories', calcParams);
  return response.data;
};
