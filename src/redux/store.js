import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import userReducer from './user/userReducer';
import mealsReducer from './meals/mealsReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const userPersistConfig = {
  key: 'userInfo',
  storage,
  whitelist: ['token', 'publicUser'],
};

const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    meals: mealsReducer,
  },
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const exportStore = { store, persistor };

export default exportStore;
