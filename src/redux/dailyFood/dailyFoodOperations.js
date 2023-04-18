import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProductsFromDBApi,
  getEatenProductsApi,
  addEatenProductApi,
  deleteEatenProductApi,
} from 'services/dailyFoodApi';

export const getProductsFromDB = createAsyncThunk(
  'products/getFromDB',
  async (productName, thunkAPI) => {
    try {
      return await getProductsFromDBApi(productName);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getEatenProducts = createAsyncThunk(
  'products/getEatenProducts',
  async (date, thunkAPI) => {
    try {
      return await getEatenProductsApi(date);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addEatenProduct = createAsyncThunk(
  'products/addProduct',
  async (newProduct, thunkAPI) => {
    try {
      return await addEatenProductApi(newProduct);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteEatenProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, thunkAPI) => {
    try {
      await deleteEatenProductApi(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
