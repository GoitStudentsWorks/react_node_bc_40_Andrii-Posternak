import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from 'redux/auth/authSlice';
import { dailyCalorieReducer } from 'redux/dailyCalorie/dailyCalorieSlice';
import { dailyFoodReducer } from 'redux/dailyFood/dailyFoodSlice';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['idToken'],
};

export const store = configureStore({
  reducer: {
    dailyCalorie: dailyCalorieReducer,
    dailyFood: dailyFoodReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
