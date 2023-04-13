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
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
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
        state = authInitialState;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.isAuthStatus = true;
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoading = false;
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
          return type.endsWith('rejected') && type.startsWith('auth');
        },
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
  reducers: {
    deleteUserInfro(state, action) {
      state.isAuthStatus = false;
      state.idToken = null;
      state.user = {
        name: '',
        email: '',
      };
    }
  },
});

export const authReducer = authSlice.reducer;
export const { deleteUserInfro } = authSlice.actions;
