import { createAsyncThunk } from '@reduxjs/toolkit';

import { loginUserApi, logoutUserApi } from 'services/authApi';
import { setToken, unsetToken } from 'services/axiosConfig';
import { getCurrentUserApi } from 'services/userApi';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, thunkAPI) => {
    try {
      const response = await loginUserApi(userData);
      setToken(response.token);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      const idToken = thunkAPI.getState().auth.idToken;
      if (!idToken) {
        return thunkAPI.rejectWithValue("User doesn't exist");
      }

      await logoutUserApi();
      unsetToken(idToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const idToken = thunkAPI.getState().auth.idToken;
      if (!idToken) {
        return thunkAPI.rejectWithValue("User doesn't exist");
      }
      setToken(idToken);
      const response = await getCurrentUserApi();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
