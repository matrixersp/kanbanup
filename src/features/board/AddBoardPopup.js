import React, { useEffect, useState } from 'react';
import { TextInput, PrimaryButton } from 'components/styled';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addBoard } from 'features/board/boardSlice';
import { IconWrapper } from 'components/styled';
import { CancelIcon } from 'components/Icons';
import { toggleAddBoard } from 'app/appSlice';

const OverlayStyled = styled.div`
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.55);
`;

const Container = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1004;
  display: block;
  margin: 40px auto;
  text-align: center;
  border-radius: 4px;
  padding: 0 18px;
  background-color: white;
`;

const Title = styled.h1`
  font-family: 'Source Sans Pro';
  font-weight: normal;
  font-size: 24px;
  color: #36475b;
  margin: 16px 0 24px;
`;

const TitleInput = styled(TextInput)`
  width: 270px;
  font-weight: normal;
  font-size: 15px;
  padding: 8px;
  display: block;
  margin-bottom: 12px;
  border: 2px solid #f1f1f1;
  border-radius: 4px;
`;

const AddButton = styled(PrimaryButton)`
  display: inline-block;
  margin-top: 2px;
  margin-bottom: 12px;
  border: none;
  &:focus {
    background-color: #00aecc;
    border: none;
  }
`;

export default function AddBoardPopup() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddBoard = e => {
    e.preventDefault();
    dispatch(addBoard(title));
  };

  const handleClosePopup = e => {
    if (e.currentTarget !== e.target) return;
    e.preventDefault();
    dispatch(toggleAddBoard());
  };

  const isVisible = useSelector(state => state.app.isAddBoard);

  const hasBoard = useSelector(state => state.user.currentBoard);

  useEffect(() => {
    if (!hasBoard) dispatch(toggleAddBoard());
  }, [dispatch, hasBoard]);

  return (
    <OverlayStyled isVisible={isVisible} onClick={handleClosePopup}>
      <IconWrapper
        onClick={handleClosePopup}
        style={{ position: 'absolute', top: '12px', right: '12px' }}
      >
        <CancelIcon width="38" height="38" />
      </IconWrapper>
      <Container
        onSubmit={handleAddBoard}
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        <Title>Create a Board</Title>
        <TitleInput
          placeholder="Enter board title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <AddButton as="input" type="submit" value="Add Board" />
      </Container>
    </OverlayStyled>
  );
}
