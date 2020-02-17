import React from 'react';
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
  width: 272px;
  background-color: #f2f2f3;
  border-radius: 4px;
  margin-left: 8px;
  color: #444444;
  min-height: 65px;
  max-height: 100%;
  padding: 6px 4px 6px 8px;
  cursor: pointer;
`;

const Title = styled(TextArea)`
  font-weight: Bold;
  background: transparent;
  width: 100%;
  min-height: 34px;
  height: 34px;
  overflow: hidden;
  cursor: pointer;
`;

const EditList = styled(IconWrapper)`
  margin-left: 4px;
  margin-bottom: 6px;
  svg {
    fill: rgba(54, 71, 91, 0.7);
    padding: 6px;
  }
  &:hover svg {
    background: rgba(32, 33, 36, 0.16);
    background: rgba(54, 71, 91, 0.2);
  }
`;

export default function List({ list }) {
  const dispatch = useDispatch();
  const boardId = useSelector(state => state.board._id);

  const handleToggleListActions = e => {
    e.stopPropagation();

    const listActionsWidth = 248;
    const offsetLeft = getScrollOffsetLeft(e.target, listActionsWidth) + 'px';

    const offsetBottom = getOffsetBottom(e.target) + 'px';
    dispatch(
      toggleListActions({ id: list._id, boardId, offsetBottom, offsetLeft })
    );
  };

  const handleTitleChange = e => {
    dispatch(listTitleChanged({ id: list._id, title: e.target.value }));
  };

  const handleSaveListTitle = e => {
    if ((e.key === 'Enter' || e.type === 'blur') && e.target.value.trim()) {
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
          onKeyPress={handleSaveListTitle}
        />
        <EditList onClick={handleToggleListActions}>
          <EllipsisIcon width="32" height="32" />
        </EditList>
      </div>
      <Cards listId={list._id} />
    </Container>
  );
}

List.propTypes = {
  list: PropTypes.object
};
