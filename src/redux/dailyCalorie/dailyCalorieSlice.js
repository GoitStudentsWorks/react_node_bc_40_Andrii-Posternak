import { createSlice } from '@reduxjs/toolkit';
import {
  getCalorieAuth,
  // getCalorie,
} from 'redux/dailyCalorie/dailyCalorieOperations';

const calorieInitialState = {
  userId: null,
  calorieNorm: null,
  notRecFood: [],
  // isModalOpen: false,
  isLoading: false,
  error: null,
};

const dailyCalorieSlice = createSlice({
  name: 'dailyCalorie',
  initialState: calorieInitialState,
  extraReducers: builder => {
    builder
      .addCase(getCalorieAuth.fulfilled, (state, action) => {
        state.userId = action.payload._id;
      })
      // .addCase(getCalorie.fulfilled, (state, action) => {})
      //  розкрити секрет подвійного карента вкінці і рефреша
      // операція при логіні записує! фулфілд  кейс
      //  операція при гет карент записує!  фулфілд  кейс
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
