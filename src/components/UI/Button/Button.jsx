import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({children, onClick, type}) => (
  <button type="button" className={`Button  ${type ? `Button_${type}` : ''}`} onClick={onClick}>
    {children}
  </button>
    );

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func.isRequired
};
Button.defaultProps = {
    type: '',
    children: 'Button'
};

export default Button;