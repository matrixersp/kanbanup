import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { IconWrapper } from 'components/styled';
import { CancelIcon } from 'components/Icons';
import { toggleCardActions } from 'app/appSlice';
import { isNonEmptyObject } from 'helpers/dom';

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

export default function Overlay() {
  const isVisible = useSelector(state =>
    isNonEmptyObject(state.app.cardActions)
  );

  const dispatch = useDispatch();

  return (
    <OverlayStyled
      isVisible={isVisible}
      onClick={() => dispatch(toggleCardActions())}
    >
      <IconWrapper style={{ position: 'absolute', top: '12px', right: '12px' }}>
        <CancelIcon width="38" height="38" />
      </IconWrapper>
    </OverlayStyled>
  );
}

Overlay.propTypes = {
  isEditing: PropTypes.bool
};
