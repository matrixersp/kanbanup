import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { IconWrapper, TertiaryButton } from 'components/styled';
import { CancelIcon, DeleteIcon } from 'components/Icons';
import { deleteList } from 'features/list/listsSlice';
import { toggleListActions } from 'app/appSlice';

const ActionsMenu = styled.div`
  color: ${(theme) => theme.primaryTextColor || '#36475b'};
  visibility: ${(props) => (props.offsetBottom ? 'visible' : 'hidden')};
  position: absolute;
  top: ${(props) => props.offsetBottom};
  left: ${(props) => props.offsetLeft};
  background: #fff;
  min-width: 15.5rem;
  box-shadow: 0 0.063rem 0.375rem 0.063rem #777;
  z-index: 3;
`;

const ActionsButton = styled(TertiaryButton)`
  background: #fff;
  width: 100%;
  border-radius: 0;
  padding: 0.4rem 0.5rem;
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
  top: 0.25rem;
  right: 0.25rem;
  & svg {
    fill: #36475b;
  }
`;

const Hr = styled.hr`
  outline: none;
  border: 0;
  border-top: 0.063rem solid #e5e5e5;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export default function ListActions() {
  const dispatch = useDispatch();
  const { id, boardId, ...offsets } = useSelector(
    (state) => state.app.listActions
  );

  const handleDeleteList = () => {
    dispatch(deleteList(id, boardId));
    dispatch(toggleListActions());
  };

  return (
    <ActionsMenu {...offsets}>
      <div style={{ display: 'flex' }}>
        <span style={{ padding: '.5rem', margin: 'auto' }}>List Actions</span>
        <CloseActions onClick={() => dispatch(toggleListActions())}>
          <CancelIcon />
        </CloseActions>
      </div>
      <Hr />
      <ActionsButton onClick={handleDeleteList}>
        <DeleteIcon
          style={{ fill: '#fff', marginRight: '0.5rem', width: '1rem' }}
        />
        Delete
      </ActionsButton>
    </ActionsMenu>
  );
}
