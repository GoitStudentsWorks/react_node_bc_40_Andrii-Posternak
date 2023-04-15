import { createSlice } from '@reduxjs/toolkit';
import {
  getProductsFromDB,
  getEatenProducts,
  addEatenProduct,
  deleteEatenProduct,
} from 'redux/dailyFood/dailyFoodOperations';
import moment from 'moment';

const dailyFoodInitialState = {
  currentDate: moment(new Date()).format('DD.MM.YYYY'),
  searchedProduct: [],
  eatenProducts: [],
  isLoading: false,
  error: null,
};

const dailyFoodSlice = createSlice({
  name: 'dailyFood',
  initialState: dailyFoodInitialState,
  extraReducers: builder => {
    builder
      .addCase(getProductsFromDB.fulfilled, (state, action) => {
        state.searchedProduct = action.payload;
      })
      .addCase(getEatenProducts.fulfilled, (state, action) => {
        state.eatenProducts = action.payload;
      })
      .addCase(addEatenProduct.fulfilled, (state, action) => {
        state.eatenProducts = [...state.eatenProducts, action.payload];
        state.searchedProduct = [];
      })
      .addCase(deleteEatenProduct.fulfilled, (state, action) => {
        state.eatenProducts = state.eatenProducts.filter(
          product => product._id !== action.payload
        );
      })
      .addMatcher(
        action =>
          action.type.startsWith('products') && action.type.endsWith('pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('products') &&
          action.type.endsWith('fulfilled'),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('products') &&
          action.type.endsWith('rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
  reducers: {
    changeDate(state, action) {
      state.currentDate = action.payload;
    },
  },
});

export const dailyFoodReducer = dailyFoodSlice.reducer;

export const selectCurrentDate = state => state.dailyFood.currentDate;
export const selectSearchedProduct = state => state.dailyFood.searchedProduct;
export const selectEatenProducts = state => state.dailyFood.eatenProducts;
export const selectError = state => state.dailyFood.error;

export const { changeDate } = dailyFoodSlice.actions;
