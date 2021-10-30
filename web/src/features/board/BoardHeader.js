import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { changeBoardTitle, saveBoardTitle } from 'features/board/boardSlice';
import { TextInput } from 'components/styled';

const Container = styled.section`
  border-radius: 0.5rem;
  margin: 0.4rem 0.55rem;
`;

const Title = styled(TextInput)`
  padding: 0.25rem 0.4rem;
  font-size: ${({ theme }) => theme.bodyFontSize || '1rem'};
  cursor: pointer;
  min-width: 6rem;
  :focus {
    border: 0.125rem solid #009fbd;
  }
`;

const Span = styled.span`
  position: absolute;
  top: -1000px;
  visibility: hidden;
  padding: 0.25rem 0.8rem;
  font-weight: bold;
  font-size: ${({ theme }) => theme.bodyFontSize || '1rem'};
  font-family: sans-serif;
  z-index: 9999;
`;

export default function BoardHeader() {
  const input = useRef();
  const span = useRef();
  const { _id, title } = useSelector((state) => state.board);

  const dispatch = useDispatch();

  useEffect(() => {
    input.current.style.width = span.current.offsetWidth + 'px';
  });

  const handleChangeBoardTitle = (e) => {
    dispatch(changeBoardTitle(e.target.value));
  };

  const handleSaveBordTitle = (e) => {
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
