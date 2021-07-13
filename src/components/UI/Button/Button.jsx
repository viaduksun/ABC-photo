/* eslint-disable object-curly-newline */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ type, children, onClick, addClass }) => (
  <button
    type={`${type ? `${type}` : 'button'}`}
    className={`Button  ${addClass ? `Button_${addClass}` : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  addClass: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
  type: '',
  addClass: '',
  children: 'Button',
};

export default Button;
