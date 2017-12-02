import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import calculatorReducer from './reducers';

// Styles
import './index.css';

// Containers
import Calculator from './containers/Calculator';

const store = createStore(calculatorReducer);

ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>
  , document.getElementById('root'));
