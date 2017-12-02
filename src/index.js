import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './configureStore';

// Styles
import './index.css';

// Containers
import Calculator from './containers/Calculator';

ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>
  , document.getElementById('root'));
