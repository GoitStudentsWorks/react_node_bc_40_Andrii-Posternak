import axios from 'axios';

export const getCalorieAuthApi = async calcParams => {
  const response = await axios.post('/calories/auth', calcParams);
  return response.data;
};

export const getCalorieApi = async calcParams => {
  const response = await axios.post('/calories', calcParams);
  return response.data;
};
