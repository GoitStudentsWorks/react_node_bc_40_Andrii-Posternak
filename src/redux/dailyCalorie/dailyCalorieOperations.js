import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCalorieAuthApi, getCalorieApi } from 'services/dailyCalorieApi';

export const getCalorieAuth = createAsyncThunk(
  'calorie/getCalorieAuth',
  async (calcParams, thunkAPI) => {
    try {
      const result = await getCalorieAuthApi(calcParams);
      console.log('result  getCalorieAuth :', result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCalorie = createAsyncThunk(
  'calorie/getCalorie',
  async (calcParams, thunkAPI) => {
    try {
      const result = await getCalorieApi(calcParams);
      console.log('result  getCalorie :', result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
