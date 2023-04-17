import axios from 'axios';

// axios.defaults.baseURL = 'https://slim-mom-backend-tf5k.onrender.com/api';

export const getProductsFromDBApi = async productName => {
  const response = await axios.get('/products', { params: { productName } });
  return response.data;
};

export const getEatenProductsApi = async date => {
  const response = await axios.get(`/products/${date}`);
  return response.data;
};

export const addEatenProductApi = async newProduct => {
  const response = await axios.post('/products', newProduct);
  return response.data;
};

export const deleteEatenProductApi = async id => {
  const response = await axios.delete(`/products/${id}`);
  return response.data;
};
