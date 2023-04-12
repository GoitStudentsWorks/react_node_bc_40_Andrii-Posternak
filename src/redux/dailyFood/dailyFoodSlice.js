import { createSlice } from '@reduxjs/toolkit';
import {
  getProductsFromDB,
  getEatenProducts,
  addEatenProduct,
  deleteEatenProduct,
} from 'redux/products/dailyFoodOperations';

const dailyFoodInitialState = {
  currentDate: new Date().toDateString(),
  serchedProduct: [],
  eatenProduct: [],
  isLoading: false,
  error: null,
};

const dailyFoodSlice = createSlice({
  name: 'dailyFood',
  initialState: dailyFoodInitialState,
  extraReducers: builder => {
    builder
      .addCase(getProductsFromDB.fulfilled, (state, action) => {})
      .addCase(getEatenProducts.fulfilled, (state, action) => {})
      .addCase(addEatenProduct.fulfilled, (state, action) => {})
      .addCase(deleteEatenProduct.fulfilled, (state, action) => {});
  },
});

export const dailyFoodReducer = dailyFoodSlice.reducer;
