import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchSuccess } from 'features/board/boardSlice';
import { BASE_URL } from 'helpers/constants';
import history from 'helpers/history';

const user = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    signUpStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    signUpSuccess(state, { payload }) {
      return { ...state, isLoading: false, ...payload };
    },
    signUpError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    signInStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    signInSuccess(state, { payload }) {
      return { ...state, isLoading: false, ...payload };
    },
    signInError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    fetchCurrentUserStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchCurrentUserSuccess(state, { payload }) {
      return { ...state, isLoading: false, ...payload };
    },
    fetchCurrentUserError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    }
  },
  extraReducers: {
    [fetchSuccess](state, { payload }) {
      return { ...state, isLoading: false, ...payload.user };
    }
  }
});

export const {
  signUpStart,
  signUpSuccess,
  signUpError,
  signInStart,
  signInSuccess,
  signInError,
  fetchCurrentUserStart,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
  logout
} = user.actions;

export const signUp = data => dispatch => {
  dispatch(signUpStart());
  axios
    .post(`${BASE_URL}/users`, {
      ...data
    })
    .then(res => {
      dispatch(
        signUpSuccess({
          token: res.headers['x-auth-token'],
          ...res.data
        })
      );
      history.push(`/boards`);
    })
    .catch(err => dispatch(signUpError(err)));
};

export const signin = data => dispatch => {
  dispatch(signInStart());
  axios
    .post(`${BASE_URL}/auth`, {
      ...data
    })
    .then(res => {
      const user = res.data;
      user.token = res.headers['x-auth-token'];

      if (!user.currentBoard) {
        dispatch(signUpSuccess(user));
        history.push(`/boards`);
      } else {
        dispatch(signInSuccess(user));

        const boardId = user.currentBoard;
        history.push(`/boards/${boardId}`);
      }
    });
};

export const fetchCurrentUser = () => dispatch => {
  dispatch(fetchCurrentUserStart());
  axios
    .get(`${BASE_URL}/users/current`)
    .then(res => {
      const user = res.data;

      return dispatch(fetchCurrentUserSuccess(user));
    })
    .catch(err => dispatch(fetchCurrentUserError(err.response.data)));
};

export default user.reducer;
