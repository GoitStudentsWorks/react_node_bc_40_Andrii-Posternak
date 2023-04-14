import { createSlice } from '@reduxjs/toolkit';
import {
  getProductsFromDB,
  getEatenProducts,
  addEatenProduct,
  deleteEatenProduct,
} from 'redux/dailyFood/dailyFoodOperations';

const dailyFoodInitialState = {
  currentDate: new Date().toDateString(),
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
          action.type.startsWith('dailyFood') &&
          action.type.endsWith('pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('dailyFood') &&
          action.type.endsWith('fulfilled'),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('dailyFood') &&
          action.type.endsWith('rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const dailyFoodReducer = dailyFoodSlice.reducer;
