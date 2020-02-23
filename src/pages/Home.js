import React, { dispatch } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BoardHeader from 'features/board/BoardHeader';
import Lists from 'features/list/Lists';
import EditCardPopup from 'features/card/EditCardPopup';
import Overlay from 'components/Overlay';
import ListActions from 'features/list/listActions';
import { toggleListActions } from 'app/appSlice';
import { isNonEmptyObject } from 'helpers/dom';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 auto;
`;

export default function Home() {
  const listActions = useSelector(state => state.app.listActions);
  const clearPopup = () => {
    if (isNonEmptyObject(listActions)) dispatch(toggleListActions());
  };
  return (
    <>
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
    </>
  );
}
