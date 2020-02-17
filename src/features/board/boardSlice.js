import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const boardSlice = createSlice({
  name: 'board',
  initialState: {},
  reducers: {
    changeBoardTitle(state, { payload }) {
      state.title = payload;
    },
    fetchSuccess(state, { payload }) {
      return payload.board;
    }
  }
});

export const saveBoardTitle = (id, title) => () =>
  axios.put('http://localhost:5000/api/boards/' + id, { title });

export const { changeBoardTitle, fetchSuccess } = boardSlice.actions;
export default boardSlice.reducer;
