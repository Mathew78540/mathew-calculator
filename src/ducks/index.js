import { combineReducers } from 'redux';

// Reducers
import operationReducer from './operation';
import operationsReducer from './operations';

export default combineReducers({
  operation: operationReducer,
  operations: operationsReducer,
});
