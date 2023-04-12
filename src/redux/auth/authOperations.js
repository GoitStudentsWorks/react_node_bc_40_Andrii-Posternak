import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUserApi, loginUserApi, logoutUserApi } from 'services/authApi';
import { getCurrentUserApi } from 'services/userApi';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (newUser, thunkAPI) => {
    try {
      return await registerUserApi(newUser);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, thunkAPI) => {
    try {
      return await loginUserApi(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      return await logoutUserApi();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      return await getCurrentUserApi();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
