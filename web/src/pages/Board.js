import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import BoardHeader from 'features/board/BoardHeader';
import Lists from 'features/list/Lists';
import EditCardPopup from 'features/card/EditCardPopup';
import ListActions from 'features/list/listActions';
import { toggleListActions } from 'app/appSlice';
import { isNonEmptyObject } from 'helpers/dom';
import { fetchBoard } from 'features/board/boardSlice';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 auto;
`;

export default function Home() {
  const dispatch = useDispatch();
  const listActions = useSelector((state) => state.app.listActions);
  const clearPopup = () => {
    if (isNonEmptyObject(listActions)) dispatch(toggleListActions());
  };

  const isLoading = useSelector((state) => state.user.isLoading);
  const params = useParams();

  useEffect(() => {
    const id = params.id;
    dispatch(fetchBoard(id));
  }, [dispatch, params.id]);

  return (
    <>
      {isLoading ? (
        <p>Loading Board...</p>
      ) : (
        <>
          <Main onClick={clearPopup}>
            <BoardHeader />
            <section
              style={{
                position: 'relative',
                height: '100%',
                overflowX: 'auto',
              }}
            >
              <Lists />
            </section>
            <EditCardPopup />
          </Main>
          <ListActions />
        </>
      )}
    </>
  );
}
