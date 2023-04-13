import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUser,
  loginUser,
  logoutUser,
} from 'redux/auth/authOperations';

const calorieInitialState = {
  calorieNorm: null,
  notRecFood: [],
  isLoading: false,
  error: null,
};

const dailyCalorieSlice = createSlice({
  name: 'dailyCalorie',
  initialState: calorieInitialState,
  extraReducers: builder => {
    builder

      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.calorieNorm = action.payload.dailyRate;
        state.notRecFood = action.payload.notRecFood;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.calorieNorm = action.payload.user.dailyRate;
        state.notRecFood = action.payload.user.notRecFood;
      })
      .addCase(logoutUser.fulfilled, (state, _) => {
        state = calorieInitialState;
      })
      .addMatcher(
        ({ type }) => {
          return type.endsWith('pending') && type.startsWith('calorie');
        },
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        ({ type }) => {
          return type.endsWith('fulfilled') && type.startsWith('calorie');
        },
        (state, action) => {
          state.calorieNorm = action.payload.dailyRate;
          state.notRecFood = action.payload.notRecFood;
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        ({ type }) => {
          return type.endsWith('rejected') && type.startsWith('calorie');
        },
        (state, action) => {
          state.isLoading = false;

          state.error = action.payload;
        }
      );
  },
});

export const dailyCalorieReducer = dailyCalorieSlice.reducer;
export const selectCalorieNorm = state => state.dailyCalorie.calorieNorm;
export const selectNotRecFood = state => state.dailyCalorie.notRecFood;
export const selectIsLoadingCalorie = state => state.dailyCalorie.isLoading;
