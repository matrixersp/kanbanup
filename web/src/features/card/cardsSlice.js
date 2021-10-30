import axios from 'axios';
import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import { fetchBoardSuccess, fetchSuccess } from 'features/board/boardSlice';
import { BASE_URL } from 'helpers/constants';

const cardsById = createSlice({
  name: 'cardsById',
  initialState: {},
  reducers: {
    cardAdded(state, { payload }) {
      state[payload._id] = payload;
    },
    cardTitleSaved(state, { payload }) {
      state[payload.id].title = payload.title;
    },
    cardDeleted(state, { payload }) {
      delete state[payload._id];
    },
  },
  extraReducers: {
    [fetchBoardSuccess](state, { payload }) {
      return payload.cards.byId;
    },
    [fetchSuccess](state, { payload }) {
      return payload.cards.byId;
    },
  },
});

export const { cardDeleted, cardAdded, cardTitleSaved } = cardsById.actions;

const cardIds = createSlice({
  name: 'cardIds',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchBoardSuccess](state, { payload }) {
      return payload.cards.ids;
    },
    [fetchSuccess](state, { payload }) {
      return payload.cards.ids;
    },
    [cardAdded](state, { payload }) {
      state.push(payload._id);
    },
    [cardDeleted](state, { payload }) {
      const index = state.findIndex((id) => id === payload.id);
      state.splice(index, 1);
    },
  },
});

export const saveCardTitle = (id, title) => (dispatch) => {
  axios.patch(`${BASE_URL}/cards/${id}`, { title }).then((res) => {
    dispatch(cardTitleSaved({ id, title: res.data.title }));
  });
};

export const addCard = (listId, boardId, title) => (dispatch) => {
  axios.post(`${BASE_URL}/cards`, { listId, boardId, title }).then((res) => {
    dispatch(cardAdded(res.data));
  });
};

export const deleteCard = (id, listId, boardId) => (dispatch) => {
  axios
    .delete(`${BASE_URL}/cards/${id}`, { data: { listId, boardId } })
    .then(() => {
      dispatch(cardDeleted({ id, listId }));
    })
    .catch((err) => console.log(err.reponse));
};

export default combineReducers({
  byId: cardsById.reducer,
  ids: cardIds.reducer,
});
