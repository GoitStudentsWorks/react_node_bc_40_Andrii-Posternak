import axios from 'axios';
import foodActions from './foodActions';

let cancelToken;
const {
  fetchFoodRequest,
  fetchFoodSuccess,
  fetchFoodError,
  fetchFoodByQueryRequest,
  fetchFoodByQuerySuccess,
  fetchFoodByQueryError,
} = foodActions;

const getFood = () => async dispatch => {
  dispatch(fetchFoodRequest());
  try {
    const { data } = await axios.get('/catalogue/all');
    dispatch(fetchFoodSuccess(data.fullCatalogue));
  } catch (error) {
    dispatch(fetchFoodError(error));
  }
};

const getFoodByQuery = query => async dispatch => {
  if (typeof cancelToken !== typeof undefined) {
    cancelToken.cancel('Operation canceled due to new request.');
  }

  cancelToken = axios.CancelToken.source();
  dispatch(fetchFoodByQueryRequest());
  try {
    const { data } = await axios.get(`/catalogue?search=${query}`, {
      cancelToken: cancelToken.token,
    });
    dispatch(fetchFoodByQuerySuccess(data.results));
  } catch (error) {
    dispatch(fetchFoodByQueryError(error));
  }
};

const foodOperations = {
  getFood,
  getFoodByQuery,
};

export default foodOperations;
