import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import rootReducer from 'app/rootReducer';

export function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk))
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}
