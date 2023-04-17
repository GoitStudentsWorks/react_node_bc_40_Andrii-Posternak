import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  getCurrentUser,
} from 'redux/auth/authOperations';

const authInitialState = {
  isAuthStatus: false,
  user: {
    name: '',
    email: '',
  },
  idToken: null,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    resetIsRefreshing(state, _) {
      state.isFetchingCurrentUser = false;
    },
    resetToken(state, _) {
      console.log('slice');
      state.idToken = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isAuthStatus = true;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.idToken = payload.token;
        state.isLoading = false;
      })
      .addCase(logoutUser.fulfilled, (state, _) => {
        return { ...authInitialState, isFetchingCurrentUser: false };
      })
      .addCase(getCurrentUser.pending, (state, { payload }) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.isAuthStatus = true;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoading = false;
        state.isFetchingCurrentUser = false;
      })
      .addMatcher(
        ({ type }) => {
          return type.endsWith('pending') && type.startsWith('auth');
        },
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        ({ type }) => {
          return type.endsWith('fulfilled') && type.startsWith('auth');
        },
        state => {
          state.isLoading = false;
          state.error = null;
          state.isFetchingCurrentUser = false;
        }
      )
      .addMatcher(
        ({ type }) => {
          return type.endsWith('rejected') && type.startsWith('auth');
        },
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
          state.isFetchingCurrentUser = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;

export const selectAuthStatus = state => state.auth.isAuthStatus;
export const selectFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;

export const { resetToken } = authSlice.actions;
