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
  position: relative;
  background-color: #fff;
  color: ${({ theme }) => theme.primaryTextColor || '#36475b'};
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.125rem #dedede;
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

const Title = styled.span`
  vertical-align: middle;
  line-height: 1.4;
`;

const EditCard = styled(IconWrapper)`
  position: absolute;
  top: 0.15rem;
  right: 0.18rem;
  visibility: hidden;
  z-index: 3;
  svg {
    border-radius: 0.2rem;
    background: rgba(0, 174, 204, 0.3);
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
            <Title>{card.title}</Title>
            <EditCard onClick={handleToggleCardActions}>
              <EditIcon
                style={{
                  background: 'none',
                  fontSize: '0.5rem',
                  width: '1.2rem'
                }}
              />
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
