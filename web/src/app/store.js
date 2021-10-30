import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import rootReducer from 'app/rootReducer';

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [...getDefaultMiddleware(), logger]
    : getDefaultMiddleware();

const preloadedState = {
  user: {
    isLoading: false,
    error: null,
    token: localStorage.getItem('TOKEN'),
    currentBoard: localStorage.getItem('CURRENT_BOARD'),
  },
};

const store = configureStore({
  preloadedState,
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware,
});

store.subscribe(() => {
  const { token, currentBoard } = store.getState().user;

  if (token) {
    localStorage.setItem('TOKEN', token);
  }
  if (currentBoard) {
    localStorage.setItem('CURRENT_BOARD', currentBoard);
  }
});

export default store;
