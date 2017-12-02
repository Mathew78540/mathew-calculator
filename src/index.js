import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './configureStore';

// Styles
import './index.css';

// Containers
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
