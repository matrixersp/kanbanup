import axios from 'axios';
import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

import { fetchSuccess } from 'features/board/boardSlice';
import { cardAdded, cardDeleted } from 'features/card/cardsSlice';

const listsById = createSlice({
  name: 'listsById',
  initialState: {},
  reducers: {
    listTitleChanged(state, { payload }) {
      state[payload.id].title = payload.title;
    },
    listAdded(state, { payload }) {
      state[payload._id] = payload;
    },
    listDeleted(state, { payload }) {
      delete state[payload];
    },
    cardMoved(state, { payload }) {
      const { draggableId, source, destination } = payload;
      state[source.droppableId].cards.splice(source.index, 1);
      state[destination.droppableId].cards.splice(
        destination.index,
        0,
        draggableId
      );
    }
  },
  extraReducers: {
    [fetchSuccess](state, { payload }) {
      return payload.lists.byId;
    },
    [cardAdded](state, { payload }) {
      state[payload.listId].cards.push(payload._id);
    },
    [cardDeleted](state, { payload }) {
      const index = state[payload.listId].cards.findIndex(
        id => id === payload.id
      );
      state[payload.listId].cards.splice(index, 1);
    }
  }
});

export const {
  listTitleChanged,
  listAdded,
  listDeleted,
  cardMoved
} = listsById.actions;

const listIds = createSlice({
  name: 'listIds',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchSuccess](state, { payload }) {
      return payload.lists.ids;
    },
    [listAdded](state, { payload }) {
      state.push(payload._id);
    },
    [listDeleted](state, { payload }) {
      const index = state.findIndex(id => id === payload);
      state.splice(index, 1);
    }
  }
});

export const saveListTitle = (id, boardId, title) =>
  axios.put('http://localhost:5000/api/lists/' + id, { boardId, title });

export const addList = (boardId, title) => dispatch => {
  axios
    .post('http://localhost:5000/api/lists/', { boardId, title })
    .then(res => dispatch(listAdded(res.data)));
};

export const deleteList = (id, boardId) => dispatch => {
  axios
    .delete('http://localhost:5000/api/lists/' + id, { data: { boardId } })
    .then(() => dispatch(listDeleted(id)))
    .catch(err => console.log(err));
};

export const moveCard = (draggableId, source, destination) => dispatch => {
  dispatch(cardMoved({ draggableId, source, destination }));
  axios.put('http://localhost:5000/api/cards/' + draggableId, {
    source: { listId: source.droppableId, index: source.index },
    destination: { listId: destination.droppableId, index: source.index }
  });
};

export default combineReducers({
  byId: listsById.reducer,
  ids: listIds.reducer
});
