import { createSlice } from '@reduxjs/toolkit';
import { deleteList } from 'features/list/listsSlice';
import { cardDeleted, cardTitleSaved } from 'features/card/cardsSlice';

const app = createSlice({
  name: 'app',
  initialState: {
    isAddBoard: false,
    isAddList: false,
    listActions: {},
    cardActions: {},
    listToAddCard: '',
  },
  reducers: {
    toggleAddBoard(state) {
      state.isAddBoard = !state.isAddBoard;
    },
    toggleAddList(state) {
      state.listActions = {};
      state.isAddList = !state.isAddList;
    },
    toggleListActions(state, { payload }) {
      state.listActions = payload || {};
    },
    toggleAddCard(state, { payload }) {
      state.listToAddCard = payload || '';
    },
    toggleCardActions(state, { payload }) {
      state.cardActions = payload || {};
    },
    changeCardTitle(state, { payload }) {
      state.cardActions.title = payload;
    },
    logout() {
      return;
    },
  },
  extraReducers: {
    addList(state) {
      state.isAddList = false;
    },
    [deleteList](state) {
      state.listActions = {};
    },
    [cardDeleted](state) {
      state.cardActions = {};
    },
    [cardTitleSaved](state) {
      state.cardActions = {};
    },
  },
});

export const {
  toggleAddBoard,
  toggleAddList,
  toggleListActions,
  toggleAddCard,
  toggleCardActions,
  changeCardTitle,
  closePopups,
  logout,
} = app.actions;

export default app.reducer;
