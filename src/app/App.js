import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import 'app/App.css';
import Header from 'components/Header';
import BoardHeader from 'features/board/BoardHeader';
import Lists from 'features/list/Lists';
import EditCardPopup from 'features/card/EditCardPopup';
import Overlay from 'components/Overlay';

import { fetchBoard } from 'app/appSlice';
import ListActions from 'features/list/listActions';
import { toggleListActions } from 'app/appSlice';
import { isNonEmptyObject } from 'helpers/dom';

const Root = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background: rgb(0, 174, 204);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 auto;
`;

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoard());
  }, [dispatch]);

  const listActions = useSelector(state => state.app.listActions);
  const clearPopup = () => {
    if (isNonEmptyObject(listActions)) dispatch(toggleListActions());
  };

  return (
    <Root>
      <Header onClick={clearPopup} />
      <Main onClick={clearPopup}>
        <BoardHeader />
        <section
          style={{ position: 'relative', height: '100%', overflowX: 'auto' }}
        >
          <Lists />
        </section>
        <EditCardPopup />
      </Main>
      <Overlay />
      <ListActions />
    </Root>
  );
}
