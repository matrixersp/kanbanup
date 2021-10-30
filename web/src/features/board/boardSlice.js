import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from 'helpers/constants';
import { normalizeCards, normalizeLists } from 'helpers/normalizer';
import history from 'helpers/history';

const boardSlice = createSlice({
  name: 'board',
  initialState: {},
  reducers: {
    addBoardStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    addBoardSucess(state, { payload }) {
      return { ...state, isLoading: false, ...payload };
    },
    addBoardError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    changeBoardTitle(state, { payload }) {
      state.title = payload;
    },
    fetchBoardStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchBoardSuccess(state, { payload }) {
      return { ...state, isLoading: false, ...payload.board };
    },
    fetchBoardError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    fetchSuccess(state, { payload }) {
      return payload.board;
    },
  },
});

export const {
  addBoardStart,
  addBoardSucess,
  addBoardError,
  changeBoardTitle,
  fetchBoardStart,
  fetchBoardSuccess,
  fetchBoardError,
  fetchSuccess,
} = boardSlice.actions;

export const addBoard = (title) => (dispatch) => {
  dispatch(addBoardStart());
  axios
    .post(`${BASE_URL}/boards`, { title })
    .then((res) => {
      dispatch(addBoardSucess(res.data));
      const id = res.data._id;
      history.push({ pathname: `/boards/${id}`, state: { id } });
    })
    .catch((err) => dispatch(addBoardError(err.response.data)));
};

export const saveBoardTitle = (id, title) => () =>
  axios.patch(`${BASE_URL}/boards/${id}`, { title });

export const fetchBoard = (id) => (dispatch) => {
  dispatch(fetchBoardStart());
  axios
    .get(`${BASE_URL}/boards/${id}`)
    .then((res) => {
      const { lists, ...board } = res.data;
      const cards = lists.reduce((acc, cur) => acc.concat(cur.cards), []);

      dispatch(
        fetchBoardSuccess({
          board,
          lists: normalizeLists(lists),
          cards: normalizeCards(cards),
        })
      );

      return res.data;
    })
    .catch((err) => {
      dispatch(fetchBoardStart(err.response.data));
      history.push({ state: '404' });
    });
};

export const fetchBoards = () => (dispatch) => {
  //dispatch(fetchBoardsStart());
  axios
    .get(`${BASE_URL}/boards/`)
    .then((res) => {
      const { ...board } = res.data;

      dispatch(
        fetchBoardSuccess({
          board,
        })
      );

      return res.data;
    })
    .catch((err) => {
      dispatch(fetchBoardStart(err.response.data));
      history.push('/404');
    });
};

export default boardSlice.reducer;
