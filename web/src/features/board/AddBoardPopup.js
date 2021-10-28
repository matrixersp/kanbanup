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
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.55);
`;

const Container = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: block;
  text-align: center;
  border-radius: 0.25rem;
  padding: 0 1rem;
  background-color: white;
`;

const Title = styled.h1`
  font-family: 'Source Sans Pro';
  font-weight: normal;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.primaryTextColor || '#36475b'};
  margin: 1rem 0 1.4rem;
`;

const TitleInput = styled(TextInput)`
  width: 18rem;
  font-weight: normal;
  font-size: 1rem;
  padding: 0.5rem;
  display: block;
  margin-bottom: 0.8rem;
  border: 0.125rem solid #f1f1f1;
  border-radius: 0.25rem;
`;

const AddButton = styled(PrimaryButton)`
  display: inline-block;
  margin-top: 0.125rem;
  margin-bottom: 0.8rem;
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
        style={{ position: 'absolute', top: '0.4rem', right: '0.6rem' }}
      >
        <CancelIcon style={{ stroke: '#fff' }} />
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
