import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';

import { TertiaryButton } from 'components/styled';
import AddList from 'features/list/AddList';
import List from 'features/list/List';
import { AddIcon } from 'components/Icons';
import { toggleAddList } from 'app/appSlice';
import { moveCard } from 'features/list/listsSlice';

const ListsWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 0.125rem;
  padding-right: 0.125rem;
  display: flex;
  align-items: flex-start;
  flex: 1 1 auto;
  padding-bottom: 2.125rem;
`;

const AddListButton = styled(TertiaryButton)`
  width: 17.2rem;
  margin: 0 0.5rem;
  padding: 0.55rem;
`;

export default function Lists() {
  const dispatch = useDispatch();

  const lists = useSelector((state) =>
    state.lists.ids.map((id) => state.lists.byId[id])
  );

  const isAddList = useSelector((state) => state.app.isAddList);

  const handleDragEnd = (result) => {
    const { draggableId, source, destination } = result;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    dispatch(moveCard(draggableId, source, destination));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <ListsWrapper>
        {lists.map((list) => (
          <List key={list._id} list={list} />
        ))}
        {isAddList ? (
          <AddList />
        ) : (
          <AddListButton onClick={() => dispatch(toggleAddList())}>
            <AddIcon style={{ marginRight: '0.35rem' }} />
            {lists.length > 0 ? 'Add another list' : 'Add a list'}
          </AddListButton>
        )}
      </ListsWrapper>
    </DragDropContext>
  );
}
