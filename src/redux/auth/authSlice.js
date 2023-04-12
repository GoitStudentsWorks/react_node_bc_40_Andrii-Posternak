import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from 'redux/auth/authOperations';

const authInitialState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {})
      .addCase(loginUser.fulfilled, (state, action) => {})
      .addCase(logoutUser.fulfilled, (state, action) => {})
      .addCase(getCurrentUser.fulfilled, (state, action) => {});
  },
});

export const authReducer = authSlice.reducer;
