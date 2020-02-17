import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { fetchSuccess } from 'features/board/boardSlice';
import { deleteList } from 'features/list/listsSlice';
import { cardDeleted, cardTitleSaved } from 'features/card/cardsSlice';

const app = createSlice({
  name: 'app',
  initialState: {
    isAddList: false,
    listActions: {},
    cardActions: {},
    listToAddCard: ''
  },
  reducers: {
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
    }
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
    }
  }
});

export const fetchBoard = () => dispatch => {
  axios
    .get('http://localhost:5000/api/boards/5e4a5b0b03b255411374718a')
    .then(res => {
      const { lists, ...board } = { ...res.data };
      const cards = lists.reduce((acc, cur) => acc.concat(cur.cards), []);

      dispatch(
        fetchSuccess({
          board,
          lists: normalizeLists(lists),
          cards: normalizeCards(cards)
        })
      );

      return res.data;
    });
};

function normalizeLists(lists) {
  const listIds = [];
  const listsById = lists.reduce((acc, cur) => {
    const { cards, ...list } = cur;

    const cardIds = cards.map(c => c._id);
    list.cards = cardIds;

    listIds.push(list._id);

    acc[cur._id] = list;
    return acc;
  }, {});
  return { byId: listsById, ids: listIds };
}

function normalizeCards(cards) {
  const cardIds = [];
  const cardsById = cards.reduce((acc, cur) => {
    cardIds.push(cur._id);

    acc[cur._id] = cur;

    return acc;
  }, {});

  return { byId: cardsById, ids: cardIds };
}

export const {
  toggleAddList,
  toggleListActions,
  toggleAddCard,
  toggleCardActions,
  changeCardTitle
} = app.actions;

export default app.reducer;
