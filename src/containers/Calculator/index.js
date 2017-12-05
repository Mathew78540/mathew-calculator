import React, { PureComponent } from 'react';
import { func, object } from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

// Styles
import './styles.css';

// Components
import Button from '../../components/Button';
import ClearButton from '../../components/ClearButton';
import Output from '../../components/Output';

// Ducks
import { addCalcul, getResultOperation, clearOperation, randomOperation } from '../../ducks/operation';

// Helpers
import { generateRandomOperation } from '../../ducks/helper';

/**
 * Calculator
 */
class Calculator extends PureComponent {
  static propTypes = {
    addCalcul: func,
    getResultOperation: func,
    clearOperation: func,
    randomOperation: func,
    operation: object,
  };

  /**
   * ComponentDidMount
   * 
   * @description
   * Listen keyPress and if keyCode equal 32 we execute a monkeyTest
   */
  componentDidMount() {
    window.addEventListener('keypress', ({ keyCode }) => {
      if (keyCode === 32) {
        this.monkeyTest();
      }
    }, false);
  }

  /**
   * MonkeyTest
   * 
   * @description
   * Generate random operation, and push into the reducer
   */
  monkeyTest = () => {
    const { props: { randomOperation } } = this;
    const operation = generateRandomOperation();

    randomOperation(operation);
  }

  /**
   * Render
   */
  render() {
    const {
      props: { operation, addCalcul, clearOperation, getResultOperation },
      handleClickGetResultOperation,
    } = this;

    return (
      <div className="calculator">
        {/* Output */}
        <Output operation={operation} />

        {/* Commands */}
        <div className="buttonsContainer">
          <ClearButton onClick={() => clearOperation()}>C</ClearButton>
          <div className="digitsContainer">
            <Button onClick={() => addCalcul(0)}>0</Button>
            <Button onClick={() => addCalcul('.')}>.</Button>
            <Button onClick={() => getResultOperation(operation)}>=</Button>
            <Button onClick={() => addCalcul(1)}>1</Button>
            <Button onClick={() => addCalcul(2)}>2</Button>
            <Button onClick={() => addCalcul(3)}>3</Button>
            <Button onClick={() => addCalcul(4)}>4</Button>
            <Button onClick={() => addCalcul(5)}>5</Button>
            <Button onClick={() => addCalcul(6)}>6</Button>
            <Button onClick={() => addCalcul(7)}>7</Button>
            <Button onClick={() => addCalcul(8)}>8</Button>
            <Button onClick={() => addCalcul(9)}>9</Button>
          </div>
          <div className="operatorsContainer">
            <Button onClick={() => addCalcul('*')}>X</Button>
            <Button onClick={() => addCalcul('-')}>-</Button>
            <Button onClick={() => addCalcul('+')}>+</Button>
            <Button onClick={() => addCalcul('/')}>/</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ operation }) => ({
  operation,
});

const mapDispatchToProps = {
  addCalcul,
  getResultOperation,
  clearOperation,
  randomOperation,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Calculator);
