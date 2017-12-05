import { handleActions, createAction } from 'redux-actions';
import { RANDOM_OPERATION } from './operation';

// Types
export const SAVE_OPERATION = 'src/ducks/SAVE_OPERATION';

// Actions
export const saveOperation = createAction(SAVE_OPERATION);

// Initial state
const initialState = [];

// Reducer
const operationsReducer = handleActions({
  [SAVE_OPERATION]: (state, { payload: operation }) => ([
    ...state,
    operation,
  ]),
  [RANDOM_OPERATION]: (state, { payload: operation }) => ([
    ...state,
    operation,
  ]),
}, initialState);

export default operationsReducer;
