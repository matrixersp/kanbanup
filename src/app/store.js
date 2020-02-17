import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import rootReducer from 'app/rootReducer';

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [...getDefaultMiddleware(), logger]
    : getDefaultMiddleware();

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware
});

export default store;
