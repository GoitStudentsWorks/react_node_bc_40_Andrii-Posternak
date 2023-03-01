import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  registerUserApi,
  loginUserApi,
  logoutUserApi,
  getCurrentUserApi,
} from 'services/authApi';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const data = await registerUserApi(newUser);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const data = await loginUserApi(userData);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/loguot',
  async (_, thunkAPI) => {
    try {
      await logoutUserApi();
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const savedToken = state.auth.token;
    setAuthHeader(savedToken);
    if (savedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const data = await getCurrentUserApi();
      return data;
    } catch (error) {
      // setTimeout(() => {
      //   thunkAPI.dispatch(logoutUser());
      // }, 0);
      logoutUser();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
