import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import calculatorReducer from './reducers';

const middlewares = [
  logger,
];

export default createStore(
  calculatorReducer,
  applyMiddleware(...middlewares),
);
