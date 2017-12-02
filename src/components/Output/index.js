import React from 'react';
import { shape, string } from 'prop-types';

// Styles
import './styles.css';

/**
 * Output
 * 
 * @param {object} props 
 * @param {object} props.operation
 */
const Output = ({ operation }) => (
  <div className="outputsContainer">
    <div>
      <span className="currentOperation">{operation.calcul}</span>
      <span className="currentResult">{operation.result}</span>
    </div>
  </div>
);

Output.propTypes = {
  operation: shape({
    calcul: string,
    result: string,
  }),
}

export default Output;
