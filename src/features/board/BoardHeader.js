import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { changeBoardTitle, saveBoardTitle } from 'features/board/boardSlice';
import { TextInput } from 'components/styled';

const Container = styled.section`
  border-radius: 8px;
  margin: 0 8px 8px;
`;

const Title = styled(TextInput)`
  padding: 2px 6px;
  font-size: 18px;
  cursor: pointer;
  min-width: 84px;
  :focus {
    border: 2px solid #009fbd;
  }
`;

const Span = styled.span`
  position: absolute;
  top: -1000px;
  visibility: hidden;
  padding: 12px;
  font-weight: bold;
  font-size: 18px;
  font-family: sans-serif;
  z-index: 9999;
`;

export default function BoardHeader() {
  const input = useRef();
  const span = useRef();
  const { _id, title } = useSelector(state => state.board);

  const dispatch = useDispatch();

  useEffect(() => {
    input.current.style.width = span.current.offsetWidth + 'px';
  });

  const handleChangeBoardTitle = e => {
    dispatch(changeBoardTitle(e.target.value));
  };

  const handleSaveBordTitle = e => {
    if ((e.keyCode === 13 || e.type === 'blur') && e.target.value.trim()) {
      dispatch(saveBoardTitle(_id, e.target.value));
      e.target.blur();
    }
  };

  return (
    <Container>
      <Title
        type="text"
        value={title || ''}
        ref={input}
        onChange={handleChangeBoardTitle}
        onKeyDown={handleSaveBordTitle}
        onBlur={handleSaveBordTitle}
      />
      <Span ref={span}>{title}</Span>
    </Container>
  );
}
