import React from 'react';
import { string } from 'prop-types';

// Styles
import './styles.css';

/**
 * Output
 * 
 * @param {object} props 
 * @param {string} props.currentOperation
 * @param {string} props.currentResult 
 */
const Output = ({ currentOperation, currentResult }) => (
  <div className="outputsContainer">
    <div>
      <span className="currentOperation">{currentOperation}</span>
      <span className="currentResult">{currentResult}</span>
    </div>
  </div>
);

Output.propTypes = {
  currentOperation: string,
  currentResult: string,
}

export default Output;
