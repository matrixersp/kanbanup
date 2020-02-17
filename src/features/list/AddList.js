import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { TextArea, SecondaryButton, IconWrapper } from 'components/styled';
import { CancelIcon } from 'components/Icons';
import { toggleAddList } from 'app/appSlice';
import { addList } from 'features/list/listsSlice';

const Title = styled(TextArea)`
  font-weight: Bold;
  width: 100%;
  min-height: 34px;
  height: 34px;
  overflow: hidden;
  border: 2px solid #00aecc;
  background: #fff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 272px;
  background-color: #f1f4f3;
  border-radius: 3px;
  margin-left: 10px;
  color: #444444;
  border: 1px solid #f5f5f5;
  max-height: 100%;
  padding: 4px;
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
        onKeyPress={e => {
          if (e.keyCode !== 13 || !e.target.value.trim()) return;
          handleAddList();
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SecondaryButton onClick={handleAddList}>Add</SecondaryButton>
        <IconWrapper onClick={handleToggleAddList}>
          <CancelIcon style={{ fill: '#00aecc' }} />
        </IconWrapper>
      </div>
    </Container>
  );
}

export default NewList;
