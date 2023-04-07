import axios from 'axios';

axios.defaults.baseURL = 'https://slim-mom-backend-tf5k.onrender.com/api';

export const getProductsApi = async () => {
  const response = await axios.get('/products');
  return response.data;
};

export const addProductApi = async newProduct => {
  const response = await axios.post('/products', newProduct);
  return response.data;
};

export const deleteProductApi = async id => {
  const response = await axios.delete(`/products/${id}`);
  return response.data;
};

export const getProductCategoryApi = async productName => {
  const response = await axios.get(`/products/database`, {
    params: {
      product: productName,
    },
  });
  return response.data;
};

export const getCaloriePublicApi = async data => {
  const response = await axios.post(`/products/publicCalorie`, data);
  return response.data;
};

export const getCaloriePrivateApi = async data => {
  const response = await axios.post(`/products/privateCalorie`, data);
  return response.data;
};
