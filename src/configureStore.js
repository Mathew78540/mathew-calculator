import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import calculatorReducer from './ducks';

const middlewares = [
  logger,
];

export default createStore(
  calculatorReducer,
  applyMiddleware(...middlewares),
);
