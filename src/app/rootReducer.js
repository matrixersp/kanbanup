import boardReducer from 'features/board/boardSlice';
import listsReducer from 'features/list/listsSlice';
import cardsReducer from 'features/card/cardsSlice';
import appReducer from 'app/appSlice';

export default {
  cards: cardsReducer,
  lists: listsReducer,
  board: boardReducer,
  app: appReducer
};
