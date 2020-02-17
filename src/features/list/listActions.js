import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TertiaryButton, IconWrapper } from 'components/styled';
import { DeleteIcon, CancelIcon } from 'components/Icons';
import { deleteList } from 'features/list/listsSlice';
import { toggleListActions } from 'app/appSlice';

const ActionsMenu = styled.div`
  visibility: ${props => (props.offsetBottom ? 'visible' : 'hidden')};
  position: absolute;
  top: ${props => props.offsetBottom};
  left: ${props => props.offsetLeft};
  background: #fff;
  min-width: 248px;
  box-shadow: 0 1px 6px 1px #777;
  z-index: 3;
`;

const ActionsButton = styled(TertiaryButton)`
  background: #fff;
  width: 100%;
  border-radius: 0;
  padding: 6px 8px;
  color: #36475b;
  opacity: 0.9;
  transition: none;
  &:hover {
    background: rgba(32, 33, 36, 0.06);
    opacity: 1;
  }
  svg {
    fill: #36475b;
  }
`;

const CloseActions = styled(IconWrapper)`
  position: absolute;
  top: 6px;
  right: 8px;
  & svg {
    width: 22px;
    height: 22px;
    fill: #36475b;
  }
`;

const Hr = styled.hr`
  outline: none;
  border: 0;
  border-top: 1px solid #e5e5e5;
  margin-left: 8px;
  margin-right: 8px;
`;

export default function ListActions() {
  const dispatch = useDispatch();
  const { id, boardId, ...offsets } = useSelector(
    state => state.app.listActions
  );

  const handleDeleteList = () => {
    dispatch(deleteList(id, boardId));
    dispatch(toggleListActions());
  };

  return (
    <ActionsMenu {...offsets}>
      <div style={{ display: 'flex' }}>
        <span style={{ padding: '8px', margin: 'auto' }}>List Actions</span>
        <CloseActions onClick={() => dispatch(toggleListActions())}>
          <CancelIcon />
        </CloseActions>
      </div>
      <Hr />
      <ActionsButton onClick={handleDeleteList}>
        <DeleteIcon width="18" height="18" />
        Delete
      </ActionsButton>
    </ActionsMenu>
  );
}
