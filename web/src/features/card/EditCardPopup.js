import { createRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconWrapper, SecondaryButton, TextArea } from 'components/styled';
import { CancelIcon, DeleteIcon } from 'components/Icons';
import { deleteCard, saveCardTitle } from 'features/card/cardsSlice';
import { changeCardTitle, toggleCardActions } from 'app/appSlice';
import { isNonEmptyObject } from 'helpers/dom';

const OverlayStyled = styled.div`
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.55);
`;

const Container = styled.div`
  position: absolute;
  top: ${(props) => props.offsetTop};
  left: ${(props) => props.offsetLeft};
  visibility: ${(props) => (props.offsetTop ? 'visible' : 'hidden')};
  width: 16rem;
`;

const CardTextArea = styled(TextArea)`
  width: 100%;
  height: 5rem;
  margin-bottom: 0.5rem;
`;

const SaveButton = styled(SecondaryButton)`
  width: fit-content;
  padding: 0.5rem 1rem;
  opacity: 1;
  transition: none;
  :hover {
    background-color: #009fbd;
  }
`;

export default function EditCardPopup() {
  const card = useSelector((state) => state.app.cardActions);

  const dispatch = useDispatch();
  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleClosePopup = (e) => {
    if (e.currentTarget !== e.target) return;
    e.preventDefault();
    dispatch(toggleCardActions());
  };
  const isVisible = useSelector((state) =>
    isNonEmptyObject(state.app.cardActions)
  );

  const { _id, listId, boardId, title, offsetTop, offsetLeft } = card;

  return (
    <OverlayStyled isVisible={isVisible} onClick={handleClosePopup}>
      <IconWrapper
        onClick={handleClosePopup}
        style={{ position: 'absolute', top: '0.4rem', right: '0.6rem' }}
      >
        <CancelIcon style={{ stroke: '#fff' }} />
      </IconWrapper>
      <Container offsetTop={offsetTop} offsetLeft={offsetLeft}>
        <CardTextArea
          ref={inputRef}
          value={title || ''}
          onChange={(e) => dispatch(changeCardTitle(e.target.value))}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <SaveButton onClick={() => dispatch(saveCardTitle(_id, card.title))}>
            Save
          </SaveButton>
          <IconWrapper
            onClick={() => dispatch(deleteCard(_id, listId, boardId))}
          >
            <DeleteIcon />
          </IconWrapper>
        </div>
      </Container>
    </OverlayStyled>
  );
}

EditCardPopup.propTypes = {
  cardActions: PropTypes.object,
};
