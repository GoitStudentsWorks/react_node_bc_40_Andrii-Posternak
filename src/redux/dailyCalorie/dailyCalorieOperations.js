import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCalorieAuthApi, getCalorieApi } from 'services/dailyCalorieApi';

export const getCalorieAuth = createAsyncThunk(
  'calorie/getCalorieAuth',
  async (calcParams, thunkAPI) => {
    try {
      return await getCalorieAuthApi(calcParams);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCalorie = createAsyncThunk(
  'calorie/getCalorie',
  async (calcParams, thunkAPI) => {
    try {
      return await getCalorieApi(calcParams);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
