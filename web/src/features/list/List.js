import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Cards from 'features/card/Cards';
import { EllipsisIcon } from 'components/Icons';

import { toggleListActions } from 'app/appSlice';
import { listTitleChanged, saveListTitle } from 'features/list/listsSlice';
import { IconWrapper, TextArea } from 'components/styled';
import { getOffsetBottom, getScrollOffsetLeft } from 'helpers/dom';

const Container = styled.div`
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  width: 17.2rem;
  background-color: #f2f2f3;
  border-radius: ${({ theme }) => theme.borderRadius || '.25rem'};
  margin-left: ${({ theme }) => theme.spacerSm || '.5rem'};
  color: #444444;
  min-height: 6rem;
  max-height: 100%;
  padding: 0.3rem 0.2rem 0.3rem 0.5rem;
  cursor: pointer;
`;

const Title = styled(TextArea)`
  font-weight: Bold;
  background: transparent;
  width: 100%;
  min-height: 2rem;
  height: 2rem;
  padding: 0.125rem 0.4rem;
  overflow: hidden;
  cursor: pointer;
`;

const EditList = styled(IconWrapper)`
  margin: 0 0.1rem;
  width: 2rem;
  height: 2rem;
  padding: 0.3rem;
  border-radius: 0.2rem;
  opacity: 0.7;
  svg {
    width: 100%;
    height: 100%;
    fill: #36475b;
  }
  &:hover {
    background: #e0e0e1;
  }
`;

export default function List({ list }) {
  const dispatch = useDispatch();
  const boardId = useSelector((state) => state.board._id);

  const handleToggleListActions = (e) => {
    e.stopPropagation();

    const listActionsWidth = 248;
    const offsetLeft = getScrollOffsetLeft(e.target, listActionsWidth) + 'px';

    const offsetBottom = getOffsetBottom(e.target) + 'px';
    dispatch(
      toggleListActions({ id: list._id, boardId, offsetBottom, offsetLeft })
    );
  };

  const handleTitleChange = (e) => {
    dispatch(listTitleChanged({ id: list._id, title: e.target.value }));
  };

  const handleSaveListTitle = (e) => {
    if ((e.keyCode === 13 || e.type === 'blur') && e.target.value.trim()) {
      saveListTitle(list._id, boardId, e.target.value);
      e.target.blur();
    }
  };

  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <Title
          rows="1"
          value={list.title}
          onChange={handleTitleChange}
          onBlur={handleSaveListTitle}
          onKeyDown={handleSaveListTitle}
        />
        <EditList onClick={handleToggleListActions}>
          <EllipsisIcon />
        </EditList>
      </div>
      <Cards listId={list._id} />
    </Container>
  );
}

List.propTypes = {
  list: PropTypes.object,
};
