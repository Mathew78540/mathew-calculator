import React, { PureComponent } from 'react';

// Styles
import './styles.css';

// Components
import Button from '../../components/Button';
import Output from '../../components/Output';

/**
 * Calculator
 */
class Calculator extends PureComponent {
  render() {
    return (
      <div className="calculator">
        {/* Output */}
        <Output currentOperation="20x2" currentResult="40" />

        {/* Commands */}
        <div className="buttonsContainer">
          <div className="digitsContainer">
            <Button>0</Button>
            <Button>.</Button>
            <Button>=</Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
          </div>
          <div className="operatorsContainer">
            <Button>X</Button>
            <Button>-</Button>
            <Button>+</Button>
            <Button>/</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
