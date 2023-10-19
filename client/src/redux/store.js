import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});