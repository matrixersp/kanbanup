import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { IconWrapper } from 'components/styled';
import { CancelIcon } from 'components/Icons';

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

export default function Overlay({ children }) {
  const isVisible = useSelector(state => state.app.hasOverlay);

  const dispatch = useDispatch();

  return (
    <OverlayStyled isVisible={isVisible} onClick={() => dispatch()}>
      <IconWrapper
        style={{ position: 'absolute', top: '.75rem', right: '.75rem' }}
      >
        <CancelIcon style={{ fill: '#fff' }} />
      </IconWrapper>
      {children}
    </OverlayStyled>
  );
}
