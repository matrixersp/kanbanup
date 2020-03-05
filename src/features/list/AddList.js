import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { TextArea, SecondaryButton, IconWrapper } from 'components/styled';
import { CancelIcon } from 'components/Icons';
import { toggleAddList } from 'app/appSlice';
import { addList } from 'features/list/listsSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 17.2rem;
  background-color: #f1f4f3;
  border-radius: 0.188rem;
  margin: 0 0.5rem;
  color: #444444;
  border: 0.063rem solid #f5f5f5;
  padding: 0.25rem;
`;

const Title = styled(TextArea)`
  font-weight: Bold;
  width: 100%;
  min-height: 2rem;
  height: 2rem;
  padding: 0.125rem 0.4rem;
  overflow: hidden;
  border: 0.125rem solid #00aecc;
  background: #fff;
`;

const AddListButton = styled(SecondaryButton)`
  margin-right: 1rem;
`;

function NewList() {
  const boardId = useSelector(state => state.board._id);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const handleAddList = () => {
    dispatch(addList(boardId, title));
    handleToggleAddList();
  };

  const handleToggleAddList = () => {
    dispatch(toggleAddList());
    setTitle('');
  };

  return (
    <Container style={{ display: 'flex' }}>
      <Title
        rows="1"
        value={title}
        ref={inputRef}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => {
          if (e.keyCode !== 13 || !e.target.value.trim()) return;
          handleAddList();
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AddListButton onClick={handleAddList}>Add</AddListButton>
        <IconWrapper onClick={handleToggleAddList}>
          <CancelIcon style={{ fill: '#00aecc' }} />
        </IconWrapper>
      </div>
    </Container>
  );
}

export default NewList;
