import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  width: 1.2rem;
  height: 1.2rem;
  fill: #fff;
  pointer-events: none;
`;

const AddIcon = ({ style = {} }) => (
  <SVG
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    strokeWidth="1.5"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </SVG>
);

AddIcon.propTypes = { style: PropTypes.object };

const EditIcon = ({ style = {} }) => (
  <SVG
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    strokeWidth="2"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </SVG>
);

EditIcon.propTypes = { style: PropTypes.object };

const CancelIcon = ({ style = {} }) => (
  <SVG
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </SVG>
);

CancelIcon.propTypes = { style: PropTypes.object };

const DeleteIcon = ({ style = {} }) => (
  <SVG
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    strokeWidth="2"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </SVG>
);

DeleteIcon.propTypes = { style: PropTypes.object };

const EllipsisIcon = ({ style = {} }) => (
  <SVG
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </SVG>
);

EllipsisIcon.propTypes = { style: PropTypes.object };

export { AddIcon, EditIcon, CancelIcon, DeleteIcon, EllipsisIcon };
