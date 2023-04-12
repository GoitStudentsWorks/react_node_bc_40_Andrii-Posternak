import { createSlice } from '@reduxjs/toolkit';
import {
  getCalorieAuth,
  getCalorie,
} from 'redux/dailyCalorie/dailyCalorieOperations';

const calorieInitialState = {
  userId: null,
  calorieNorm: null,
  notRecFood: [],
  isModalOpen: false,
  isLoading: false,
  error: null,
};

const dailyCalorieSlice = createSlice({
  name: 'dailyCalorie',
  initialState: calorieInitialState,
  extraReducers: builder => {
    builder
      .addCase(getCalorieAuth.fulfilled, (state, action) => {})
      .addCase(getCalorie.fulfilled, (state, action) => {});
  },
});

export const dailyCalorieReducer = dailyCalorieSlice.reducer;
