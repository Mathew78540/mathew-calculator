import { handleActions, createAction } from 'redux-actions';
import { RANDOM_OPERATION, GET_RESULT_OPERATION } from './operation';
import { returnCalculResult } from './helper';

// Initial state
const initialState = [];

// Reducer
const operationsReducer = handleActions({
  [RANDOM_OPERATION]: (state, { payload: operation }) => ([
    ...state,
    operation,
  ]),
  [GET_RESULT_OPERATION]: (state, { payload: operation }) => ([
    ...state,
    {
      ...operation,
      result: returnCalculResult(operation.calcul)
    }
  ])
}, initialState);

export default operationsReducer;
