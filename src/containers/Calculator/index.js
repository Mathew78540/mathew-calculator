import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

// Styles
import './styles.css';

// Components
import Button from '../../components/Button';
import ClearButton from '../../components/ClearButton';
import Output from '../../components/Output';

// Store
import { AddOperation, getResultOperation, clearOperation } from '../../reducers/operation';
import { saveOperation } from '../../reducers/operations';

// Helpers
import { generateRandomOperation } from './helper';

/**
 * Calculator
 */
class Calculator extends PureComponent {
  /**
   * ComponentDidMount
   * 
   * @description
   * Listen keyPress
   */
  componentDidMount() {
    window.addEventListener('keypress', (e) => {
      if (e.keyCode === 32) {
        this.pushRandomOperation();
      }
    }, false);
  }

  /**
   * PushRandomOperation
   * 
   * @description
   * Get random operation and push it into the reducer
   */
  pushRandomOperation = () => {
    const randomOperation = generateRandomOperation();

    this.props.clearOperation();
    this.props.AddOperation(randomOperation);
    this.handleClickGetResultOperation();
  }

  /**
   * HandleClickClearButton
   * 
   * @description
   * 
   */
  handleClickGetResultOperation = () => {
    const { operation, getResultOperation, saveOperation } = this.props;

    getResultOperation();
    saveOperation(operation);
  }

  /**
   * Render
   */
  render() {
    const {
      props: { operation, AddOperation, clearOperation },
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
            <Button onClick={() => AddOperation(0)}>0</Button>
            <Button onClick={() => AddOperation('.')}>.</Button>
            <Button onClick={() => handleClickGetResultOperation()}>=</Button>
            <Button onClick={() => AddOperation(1)}>1</Button>
            <Button onClick={() => AddOperation(2)}>2</Button>
            <Button onClick={() => AddOperation(3)}>3</Button>
            <Button onClick={() => AddOperation(4)}>4</Button>
            <Button onClick={() => AddOperation(5)}>5</Button>
            <Button onClick={() => AddOperation(6)}>6</Button>
            <Button onClick={() => AddOperation(7)}>7</Button>
            <Button onClick={() => AddOperation(8)}>8</Button>
            <Button onClick={() => AddOperation(9)}>9</Button>
          </div>
          <div className="operatorsContainer">
            <Button onClick={() => AddOperation('*')}>X</Button>
            <Button onClick={() => AddOperation('-')}>-</Button>
            <Button onClick={() => AddOperation('+')}>+</Button>
            <Button onClick={() => AddOperation('/')}>/</Button>
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
  AddOperation,
  getResultOperation,
  clearOperation,
  saveOperation,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Calculator);
