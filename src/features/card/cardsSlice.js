import axios from 'axios';
import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import { fetchSuccess } from 'features/board/boardSlice';

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
    }
  },
  extraReducers: {
    [fetchSuccess](state, { payload }) {
      return payload.cards.byId;
    }
  }
});

export const { cardDeleted, cardAdded, cardTitleSaved } = cardsById.actions;

const cardIds = createSlice({
  name: 'cardIds',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchSuccess](state, { payload }) {
      return payload.cards.ids;
    },
    [cardAdded](state, { payload }) {
      state.push(payload._id);
    },
    [cardDeleted](state, { payload }) {
      const index = state.findIndex(id => id === payload.id);
      state.splice(index, 1);
    }
  }
});

export const saveCardTitle = (id, title) => dispatch => {
  axios
    .put('http://localhost:5000/api/cards/' + id, { title })
    .then((res, err) => {
      console.log(res.data, err);
      dispatch(cardTitleSaved({ id, title: res.data.title }));
    });
};

export const addCard = (listId, boardId, title) => dispatch => {
  axios
    .post('http://localhost:5000/api/cards/', { listId, boardId, title })
    .then(res => {
      dispatch(cardAdded({ ...res.data }));
    });
};

export const deleteCard = (id, listId) => dispatch => {
  axios.delete('http://localhost:5000/api/cards/' + id).then(() => {
    dispatch(cardDeleted({ id, listId }));
  });
};

export default combineReducers({
  byId: cardsById.reducer,
  ids: cardIds.reducer
});
