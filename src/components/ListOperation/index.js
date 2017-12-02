import React from 'react';
import { object } from 'prop-types';

// Styles
import './styles.css';

/**
 * ListOperation
 * 
 * @param {object} props
 * @param {Array} props.operation
 */
const ListOperation = ({ operation }) => (
  <div className="operation">
    <span>{operation.calcul}</span> =
    <span>{operation.result}</span>
  </div>
);

ListOperation.propTypes = {
  operation: object,
}

export default ListOperation;
