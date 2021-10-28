import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBoardPopup from 'features/board/AddBoardPopup';
import { fetchCurrentUser } from 'features/user/userSlice';

export default function Boards() {
  const boards = useSelector(state => state.user.boards);
  const dispatch = useDispatch();
  const isAddBoard = useSelector(state => state.user.boards > 0);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <div>
        {boards &&
          boards.map(b => (
            <a key={b._id} href={`/boards/${b._id}`}>
              {b.title}
            </a>
          ))}
      </div>
      <AddBoardPopup isAddBoard={isAddBoard} />
    </>
  );
}
