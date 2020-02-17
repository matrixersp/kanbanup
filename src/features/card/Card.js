import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import { IconWrapper } from 'components/styled';
import { EditIcon } from 'components/Icons.js';

import { toggleCardActions } from 'app/appSlice';
import { getScrollOffsetTop } from 'helpers/dom';

const Container = styled.div`
  user-select: none;
  position: relative;
  background-color: #fff;
  color: #36475b;
  padding: 6px 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 2px #dedede;
  list-style: none;
  cursor: pointer;
  &:hover {
    background-color: #f7f8f8;
  }
  &:hover i {
    visibility: visible;
    opacity: 0.75;
  }
  & i:hover {
    opacity: 1;
  }
`;

const EditCard = styled(IconWrapper)`
  position: absolute;
  top: 4px;
  right: 4px;
  visibility: hidden;
  z-index: 3;
  svg {
    background: rgba(0, 174, 204, 0.9);
  }
  &:hover svg {
    background: rgba(0, 174, 204, 1);
  }
`;

export default function Card({ card, index }) {
  const dispatch = useDispatch();
  const cardRef = React.createRef();

  const handleToggleCardActions = e => {
    const cardPopupHeight = 128;
    const offsetTop = getScrollOffsetTop(e.target, cardPopupHeight) + 'px';
    const offsetLeft = cardRef.current.offsetLeft + 'px';
    dispatch(toggleCardActions({ ...card, offsetTop, offsetLeft }));
  };

  return (
    <Draggable draggableId={card._id} index={index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Container ref={cardRef}>
            <span>{card.title}</span>
            <EditCard onClick={handleToggleCardActions}>
              <EditIcon />
            </EditCard>
          </Container>
        </div>
      )}
    </Draggable>
  );
}

Card.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number
};
