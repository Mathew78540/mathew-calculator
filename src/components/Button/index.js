import React from 'react';
import { any, func } from 'prop-types';

// Styles
import './styles.css';

/**
 * Button
 * 
 * @param {object} props
 * @param {object} props.children
 * @param {Function} props.onClick 
 */
const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

Button.propTypes = {
  children: any,
  onClick: func,
};

export default Button;
