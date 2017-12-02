import React from 'react';
import { any, func } from 'prop-types';

// Styles
import './styles.css';

/**
 * Button
 * 
 * @param {object} props
 */
const Button = (props) => (
  <button {...props} />
);

Button.propTypes = {
  children: any,
  onClick: func,
};

export default Button;
