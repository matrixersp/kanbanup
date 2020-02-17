import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

import Card from 'features/card/Card';
import AddCard from 'features/card/AddCard';
import { AddIcon } from 'components/Icons';
import { toggleAddCard } from 'app/appSlice';
import { TertiaryButton } from 'components/styled';

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px;
  min-height: 10px;
`;

const AddCardButton = styled(TertiaryButton)`
  margin-top: 3px;
  width: 100%;
  overflow: hidden;
  color: #36475b;
  margin-right: 8px;
  opacity: 0.7;
  &:hover {
    background: #e0e0e1;
    opacity: 1;
  }
`;

export default function Cards({ listId }) {
  const dispatch = useDispatch();
  const cards = useSelector(state => {
    const cardIds = state.lists.byId[listId].cards;
    return cardIds.map(id => state.cards.byId[id]);
  });

  const renderCards = () => {
    return cards.map((card, index) => {
      return card && <Card key={card._id} card={card} index={index} />;
    });
  };

  const listToAddCard = useSelector(state => state.app.listToAddCard);

  let isAddCard = false;
  if (listToAddCard && listToAddCard === listId) isAddCard = true;

  return (
    <>
      <Droppable key={listId} droppableId={listId}>
        {provided => (
          <CardsWrapper ref={provided.innerRef} {...provided.droppableProps}>
            {renderCards()}
            {isAddCard && <AddCard />}
            {provided.placeholder}
          </CardsWrapper>
        )}
      </Droppable>
      <div style={{ paddingRight: '8px' }}>
        {!isAddCard && (
          <AddCardButton onClick={() => dispatch(toggleAddCard(listId))}>
            <AddIcon width="18" height="18" style={{ fill: '#36475b' }} />
            {cards.length > 0 ? 'Add another card' : 'Add a card'}
          </AddCardButton>
        )}
      </div>
    </>
  );
}

Cards.propTypes = {
  listId: PropTypes.string
};
