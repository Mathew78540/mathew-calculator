import React from 'react';
import { any, bool } from 'prop-types';

// Styles
import './styles.css';

/**
 * ListOperations
 * 
 * @param {object} props
 * @param {Array} props.operations 
 * @param {boolean} props.isOpen 
 */
const ListOperations = ({ children, isOpen }) => (
  <div className="listOperationsContainer" style={{ display: (isOpen) ? 'block' : 'none' }}>
    {children}
  </div>
);

ListOperations.propTypes = {
  children: any,
  isOpen: bool,
}

export default ListOperations;
