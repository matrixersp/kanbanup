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
  padding-right: 0.25rem;
  min-height: 0.8rem;
`;

const AddCardButton = styled(TertiaryButton)`
  margin-top: 0.25rem;
  width: 100%;
  overflow: hidden;
  color: #36475b;
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
      <div style={{ paddingRight: '.5rem' }}>
        {!isAddCard && (
          <AddCardButton onClick={() => dispatch(toggleAddCard(listId))}>
            <AddIcon
              style={{
                fill: '#364756',
                marginRight: '0.35rem'
              }}
            />
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
