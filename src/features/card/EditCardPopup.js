import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SecondaryButton, IconWrapper, TextArea } from 'components/styled';
import { DeleteIcon } from 'components/Icons';
import { saveCardTitle, deleteCard } from 'features/card/cardsSlice';
import { changeCardTitle } from 'app/appSlice';

const Container = styled.div`
  position: absolute;
  top: ${props => props.offsetTop};
  left: ${props => props.offsetLeft};
  visibility: ${props => (props.offsetTop ? 'visible' : 'hidden')};
  width: 258px;
  z-index: 3;
`;

const CardTextArea = styled(TextArea)`
  width: 100%;
  height: 76px;
  margin-bottom: 8px;
`;

const SaveButton = styled(SecondaryButton)`
  width: fit-content;
  padding: 8px 18px;
  opacity: 1;
  transition: none;
  :hover {
    background-color: #009fbd;
  }
`;

export default function EditCardPopup() {
  const card = useSelector(state => state.app.cardActions);

  const dispatch = useDispatch();
  const inputRef = React.createRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const { _id, listId, title, offsetTop, offsetLeft } = card;

  return (
    <Container offsetTop={offsetTop} offsetLeft={offsetLeft}>
      <CardTextArea
        ref={inputRef}
        value={title || ''}
        onChange={e => dispatch(changeCardTitle(e.target.value))}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <SaveButton onClick={() => dispatch(saveCardTitle(_id, card.title))}>
          Save
        </SaveButton>
        <IconWrapper onClick={() => dispatch(deleteCard(_id, listId))}>
          <DeleteIcon />
        </IconWrapper>
      </div>
    </Container>
  );
}

EditCardPopup.propTypes = {
  cardActions: PropTypes.object
};
