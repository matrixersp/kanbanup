import { combineReducers } from 'redux';
import appReducer, { logout } from 'app/appSlice';
import boardReducer from 'features/board/boardSlice';
import listsReducer from 'features/list/listsSlice';
import cardsReducer from 'features/card/cardsSlice';
import userReducer from 'features/user/userSlice';

const allReducers = combineReducers({
  cards: cardsReducer,
  lists: listsReducer,
  board: boardReducer,
  user: userReducer,
  app: appReducer,
});

export default (state, action) => {
  if (action.type === logout.type) state = undefined;
  return allReducers(state, action);
};
