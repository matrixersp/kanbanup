import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  fill: #fff;
  margin-right: 4px;
  border-radius: 3px;
  cursor: pointer;
  pointer-events: none;
`;

const AddIcon = ({ width = '24', height = '24', style = {} }) => (
  <SVG
    width={width}
    height={height}
    style={style}
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/SVG"
  >
    <path d="M 538 150C 538 150 538 462 538 462C 538 462 850 462 850 462C 850 462 850 538 850 538C 850 538 538 538 538 538C 538 538 538 850 538 850C 538 850 462 850 462 850C 462 850 462 538 462 538C 462 538 150 538 150 538C 150 538 150 462 150 462C 150 462 462 462 462 462C 462 462 462 150 462 150C 462 150 538 150 538 150" />
  </SVG>
);

AddIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
};

const EditIcon = ({ width = '24', height = '24', style = {} }) => (
  <SVG
    width={width}
    height={height}
    style={style}
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 792 267C 801 276 801 292 792 302C 792 302 756 337 756 337C 756 337 650 231 650 231C 650 231 686 196 686 196C 695 186 711 186 721 196C 721 196 792 267 792 267M 721 373C 721 373 420 673 420 673C 420 673 314 567 314 567C 314 567 615 267 615 267C 615 267 721 373 721 373M 385 708C 385 708 367 726 367 726C 364 730 359 732 355 733C 355 733 266 751 266 751C 249 754 233 739 237 721C 237 721 255 633 255 633C 255 628 258 624 261 620C 261 620 279 602 279 602C 279 602 385 708 385 708" />
  </SVG>
);

EditIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
};

const CancelIcon = ({ width = '24', height = '24', style = {} }) => (
  <SVG
    width={width}
    height={height}
    style={style}
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/SVG"
  >
    <path d="M 300 262C 310 262 319 266 327 273C 327 273 500 447 500 447C 500 447 673 273 673 273C 680 266 690 262 699 262C 715 262 729 271 735 285C 741 299 738 316 727 327C 727 327 553 500 553 500C 553 500 727 673 727 673C 736 683 740 697 737 710C 733 723 723 733 710 737C 697 740 683 736 673 727C 673 727 500 553 500 553C 500 553 327 727 327 727C 317 736 303 740 290 737C 277 733 267 723 263 710C 260 697 264 683 273 673C 273 673 447 500 447 500C 447 500 273 327 273 327C 263 316 259 300 265 286C 271 271 284 262 300 262C 300 262 300 262 300 262" />
  </SVG>
);

CancelIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
};

const DeleteIcon = ({ width = '24', height = '24', style = {} }) => (
  <SVG
    width={width}
    height={height}
    style={style}
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 357 378C 344 378 332 390 333 403C 333 403 329 848 329 848C 329 857 333 866 341 870C 349 875 359 875 366 870C 374 866 379 858 379 849C 379 849 383 404 383 404C 383 397 380 391 375 386C 371 381 364 378 357 378C 357 378 357 378 357 378M 650 375C 636 375 625 386 625 400C 625 400 625 850 625 850C 625 859 630 867 637 872C 645 876 655 876 663 872C 670 867 675 859 675 850C 675 850 675 400 675 400C 675 393 672 387 668 382C 663 377 656 375 650 375C 650 375 650 375 650 375M 500 375C 486 375 475 386 475 400C 475 400 475 850 475 850C 475 859 480 867 487 872C 495 876 505 876 513 872C 520 867 525 859 525 850C 525 850 525 400 525 400C 525 393 522 387 518 382C 513 377 506 375 500 375C 500 375 500 375 500 375M 198 299C 198 299 800 299 800 299C 800 299 800 850 800 850C 800 913 759 950 700 950C 700 950 300 950 300 950C 238 950 200 911 201 855C 201 855 198 299 198 299M 438 138C 438 138 438 187 438 187C 438 187 563 187 563 187C 563 187 563 138 563 138C 563 138 438 138 438 138M 425 63C 425 63 575 63 575 63C 609 63 638 91 638 125C 638 125 638 187 638 187C 638 187 849 187 849 187C 870 187 887 204 887 225C 887 245 870 262 849 262C 849 262 151 263 151 263C 130 263 113 246 113 225C 113 205 130 188 151 188C 151 188 363 188 363 188C 363 188 363 125 363 125C 363 125 362 125 362 125C 362 91 391 63 425 63C 425 63 425 63 425 63" />
  </SVG>
);

DeleteIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
};

const EllipsisIcon = ({ width = '24', height = '24', style = {} }) => (
  <SVG
    width={width}
    height={height}
    style={style}
    transform="rotate(90)"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 200 425C 241 425 275 459 275 500C 275 541 241 575 200 575C 159 575 125 541 125 500C 125 459 159 425 200 425C 200 425 200 425 200 425M 500 425C 541 425 575 459 575 500C 575 541 541 575 500 575C 459 575 425 541 425 500C 425 459 459 425 500 425C 500 425 500 425 500 425M 800 425C 841 425 875 459 875 500C 875 541 841 575 800 575C 759 575 725 541 725 500C 725 459 759 425 800 425C 800 425 800 425 800 425" />
  </SVG>
);

DeleteIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object
};

export { AddIcon, EditIcon, CancelIcon, DeleteIcon, EllipsisIcon };
