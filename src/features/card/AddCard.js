import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { CancelIcon } from 'components/Icons';
import { TextArea, SecondaryButton, IconWrapper } from 'components/styled';
import { toggleAddCard } from 'app/appSlice';
import { addCard } from 'features/card/cardsSlice';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTextArea = styled(TextArea)`
  margin-bottom: 6px;
  width: 100%;
  border: 2px solid #00aecc;
`;

const AddCardButton = styled(SecondaryButton)``;

function NewCard() {
  const boardId = useSelector(state => state.board._id);
  const listId = useSelector(state => state.app.listToAddCard);
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  let [title, setTitle] = useState('');

  const handleAddCard = e => {
    if (
      (e.type === 'click' || (e.keyCode === 13 && e.ctrlKey)) &&
      title.trim()
    ) {
      dispatch(addCard(listId, boardId, title));
      handleToggleAddCard();
    }
  };

  const handleToggleAddCard = () => {
    dispatch(toggleAddCard());
    setTitle('');
  };

  const addCardRef = useRef(null);
  useEffect(() => {
    if (addCardRef.current) {
      const parentEl = addCardRef.current.parentNode;
      parentEl.scrollTo(0, addCardRef.current.offsetTop);
    }
  }, [addCardRef]);

  return (
    <Container ref={addCardRef}>
      <CardTextArea
        ref={inputRef}
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleAddCard}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AddCardButton onClick={handleAddCard}>Add</AddCardButton>
        <IconWrapper onClick={handleToggleAddCard}>
          <CancelIcon style={{ fill: '#00aecc' }} />
        </IconWrapper>
      </div>
    </Container>
  );
}

export default NewCard;
